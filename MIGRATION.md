# 从 Vue StatusTag 到 Web Component 迁移指南

本文档帮助您将现有的 Vue StatusTag 组件迁移到新的 Web Component 版本。

## 迁移前后对比

### Vue 版本（改造前）

```vue
<template>
  <StatusTag
    :status="clusterOpsStatus.toLocaleLowerCase() || 'unknown'"
    :status-map="customStatusMap"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import StatusTag from '@bk-base/resource/src/views/Deploy/components/StatusTag';

@Component({
  components: { StatusTag }
})
export default class YourComponent extends Vue {
  @Prop() readonly data!: any;

  get clusterOpsStatus(): string {
    return this.data.clusterOpsStatus || 'unknown';
  }

  customStatusMap = {
    disconnected: { text: '未连接', theme: 'stop' },
    connecting: { text: '连接中', theme: 'loading' },
    connected: { text: '已连接', theme: 'running' },
    error: { text: '连接错误', theme: 'warning' }
  };
}
</script>
```

### Web Component 版本（改造后）

```vue
<template>
  <StatusTag
    :status="clusterOpsStatus.toLocaleLowerCase() || 'unknown'"
    :status-map="JSON.stringify(customStatusMap)"
    :locale="locale"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import '@blueking/status-tag-web-component';

@Component({
  components: { StatusTag }
})
export default class YourComponent extends Vue {
  @Prop() readonly data!: any;

  get clusterOpsStatus(): string {
    return this.data.clusterOpsStatus || 'unknown';
  }

  get locale(): string {
    return this.$i18n?.locale === 'en' ? 'en-US' : 'zh-CN';
  }

  customStatusMap = {
    disconnected: { text: '未连接', theme: 'stop' },
    connecting: { text: '连接中', theme: 'loading' },
    connected: { text: '已连接', theme: 'running' },
    error: { text: '连接错误', theme: 'warning' }
  };
}
</script>
```

## 主要变化

### 1. 导入方式

**Vue 版本:**
```typescript
import StatusTag from '@bk-base/resource/src/views/Deploy/components/StatusTag';
```

**Web Component 版本:**
```typescript
import '@blueking/status-tag-web-component';
// 或使用 CDN
// <script src="dist/status-tag.umd.js"></script>
```

### 2. 属性绑定

**Vue 版本（属性直接传递对象）:**
```vue
<StatusTag :status-map="customStatusMap" />
```

**Web Component 版本（属性需要 JSON 序列化）:**
```vue
<StatusTag :status-map="JSON.stringify(customStatusMap)" />
```

### 3. 国际化支持

**Vue 版本:**
```vue
<StatusTag :status="status" />
<!-- 依赖全局 window.$t() 函数 -->
```

**Web Component 版本:**
```vue
<StatusTag :status="status" :locale="locale" />
<!-- locale 需要主动传递 -->
```

### 4. 状态映射配置

#### Vue 版本中的写法
```typescript
customStatusMap = {
  connected: { text: '已连接', theme: 'running' },
  disconnected: { text: '未连接', theme: 'stop' }
};
```

#### Web Component 版本中的写法
```typescript
customStatusMap = {
  connected: { text: 'Connected', theme: 'running' },
  disconnected: { text: 'Disconnected', theme: 'stop' }
};
```

**注意:** Web Component 版本不再依赖 `window.$t()` 函数进行翻译。翻译由组件内部的 i18n 系统处理。因此，在自定义状态映射中，文本应直接使用目标语言，而不是翻译键。

## 完整迁移示例

### 示例 1: 基础使用

```vue
<!-- Vue 组件中 -->
<template>
  <div>
    <status-tag
      :status="clusterStatus"
      :locale="currentLocale"
    ></status-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clusterStatus: 'running',
      currentLocale: 'zh-CN'
    };
  }
};
</script>
```

### 示例 2: 自定义状态映射

```vue
<template>
  <div>
    <status-tag
      :status="connectionStatus"
      :status-map="JSON.stringify(statusMapping)"
      :locale="currentLocale"
    ></status-tag>
  </div>
</template>

<script>
export default {
  computed: {
    currentLocale() {
      return this.$i18n?.locale === 'en' ? 'en-US' : 'zh-CN';
    },
    statusMapping() {
      return {
        disconnected: { text: 'Disconnected', theme: 'stop' },
        connecting: { text: 'Connecting', theme: 'loading' },
        connected: { text: 'Connected', theme: 'running' },
        error: { text: 'Connection Error', theme: 'warning' }
      };
    }
  },
  data() {
    return {
      connectionStatus: 'connected'
    };
  }
};
</script>
```

### 示例 3: React 项目中使用

```tsx
import { useEffect, useRef } from 'react';

function ClusterStatus({ status }: { status: string }) {
  const tagRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (tagRef.current) {
      tagRef.current.setAttribute('status', status);
      tagRef.current.setAttribute('locale', 'zh-CN');
    }
  }, [status]);

  return React.createElement('status-tag', { ref: tagRef, 'attr-status': status, 'attr-locale': 'zh-CN' });
}
```

## 迁移检查清单

- [ ] 更新导入语句
- [ ] 将 `status-map` 属性值转换为 JSON 字符串
- [ ] 添加 `locale` 属性支持国际化
- [ ] 更新自定义状态映射的文本（使用目标语言而非翻译键）
- [ ] 测试所有状态变体
- [ ] 验证国际化功能
- [ ] 测试自定义状态映射
- [ ] 更新组件使用文档

## 注意事项

1. **属性序列化**: Web Component 的属性必须是字符串，因此对象类型的属性需要 JSON.stringify()

2. **国际化**: Web Component 有独立的 i18n 系统，需要通过 `locale` 属性显式设置语言

3. **性能**: Web Component 在初次加载时会有轻微的初始化开销，但运行时性能与 Vue 组件相当

4. **调试**: 可以使用浏览器的开发者工具直接检查和修改 `<status-tag>` 元素的属性

5. **类型支持**: 如果使用 TypeScript，建议添加自定义类型声明：

```typescript
// src/global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'status-tag': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      status?: string;
      'status-map'?: string;
      locale?: string;
    };
  }
}
```

## 常见问题

### Q: 如何动态更新状态？
A: 直接修改 `status` 属性即可：
```javascript
const tag = document.querySelector('status-tag');
tag.setAttribute('status', 'running');
// 或
tag.status = 'running';
```

### Q: 如何获取组件实例？
A: Web Component 不提供 Vue 那样的实例 API。如果需要交互，建议使用事件或直接操作 DOM 属性。

### Q: 如何处理样式？
A: 样式已封装在 Shadow DOM 中，无需特殊处理。如需自定义，可覆盖 CSS 变量或使用 ::part 选择器。

## 更多资源

- [MDN Web Components 指南](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
- [Web Components 使用示例](./examples/basic.html)
- [项目 README](./README.md)
