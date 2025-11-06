# 📚 JavaScript Module Formats Guide

本文档科普 JavaScript 中不同的模块文件扩展名及其区别。

## 🔍 核心概念

### ES Module vs CommonJS

在深入了解文件扩展名之前，需要先理解两种模块系统：

#### ES Module (ESM)
```javascript
// import/export 语法
// 文件扩展名推荐: .mjs 或 .js (配合 "type": "module")
import { something } from './module.js';
export default function() {}

// 特点:
// - 静态导入，可以进行 Tree Shaking
// - 浏览器原生支持 (script type="module")
// - 更适合构建工具优化
```

#### CommonJS (CJS)
```javascript
// require/module.exports 语法
// 文件扩展名: .js (默认)
const something = require('./module');
module.exports = function() {}

// 特点:
// - 动态导入
// - Node.js 传统方式
// - 无法进行 Tree Shaking
```

## 📄 文件扩展名详解

### 1. .mjs (ECMAScript Module)

**官方推荐的 ES Module 扩展名**

#### 特性
- ✅ **明确标识**: 文件扩展名明确表示这是 ES Module
- ✅ **无需配置**: 在 Node.js 中无需 `package.json` 配置即可识别
- ✅ **浏览器友好**: 现代浏览器原生支持 `<script type="module" src="file.mjs">`
- ✅ **一致性**: 消除了 CommonJS 和 ES Module 的歧义

#### 使用场景
```html
<!-- 在 HTML 中直接使用 -->
<script type="module">
  import { StatusTag } from './status-tag.mjs';
  // 或从 CDN
  import { StatusTag } from 'https://unpkg.com/status-tag-web-component@latest/dist/status-tag.mjs';
</script>
```

```javascript
// 在 Node.js 中
import { StatusTag } from './status-tag.mjs';
```

#### 历史背景
- Node.js 在 v8.5.0 (2017) 引入 `.mjs` 扩展名
- TC39 (JavaScript 标准委员会) 官方推荐
- 解决了 ES Module 和 CommonJS 的混淆问题

---

### 2. .js (JavaScript)

**默认扩展名，需要 package.json 指示模块系统**

#### 特性
- ⚠️ **依赖配置**: 需要 `package.json` 中的 `"type": "module"` 指示
- ⚠️ **歧义性**: 相同扩展名可能表示不同模块系统
- ✅ **简洁**: 传统扩展名，看起更简洁

#### 配置方式
```json
{
  "type": "module"  // 让所有 .js 文件作为 ES Module 解析
}
```

#### 示例
```json
{
  "name": "my-package",
  "type": "module",        // 所有 .js 文件都是 ES Module
  "main": "dist/index.js", // 这个 index.js 是 ES Module
  "module": "dist/index.js" // 构建工具使用 ES Module 版本
}
```

---

### 3. .es.js (ES Module JavaScript)

**历史遗留，社区约定（非官方）**

#### 特性
- ⚠️ **非标准**: 没有在 TC39 或 Node.js 正式规范中定义
- ⚠️ **需要配置**: 仍需配置 package.json.module
- ⚠️ **冗长**: 文件名较长
- ⚠️ **过时**: 现在已被 `.mjs` 取代

#### 配置方式
```json
{
  "main": "dist/index.js",    // UMD 版本
  "module": "dist/index.es.js" // 传统构建工具识别的 ES Module
}
```

#### 问题
- **现代构建工具不推荐**: webpack、Rollup、Vite 都优先使用 `.mjs`
- **混淆**: 开发者不知道 `*.es.js` 和普通 `*.js` 的区别
- **冗余**: 6 个字符 (.es.js) vs 4 个字符 (.mjs)

---

## 🎯 实际案例分析

### 我们的项目: Status Tag Web Component

#### 构建配置 (vite.config.ts)
```javascript
export default defineConfig({
  build: {
    lib: {
      formats: ['umd', 'es']  // Vite 自动生成 .mjs
    }
  }
})
```

#### 实际输出
```
dist/
├── status-tag.umd.js  ← UMD 格式 (兼容性最好)
├── status-tag.mjs     ← ES Module (现代构建工具)
└── *.map              ← Source Map
```

#### package.json 配置
```json
{
  "main": "dist/status-tag.umd.js",    // CommonJS/UMD 环境
  "module": "dist/status-tag.mjs",     // ES Module 环境 ⚠️ 原本写成 .es.js
  "types": "dist/index.d.ts"           // TypeScript 类型定义
}
```

#### 为什么使用 .mjs？
```javascript
// ✅ 现代浏览器直接加载
<script type="module" src="status-tag.mjs"></script>

// ✅ Webpack/Rollup/Vite 等构建工具自动识别
import { StatusTag } from 'status-tag-web-component';

// ✅ Node.js 原生支持
import { StatusTag } from './node_modules/status-tag-web-component/dist/status-tag.mjs';
```

---

## 📊 对比表格

| 特性 | .mjs | .js (with "type": "module") | .es.js |
|------|------|-----------------------------|--------|
| **官方推荐** | ✅ TC39/Node.js | ⚠️ 需要配置 | ❌ 非官方 |
| **文件明确性** | ✅ 一目了然 | ⚠️ 需看 package.json | ⚠️ 需看 package.json |
| **浏览器支持** | ✅ 原生支持 | ✅ 原生支持 | ❌ 需配置 |
| **Node.js 支持** | ✅ 无需配置 | ⚠️ 需 package.json | ⚠️ 需 package.json |
| **长度** | 4 字符 | 3 字符 | 6 字符 |
| **现代构建工具** | ✅ 原生支持 | ✅ 支持 | ⚠️ 兼容 |
| **推荐程度** | 🟢 强烈推荐 | 🟡 备选 | 🔴 不推荐 |

---

## 🏆 最佳实践

### 1. 库/组件发布 (如我们的项目)

```json
{
  "main": "dist/index.umd.js",        // UMD 用于 CDN/直接引入
  "module": "dist/index.mjs",         // ES Module 用于构建工具
  "types": "dist/index.d.ts"          // TypeScript 类型
}
```

### 2. 纯前端应用

```json
{
  "type": "module",
  "main": "dist/index.js"  // 所有 .js 都是 ES Module
}
```

### 3. 纯 Node.js 应用

```json
{
  // 默认 CommonJS，无需配置
  "main": "dist/index.js"
}
```

### 4. 双模式兼容 (不推荐)

```json
{
  "main": "dist/index.cjs.js",
  "module": "dist/index.es.js"  // 旧版方式，现在用 .mjs
}
```

---

## 🔮 未来趋势

### .mjs 的普及
- **2024-2025**: 越来越多项目采用 `.mjs`
- **生态系统**: 工具链原生支持 `.mjs`
- **开发者友好**: 消除歧义，提高可读性

### .js 的演进
- 随着 ES Module 成为主流，`.js` 文件默认使用 ES Module
- `package.json` 的 `"type": "module"` 将成为历史

### .es.js 的淘汰
- 逐渐被 `.mjs` 取代
- 新项目不再使用
- 存量项目逐步迁移

---

## 💡 总结

**为什么我们修正为 `.mjs`？**

1. **准确性**: 实际构建输出就是 `.mjs`（Vite 默认）
2. **兼容性**: 现代工具链原生支持，无需额外配置
3. **可读性**: 开发者一看就知道这是 ES Module
4. **未来性**: 符合官方推荐和行业发展趋势
5. **便利性**: 无需在 package.json 中写 `"type": "module"`

**经验法则**:
- 🎯 使用 `.mjs` 明确标识 ES Module
- 🎯 避免使用 `.es.js`（历史遗留）
- 🎯 除非必要，避免 package.json 中的 `"type": "module"`
