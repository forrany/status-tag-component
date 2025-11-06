# 🚀 NPM Publish Checklist

## 发布前准备 (发布前完成)

### 1. 更新 package.json 中的占位符

```bash
# 需要替换以下内容:
# 1. "author": "Your Name <your.email@example.com>"
# 2. "repository.url": "https://github.com/your-username/status-tag-component.git"
# 3. "bugs.url": "https://github.com/your-username/status-tag-component/issues"
# 4. "homepage": "https://github.com/your-username/status-tag-component#readme"
```

### 2. 确保所有文件就绪

- [x] ✅ `package.json` - 已配置完整
- [x] ✅ `README.md` - 完整文档
- [x] ✅ `LICENSE` - MIT 许可证
- [x] ✅ `.gitignore` - Git 忽略规则
- [x] ✅ `CHANGELOG.md` - 版本更新日志
- [x] ✅ `dist/` - 构建产物 (UMD: 7.82 kB, ES Module: 9.99 kB)
- [x] ✅ `examples/` - 测试示例

### 3. 验证构建

```bash
npm run build
```

✅ 确保构建成功，无错误

## 发布流程

### 1. 登录 NPM

```bash
npm login
```

### 2. 发布到 NPM

```bash
npm publish
```

### 3. 创建 Git 标签

```bash
git tag v1.0.0
git push origin v1.0.0
```

### 4. 创建 GitHub Release

访问 GitHub → Releases → Create a new release

## 发布后验证

- [ ] NPM 页面可访问: https://www.npmjs.com/package/status-tag-web-component
- [ ] CDN 可访问: https://unpkg.com/status-tag-web-component@latest/dist/status-tag.umd.js
- [ ] 实际安装测试: `npm install status-tag-web-component`

## 快速命令参考

```bash
# 构建
npm run build

# 登录
npm login

# 发布
npm publish

# 版本更新 (下次发布时)
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0
```

---

📖 **详细指南**: 参见 [PUBLISH_GUIDE.md](./PUBLISH_GUIDE.md)
