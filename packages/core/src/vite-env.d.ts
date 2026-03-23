/// <reference types="vite/client" />

/**
 * SCSS 模块类型声明
 * 允许在 TypeScript 中导入 .scss 文件
 */
declare module '*.scss?inline' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: string;
  export default content;
}

/**
 * CSS 模块类型声明
 */
declare module '*.css' {
  const content: string;
  export default content;
}

/**
 * tippy.js 可选依赖的类型声明
 * 仅声明组件内部使用的最小 API
 */
declare module 'tippy.js' {
  interface TippyInstance {
    destroy(): void;
    setContent(content: string): void;
    setProps(props: Record<string, unknown>): void;
  }
  function tippy(target: Element, options?: Record<string, unknown>): TippyInstance;
  export default tippy;
}
