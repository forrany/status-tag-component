# Status Tag Component Monorepo

<div align="center">

![](https://pic-bed-1302552283.cos.ap-guangzhou.myqcloud.com/undefined20251124160150190.png?imageSlim)

**Status Tag Web Component 开发与维护仓库**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)

</div>

---

这是 `@blueking/status-tag` 的 monorepo 仓库，包含组件核心逻辑、演示 Playground 和示例代码。

🔗 **在线演示**: [Playground Live Demo](https://forrany.github.io/status-tag-component/)

## 📦 Packages

| Package | 说明 | 路径 |
|---------|------|------|
| `@blueking/status-tag` | 组件核心库 (Web Component) | `packages/core` |
| `@blueking/status-tag-playground` | 交互式演示与文档站点 | `packages/playground` |

## 🚀 开发者指南

### 环境要求

- Node.js >= 16
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 启动开发环境

启动 Playground 进行开发调试：

```bash
pnpm dev
```

### 构建项目

构建所有包：

```bash
pnpm build
```

仅构建核心库：

```bash
pnpm build:core
```

### 发布

发布核心库到 npm：

```bash
pnpm publish:core
```

## 📁 项目结构

```bash
status-tag-component/
├── packages/
│   ├── core/              # 核心组件代码
│   │   ├── src/
│   │   └── README.md      # 组件使用文档 (发布到 npm)
│   └── playground/        # 演示文档网站
├── examples/              # 静态测试用例
├── package.json           # 根配置
└── README.md              # 项目开发文档 (本文件)
```

## 🤝 贡献

欢迎提交 Pull Request 或 Issue！

## 📝 许可证

MIT License
