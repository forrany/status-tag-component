# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (runs TypeScript compilation + Vite build)
npm run build

# Preview production build locally
npm run preview

# Clean build artifacts
npm run clean
```

## 📦 Project Overview

This is a **TypeScript-based Web Component library** that provides a framework-agnostic status tag component. The component:

- Extends `HTMLElement` and uses Shadow DOM for style isolation
- Has zero framework dependencies (works with React, Vue, Angular, vanilla JS)
- Supports internationalization (i18n) with built-in zh-CN and en-US
- Provides 5 default statuses: loading, running, stop, warning, unknown
- Supports custom status mapping via JSON configuration
- Auto-registers when imported via `src/index.ts`

**Build outputs** (dist/):
- `status-tag.umd.js` (7.5KB, 2.95KB gzipped)
- `status-tag.mjs` (9.4KB, 3.27KB gzipped)

## 🏗️ Code Architecture

### Source Structure

```
src/
├── components/
│   └── status-tag.ts        # Main component (StatusTag class)
├── locales/                 # i18n language packs
│   ├── zh-CN.json          # Chinese translations
│   └── en-US.json          # English translations
├── utils/
│   └── i18n.ts             # I18n utility class
├── types.ts                 # TypeScript type definitions
└── index.ts                 # Entry point with auto-registration
```

### Component Architecture

**StatusTag Class** (`src/components/status-tag.ts:270`):
- Extends `HTMLElement`
- Uses Shadow DOM for style encapsulation
- Implements Custom Elements lifecycle:
  - `constructor()` - Initialize shadow root
  - `connectedCallback()` - Render on mount
  - `attributeChangedCallback()` - React to attribute changes

**Key Features**:
- **Observed attributes**: `status`, `status-map`, `locale`
- **Smart matching**: Case-insensitive status matching with fallback to 'unknown'
- **Dynamic updates**: Re-renders on any property change
- **CSS-in-JS**: All styles embedded in component as template strings
- **SVG icons**: Loading icon embedded as base64 data URI

**Default Status Map**:
```typescript
{
  loading: { text: 'loading', theme: 'loading' },    // Blue theme with spinning icon
  running: { text: 'running', theme: 'running' },    // Green theme
  stop: { text: 'stop', theme: 'stop' },             // Gray theme
  warning: { text: 'warning', theme: 'warning' },    // Orange theme
  unknown: { text: 'unknown', theme: 'unknown' }     // Yellow-orange theme
}
```

**Internationalization** (`src/utils/i18n.ts`):
- Custom I18n class with locale switching and nested translation key support
- Built-in language packs (zh-CN, en-US)
- Extensible architecture for additional languages

### Type System (`src/types.ts`)

- `StatusTheme` - Union type for status themes
- `StatusConfig` - Interface for status configuration
- `StatusMapConfig` - Record type for custom status mappings
- `LocaleResources` - Structure for translation resources

### Design Specifications

**Visual specs** (from README.md:96):
- Container height: 22px
- Padding: 0 8px
- Border radius: 13px
- Font: 12px / 700 (bold)
- Loading icon: 12×12px SVG with rotation animation
- Dot icon: 6×6px with glow effect

**Status color schemes** (from README.md:107):
| Status  | Background    | Text Color | Border                | Icon                    |
|---------|---------------|------------|-----------------------|-------------------------|
| loading | #EDF4FF       | #699DF4    | 1px solid #CDDFFE    | 12×12 SVG icon          |
| running | #EBFAEF       | #299E56    | 1px solid #CBF0DA    | #E5F6EA + 1px solid     |
| stop    | #F5F7FA       | #979BA5    | 1px solid #EAEBF0    | #F0F1F5 + 1px solid     |
| warning | #FDF4E9       | #F59500    | 1px solid #FCE5C0    | #FCE5C0 + 1px solid     |
| unknown | #fff3e8       | #ff9c01    | No border            | #ff9c01                 |

## 🔧 Build System

**Tools**:
- **Vite 5.0** - Build tool and dev server
- **TypeScript 5.3** - Type checking and compilation
- **Rollup** - Bundling (via Vite)
- **Terser** - Code minification

**Configuration**:
- `vite.config.ts` - Dual output format (UMD + ES Module), source maps enabled, minification with Terser
- `tsconfig.json` - Strict TypeScript configuration
- Dual bundle output for maximum compatibility

## 📝 Usage Examples (from README.md)

### Basic HTML

```html
<status-tag status="running"></status-tag>
<status-tag status="stop" locale="en-US"></status-tag>
```

### Cookie-Based I18n

The component automatically detects language from the `blueking_language` cookie:

```javascript
// Cookie values:
// - 'en' → English (en-US)
// - Any other value or not set → Chinese (zh-CN) [default]

// HTML (no locale attribute needed)
<status-tag status="running"></status-tag>
// Automatically shows:
// - "Running" in English if blueking_language=en
// - "运行中" in Chinese otherwise
```

### Custom Status Mapping

```html
<status-tag
  status="pending"
  status-map='{
    "pending": {"text": "待审批", "theme": "warning"},
    "approved": {"text": "已批准", "theme": "running"},
    "rejected": {"text": "已拒绝", "theme": "stop"}
  }'
></status-tag>
```

### React

```tsx
function StatusDisplay({ status, locale = 'zh-CN' }) {
  return React.createElement('status-tag', {
    'attr-status': status,
    'attr-locale': locale
  });
}
```

### Vue 3

```vue
<template>
  <status-tag :status="status" :locale="locale" />
</template>

<script setup>
import 'status-tag-web-component';
const status = ref('running');
</script>
```

## 🧪 Testing

No formal testing framework is configured. Testing is done through manual HTML test pages:
- `examples/basic.html` - Basic usage demo
- `examples/final-test.html` - Complete test page
- `examples/final-test-v2.html` - Updated test page

Test changes by opening these files in a browser or serving them via `npm run dev`.

## 📚 Documentation

- **README.md** (276 lines) - Comprehensive usage documentation, API reference, and examples
- **PROJECT_SUMMARY.md** (271 lines) - Project completion summary, build artifacts, design specs
- **MIGRATION.md** (283 lines) - Migration guide from Vue component with side-by-side comparisons

## 🌐 Browser Support

Chrome ≥ 54, Firefox ≥ 63, Safari ≥ 10.1, Edge ≥ 79, iOS Safari ≥ 10.3, Android Chrome ≥ 54

## 🔍 Key Implementation Details

1. **Auto-registration** (`src/index.ts`): Component automatically registers with Custom Elements when imported
2. **Shadow DOM**: All styles are scoped within the component's shadow root
3. **Attribute reflection**: Properties sync with attributes (status, locale, statusMap)
4. **Smart matching**: Status values are normalized to lowercase for matching (e.g., "RUNNING" → "running")
5. **Cookie-based i18n**: If `locale` attribute is not set, component reads `blueking_language` cookie:
   - `blueking_language=en` → English (en-US)
   - Any other value or not set → Chinese (zh-CN, default)
6. **I18n resolution**: Text is resolved from locale resources with fallback support

## 💡 Important Notes

- Component must be connected to DOM before setting properties (use `connectedCallback`)
- Custom status mapping accepts JSON string via `status-map` attribute
- Shadow DOM isolation means external styles cannot target internal elements (use `::part` if exposed or manipulate shadowRoot directly)
- No testing framework - rely on manual browser testing via examples/ directory
- All assets (icons, styles) are embedded for zero external dependencies
