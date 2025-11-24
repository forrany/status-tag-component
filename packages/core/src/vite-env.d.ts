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
