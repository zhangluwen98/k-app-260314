# Kira 互动小说平台

一个以聊天界面为载体的互动小说平台，让用户通过对话选择推进剧情。

## 核心功能

- **聊天式阅读界面**：气泡、时间戳、头像、打字指示器，还原真实对话感
- **分支剧情**：每次选择改变故事走向，多结局设计
- **跨设备**：移动优先，完美适配桌面浏览器
- **用户系统**：最简单的昵称+密码注册/登录，跨设备同步阅读进度
- **零成本运营**：利用 Cloudflare 免费额度

## 技术栈

- **前端框架**: Alpine.js v3.13.3
- **样式方案**: TailwindCSS v3.4.0
- **构建工具**: Vite v5.0.10
- **图标库**: Lucide v0.303.0
- **后端**: Cloudflare Workers
- **数据库**: Cloudflare D1
- **存储**: Cloudflare R2

## 项目结构

```
src/
  ├── pages/           # 前端页面
  │   ├── index.html   # 小说列表页
  │   ├── auth.html    # 登录/注册页
  │   ├── novel.html   # 小说详情页
  │   ├── read.html    # 聊天阅读页
  │   └── profile.html # 个人中心页
  ├── workers/         # Cloudflare Worker API
  │   └── index.js     # API 服务代码
  └── public/          # 静态资源
      ├── novels/      # 小说 JSON 文件
      ├── assets/      # 图片资源
      └── _redirects   # 页面路由配置
```

## 部署

### 前端部署
- 使用 Cloudflare Pages 部署前端
- 构建命令：`echo "Build complete"`
- 构建输出目录：`src/public`

### 后端部署
- 使用 Cloudflare Workers 部署 API
- 配置 D1 数据库和 R2 存储

## 访问

- 前端：`https://kira-interactive.pages.dev`
- API：`https://kira-api.<your-account>.workers.dev`
