# Amazon SP-API MCP Server

亚马逊 Selling Partner API 的 MCP Server，让 AI Agent（Kiro / Claude Desktop / Cursor 等）查询和管理亚马逊卖家数据。

默认情况下，本项目会拦截真实写操作。只有显式设置 `SP_ENABLE_WRITE_ACTIONS=true` 后，`update_listing`、`update_price` 和 `send_solicitation` 才会修改真实店铺数据。

## 功能

| 工具 | 说明 | 类型 |
|------|------|------|
| `get_product_info` | 查任意 ASIN 的商品信息（标题、品牌、BSR、图片） | 读 |
| `get_competitive_pricing` | 查竞品价格、Buy Box、卖家数量 | 读 |
| `get_item_offers` | 查某个 ASIN 的所有卖家 Offer | 读 |
| `get_orders` | 拉店铺订单列表 | 读 |
| `get_order_items` | 查订单商品明细 | 读 |
| `get_inventory` | 查 FBA 库存 | 读 |
| `get_my_listing` | 读取自己的 Listing 内容 | 读 |
| `request_report` | 请求生成业务报告 | 读 |
| `get_report_status` | 查询报告生成状态 | 读 |
| `list_stores` | 列出已配置的店铺 | 读 |
| `update_listing` | 修改 Listing（标题、五点、描述等） | 写 |
| `update_price` | 快捷改价 | 写 |
| `get_financial_events` | 财务结算明细 | 读 |
| `estimate_fees` | 预估亚马逊费用（佣金 + FBA） | 读 |
| `send_solicitation` | 索评（Request a Review） | 写 |
| `get_sales_summary` | 销售汇总（按天/周/月） | 读 |
| `send_message` | 查询可发送的买家消息类型 | 读 |
| `get_product_type_definitions` | 查产品类型属性要求 | 读 |
| `search_catalog` | 按关键词搜索商品目录 | 读 |
| `get_listing_restrictions` | 查 ASIN 销售限制 | 读 |
| `get_search_query_performance` | 搜索查询绩效报告（Brand Analytics） | 读 |

## 前置条件

1. 亚马逊卖家账号（专业版）
2. 在 [Seller Central](https://sellercentral.amazon.com/) 注册为开发者
3. 创建 SP-API App，获取 LWA Client ID 和 Client Secret
4. 通过 OAuth 授权流程获取每个店铺的 refresh_token

## 安装

```bash
git clone https://github.com/你的用户名/sp-api-mcp-server.git
cd sp-api-mcp-server
python3 -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -e .
```

## 配置

复制环境变量模板并填入你的凭证：

```bash
cp .env.example .env
# 编辑 .env 填入你的 SP_CLIENT_ID、SP_CLIENT_SECRET、SP_STORES
# 如果确认允许真实写操作，再把 SP_ENABLE_WRITE_ACTIONS 改成 true
```

## 运行

```bash
source .venv/bin/activate
python server.py
```

## 在 AI 工具中使用

### Kiro / Claude Desktop（mcp.json）

```json
{
  "mcpServers": {
    "sp-api": {
      "command": "/path/to/sp-api-mcp-server/.venv/bin/python3",
      "args": ["/path/to/sp-api-mcp-server/server.py"],
      "env": {
        "SP_CLIENT_ID": "你的 Client ID",
        "SP_CLIENT_SECRET": "你的 Client Secret",
        "SP_STORES": "{\"store_name\":\"Atzr|你的refresh_token\"}",
        "SP_DEFAULT_STORE": "store_name",
        "SP_ENABLE_WRITE_ACTIONS": "false"
      }
    }
  }
}
```

## 写操作安全开关

`update_listing`、`update_price` 和 `send_solicitation` 会修改真实亚马逊店铺数据。为了避免 AI Agent 误操作，写操作默认关闭。

确认你已经完成权限、店铺、SKU、价格和索评规则检查后，再开启：

```bash
SP_ENABLE_WRITE_ACTIONS=true
```

开启后请只在可信环境运行，并为 SP-API App 配置最小必要权限。

## 支持的站点

US、CA、MX、BR、UK、DE、FR、IT、ES、NL、JP、AU

## 注意事项

- **凭证安全**：永远不要将 `.env` 文件或 refresh_token 提交到 Git
- **权限最小化**：申请 SP-API App 时只勾选需要的 API 权限
- **频率限制**：SP-API 有调用频率限制（throttling），高频调用会被限流
- **写操作谨慎**：`update_listing`、`update_price`、`send_solicitation` 会直接修改亚马逊数据，默认需要 `SP_ENABLE_WRITE_ACTIONS=true`
- **数据敏感性**：订单、财务等数据属于商业机密，只在可信环境使用

## License

MIT
