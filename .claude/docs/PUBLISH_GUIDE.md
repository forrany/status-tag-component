# 📦 NPM Package Publishing Guide

本指南将帮助您将 Status Tag Web Component 发布到 NPM。

## 🚀 发布前检查清单

### 1. ✅ 必要文件检查

- [x] `package.json` - 已配置完整信息
- [x] `README.md` - 完整的使用文档
- [x] `LICENSE` - MIT 许可证文件
- [x] `.gitignore` - Git 忽略规则
- [ ] **需要创建**: `CHANGELOG.md` - 版本更新日志

### 2. ✅ package.json 配置

**已优化的字段**：
- ✅ `main`: 指向 UMD 格式
- ✅ `module`: 指向 ES Module 格式（修正了错误的路径）
- ✅ `types`: TypeScript 类型定义
- ✅ `files`: 指定发布文件
- ✅ `keywords`: SEO 友好的关键词
- ✅ `repository`: GitHub 仓库地址
- ✅ `bugs`: 问题追踪地址
- ✅ `homepage`: 项目主页
- ✅ `engines`: Node.js 版本要求

### 3. ⚠️ 需要手动更新的字段

请在发布前替换以下占位符：

```json
{
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "url": "https://github.com/your-username/status-tag-component.git"
  },
  "bugs": {
    "url": "https://github.com/your-username/status-tag-component/issues"
  },
  "homepage": "https://github.com/your-username/status-tag-component#readme"
}
```

## 📝 发布步骤

### 第一步：确认构建

```bash
# 确保构建成功
npm run build
```

### 第二步：登录 NPM

```bash
# 登录 NPM（如果未登录）
npm login

# 查看当前用户
npm whoami
```

### 第三步：发布到 NPM

```bash
# 发布包
npm publish

# 如果是首次发布且包名已存在，会报错
# 如果一切正常，包将发布到: https://www.npmjs.com/package/status-tag-web-component
```

### 第四步：创建 Git 标签

```bash
# 创建并推送 Git 标签
git tag v1.0.0
git push origin v1.0.0
```

### 第五步：创建 GitHub Release

1. 访问 GitHub 仓库的 Releases 页面
2. 点击 "Create a new release"
3. 选择标签 `v1.0.0`
4. 填写发布说明（参考 CHANGELOG.md）
5. 点击 "Publish release"

## 📋 发布后验证

发布成功后，验证以下几点：

### 1. NPM 页面

访问 https://www.npmjs.com/package/status-tag-web-component
- ✅ 显示正确的信息
- ✅ README 正确渲染
- ✅ 安装命令可用

### 2. CDN 测试

```bash
# 使用 unpkg CDN 测试
curl -I https://unpkg.com/status-tag-web-component@latest/dist/status-tag.umd.js
```

### 3. 实际安装测试

```bash
# 在空目录中测试
mkdir test-install
cd test-install
npm init -y
npm install status-tag-web-component
# 验证 node_modules 中存在 dist 文件
```

## 🎯 版本管理

### 语义化版本（SemVer）

- **主版本号（Major）**: 不兼容的 API 变更
- **次版本号（Minor）**: 向下兼容的功能性新增
- **修订号（Patch）**: 向下兼容的问题修正

### 版本更新命令

```bash
# 补丁版本（1.0.0 → 1.0.1）
npm version patch

# 次版本（1.0.0 → 1.1.0）
npm version minor

# 主版本（1.0.0 → 2.0.0）
npm version major
```

## 🔧 常见问题

### Q1: 包名已存在

```
npm ERR! 403 Forbidden - PUT https://registry.npmjs.org/status-tag-web-component - You do not have permission to publish "status-tag-web-component"
```

**解决方案**: 包名已被占用，需要更改 `package.json` 中的 `name` 字段

### Q2: 权限问题

```
npm ERR! 401 Unauthorized - PUT https://registry.npmjs.org/...
```

**解决方案**: 确保已登录并有发布权限
```bash
npm login
npm owner add <your-username> status-tag-web-component
```

### Q3: 文件大小限制

NPM 包的总大小限制为 **16MB**（压缩后）

**当前包大小**:
- UMD: 7.82 kB
- ES Module: 9.99 kB
- **总计**: ~18 kB（远低于限制）

## 📚 最佳实践

1. **每次发布前运行测试**
   ```bash
   npm run build
   npm run preview  # 本地预览
   ```

2. **保持详细的 CHANGELOG.md**
   - 记录每次版本变更
   - 遵循 [Keep a Changelog](https://keepachangelog.com/) 规范

3. **使用 Git 标签**
   - 每个发布版本打标签
   - 标签名格式: `v1.0.0`, `v1.0.1`, 等

4. **自动化发布**（可选）
   - 使用 GitHub Actions
   - 配置自动发布到 NPM

## 🎉 发布完成

恭喜！您的包已成功发布到 NPM！

**下一步**:
- 通知团队成员新版本
- 更新项目文档
- 收集用户反馈
- 规划下一个版本

---

## 📄 参考资源

- [NPM 发布文档](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [语义化版本规范](https://semver.org/lang/zh-CN/)
- [Keep a Changelog](https://keepachangelog.com/)
