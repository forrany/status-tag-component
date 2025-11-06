# 如何在项目中正确使用 Status Tag Web Component

## 📦 使用前准备

### 1. 确保已构建

```bash
# 进入项目目录
cd status-tag-component

# 安装依赖（如未安装）
npm install

# 构建项目
npm run build
```

构建完成后，`dist/` 目录会包含：
- `status-tag.umd.js` - UMD 格式（推荐）
- `status-tag.mjs` - ES Module 格式

### 2. 复制构建产物到您的项目

**方式一：直接复制文件**
```bash
# 复制到您项目的 public/lib 目录（或其他静态资源目录）
cp -r status-tag-component/dist/* your-project/public/lib/status-tag/
```

**方式二：使用 npm link（开发时）**
```bash
# 在组件项目目录下
cd status-tag-component
npm link

# 在您的项目目录下
cd your-project
npm link @blueking/status-tag-web-component
```

## 🚀 在项目中引入

### HTML 直接使用

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>我的项目</title>
</head>
<body>
  <h1>状态展示</h1>
  <div>
    <status-tag status="running"></status-tag>
    <status-tag status="stop"></status-tag>
    <status-tag status="warning"></status-tag>
  </div>

  <!-- 引入组件 -->
  <script src="/lib/status-tag/status-tag.umd.js"></script>
</body>
</html>
```

### React 项目

```tsx
// 在入口文件（如 main.tsx）中引入
import '@blueking/status-tag-web-component';

// 在组件中使用
function MyComponent() {
  return (
    <div>
      <status-tag status="running" locale="zh-CN"></status-tag>
    </div>
  );
}
```

### Vue 项目

```vue
<template>
  <div>
    <status-tag :status="status" :locale="locale" />
  </div>
</template>

<script setup>
import '@blueking/status-tag-web-component';

const status = ref('running');
const locale = ref('zh-CN');
</script>
```

### Angular 项目

```typescript
// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 允许使用 Web Components
})
export class AppModule { }

// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>状态展示</h1>
    <status-tag [attr.status]="status"></status-tag>
  `
})
export class AppComponent {
  status = 'running';
}
```

## 🔧 常见问题

### Q: 引入后组件不显示？

A: 确保：
1. 文件路径正确
2. 先引入脚本，再使用组件
3. 检查浏览器控制台是否有错误

### Q: 在 React/Angular 中报错？

A: 需要在框架配置中允许自定义元素：
- React: 通常无需特殊配置
- Angular: 添加 `CUSTOM_ELEMENTS_SCHEMA`

### Q: 样式没有生效？

A: 样式已内联到组件中，无需额外引入 CSS 文件。

### Q: 如何自定义状态？

A: 使用 `status-map` 属性：

```html
<status-tag
  status="pending"
  status-map='{"pending": {"text": "待审批", "theme": "warning"}}'
></status-tag>
```

## 📁 部署建议

### 开发环境
使用 `npm link` 方式，方便实时调试。

### 生产环境
1. 将 `dist/` 目录复制到静态资源服务器
2. 或集成到您的构建流程中
3. 或发布到私有 npm 仓库

## 🎯 完整示例

查看 `examples/` 目录下的示例文件：
- `basic.html` - 基础使用
- `final-test-v2.html` - 完整功能展示

```bash
# 在浏览器中打开示例
open examples/final-test-v2.html
```

---

**更多信息请查看：[README.md](./README.md)**
