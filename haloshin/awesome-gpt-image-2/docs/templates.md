> [返回 README 首页](../README.md) | [完整画廊总览](./gallery.md) | [声明与公众号](./disclaimer.md)

<a name="section-templates"></a>

## 🧩 工业级提示词模板与防坑指南

> 大家好，我是你们的无情逆向机器。为了让大家能直接“开箱即用”，我把那 329 个案例扒了个底朝天，硬生生提炼出了这 13 套**工业级提示词模板**。
> 说实话，整理这些规则差点给我干废了，但跑通之后真的很香！每一套模板都自带“防坑指南”，直接复制填空，再也不用玄学抽卡了。

<a name="tpl-ui"></a>

### UI与界面

**常规模板**

```text
为[产品类型]生成一张[平台，如 iOS/Android/Web]界面图。
核心功能：[功能点A]、[功能点B]、[功能点C]。
视觉风格：[极简/科技/拟物]，主色[颜色]，强调色[颜色]。
布局：[顶部导航/双栏/卡片流]，信息层级清晰，留白充足。
输出：高保真UI截图，文字清晰可读，比例[9:16/16:9]。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "UI Screenshot",
  "platform": "iOS",
  "product": "Fitness App",
  "layout": "Card-based feed with bottom tab bar",
  "style": {
    "theme": "Dark Mode",
    "primary_color": "Neon Green",
    "typography": "Clean sans-serif"
  },
  "content": {
    "header": "Today's Activity",
    "cards": [
      {"title": "Running", "data": "5.2 km", "button": "Start"},
      {"title": "Calories", "data": "340 kcal"}
    ]
  },
  "constraints": "High fidelity, readable text, 9:16 aspect ratio"
}
```

**避坑指南**

- **不要给模糊指令**：明确“平台 + 比例 + 布局”，否则模型会像个实习生一样乱排版。
- **强制文字锁定**：要求“文字绝对可读，必须显示指定的中文”，避免出现乱码按钮和毫无意义的火星文。

<a name="tpl-infographic"></a>

### 图表与信息可视化

**常规模板**

```text
生成[主题]信息图，目标读者为[人群]。
结构：标题区 + [3-5]个模块（每模块含图标、短标题、1-2句说明）。
图表类型：[流程图/对比图/关系图/时间线]。
风格：[专业报告/科普插画]，主色[颜色]，背景[浅色/深色]。
输出：信息层级清晰、可读性高的中文信息图。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "Infographic",
  "topic": "Urban Metabolism",
  "audience": "General Public",
  "structure": {
    "title_area": "城市生命系统图谱",
    "layout": "Isometric cutaway, 12 numbered panels",
    "modules": [
      {"title": "能源", "icon": "lightning", "text": "Power flows"},
      {"title": "水循环", "icon": "water_drop", "text": "Water flows"}
    ]
  },
  "style": {
    "aesthetic": "Scientific atlas",
    "colors": "Low saturation, color-coded flows",
    "background": "Light paper texture"
  },
  "constraints": "No cyberpunk, no gibberish text, strict structural layout"
}
```

**避坑指南**

- **控制模块数量**：强制定制“模块数量”和“图表类型”，能极大降低画面混乱和信息溢出。
- **文案克制**：图表场景优先使用短句文案，千万不要把大段正文塞进画面里，模型不是排版工人。

<a name="tpl-poster"></a>

### 海报与排版

**常规模板**

```text
设计一张[活动/产品/电影]海报，主题为[主题词]。
主视觉：[主体元素]，标题文案：[标题]，副标题：[副标题]。
版式：[居中/左对齐/对角构图]，风格：[复古/未来/极简]。
色彩：[主色 + 辅色]，氛围：[情绪关键词]。
输出：可用于社媒传播的高分辨率海报。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "Movie Poster",
  "theme": "Interstellar Journey",
  "typography": {
    "headline": "BEYOND STARS",
    "subheading": "A New Era Begins",
    "layout": "Centered, bold cinematic font, bottom heavy"
  },
  "visuals": {
    "subject": "Silhouette of an astronaut looking at a glowing nebula",
    "style": "Cinematic lighting, high contrast, dramatic shadows",
    "color_palette": "Deep space blue, glowing orange accents"
  },
  "vibe": "Epic, mysterious, vast"
}
```

**避坑指南**

- **不要偷懒**：写清“主视觉到底是什么玩意儿”，不要只丢一句“做一张海报”就指望出神图。
- **文案硬编码**：主标题与副标题都要写死，否则模型会给你疯狂加戏，自动瞎编不知所云的文字。

### 商品与电商

**常规模板**

```text
生成[商品名]电商主图，卖点为[卖点1]、[卖点2]。
场景：[纯色棚拍/生活方式场景]，镜头：[特写/半身/全景]。
材质细节：[材质关键词]，灯光：[柔光/侧光/轮廓光]。
附加元素：[价格角标/卖点icon/促销文案]。
输出：电商平台可直接使用的商品展示图。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "E-commerce Hero Image",
  "product": {
    "name": "Noise Cancelling Headphones",
    "material": "Matte black finish with metallic accents",
    "angle": "3/4 profile, floating slightly"
  },
  "setting": {
    "background": "Minimalist studio setup, soft gray gradient",
    "lighting": "Softbox overhead, sharp rim light on edges"
  },
  "copywriting": {
    "badges": ["NEW", "$299"],
    "slogan": "Silence the World"
  },
  "constraints": "Commercial photography quality, hyper-realistic textures"
}
```

**避坑指南**

- **材质和光影是灵魂**：一定要堆叠材质（如“磨砂质感”）和灯光（如“轮廓光”）的关键词，商品图一旦没有光影，立刻变成地摊货。
- **别把促销贴满全屏**：文案只给核心的 1-2 句（如“新品上市”），字多了画面就毁了。

### 品牌与标志

**常规模板**

```text
为[品牌名]设计品牌视觉方案。
品牌关键词：[关键词1]、[关键词2]、[关键词3]。
包含：Logo方向[几何/字标/图形]、辅助图形、主辅色、应用示意。
风格：[现代/高级/亲和]，行业：[行业]，受众：[受众]。
输出：统一风格的品牌识别视觉图。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "Brand Identity Design",
  "brand": {
    "name": "Nova Dynamics",
    "industry": "AI Technology",
    "keywords": ["Innovative", "Minimalist", "Trustworthy"]
  },
  "deliverables": [
    "Logo mark (geometric fusion of a neural network node and a star)",
    "Color palette (Electric Blue and Pure White)",
    "Business card mockup"
  ],
  "style": "Modern corporate, flat vector, high contrast",
  "constraints": "No gradients, scalable vector style, clean white background for logo"
}
```

**避坑指南**

- **做减法**：先定义品牌关键词，再要求视觉输出，结果更统一。别让它画“一条喷火的龙缠绕在长城的柱子上还带着闪电”，那不叫 Logo，那叫插画。
- **强制背景**：必须强调“纯白背景（Pure White Background）”，方便后期抠图。

### 建筑与空间

**常规模板**

```text
生成[空间类型]设计效果图，功能定位为[用途]。
风格：[现代简约/工业/新中式]，材质：[木/石/金属/玻璃]。
空间结构：[开敞/分区]，动线：[主通道说明]。
光线：[自然采光/人工照明方案]，时间：[白天/夜景]。
输出：写实建筑空间渲染图。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "Architectural Visualization",
  "space": {
    "type": "Modern Cabin Interior",
    "function": "Living room",
    "materials": "Exposed concrete, large floor-to-ceiling glass, warm timber accents"
  },
  "environment": "Nestled in a dense, snowy pine forest visible through the glass",
  "camera": {
    "angle": "Eye-level perspective, wide-angle lens",
    "lighting": "Golden hour, warm interior lights glowing, cool blue ambient light outside"
  },
  "render_quality": "Unreal Engine 5 style, hyper-realistic, 8k resolution, ray tracing"
}
```

**避坑指南**

- **控制视角**：建筑图最容易翻车的就是透视变形。用“Eye-level perspective（人眼视角）”能压住它。
- **冷暖对比**：室外的冷光（蓝/灰）和室内的暖光（黄/橙）搭配，是提升空间高级感的作弊码。

<a name="tpl-photo"></a>

### 摄影与写实

**常规模板**

```text
拍摄主题：[人物/物品/街景]，场景为[地点]。
摄影参数风格：[35mm/85mm]，[浅景深/深景深]，[纪实/电影感]。
光线：[自然光/夜景霓虹/逆光]，情绪：[情绪词]。
细节要求：[肤质/材质/颗粒感]。
输出：高写实摄影风格图像。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "Hyper-realistic Photography",
  "subject": {
    "description": "A weary 30-year-old barista wiping a coffee cup",
    "details": "Subtle sweat on forehead, detailed skin pores, wearing a denim apron"
  },
  "setting": "Dimly lit vintage cafe, rain visible through the window behind",
  "camera_specs": {
    "gear": "Shot on Sony A7R IV, 50mm lens",
    "aperture": "f/1.4 (shallow depth of field, background completely blurred)",
    "lighting": "Cinematic lighting, neon sign reflecting on wet window, soft rim light on subject's hair"
  },
  "film_aesthetic": "Kodak Portra 400 emulation, subtle film grain"
}
```

**避坑指南**

- **加点瑕疵**：AI 画的人太完美了，反而像假人。加入“皮肤纹理（skin pores）”、“雀斑”、“轻微胶片颗粒（film grain）”，真实感瞬间拉满。
- **用参数说话**：用 `f/1.4` 代替“浅景深”，用 `50mm` 代替“半身照”，大模型吃这套。

### 插画与艺术

**常规模板**

```text
创作[题材]插画，主角为[角色/主体]。
画风：[日漫/水彩/扁平/厚涂]，线条：[细腻/粗犷]。
配色：[配色方案]，背景：[简洁/复杂场景]。
构图：[近景/中景/远景]，重点表现[细节]。
输出：可用于封面或社媒发布的高质量插画。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "Artistic Illustration",
  "art_style": "Studio Ghibli inspired anime style",
  "scene": {
    "description": "A giant flying whale carrying a small cozy village on its back",
    "details": "Windmills turning, tiny people looking over the edge, fluffy white clouds"
  },
  "palette": "Vibrant sky blue, lush greens, soft pastel accents",
  "technique": "Cel shading, detailed background art, soft glowing magical aura",
  "mood": "Whimsical, adventurous, nostalgic"
}
```

**避坑指南**

- **锁定笔触**：插画如果不限制笔触（如“厚涂”、“水彩晕染”），它通常会给你一种毫无灵魂的 AI 默认塑料风。
- **慎用大师名**：提大师名字很爽，但容易被模型原样照搬其代表作的构图。建议提取大师的特征（如“梵高的旋转星空笔触”），而不是直接写大师名。

### 人物与角色

**常规模板**

```text
设计[角色身份]角色设定图。
外观：[年龄/发型/服饰/配件]，性格：[关键词]。
姿态：[站姿/动态动作]，表情：[情绪]。
世界观：[时代/阵营/职业]，标志性元素：[元素]。
输出：角色主视图 + 风格统一的人设图。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "Character Concept Art",
  "character": {
    "identity": "Cybernetic Bounty Hunter",
    "appearance": "Short silver hair, glowing red synthetic left eye, athletic build",
    "attire": "Tactical trench coat with neon piping, holding a plasma rifle"
  },
  "pose": "Dynamic action stance, looking over shoulder with a smirk",
  "environment": "Rainy neon-lit alleyway background (blurred)",
  "style": "Concept art, sharp linework, vibrant cyberpunk palette"
}
```

**避坑指南**

- **拆解五官**：不要只写“很美的女孩”，大模型不知道你的审美标准。拆解成“桃花眼、高鼻梁、野生眉”。
- **服装材质**：写清衣服的材质（如“丝绸”、“机能防风面料”），能让角色立刻变得立体。

### 场景与叙事

**常规模板**

```text
生成[故事主题]场景图，发生在[时间+地点]。
主事件：[事件描述]，主角：[角色]，冲突点：[冲突]。
镜头语言：[广角建立镜头/中景叙事/特写]。
氛围：[紧张/温暖/悬疑]，色调：[冷/暖/高反差]。
输出：具备叙事张力的场景概念图。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "Narrative Scene",
  "story_context": "The exact moment an ancient seal breaks",
  "environment": "Crumbling stone temple overgrown with glowing blue vines",
  "action": "A young explorer dropping their torch as a massive beam of light shoots into the sky",
  "atmosphere": {
    "mood": "Awe-inspiring, terrifying",
    "lighting": "Blinding central light casting long dramatic shadows"
  },
  "camera": "Low angle shot, emphasizing the scale of the light beam"
}
```

**避坑指南**

- **要有“动词”**：叙事图最怕画成风景明信片。一定要写“事件”（如“正在崩塌”、“刚点燃火把”），让画面动起来。
- **镜头语言**：使用“Low angle shot（低角度仰拍）”或“Dutch angle（倾斜镜头）”来增加戏剧冲突。

### 历史与古风题材

**常规模板**

```text
生成[朝代/古风设定]题材画面，主题为[主题]。
人物：[身份/服饰/器物]，场景：[宫廷/市井/山水]。
美术风格：[工笔/写意/影视写实]，色调：[色调]。
文化细节：[纹样/礼制/建筑要素]。
输出：历史氛围准确的古风题材图。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "Historical/Oriental Scene",
  "setting": "Tang Dynasty Capital City at Night",
  "subject": {
    "identity": "Noblewoman",
    "clothing": "Traditional Ruqun (襦裙) with elaborate floral embroidery",
    "action": "Holding a glowing silk lantern, looking at fireworks"
  },
  "style": "Cinematic realism combined with subtle traditional ink wash (水墨) textures",
  "details": "Accurate Tang architecture, bustling crowd in background",
  "constraints": "No modern elements, historically accurate clothing structure"
}
```

**避坑指南**

- **拒绝大杂烩**：明确朝代（唐/宋/明），否则大模型会给你画出一个穿着和服、拿着清朝折扇在唐朝宫殿里的人。
- **强制排雷**：一定要加上“禁用现代元素（No modern elements）”，防止古风美女手里突然多出一杯星巴克。

### 文档与出版物

**常规模板**

```text
制作[文档类型，如菜单/杂志内页/报纸版式]。
版面结构：[栏数/页边距/标题层级]。
内容模块：[封面区/正文区/图表区/脚注]。
字体风格：[衬线/无衬线]，配色：[配色方案]。
输出：可读性强、版式规范的出版物视觉稿。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "Editorial Layout",
  "document": "Fashion Magazine Double-page Spread",
  "grid": "3-column grid, wide margins",
  "content": {
    "left_page": "Full-bleed high-fashion photograph of a model in a red dress",
    "right_page": {
      "headline": "THE RED RENAISSANCE",
      "body_text": "(Simulated text blocks)",
      "pull_quote": "\"Color is power.\""
    }
  },
  "typography": "Elegant serif for headlines, clean sans-serif for body",
  "palette": "Monochrome with stark red accents"
}
```

**避坑指南**

- **结构优先**：明确“栏数（columns）”和“留白（margins）”比堆砌风格词更重要。
- **放弃全文**：不要指望大模型能排出一整页毫无错字的正文，让它用“模拟文本（Simulated text blocks）”填充正文，只写死大标题。

### 其他应用场景

**常规模板**

```text
任务目标：[你要生成的内容类型]。
输入约束：主体[主体]，场景[场景]，风格[风格]，色彩[配色]。
质量约束：清晰度[高清/4K]，比例[比例]，构图[构图方式]。
输出约束：用于[用途]，需突出[核心信息]。
请输出一版主方案 + 一版备选方案。
```

**JSON 进阶模板（推荐给 Agent 调用）**

```json
{
  "type": "Custom Generation",
  "objective": "Generate [Specific content]",
  "inputs": {
    "subject": "[Main subject details]",
    "scene": "[Background and context]",
    "style": "[Artistic/Visual style]",
    "palette": "[Color scheme]"
  },
  "quality_constraints": {
    "resolution": "8k, hyper-detailed",
    "aspect_ratio": "[e.g., 16:9]",
    "composition": "[e.g., Rule of thirds]"
  },
  "output_requirements": {
    "usage": "[Intended use case]",
    "focus": "[Key element to highlight]"
  }
}
```

**避坑指南**

- **先说干嘛的**：一上来先写“任务目标和用途”，让模型建立全局上下文，再写视觉细节。
- **A/B 测试**：通用场景建议在 prompt 里要求“一次生成主方案 + 备选方案”，方便你直接挑好的。

***

