/**
 * 状态主题类型
 *
 * @remarks
 * 定义了五种预设的状态主题，每种主题对应不同的视觉样式：
 * - `loading`: 加载中（蓝色，带旋转图标）
 * - `running`: 运行中（绿色）
 * - `stop`: 停止（灰色）
 * - `warning`: 警告（橙色）
 * - `unknown`: 未知（黄橙色）
 */
export type StatusTheme = 'loading' | 'running' | 'stop' | 'warning' | 'unknown';

/**
 * 状态配置接口
 *
 * @remarks
 * 定义单个状态的完整配置信息
 *
 * @example
 * ```typescript
 * const config: StatusConfig = {
 *   text: 'loading',     // 翻译键或显示文本
 *   theme: 'loading',    // 主题样式
 *   icon: 'custom-icon'  // 可选的自定义图标（当前版本未实现）
 * };
 * ```
 */
export interface StatusConfig {
  /**
   * 状态文本
   * 可以是翻译键（如 'loading'）或直接显示的文本
   */
  text: string;

  /**
   * 状态主题
   * 决定标签的视觉样式（颜色、图标等）
   */
  theme: StatusTheme;

  /**
   * 自定义图标（可选）
   * 预留字段，当前版本未实现自定义图标功能
   */
  icon?: string;
}

/**
 * 状态映射配置接口
 *
 * @remarks
 * 键值对形式的状态配置集合，支持自定义状态扩展
 * 键名支持大小写不敏感匹配
 *
 * @example
 * ```typescript
 * const statusMap: StatusMapConfig = {
 *   loading: { text: 'loading', theme: 'loading' },
 *   running: { text: 'running', theme: 'running' },
 *   custom: { text: '自定义状态', theme: 'warning' }
 * };
 * ```
 */
export interface StatusMapConfig {
  /**
   * 状态键与配置的映射
   * 键名：状态标识（如 'loading', 'running'）
   * 值：对应的状态配置对象
   */
  [key: string]: StatusConfig;
}

/**
 * 国际化资源类型
 *
 * @remarks
 * 定义多语言翻译资源的结构
 * 当前支持嵌套的键路径访问（如 'status.loading'）
 *
 * @example
 * ```typescript
 * const resources: LocaleResources = {
 *   'zh-CN': {
 *     status: {
 *       loading: '加载中',
 *       running: '运行中',
 *       stop: '停止',
 *       warning: '警告',
 *       unknown: '未知'
 *     }
 *   },
 *   'en-US': {
 *     status: {
 *       loading: 'Loading',
 *       running: 'Running',
 *       stop: 'Stop',
 *       warning: 'Warning',
 *       unknown: 'Unknown'
 *     }
 *   }
 * };
 * ```
 */
export interface LocaleResources {
  /**
   * 语言代码到翻译对象的映射
   */
  [locale: string]: {
    /**
     * 状态相关的翻译
     */
    status: {
      /** 加载中 */
      loading: string;
      /** 运行中 */
      running: string;
      /** 停止 */
      stop: string;
      /** 警告 */
      warning: string;
      /** 未知 */
      unknown: string;
    };
  };
}

/**
 * 组件属性类型（用于 TypeScript JSX 支持）
 *
 * @remarks
 * 定义 status-tag 组件的属性接口，便于在 TSX/JSX 中使用
 *
 * @example
 * ```tsx
 * // React 中使用
 * <status-tag
 *   status="running"
 *   locale="en-US"
 *   status-map={JSON.stringify(customMap)}
 * />
 * ```
 */
export interface StatusTagProps {
  /** 当前状态值 */
  status?: string;
  /** 国际化语言代码 */
  locale?: 'zh-CN' | 'en-US';
  /** 自定义状态映射的 JSON 字符串 */
  'status-map'?: string;
}

/**
 * 扩展 JSX 类型声明（为 React 和其他框架提供类型支持）
 *
 * @remarks
 * 允许在 JSX/TSX 中使用 <status-tag> 标签时获得类型提示和检查
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'status-tag': Partial<StatusTagProps> & {
        // 标准 HTML 属性
        class?: string;
        className?: string;
        style?: string | Record<string, string>;
        id?: string;
        // 事件处理（可选）
        onClick?: (event: MouseEvent) => void;
        onMouseEnter?: (event: MouseEvent) => void;
        onMouseLeave?: (event: MouseEvent) => void;
      };
    }
  }
}
