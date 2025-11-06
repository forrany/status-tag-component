# Quick Start - Status Tag Web Component

快速上手指南，5 分钟即可集成使用。

## 🚀 5 分钟快速集成

### 1. CDN 引入（最简单）

```html
<!DOCTYPE html>
<html>
<head>
  <title>Quick Start</title>
</head>
<body>
  <!-- 直接使用 -->
  <status-tag status="running"></status-tag>

  <script src="https://unpkg.com/status-tag-web-component@latest/dist/status-tag.umd.js"></script>
</body>
</html>
```

### 2. NPM 安装

```bash
npm install @blueking/status-tag-web-component
```

```javascript
// 在项目中导入
import '@blueking/status-tag-web-component';
```

## 💡 基础示例

### 5 种默认状态

```html
<status-tag status="loading"></status-tag>  <!-- 加载中 -->
<status-tag status="running"></status-tag>  <!-- 运行中 -->
<status-tag status="stop"></status-tag>     <!-- 已停止 -->
<status-tag status="warning"></status-tag>  <!-- 警告 -->
<status-tag status="unknown"></status-tag>  <!-- 未知 -->
```

### 切换语言

```html
<!-- 中文 -->
<status-tag status="running"></status-tag>
<!-- 英文 -->
<status-tag status="running" locale="en-US"></status-tag>
```

### 智能匹配

```html
<!-- 都会显示为 running 状态 -->
<status-tag status="running"></status-tag>
<status-tag status="RUNNING"></status-tag>
<status-tag status="Running"></status-tag>
```

## 🎨 在框架中使用

### React

```jsx
import { useEffect } from 'react';

function StatusTag({ status }) {
  useEffect(() => {
    // 动态设置属性
  }, [status]);

  return <status-tag status={status}></status-tag>;
}
```

### Vue

```vue
<template>
  <status-tag :status="status" :locale="locale" />
</template>

<script setup>
import '@blueking/status-tag-web-component';
const status = ref('running');
</script>
```

### Angular

```typescript
@Component({
  template: `<status-tag [attr.status]="status"></status-tag>`
})
export class AppComponent {
  status = 'running';
}
```

## 📚 更多资源

- [完整文档](./README.md)
- [迁移指南](./MIGRATION.md)
- [示例演示](./examples/final-test-v2.html)

## ❓ 需要帮助？

- 查看 [常见问题](./README.md#-常见问题)
- 提交 [Issue](https://github.com/forrany/status-tag-component/issues)
