---
title: "【老师】OpenClaw Telegram 插件启用指南"
feishu_url: https://my.feishu.cn/wiki/DLi3w3Rb2iBVY6krG4UcgsqAn2e
obj_type: docx
obj_token: D5yBd5qnsoyHmOx1mHrcRmlwnW2
updated: 2026-03-13T14:44:15+08:00
---

# 【老师】OpenClaw Telegram 插件启用指南

> 🔗

| > **海风老师简介：** > 人生就是一场修行， > 不在朝九晚五的工作中， > 就在仗剑天涯的浪迹中， > 曾徒步川藏线，重装墨脱，深入阿里，骑行环青海湖…… > 曾经的驴友一名，现是酒店管理运营一枚！ > 重庆枫璟酒管公司创始人，致力于运用AI+和RPA为酒店运营赋能 。 > 可提供专业的酒店OTA代运营，酒店全托管等更多酒店周边业务！ > **如果想链接海风老师可以扫码链接➡️** |  |
|---|---|

## 问题描述

在使用 `openclaw` 配置 Telegram 时，遇到以下错误：

| ![](assets/%E3%80%90%E8%80%81%E5%B8%88%E3%80%91OpenClaw%20Telegram%20%E6%8F%92%E4%BB%B6%E5%90%AF%E7%94%A8%E6%8C%87%E5%8D%97_E7Vwbkjolo.jpg) | ![](assets/%E3%80%90%E8%80%81%E5%B8%88%E3%80%91OpenClaw%20Telegram%20%E6%8F%92%E4%BB%B6%E5%90%AF%E7%94%A8%E6%8C%87%E5%8D%97_SLGrbIvm7o.jpg) |
|---|---|

```
┌──────────────────────────────────────────┐
│                                          │
│  telegram plugin not available.          │
│                                          │
└──────────────────────────────────────────┘

Telegram (Bot API) (configured · plugin disabled)
```

插件状态显示：

```
Status: disabled
Origin: bundled
Version: 2026.2.22
Error: bundled (disabled by default)
```

## 问题原因

### 1. 插件默认禁用机制

OpenClaw 的内置（bundled）频道插件（如 Telegram、Discord 等）默认是 **禁用状态 **。这些插件只有在检测到相应配置时才会自动启用。

### 2. 自动启用条件

Telegram 插件的自动启用需要满足以下任一条件：

1. **环境变量 **：设置 `TELEGRAM_BOT_TOKEN` 环境变量

1. **配置文件 **：在 `channels.telegram` 中配置 `botToken`

1. **Token 文件 **：在 `channels.telegram` 中配置 `tokenFile`

1. **Accounts 配置 **：在 `channels.telegram.accounts` 中配置 `botToken` 或 `tokenFile`

1. **通用配置 **： `channels.telegram` 中有任何配置键

1. 

### 3. 关键发现

即使配置了 `channels.telegram.botToken` ，插件仍然显示禁用的原因是：

**需要在配置文件中显式添加 ****`plugins.entries`** **配置来启用插件**

这是 OpenClaw 插件系统的一个设计特点：内置插件需要在 `plugins.entries` 中明确声明启用状态。

## 解决方案

### 步骤 1：准备 Telegram Bot Token

1. 在 Telegram 中找到 [@BotFather](https://t.me/BotFather)

1. 发送 `/newbot` 创建新机器人，或 `/mybots` 管理现有机器人

1. 获取 Bot Token（格式： `123456789:ABCdefGHIjklMNOpqrsTUVwxyz` ）

1. 

### 步骤 2：编辑配置文件

配置文件位置： `C:\Users\admin\.openclaw\openclaw.json`

在配置文件中添加以下内容：

```
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "你的_BOT_TOKEN",
      "proxy": "http://127.0.0.1:代理端口",
      "dmPolicy": "pairing",
      "groupPolicy": "allowlist",
      "streaming": "off",
      "accounts": {
        "default": {
          "dmPolicy": "pairing",
          "groupPolicy": "allowlist",
          "streaming": "off"
        }
      }
    }
  },
  "plugins": {
    "entries": {
      "telegram": {
        "enabled": true
      }
    }
  }
}
```

**配置说明：**

| 配置项 | 说明 | 示例值 |
|---|---|---|
| `enabled` | 启用 Telegram 频道 | `true` |
| `botToken` | Telegram Bot Token | `7671339948:AAFBG2EBX4...` |
| `proxy` | HTTP 代理地址（如需翻墙） | `http://127.0.0.1:7899` |
| `dmPolicy` | 私聊策略 | `pairing` （需要配对） |
| `groupPolicy` | 群组策略 | `allowlist` （白名单） |
| `streaming` | 流式输出 | `off` （关闭） |
| `plugins.entries.telegram.enabled` | **关键配置 **：显式启用插件 | `true` |

### 步骤 3：验证配置

```
# 验证 JSON 格式是否正确
cat "C:\Users\admin\.openclaw\openclaw.json" | node -e "console.log('Valid')" 2>&1
```

预期输出： `Valid`

### 步骤 4：重启 Gateway

```
# 停止 Gateway
openclaw gateway stop

# 等待 3 秒
sleep 3

# 启动 Gateway
openclaw gateway start
```

或使用一条命令：

```
openclaw gateway stop && sleep 3 && openclaw gateway start
```

### 步骤 5：验证插件状态

```
# 检查 Telegram 插件信息
openclaw plugins info telegram
```

预期输出：

```
Telegram
id: telegram
Telegram channel plugin

Status: loaded
Source: ~\AppData\Roaming\npm\node_modules\openclaw\extensions\telegram\index.ts
Origin: bundled
Version: 2026.2.22
```

**注意 **： `Status` 应该是 `loaded` ，而不是 `disabled`

```
# 检查已配置的频道
openclaw channels list
```

预期输出：

```
Chat channels:
- Telegram default: configured, token=config, enabled
```

## 常见问题

### Q1: 为什么配置了 botToken 还是显示禁用？

**A: **需要在配置文件中添加 `plugins.entries` 配置，这是 OpenClaw 插件系统的要求。仅配置 `channels.telegram` 是不够的。

### Q2: 如何配置代理？

**A: **在 `channels.telegram` 中添加 `proxy` 字段：

```
"proxy": "http://127.0.0.1:7899"
```

### Q3: dmPolicy 和 groupPolicy 有什么用？

**A:**

- **dmPolicy **：控制私聊消息的处理策略
  - `pairing` ：需要配对才能接收私聊消息（推荐）
  - `auto-allow` ：自动允许所有私聊
  - `block` ：阻止所有私聊
  - 

- **groupPolicy **：控制群组消息的处理策略
  - `allowlist` ：仅允许白名单中的群组
  - `block` ：阻止所有群组消息
  - `allow` ：允许所有群组
  - 

### Q4: 如何添加群组到白名单？

**A: **在配置中添加 `groups` 字段：

```
"channels": {
  "telegram": {
    "groups": {
      "*": {
        "allowlist": ["@your_group_name"]
      }
    }
  }
}
```

### Q5: 插件启用后无法接收消息怎么办？

**A: **检查以下几点：

1. **Bot Token 是否正确 **：确保使用的是正确的 Bot Token

1. **代理是否正常 **：如果使用代理，确保代理服务正常运行

1. **Gateway 是否运行 **：运行 `openclaw gateway health` 检查

1. **查看日志 **： `cat C:\Users\admin\.openclaw\logs\gateway.log`

1. 

## 完整配置示例

```
{
  "meta": {
    "lastTouchedVersion": "2026.2.22-2",
    "lastTouchedAt": "2026-02-24T06:00:00.000Z"
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "7671339948:AAFBG2EBX4hEgULcHRVKdfuuRNzBMk1m32k",
      "proxy": "http://127.0.0.1:7899",
      "dmPolicy": "pairing",
      "groupPolicy": "allowlist",
      "streaming": "off",
      "groups": {
        "*": {
          "requireMention": true
        }
      },
      "accounts": {
        "default": {
          "dmPolicy": "pairing",
          "groupPolicy": "allowlist",
          "streaming": "off"
        }
      }
    }
  },
  "plugins": {
    "entries": {
      "telegram": {
        "enabled": true
      }
    }
  },
  "gateway": {
    "port": 18789,
    "mode": "local",
    "bind": "loopback"
  }
}
```

## 使用指南

### 开始使用

1. 在 Telegram 中找到你的 Bot（使用创建 Bot 时设置的用户名）

1. 发送 `/start` 命令

1. 根据提示完成配对

1. 开始与 OpenClaw 对话！

1. 

### 配对模式说明

当 `dmPolicy` 设置为 `pairing` 时：

- 首次发送私聊消息的用户需要配对

- 你需要在 OpenClaw 界面批准配对请求

- 配对后该用户可以正常与 AI 对话

- 

## 相关命令参考

```
# 查看插件状态
openclaw plugins list

# 查看插件详细信息
openclaw plugins info telegram

# 查看频道列表
openclaw channels list

# 查看频道状态
openclaw channels status

# 查看 Gateway 健康状态
openclaw gateway health

# 重启 Gateway
openclaw gateway restart

# 查看 Gateway 日志
openclaw logs | tail -50

# 运行诊断
openclaw doctor
```

## 环境信息

- **OpenClaw 版本 **：2026.2.22-2

- **Node.js 版本 **：v22.22.0

- **操作系统 **：Windows 10/11

- **配置文件位置 **： `C:\Users\admin\.openclaw\openclaw.json`

- 

## 总结

启用 OpenClaw Telegram 插件的关键步骤：

1. ✅ 获取 Telegram Bot Token

1. ✅ 在 `channels.telegram` 中配置 `botToken` 和 `enabled: true`

1. ✅ **关键步骤 **：添加 `plugins.entries.telegram.enabled: true` 配置

1. ✅ 重启 Gateway 使配置生效

1. ✅ 验证插件状态为 `loaded`

1. 

**最关键的点 **：必须在配置文件中通过 `plugins.entries` 显式启用插件，这是 OpenClaw 内置插件的启用机制。

---

**文档版本 **：1.0

**创建日期 **：2026-02-24

**适用版本 **：OpenClaw 2026.2.22-2

