# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2025-11-06

### Added
- 🎉 Initial release of Status Tag Web Component
- ✨ Framework-agnostic web component that works with any frontend framework
- 🌐 Internationalization (i18n) support with built-in Chinese (zh-CN) and English (en-US)
- 🍪 Cookie-based language detection via `blueking_language` cookie
- 🎨 Five default status types: loading, running, stop, warning, unknown
- 🎯 Smart status matching (case-insensitive)
- 📝 Custom status mapping support via JSON configuration
- 🔒 Shadow DOM for style isolation
- 📦 Dual bundle output: UMD (7.82 kB) and ES Module (9.99 kB)
- ✅ Full TypeScript support with type definitions
- 📚 Comprehensive documentation and usage examples
- 🧪 Multiple test pages in `examples/` directory
- 🔧 Development server configured with `0.0.0.0` binding

### Technical Details
- Built with Vite 5.0 and TypeScript 5.3
- Supports all modern browsers (Chrome ≥ 54, Firefox ≥ 63, Safari ≥ 10.1, Edge ≥ 79)
- No runtime dependencies
- SVG icons embedded as data URIs
- CSS-in-JS styling approach
- Auto-registration when imported

### Usage Examples
- Basic HTML integration
- React integration
- Vue 2 & 3 integration
- Angular integration
- Vanilla JavaScript usage

---

## Version History

### Legend
- 🎉 Added
- ✨ Enhanced
- 🔄 Changed
- 🐛 Fixed
- ⚠️ Deprecated
- 🗑️ Removed
- 🔒 Security
