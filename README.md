# Status Tag Web Component

<div align="center">

![](https://pic-bed-1302552283.cos.ap-guangzhou.myqcloud.com/undefined20251106111525432.png?imageSlim)

**一个无框架依赖的状态标签 Web Component，支持国际化，适用于任何前端项目**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Web Component](https://img.shields.io/badge/Web%20Component-Native-green.svg)](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

</div>

---

## ✨ 特性

- ✅ **无框架依赖** - 原生 Web Component，可在任何项目中使用
- ✅ **100% 还原设计** - 严格按照原始 SCSS 实现，包括 22px 高度、6px 圆点、12px SVG 图标等
- ✅ **样式隔离** - 使用 Shadow DOM，避免样式冲突
- ✅ **国际化支持** - 内置中英文，可扩展其他语言
- ✅ **智能匹配** - 支持大小写不敏感的状态匹配
- ✅ **自定义配置** - 支持自定义状态映射
- ✅ **轻量级** - 压缩后约 12KB（gzip: 3.1KB）
- ✅ **SVG 内联** - 无需外部图片依赖
- ✅ **TypeScript** - 完整的类型支持

## 🚀 快速开始

### NPM 安装

```bash
npm install @blueking/status-tag-web-component
```

### CDN 引入（开发测试）

```html
<!-- 本地文件方式（开发测试） -->
<script src="./dist/status-tag.umd.js"></script>

<!-- 或使用本地 ES Module -->
<script type="module">
  import './dist/status-tag.mjs';
</script>
```

> **注意**: 正式的 CDN 链接将在发布到 npm 后提供。可使用本地文件或私有部署的方式。

### 基础使用

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Status Tag 示例</title>
</head>
<body>
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <status-tag status="loading"></status-tag>
    <status-tag status="running"></status-tag>
    <status-tag status="stop"></status-tag>
    <status-tag status="warning"></status-tag>
    <status-tag status="unknown"></status-tag>
  </div>

  <script src="./dist/status-tag.umd.js"></script>
</body>
</html>
```

#### 国际化自动检测

组件会自动检测语言设置，优先级如下：

1. **手动设置 `locale` 属性**（最高优先级）
   ```html
   <status-tag status="running" locale="en-US"></status-tag>
   ```

2. **Cookie `blueking_language`**（自动检测）
   - `blueking_language=en` → 英文显示
   - 其他值或未设置 → 中文显示（默认）
   ```html
   <!-- 无需设置 locale 属性，会自动从 Cookie 获取 -->
   <status-tag status="running"></status-tag>
   ```

3. **默认值**：`zh-CN`（中文）

这使得组件可以无缝集成到现有的国际化系统中。

## 📚 详细文档

### API 文档

#### 属性

| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| `status` | string | ✅ | - | 状态值（如：'running', 'stop', 'warning' 等） |
| `locale` | string | ❌ | 'zh-CN' | 语言设置，支持 'zh-CN' 和 'en-US' |
| `status-map` | string (JSON) | ❌ | - | 自定义状态映射配置（JSON 字符串） |

#### 支持的默认状态

| 状态 | 中文文本 | 英文文本 | 主题 |
|------|----------|----------|------|
| `loading` | 加载中 | Loading | 蓝色 |
| `running` | 运行中 | Running | 绿色 |
| `stop` | 已停止 | Stopped | 灰色 |
| `warning` | 警告 | Warning | 橙色 |
| `unknown` | 未知 | Unknown | 黄橙色 |

### 设计规范

#### 视觉规格

- **容器高度**: 22px
- **内边距**: 0 8px
- **圆角**: 13px
- **字体**: 12px / 700 (bold)
- **Loading 图标**: 12×12px SVG 背景图，带旋转动画
- **Dot 图标**: 6×6px，带光晕效果（::before 伪元素，透明度 0.2）

#### 配色方案

| 状态 | 背景色 | 文字色 | 边框 | 图标 |
|------|--------|--------|------|------|
| loading | #EDF4FF | #699DF4 | 1px solid #CDDFFE | 12×12 SVG 图标 |
| running | #EBFAEF | #299E56 | 1px solid #CBF0DA | #E5F6EA + 1px solid #3FC06D |
| stop | #F5F7FA | #979BA5 | 1px solid #EAEBF0 | #F0F1F5 + 1px solid #C4C6CC |
| warning | #FDF4E9 | #F59500 | 1px solid #FCE5C0 | #FCE5C0 + 1px solid #F59500 |
| unknown | #fff3e8 | #ff9c01 | 无边框 | #ff9c01 |

### 智能匹配

组件会自动处理不同的大小写格式：

```html
<!-- 这些写法都会被识别为 'running' 状态 -->
<status-tag status="running"></status-tag>
<status-tag status="RUNNING"></status-tag>
<status-tag status="Running"></status-tag>

<!-- 未匹配时默认显示 'unknown' 状态 -->
<status-tag status="invalid_status"></status-tag>
```

### 高级用法

#### 1. 自定义状态映射

您可以完全自定义状态文本和主题：

```html
<!-- 自定义审批流程状态 -->
<status-tag
  status="pending"
  status-map='{
    "pending": {"text": "待审批", "theme": "warning"},
    "approved": {"text": "已批准", "theme": "running"},
    "rejected": {"text": "已拒绝", "theme": "stop"}
  }'
></status-tag>

<!-- 自定义连接状态 -->
<status-tag
  status="connected"
  status-map='{
    "connected": {"text": "已连接", "theme": "running"},
    "disconnected": {"text": "已断开", "theme": "stop"},
    "connecting": {"text": "连接中", "theme": "loading"}
  }'
></status-tag>
```

#### 2. 动态更新

```javascript
// 通过 JavaScript 动态更新
const tag = document.querySelector('status-tag');

// 方式1: 使用属性
tag.setAttribute('status', 'running');

// 方式2: 使用属性访问器
tag.status = 'running';

// 动态切换语言
tag.locale = 'en-US';

// 动态更新状态映射
tag.statusMap = {
  custom_status: { text: 'Custom Status', theme: 'warning' }
};
```

#### 3. React 中使用

```tsx
import { useEffect, useRef } from 'react';

// 基础用法
function StatusDisplay({ status, locale = 'zh-CN' }) {
  return React.createElement('status-tag', {
    'attr-status': status,
    'attr-locale': locale
  });
}

// 使用 ref 控制
function ControlledStatus() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute('status', 'running');
      ref.current.setAttribute('locale', 'zh-CN');
    }
  }, []);

  return React.createElement('status-tag', { ref });
}

// 在列表中使用
function StatusList({ items }) {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <status-tag
            status={item.status}
            locale={item.locale}
          />
        </div>
      ))}
    </div>
  );
}
```

#### 4. Vue 3 中使用

```vue
<template>
  <!-- 直接使用 -->
  <status-tag :status="status" :locale="locale" />

  <!-- 动态更新 -->
  <status-tag :status="currentStatus" />
  <button @click="changeStatus">切换状态</button>

  <!-- 在循环中使用 -->
  <div v-for="item in items" :key="item.id">
    <status-tag :status="item.status" :locale="locale" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import '@blueking/status-tag-web-component';

// 响应式数据
const status = ref('running');
const locale = ref('zh-CN');
const items = ref([
  { id: 1, status: 'loading' },
  { id: 2, status: 'running' },
  { id: 3, status: 'stop' }
]);

// 方法
const changeStatus = () => {
  const statuses = ['loading', 'running', 'stop', 'warning'];
  const currentIndex = statuses.indexOf(status.value);
  status.value = statuses[(currentIndex + 1) % statuses.length];
};
</script>
```

#### 5. Vue 2 中使用

```vue
<template>
  <status-tag :status="status" :locale="locale" />
</template>

<script>
export default {
  data() {
    return {
      status: 'running',
      locale: 'zh-CN'
    };
  },
  mounted() {
    // 动态更新
    setTimeout(() => {
      this.status = 'stop';
    }, 3000);
  }
};
</script>
```

#### 6. Angular 中使用

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-demo',
  template: `
    <div class="status-item">
      <span>{{ title }}</span>
      <status-tag
        [attr.status]="status"
        [attr.locale]="locale"
      ></status-tag>
    </div>
  `
})
export class StatusDemoComponent {
  @Input() title = '状态显示';
  @Input() status = 'running';
  @Input() locale = 'zh-CN';

  // 动态更新状态
  changeStatus() {
    const statuses = ['loading', 'running', 'stop', 'warning'];
    const currentIndex = statuses.indexOf(this.status);
    this.status = statuses[(currentIndex + 1) % statuses.length];
  }
}
```

```typescript
// app.module.ts 中导入
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 允许使用自定义元素
})
export class AppModule { }
```

#### 7. 在原生 JavaScript 中使用

```javascript
// 动态创建组件
function createStatusTag(status, locale = 'zh-CN') {
  const tag = document.createElement('status-tag');
  tag.setAttribute('status', status);
  tag.setAttribute('locale', locale);
  return tag;
}

// 添加到页面
document.body.appendChild(createStatusTag('running'));

// 事件监听
document.addEventListener('DOMContentLoaded', () => {
  const tags = document.querySelectorAll('status-tag');
  tags.forEach(tag => {
    console.log('Status:', tag.getAttribute('status'));
  });
});

// 响应状态变化
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'status') {
      console.log('Status changed to:', mutation.target.getAttribute('status'));
    }
  });
});

const tag = document.querySelector('status-tag');
observer.observe(tag, { attributes: true });
```

## 🔧 开发指南

### 环境要求

- Node.js >= 16
- npm >= 8

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建

```bash
npm run build
```

### 清理

```bash
npm run clean
```

### 项目结构

```
status-tag-component/
├── src/
│   ├── components/
│   │   └── status-tag.ts        # 组件核心逻辑（内联样式 + SVG）
│   ├── locales/
│   │   ├── zh-CN.json           # 中文语言包
│   │   └── en-US.json           # 英文语言包
│   ├── utils/
│   │   └── i18n.ts              # 国际化工具
│   ├── types.ts                 # 类型定义
│   └── index.ts                 # 入口文件
├── examples/                     # 示例文件
│   ├── basic.html               # 基础示例
│   ├── final-test.html          # 完整测试
│   └── final-test-v2.html       # 样式验证测试
├── dist/                        # 构建输出
├── public/
│   └── loading-color.svg        # SVG 图标源文件
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
├── MIGRATION.md                 # 从 Vue 迁移指南
└── PROJECT_SUMMARY.md           # 项目总结
```

## 🌐 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | >= 54 |
| Firefox | >= 63 |
| Safari | >= 10.1 |
| Edge | >= 79 |
| iOS Safari | >= 10.3 |
| Android Chrome | >= 54 |

## ❓ 常见问题

### Q: 样式没有生效怎么办？

A: 确保在组件加载后再设置属性：

```javascript
// 错误方式
const tag = document.createElement('status-tag');
tag.status = 'running'; // 可能在组件未初始化时就设置了
document.body.appendChild(tag);

// 正确方式
const tag = document.createElement('status-tag');
document.body.appendChild(tag);
tag.status = 'running'; // 在添加到 DOM 后设置
```

### Q: 如何在 React 中正确使用？

A: 使用 `useEffect` 确保在组件挂载后设置属性：

```tsx
function StatusTag({ status }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute('status', status);
    }
  }, [status]);

  return <status-tag ref={ref}></status-tag>;
}
```

### Q: 如何自定义样式？

A: 由于使用 Shadow DOM，需要通过 `::part` 选择器或使用 `CSSStyleSheet`：

```javascript
// 方法1: 使用 ::part（如果组件支持）
const style = document.createElement('style');
style.textContent = `
  status-tag::part(container) {
    /* 自定义样式 */
  }
`;

// 方法2: 修改组件内部样式（需要直接操作 shadowRoot）
const tag = document.querySelector('status-tag');
const shadowStyle = tag.shadowRoot.querySelector('style');
shadowStyle.textContent += `
  .bkbase-status-tag {
    /* 添加自定义样式 */
  }
`;
```

### Q: 如何添加新语言？

A: 只需两步：

1. 在 `src/locales/` 添加语言文件（如 `ja-JP.json`）
2. 在 `src/utils/i18n.ts` 中注册

```typescript
// src/utils/i18n.ts
import jaJP from '../locales/ja-JP.json';

const resources = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'ja-JP': jaJP  // 添加新语言
};
```

### Q: 性能如何？

A: 组件非常轻量：
- **UMD 版本**: 8KB (gzip: 2.95KB)
- **ES Module 版本**: 12KB (gzip: 3.27KB)
- **首次渲染**: < 1ms
- **属性更新**: < 0.5ms

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 贡献流程

1. Fork 本项目到您的仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📖 相关文档

- [完整文档](./README.md)
- [迁移指南](./MIGRATION.md) - 从 Vue 迁移指南
- [项目总结](./PROJECT_SUMMARY.md) - 项目总结
- [快速上手](./QUICKSTART.md) - 5 分钟上手指南
- [使用指南](./USAGE.md) - 详细使用说明
- [examples/final-test-v2.html](./examples/final-test-v2.html) - 完整测试页面

## ⭐ 致谢

感谢所有为这个项目做出贡献的开发者！

---

<div align="center">

**如果这个项目对您有帮助，请给我们一个 ⭐️！**

[NPM 包](https://www.npmjs.com/package/@blueking/status-tag-web-component) · [GitHub 仓库](https://github.com/forrany/status-tag-component) · [提交 Issue](https://github.com/forrany/status-tag-component/issues)

</div>
