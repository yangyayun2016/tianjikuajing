---
title: "02-本地安装-Windows-Mac-详细步骤"
feishu_url: https://my.feishu.cn/wiki/O1iawa6lpiVSFukbADQcXiPOnoc
obj_type: docx
obj_token: WLsude3Hxot9bdxmZiicpQSBnme
updated: 2026-03-20T16:03:21+08:00
---

# 02-本地安装-Windows-Mac-详细步骤

> 🔗 

[第2章：环境搭建    openclaw前沿agent技术](https://my.feishu.cn/docx/BdfKd9vhKoTpQix0XUEcJJbfnig?from=from_copylink)

> **【飞书文档】02-本地安装-Windows-Mac-详细步骤-可复制素材**

> **手把手教你完成 OpenClaw 的本地安装，5分钟让AI跑起来**

---

## **一、Windows 安装教程**

### **第一步：安装 Node.js（可选但推荐）**

**虽然安装脚本会自动安装 Node.js，但提前安装可以加快进度：**

1. **访问 https://nodejs.org/zh-cn/download**

1. **下载 LTS 版本（Windows Installer）**

> **请注意：务必都选择这个 Node 22 LTS 版本哈，node 24 版本，可能有很多莫名其妙问题！！！**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_FO7TbtVAKo.jpg)

1. **双击安装包，一路点击"下一步"**

> **注意： nodejs 安装时，安装路径最好自己指定一个没有空格的文件目录下，防止后续安装插件失败！**

---

### **第二步：设置 PowerShell 执行权限**

1. **以管理员身份运行 PowerShell：**
  - **按 ****`Win`** **键，搜索 PowerShell**
  - **右键点击 Windows PowerShell**
  - **选择 以管理员身份运行**
  - **点击 是 确认**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_TVmWbGxJvo.jpg)

1. **执行以下两条命令：**

**复制代码**

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**复制代码**

```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_F3yZbgD0lo.jpg)

---

### **第三步：执行一键安装命令**

**在 PowerShell 中复制粘贴：**

**复制代码**

```
iwr -useb https://openclaw.ai/install.ps1 | iex
```

**安装过程会自动完成：**

- **检测系统环境**

- **安装 Node.js（如未安装）**

- **下载 OpenClaw 核心文件**

- **配置环境变量**

- **启动配置向导**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_IeJ5bPsCao.jpg)

**等待安装完成：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_Iei5byEWLo.jpg)

---

### **第四步：初始化配置向导**

#### **1. 风险告知**

**按 ← 方向键选择 ****`Yes`** **，回车确认：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_KPB4b8YtFo.png)

#### **2. 选择 QuickStart 模式**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_X41rb5k0Zo.png)

#### **3. 配置 AI 模型 API Key**

**推荐国内模型（成本低、速度快）：**

- **智谱 GLM：https://www.bigmodel.cn**

- **MiniMax：https://platform.minimaxi.com**

- **Moonshot：https://platform.moonshot.cn**

**以智谱为例：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_NUd0beS2Ko.png)

**输入 API Key：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_JbSHbasUHo.png)

**选择默认模型（推荐 GLM-4）：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_AQn7bApUjo.png)

#### **4. 配置通讯渠道**

**选择跳过，后续手动配置：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_Qq5Ibg8jWo.png)

#### **5. 配置 Skills**

**选择 No，跳过：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_Fltmbd2mSo.png)

#### **6. 配置 Hooks**

**按 空格 选中，回车确认：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_CuBIbwrnWo.png)

#### **7. 启动服务并打开 Web UI**

**等待服务启动（约30秒）：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_ULBPbm587o.jpg)

**选择 "Open the Web UI"：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_VzecbF1Zio.png)

**浏览器自动打开界面：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_CxoZb0Vuco.jpg)

**恭喜！安装成功！**

---

## **二、macOS 安装教程**

### **第一步：检查 Node.js 版本**

1. **打开终端：按 ****`Cmd + 空格`** **，输入 "Terminal"，回车**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_VLsNbSO3Po.jpg)

1. **检查版本：**

**复制代码**

```
node -v
```

**预期输出：显示版本号，只要高于 v22.x.x 即可。**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_FAjdbBnK2o.png)

**如果显示版本号 ≥ 22，直接跳到【第二步：安装 OpenClaw】。**

**如果未安装或版本过低，继续往下看。**

---

### **方案A：使用官方安装包（推荐新手）**

1. **下载 Node.js：**
  - **访问官网：https://nodejs.org/zh-cn/download ****复制代码**
  - **下载 LTS 版本（推荐 22.x 或更高）**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_HlYHb5b4Lo.jpg)

1. **安装：双击下载的 ****`.pkg`** **文件，按提示完成安装**

1. **验证：安装后重启终端，执行：**

**复制代码**

```
node --version
npm --version
```

---

### **方案B：使用 Homebrew（推荐开发者）**

**如果你已经安装了 Homebrew：**

**复制代码**

```
# 安装 Node.js
brew install node# 验证安装
node --version
npm --version
```

**如果没有 Homebrew，先安装：**

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

### **第二步：安装 OpenClaw**

**在终端中执行以下命令：**

**复制代码**

```
curl -fsSL https://openclaw.ai/install.sh | bash
```

**安装过程会自动完成：**

- **检测系统环境**

- **安装必要依赖**

- **下载 OpenClaw 核心文件**

- **配置环境变量**

- **启动配置向导**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_D9jbbp0aTo.jpg)

---

### **第三步：初始化配置向导**

**安装完成后，输入一下命令，会自动进入配置向导：**

**复制代码**

```
openclaw onboard
```

#### **1. 风险告知**

**直接按回车确认即可。**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_Pp0jboM53o.jpg)

#### **2. 选择"快速开始"**

**选择 QuickStart 模式。**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_NyqibUk9So.jpg)

#### **3. 配置 AI 模型 API Key**

**以MimiMax为例：**

1. **访问 **[**https://platform.minimaxi.com/ **](https://platform.minimaxi.com/subscribe/coding-plan?code=FSXNO2PNQ1&source=link)**注册账号**

1. **获取 API Key**

1. **在向导中粘贴 API Key**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_IfoabWQuco.jpg)

**选择模型：**
 **推荐选择默认的旗舰模型（如 MiniMax-M2.1）**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_Hi8ybCqRzo.jpg)

#### **4. 配置通讯渠道**

**先选择跳过，我们后续通过配置文件手动添加：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_LGWEbbLVfo.jpg)

#### **5. 配置 Skills**

**同样选择跳过，后续通过 Web UI 配置：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_E5GebVL07o.jpg)

#### **6. 配置 Hooks**

**选择 Skip for now（空格选中，回车确认）：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_FfXBbyo0Yo.png)

#### **7. 启动 Gateway 服务**

**等待 Gateway 服务安装完成：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_D5c9bthP8o.jpg)

**选择 "Open the Web UI" 打开浏览器界面：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_U5dLb8gdOo.jpg)

**浏览器会自动打开 http://127.0.0.1:18789：**

![](assets/02-%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-Windows-Mac-%E8%AF%A6%E7%BB%86%E6%AD%A5%E9%AA%A4_It4UbqF9Co.jpg)

**🎉 恭喜！安装成功！**

---

## **三、安装后检查**

### **验证安装是否成功**

**打开终端/PowerShell，执行：**

**复制代码**

```
# 检查版本
openclaw --version# 检查状态
openclaw status# 检查 Gateway 是否运行
openclaw gateway status
```

**预期输出：**

- **版本号：如 ****`2026.2.14`**

- **状态：显示 ****`running`** **或类似信息**

### **访问 Web UI**

**打开浏览器，访问：**

**复制代码**

```
http://127.0.0.1:18789
```

**你应该能看到 OpenClaw 的控制界面。**

---

## **四、常见问题**

### **Q1: 安装脚本执行失败？**

**解决方案：**

1. **检查网络连接**

1. **手动安装 Node.js 后再运行脚本**

1. **使用管理员权限运行**

### **Q2: 提示 "command not found: openclaw"？**

**解决方案：**

1. **重启终端**

1. **检查环境变量是否配置正确**

1. **尝试完整路径： ****`~/.openclaw/bin/openclaw`**

### **Q3: Gateway 启动失败？**

**解决方案：**

1. **检查端口 18789 是否被占用**

1. **查看日志： ****`openclaw logs --follow`**

1. **运行诊断： ****`openclaw doctor`**

### **Q4: Web UI 打不开？**

**解决方案：**

1. **确认 Gateway 正在运行： ****`openclaw gateway status`**

1. **检查防火墙设置**

1. **尝试用 IP 访问： ****`http://localhost:18789`**

