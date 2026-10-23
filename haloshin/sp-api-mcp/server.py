"""
Amazon SP-API MCP Server — 第一批工具
封装 SP-API 核心接口，供 OpenClaw / Kiro 等 AI Agent 调用

工具列表：
1. get_product_info       — 查任意 ASIN 的商品信息
2. get_competitive_pricing — 查竞品价格和 Buy Box
3. get_item_offers        — 查某个 ASIN 的所有卖家
4. get_orders             — 拉自己店铺的订单
5. get_order_items        — 查某个订单买了什么
6. get_inventory          — 查 FBA 库存
7. get_my_listing         — 读取自己的 Listing 内容
8. request_report         — 请求生成业务报告
"""

import os
import json
import time
from typing import Any

import httpx
from mcp.server.fastmcp import FastMCP

# === 配置 ===
LWA_CLIENT_ID = os.environ.get("SP_CLIENT_ID", "")
LWA_CLIENT_SECRET = os.environ.get("SP_CLIENT_SECRET", "")

# 多店铺支持：JSON 格式 {"store_name": "refresh_token", ...}
STORES_JSON = os.environ.get("SP_STORES", "{}")

# 默认店铺
DEFAULT_STORE = os.environ.get("SP_DEFAULT_STORE", "")

# 写操作默认关闭，避免 Agent 误改真实店铺数据
WRITE_ACTIONS_ENABLED = os.environ.get("SP_ENABLE_WRITE_ACTIONS", "").lower() in {
    "1",
    "true",
    "yes",
}

# 站点配置
ENDPOINTS = {
    "NA": "https://sellingpartnerapi-na.amazon.com",
    "EU": "https://sellingpartnerapi-eu.amazon.com",
    "FE": "https://sellingpartnerapi-fe.amazon.com",
}

MARKETPLACE_IDS = {
    "US": "ATVPDKIKX0DER",
    "CA": "A2EUQ1WTGCTBG2",
    "MX": "A1AM78C64UM0Y8",
    "BR": "A2Q3Y263D00KWC",
    "UK": "A1F83G8C2ARO7P",
    "DE": "A1PA6795UKMFR9",
    "FR": "A13V1IB3VIYZZH",
    "IT": "APJ6JRA9NG5V4",
    "ES": "A1RKKUPIHCS9HS",
    "NL": "A1805IZSGTT6HS",
    "JP": "A1VC38T7YXB528",
    "AU": "A39IBJ37TRP1C6",
}


# === Token 管理 ===
_token_cache: dict[str, dict] = {}


def _get_stores() -> dict[str, str]:
    """解析店铺配置"""
    try:
        return json.loads(STORES_JSON)
    except json.JSONDecodeError:
        return {}


def _get_refresh_token(store: str | None) -> str:
    """获取指定店铺的 refresh_token"""
    stores = _get_stores()
    name = store or DEFAULT_STORE
    if not name and len(stores) == 1:
        name = list(stores.keys())[0]
    if name not in stores:
        available = list(stores.keys())
        raise ValueError(f"店铺 '{name}' 不存在。可用店铺: {available}")
    return stores[name]


def _get_endpoint(marketplace: str) -> str:
    """根据站点返回对应的 endpoint"""
    na = {"US", "CA", "MX", "BR"}
    eu = {"UK", "DE", "FR", "IT", "ES", "NL"}
    fe = {"JP", "AU"}
    if marketplace in na:
        return ENDPOINTS["NA"]
    elif marketplace in eu:
        return ENDPOINTS["EU"]
    elif marketplace in fe:
        return ENDPOINTS["FE"]
    return ENDPOINTS["NA"]


def _write_guard(action: str) -> dict | None:
    if WRITE_ACTIONS_ENABLED:
        return None
    return {
        "error": f"{action} 是写操作，当前已被安全开关拦截。",
        "hint": "确认风险后设置环境变量 SP_ENABLE_WRITE_ACTIONS=true 再重启 MCP Server。",
    }


async def _get_access_token(store: str | None) -> str:
    """用 refresh_token 换取 access_token，带缓存"""
    refresh_token = _get_refresh_token(store)
    cache_key = refresh_token[:20]

    cached = _token_cache.get(cache_key)
    if cached and cached["expires_at"] > time.time():
        return cached["token"]

    async with httpx.AsyncClient() as client:
        resp = await client.post(
            "https://api.amazon.com/auth/o2/token",
            data={
                "grant_type": "refresh_token",
                "refresh_token": refresh_token,
                "client_id": LWA_CLIENT_ID,
                "client_secret": LWA_CLIENT_SECRET,
            },
        )
        resp.raise_for_status()
        data = resp.json()

    token = data["access_token"]
    expires_in = data.get("expires_in", 3600)
    _token_cache[cache_key] = {
        "token": token,
        "expires_at": time.time() + expires_in - 60,
    }
    return token


async def _sp_api_get(
    path: str,
    params: dict,
    store: str | None = None,
    marketplace: str = "US",
) -> dict[str, Any]:
    """通用 SP-API GET 请求"""
    token = await _get_access_token(store)
    endpoint = _get_endpoint(marketplace)
    async with httpx.AsyncClient() as client:
        resp = await client.get(
            f"{endpoint}{path}",
            headers={
                "x-amz-access-token": token,
                "Content-Type": "application/json",
            },
            params=params,
            timeout=30,
        )
        resp.raise_for_status()
        return resp.json()


async def _sp_api_post(
    path: str,
    body: dict,
    store: str | None = None,
    marketplace: str = "US",
) -> dict[str, Any]:
    """通用 SP-API POST 请求"""
    token = await _get_access_token(store)
    endpoint = _get_endpoint(marketplace)
    async with httpx.AsyncClient() as client:
        resp = await client.post(
            f"{endpoint}{path}",
            headers={
                "x-amz-access-token": token,
                "Content-Type": "application/json",
            },
            json=body,
            timeout=30,
        )
        resp.raise_for_status()
        return resp.json()


async def _sp_api_patch(
    path: str,
    body: dict,
    params: dict | None = None,
    store: str | None = None,
    marketplace: str = "US",
) -> dict[str, Any]:
    """通用 SP-API PATCH 请求"""
    token = await _get_access_token(store)
    endpoint = _get_endpoint(marketplace)
    async with httpx.AsyncClient() as client:
        resp = await client.patch(
            f"{endpoint}{path}",
            headers={
                "x-amz-access-token": token,
                "Content-Type": "application/json",
            },
            json=body,
            params=params or {},
            timeout=30,
        )
        resp.raise_for_status()
        return resp.json()


async def _get_seller_id(store: str | None = None, marketplace: str = "US") -> str:
    """获取当前授权账号的 seller ID"""
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    token = await _get_access_token(store)
    endpoint = _get_endpoint(marketplace)
    async with httpx.AsyncClient() as client:
        resp = await client.get(
            f"{endpoint}/sellers/v1/marketplaceParticipations",
            headers={"x-amz-access-token": token, "Content-Type": "application/json"},
            timeout=30,
        )
        resp.raise_for_status()
        for p in resp.json().get("payload", []):
            if p.get("marketplace", {}).get("id") == mkt_id:
                return p.get("participation", {}).get("sellerId", "")
        participations = resp.json().get("payload", [])
        if participations:
            return participations[0].get("participation", {}).get("sellerId", "")
    return ""


# === MCP Server ===
mcp = FastMCP("Amazon SP-API")


@mcp.tool()
async def get_product_info(
    asin: str,
    marketplace: str = "US",
    include_data: str = "summaries,salesRanks,images,attributes",
) -> dict:
    """查询任意 ASIN 的商品信息（标题、品牌、五点、BSR排名、图片等）。
    可查竞品，不限于自己的商品。

    Args:
        asin: 亚马逊商品 ASIN（如 B09B8V1LZ3）
        marketplace: 站点代码（US/CA/MX/UK/DE/FR/IT/ES/JP/AU）
        include_data: 返回数据类型，逗号分隔（summaries,salesRanks,images,attributes）
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    return await _sp_api_get(
        f"/catalog/2022-04-01/items/{asin}",
        {"marketplaceIds": mkt_id, "includedData": include_data},
        marketplace=marketplace,
    )


@mcp.tool()
async def get_competitive_pricing(
    asins: str,
    marketplace: str = "US",
    store: str | None = None,
) -> dict:
    """查询一个或多个 ASIN 的竞争价格（Buy Box 价格、最低价、卖家数量、BSR）。

    Args:
        asins: ASIN，多个用逗号分隔（最多20个），如 "B09B8V1LZ3,B0DBQKYBMF"
        marketplace: 站点代码
        store: 店铺名称（可选，默认使用默认店铺）
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    return await _sp_api_get(
        "/products/pricing/v0/competitivePrice",
        {"MarketplaceId": mkt_id, "Asins": asins, "ItemType": "Asin"},
        store=store,
        marketplace=marketplace,
    )


@mcp.tool()
async def get_item_offers(
    asin: str,
    marketplace: str = "US",
    item_condition: str = "New",
    store: str | None = None,
) -> dict:
    """查询某个 ASIN 的所有卖家 Offer 列表（价格、反馈数、好评率、是否FBA、是否Buy Box赢家）。

    Args:
        asin: 商品 ASIN
        marketplace: 站点代码
        item_condition: 商品状态（New/Used）
        store: 店铺名称
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    return await _sp_api_get(
        f"/products/pricing/v0/items/{asin}/offers",
        {"MarketplaceId": mkt_id, "ItemCondition": item_condition},
        store=store,
        marketplace=marketplace,
    )


@mcp.tool()
async def get_orders(
    created_after: str,
    marketplace: str = "US",
    max_results: int = 10,
    order_statuses: str = "",
    store: str | None = None,
) -> dict:
    """拉取店铺订单列表。

    Args:
        created_after: 起始时间（ISO格式，如 2026-03-01T00:00:00Z）
        marketplace: 站点代码
        max_results: 每页最大条数（1-100）
        order_statuses: 订单状态筛选，逗号分隔（Pending/Unshipped/Shipped/Canceled），留空返回全部
        store: 店铺名称
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    params: dict[str, Any] = {
        "MarketplaceIds": mkt_id,
        "CreatedAfter": created_after,
        "MaxResultsPerPage": min(max_results, 100),
    }
    if order_statuses:
        params["OrderStatuses"] = order_statuses
    return await _sp_api_get("/orders/v0/orders", params, store=store, marketplace=marketplace)


@mcp.tool()
async def get_order_items(
    order_id: str,
    store: str | None = None,
) -> dict:
    """查询某个订单的商品明细（ASIN、SKU、标题、数量、价格、税费）。

    Args:
        order_id: 亚马逊订单号（如 111-3147063-2389042）
        store: 店铺名称
    """
    return await _sp_api_get(
        f"/orders/v0/orders/{order_id}/orderItems",
        {},
        store=store,
    )


@mcp.tool()
async def get_inventory(
    marketplace: str = "US",
    next_token: str = "",
    store: str | None = None,
) -> dict:
    """查询 FBA 库存（可售数量、不可售数量、预留数量、在途数量）。

    Args:
        marketplace: 站点代码
        next_token: 翻页 token（首次留空）
        store: 店铺名称
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    params: dict[str, Any] = {
        "granularityType": "Marketplace",
        "granularityId": mkt_id,
        "marketplaceIds": mkt_id,
    }
    if next_token:
        params["nextToken"] = next_token
    return await _sp_api_get("/fba/inventory/v1/summaries", params, store=store, marketplace=marketplace)


@mcp.tool()
async def get_my_listing(
    seller_sku: str,
    marketplace: str = "US",
    store: str | None = None,
) -> dict:
    """读取自己某个 SKU 的 Listing 内容（标题、五点、描述、价格、图片等）。

    Args:
        seller_sku: 卖家 SKU
        marketplace: 站点代码
        store: 店铺名称
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    # 需要先获取 seller_id
    token = await _get_access_token(store)
    endpoint = _get_endpoint(marketplace)
    async with httpx.AsyncClient() as client:
        # 获取 seller ID
        resp = await client.get(
            f"{endpoint}/sellers/v1/marketplaceParticipations",
            headers={
                "x-amz-access-token": token,
                "Content-Type": "application/json",
            },
            timeout=30,
        )
        resp.raise_for_status()
        participations = resp.json().get("payload", [])
        seller_id = None
        for p in participations:
            mp = p.get("marketplace", {})
            if mp.get("id") == mkt_id:
                seller_id = p.get("participation", {}).get("sellerId")
                break
        if not seller_id and participations:
            # fallback: 取第一个
            seller_id = participations[0].get("participation", {}).get("sellerId")

        if not seller_id:
            return {"error": "无法获取 seller ID"}

        # 获取 listing
        resp = await client.get(
            f"{endpoint}/listings/2021-08-01/items/{seller_id}/{seller_sku}",
            headers={
                "x-amz-access-token": token,
                "Content-Type": "application/json",
            },
            params={
                "marketplaceIds": mkt_id,
                "includedData": "summaries,attributes,issues,offers",
            },
            timeout=30,
        )
        resp.raise_for_status()
        return resp.json()


@mcp.tool()
async def request_report(
    report_type: str,
    marketplace: str = "US",
    data_start_time: str = "",
    data_end_time: str = "",
    store: str | None = None,
) -> dict:
    """请求生成业务报告（销售报告、库存报告、广告报告等）。
    报告是异步生成的，返回 reportId，需要轮询状态后下载。

    常用 report_type:
    - GET_SALES_AND_TRAFFIC_REPORT: 销售和流量报告
    - GET_FBA_MYI_UNSUPPRESSED_INVENTORY_DATA: FBA库存报告
    - GET_FBA_FULFILLMENT_CUSTOMER_RETURNS_DATA: FBA退货报告
    - GET_FLAT_FILE_OPEN_LISTINGS_DATA: 在售商品报告
    - GET_MERCHANT_LISTINGS_ALL_DATA: 全部商品报告

    Args:
        report_type: 报告类型
        marketplace: 站点代码
        data_start_time: 数据起始时间（ISO格式，可选）
        data_end_time: 数据结束时间（ISO格式，可选）
        store: 店铺名称
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    token = await _get_access_token(store)
    endpoint = _get_endpoint(marketplace)

    body: dict[str, Any] = {
        "reportType": report_type,
        "marketplaceIds": [mkt_id],
    }
    if data_start_time:
        body["dataStartTime"] = data_start_time
    if data_end_time:
        body["dataEndTime"] = data_end_time

    async with httpx.AsyncClient() as client:
        resp = await client.post(
            f"{endpoint}/reports/2021-06-30/reports",
            headers={
                "x-amz-access-token": token,
                "Content-Type": "application/json",
            },
            json=body,
            timeout=30,
        )
        resp.raise_for_status()
        return resp.json()


@mcp.tool()
async def get_report_status(
    report_id: str,
    store: str | None = None,
) -> dict:
    """查询报告生成状态。当 processingStatus 为 DONE 时可下载。

    Args:
        report_id: 报告 ID（由 request_report 返回）
        store: 店铺名称
    """
    return await _sp_api_get(
        f"/reports/2021-06-30/reports/{report_id}",
        {},
        store=store,
    )


@mcp.tool()
async def list_stores() -> dict:
    """列出所有已配置的店铺名称和默认店铺。"""
    stores = _get_stores()
    return {
        "stores": list(stores.keys()),
        "default_store": DEFAULT_STORE or (list(stores.keys())[0] if len(stores) == 1 else ""),
        "total": len(stores),
    }


# =============================================
# 第二批工具：写操作 + 财务 + 索评
# =============================================


@mcp.tool()
async def update_listing(
    seller_sku: str,
    patches: str,
    marketplace: str = "US",
    store: str | None = None,
) -> dict:
    """更新自己的 Listing 内容（标题、五点、描述、关键词等）。
    这是写操作，会直接修改亚马逊上的 Listing。

    Args:
        seller_sku: 卖家 SKU
        patches: JSON 格式的补丁数组，如 [{"op":"replace","path":"/attributes/item_name","value":[{"value":"新标题","marketplace_id":"ATVPDKIKX0DER"}]}]
        marketplace: 站点代码
        store: 店铺名称
    """
    guarded = _write_guard("update_listing")
    if guarded:
        return guarded

    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    seller_id = await _get_seller_id(store, marketplace)
    if not seller_id:
        return {"error": "无法获取 seller ID"}
    import json as _json
    body = {
        "productType": "PRODUCT",
        "patches": _json.loads(patches),
    }
    return await _sp_api_patch(
        f"/listings/2021-08-01/items/{seller_id}/{seller_sku}",
        body,
        params={"marketplaceIds": mkt_id},
        store=store,
        marketplace=marketplace,
    )


@mcp.tool()
async def update_price(
    seller_sku: str,
    price: float,
    marketplace: str = "US",
    store: str | None = None,
) -> dict:
    """快捷修改某个 SKU 的价格。这是写操作。

    Args:
        seller_sku: 卖家 SKU
        price: 新价格（USD）
        marketplace: 站点代码
        store: 店铺名称
    """
    guarded = _write_guard("update_price")
    if guarded:
        return guarded

    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    seller_id = await _get_seller_id(store, marketplace)
    if not seller_id:
        return {"error": "无法获取 seller ID"}
    body = {
        "productType": "PRODUCT",
        "patches": [{
            "op": "replace",
            "path": "/attributes/purchasable_offer",
            "value": [{
                "marketplace_id": mkt_id,
                "currency": "USD",
                "our_price": [{"schedule": [{"value_with_tax": price}]}],
            }],
        }],
    }
    return await _sp_api_patch(
        f"/listings/2021-08-01/items/{seller_id}/{seller_sku}",
        body,
        params={"marketplaceIds": mkt_id},
        store=store,
        marketplace=marketplace,
    )


@mcp.tool()
async def get_financial_events(
    order_id: str = "",
    posted_after: str = "",
    max_results: int = 100,
    store: str | None = None,
) -> dict:
    """拉取财务结算明细（每笔订单的佣金、FBA费、退款等）。

    Args:
        order_id: 按订单号查（可选，留空则按时间查）
        posted_after: 起始时间（ISO格式，如 2026-03-01T00:00:00Z）
        max_results: 最大条数
        store: 店铺名称
    """
    if order_id:
        return await _sp_api_get(
            f"/finances/v0/orders/{order_id}/financialEvents",
            {},
            store=store,
        )
    params: dict[str, Any] = {"MaxResultsPerPage": min(max_results, 100)}
    if posted_after:
        params["PostedAfter"] = posted_after
    return await _sp_api_get("/finances/v0/financialEvents", params, store=store)


@mcp.tool()
async def estimate_fees(
    asin: str,
    price: float,
    marketplace: str = "US",
    is_fba: bool = True,
    store: str | None = None,
) -> dict:
    """预估某个 ASIN 在指定价格下的亚马逊费用（佣金 + FBA费）。

    Args:
        asin: 商品 ASIN
        price: 售价（USD）
        marketplace: 站点代码
        is_fba: 是否 FBA 发货
        store: 店铺名称
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    body = {
        "FeesEstimateRequest": {
            "MarketplaceId": mkt_id,
            "IsAmazonFulfilled": is_fba,
            "PriceToEstimateFees": {
                "ListingPrice": {"CurrencyCode": "USD", "Amount": price},
            },
            "Identifier": f"fee_est_{asin}",
        }
    }
    return await _sp_api_post(
        f"/products/fees/v0/items/{asin}/feesEstimate",
        body,
        store=store,
        marketplace=marketplace,
    )


@mcp.tool()
async def send_solicitation(
    order_id: str,
    marketplace: str = "US",
    store: str | None = None,
) -> dict:
    """对某个订单发送索评请求（Request a Review）。
    注意：每个订单只能发一次，发送后无法撤回。

    Args:
        order_id: 亚马逊订单号
        marketplace: 站点代码
        store: 店铺名称
    """
    guarded = _write_guard("send_solicitation")
    if guarded:
        return guarded

    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    return await _sp_api_post(
        f"/solicitations/v1/orders/{order_id}/solicitations/productReviewAndSellerFeedback",
        {},
        store=store,
        marketplace=marketplace,
    )


@mcp.tool()
async def get_sales_summary(
    start_date: str,
    end_date: str,
    granularity: str = "Day",
    marketplace: str = "US",
    store: str | None = None,
) -> dict:
    """获取销售汇总数据（按天/周/月的销售额和订单量）。

    Args:
        start_date: 起始日期（ISO格式，如 2026-03-01T00:00:00Z）
        end_date: 结束日期
        granularity: 粒度（Day/Week/Month）
        marketplace: 站点代码
        store: 店铺名称
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    return await _sp_api_get(
        "/sales/v1/orderMetrics",
        {
            "marketplaceIds": mkt_id,
            "interval": f"{start_date}--{end_date}",
            "granularity": granularity,
        },
        store=store,
        marketplace=marketplace,
    )


# =============================================
# 第三批工具：高级场景
# =============================================


@mcp.tool()
async def send_message(
    order_id: str,
    message_type: str = "confirmCustomizationDetails",
    marketplace: str = "US",
    store: str | None = None,
) -> dict:
    """查询可以给某个订单的买家发送哪些类型的消息。

    Args:
        order_id: 亚马逊订单号
        marketplace: 站点代码
        store: 店铺名称
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    return await _sp_api_get(
        f"/messaging/v1/orders/{order_id}",
        {"marketplaceIds": mkt_id},
        store=store,
        marketplace=marketplace,
    )


@mcp.tool()
async def get_product_type_definitions(
    product_type: str,
    marketplace: str = "US",
) -> dict:
    """查询某个产品类型需要填写哪些属性（用于新品上架前检查）。

    Args:
        product_type: 产品类型（如 PRODUCT, LUGGAGE 等）
        marketplace: 站点代码
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    return await _sp_api_get(
        f"/definitions/2020-09-01/productTypes/{product_type}",
        {
            "marketplaceIds": mkt_id,
            "requirements": "LISTING",
            "locale": "en_US",
        },
    )


@mcp.tool()
async def search_catalog(
    keywords: str,
    marketplace: str = "US",
    page_size: int = 10,
) -> dict:
    """按关键词搜索亚马逊商品目录（用于发现同类目新品）。

    Args:
        keywords: 搜索关键词
        marketplace: 站点代码
        page_size: 每页结果数（1-20）
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    return await _sp_api_get(
        "/catalog/2022-04-01/items",
        {
            "marketplaceIds": mkt_id,
            "keywords": keywords,
            "includedData": "summaries,salesRanks",
            "pageSize": min(page_size, 20),
        },
    )


@mcp.tool()
async def get_listing_restrictions(
    asin: str,
    marketplace: str = "US",
    store: str | None = None,
) -> dict:
    """查询某个 ASIN 是否有销售限制（需要审批、品牌授权等）。

    Args:
        asin: 商品 ASIN
        marketplace: 站点代码
        store: 店铺名称
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    seller_id = await _get_seller_id(store, marketplace)
    return await _sp_api_get(
        "/listings/2021-08-01/restrictions",
        {
            "asin": asin,
            "marketplaceIds": mkt_id,
            "sellerId": seller_id,
        },
        store=store,
        marketplace=marketplace,
    )


@mcp.tool()
async def get_search_query_performance(
    asin: str,
    start_date: str,
    end_date: str,
    report_period: str = "WEEK",
    marketplace: str = "US",
    store: str | None = None,
) -> dict:
    """请求生成搜索查询绩效报告（Brand Analytics）。
    按ASIN查询搜索词的展示、点击、加购、购买占比。需要品牌注册权限。
    报告是异步生成的，返回 reportId，需要用 get_report_status 轮询。

    Args:
        asin: 要查询的ASIN
        start_date: 开始日期（ISO格式，如 2026-03-23T00:00:00Z）。WEEK必须是周日，MONTH必须是月初
        end_date: 结束日期（ISO格式，如 2026-03-29T00:00:00Z）。WEEK必须是周六，MONTH必须是月末
        report_period: 报告周期（WEEK/MONTH/QUARTER）
        marketplace: 站点代码
        store: 店铺名称
    """
    mkt_id = MARKETPLACE_IDS.get(marketplace, MARKETPLACE_IDS["US"])
    token = await _get_access_token(store)
    endpoint = _get_endpoint(marketplace)

    body = {
        "reportType": "GET_BRAND_ANALYTICS_SEARCH_QUERY_PERFORMANCE_REPORT",
        "marketplaceIds": [mkt_id],
        "dataStartTime": start_date,
        "dataEndTime": end_date,
        "reportOptions": {
            "reportPeriod": report_period,
            "asin": asin,
        },
    }

    async with httpx.AsyncClient() as client:
        resp = await client.post(
            f"{endpoint}/reports/2021-06-30/reports",
            headers={
                "x-amz-access-token": token,
                "Content-Type": "application/json",
            },
            json=body,
            timeout=30,
        )
        resp.raise_for_status()
        return resp.json()


# === 启动 ===
if __name__ == "__main__":
    mcp.run()
