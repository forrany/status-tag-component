import { LitElement, html, unsafeCSS, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { classMap } from 'lit/directives/class-map.js';
import { i18n, getLanguageFromCookie } from '../utils/i18n';
import type { StatusConfig, StatusMapConfig, StatusTheme, TippyFunction, TippyInstance } from '../types';

// 导入外部 SCSS 样式文件
import styles from './status-tag.scss?inline';

/**
 * 默认状态映射配置
 * 四种基础状态，对应四种主色主题
 * 业务方可通过 status-map 属性自定义扩展
 */
const DEFAULT_STATUS_MAP: Readonly<StatusMapConfig> = {
  loading: { text: 'loading', theme: 'loading' },
  running: { text: 'running', theme: 'running' },
  unknown: { text: 'unknown', theme: 'unknown' },
  warning: { text: 'warning', theme: 'warning' },
  danger: { text: 'danger', theme: 'danger' },
} as const;

/**
 * 加载图标的 SVG Base64 编码
 * 12x12px 的旋转动画图标
 * 注入到 SCSS 中作为 CSS 变量使用
 */
const SVG_DATA_URI = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNhODRmZiI+PHBhdGggZD0iTTMzMi44IDI0My4yYzI1LjYgMjUuNiAyNS42IDY0IDAgODkuNi0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBMMjE3LjYgMzA3LjIgMTk4LjQgMjg4Yy0yNS42LTI1LjYtMjUuNi02NCAwLTg5LjZzNjQtMjUuNiA4OS42IDBsMjUuNiAyNS42TDMzMi44IDI0My4yeiIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTkyIDQ0OGMzOC40IDAgNjQgMjUuNiA2NCA2NFMyMzAuNCA1NzYgMTkyIDU3NkgxNjAgMTI4Qzg5LjYgNTc2IDY0IDU1MC40IDY0IDUxMnMyNS42LTY0IDY0LTY0aDMySDE5MnoiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGQ9Ik0yNDMuMiA2OTEuMmMyNS42LTI1LjYgNjQtMjUuNiA4OS42IDAgMjUuNiAyNS42IDI1LjYgNjQgMCA4OS42bC0yNS42IDI1LjZMMjgxLjYgODMyYy0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBzLTI1LjYtNjQgMC04OS42bDI1LjYtMjUuNkwyNDMuMiA2OTEuMnoiIG9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTQ0OCA4MzJjMC0zOC40IDI1LjYtNjQgNjQtNjRzNjQgMjUuNiA2NCA2NHYzMlY4OTZjMCAzOC40LTI1LjYgNjQtNjQgNjRzLTY0LTI1LjYtNjQtNjR2LTMyVjgzMnoiIG9wYWNpdHk9Ii40NSIvPjxwYXRoIGQ9Ik04MjUuNiA4MjUuNmMtMjUuNiAyNS42LTY0IDI1LjYtODkuNiAwbC0yNS42LTI1LjYgMCAwLTI1LjYtMjUuNmMtMjUuNi0yNS42LTI1LjYtNjQgMC04OS42czY0LTI1LjYgODkuNiAwbDI1LjYgMjUuNiAyNS42IDI1LjYgMCAwQzg1MS4yIDc2MS42IDg1MS4yIDgwNi40IDgyNS42IDgyNS42eiIgb3BhY2l0eT0iLjYiLz48cGF0aCBkPSJNODk2IDQ0OGwtMzIgMTI4SDgzMmMtMzguNCAwLTY0LTI1LjYtNjQtNjRzMjUuNi02NCA2NC02NEg4OTZ6TTk2MCA1MTJjMCAzOC40LTI1LjYgNjQtNjQgNjRoLTMyTDg5NiA0NDhDOTM0LjQgNDQ4IDk2MCA0NzMuNiA5NjAgNTEyeiIgb3BhYWNpdHk9Ii43NSIvPjxwYXRoIGQ9Ik03NDIuNCAxOTJjMjUuNi0xOS4yIDY0LTE5LjIgODMuMiA2LjQgMjUuNiAyNS42IDI1LjYgNjQgMCA4OS42bC0yNS42IDI1LjYtMjUuNiAyNS42Yy0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBzLTI1LjYtNjQgMC04OS42IiBvcGFjaXR5PSIuOSIvPjxwYXRoIGQ9Ik00NDggMTYwTDU3NiAxOTJjMCAzOC40LTI1LjYgNjQtNjQgNjRTNDQ4IDIzMC40IDQ0OCAxOTJWMTYwek01MTIgNjRjMzguNCAwIDY0IDI1LjYgNjQgNjR2MzJINDQ4VjEyOEM0NDggODkuNiA0NzMuNiA2NCA1MTIgNjR6TTQ0OCAxNjBoMTI4VjE5Mkg0NDhWMTYwem0iLz48L2c+PC9zdmc+';

/**
 * 状态标签 Web Component
 *
 * @element status-tag
 *
 * @attr {string} status - 当前状态值（支持大小写不敏感匹配）
 * @attr {string} locale - 国际化语言代码（zh-CN | en-US）
 * @attr {string} status-map - 自定义状态映射的 JSON 字符串
 * @attr {string} custom-icon - 自定义前置图标：传入 `i` 元素的 class（空格分隔多个 class），不使用内置圆点/加载图标
 *
 * @example
 * ```html
 * <!-- 基础使用 -->
 * <status-tag status="running"></status-tag>
 *
 * <!-- 指定语言 -->
 * <status-tag status="loading" locale="en-US"></status-tag>
 *
 * <!-- 自定义状态映射 -->
 * <status-tag
 *   status="pending"
 *   status-map='{"pending": {"text": "待处理", "theme": "warning"}}'
 * ></status-tag>
 *
 * <!-- 自定义图标 class（如 iconfont / Bootstrap Icons 等，Shadow 内需 ::part 映射） -->
 * <status-tag status="running" custom-icon="bi bi-check-circle"></status-tag>
 * ```
 */
@customElement('status-tag')
export class StatusTag extends LitElement {
  // ========== 静态样式定义 ==========
  /**
   * 从外部 SCSS 文件加载样式
   * 使用 unsafeCSS 包装以确保 Lit 正确处理样式字符串
   * 并注入 SVG 图标作为 CSS 变量
   */
  static styles = [
    unsafeCSS(styles.replace('var(--loading-icon)', `url('${SVG_DATA_URI}')`))
  ];

  // ========== 公开属性（对应 HTML 属性）==========

  /**
   * 当前状态
   * 支持大小写不敏感匹配，如果找不到对应配置则回退到 'unknown'
   * @default 'unknown'
   */
  @property({ type: String, reflect: true })
  status: string = 'unknown';

  /**
   * 标签类型
   * stroke: 描边圆点（8px）
   * filled: 含光晕的实心圆点（外层 13px 光晕 + 内层 7px 实心）
   * @default '' (默认样式)
   */
  @property({ type: String, reflect: true })
  type: 'stroke' | 'filled' | '' = '';

  /**
   * 自定义状态映射配置
   * 支持通过 JSON 字符串传入，会与默认配置合并
   * @example { "custom": { "text": "自定义", "theme": "running" } }
   */
  @property({
    type: Object,
    attribute: 'status-map',
    converter: {
      // 从 HTML 属性字符串转换为对象
      fromAttribute: (value: string | null): StatusMapConfig => {
        if (!value) return {};
        try {
          return JSON.parse(value) as StatusMapConfig;
        } catch (error) {
          console.warn('[StatusTag] 解析 status-map 失败:', error);
          return {};
        }
      },
      // 从属性对象转换为 HTML 属性字符串
      toAttribute: (value: StatusMapConfig): string => {
        return JSON.stringify(value);
      }
    }
  })
  statusMap: StatusMapConfig = {};

  /**
   * 国际化语言设置
   * 支持 'zh-CN' 和 'en-US'
   * 如果未设置，会自动从 cookie 中读取 blueking_language 值
   * @default 'zh-CN'
   */
  @property({ type: String, reflect: true })
  locale: string = 'zh-CN';

  /**
   * 自定义前置图标的 class（可含多个 class，空格分隔）
   * 有非空值时渲染 `<i part="custom-icon" class="..."></i>`，不使用内置加载动画或主题圆点
   * 优先级高于当前状态在 `status-map` 中的 `icon` 字段
   * Shadow DOM 下全局图标 class 可能无法命中内部节点，可用 `status-tag::part(custom-icon)` 写样式
   */
  @property({ type: String, reflect: true, attribute: 'custom-icon' })
  customIcon: string = '';

  /**
   * 是否显示边框
   * 设为 false 时隐藏标签外框 border，适用于无边框的设计风格
   * @default true
   */
  @property({
    type: Boolean,
    reflect: true,
    converter: {
      fromAttribute: (value: string | null): boolean => {
        if (value === null || value === 'false') return false;
        return true;
      },
      toAttribute: (value: boolean): string | null => {
        return value ? '' : null;
      }
    }
  })
  border: boolean = true;

  /**
   * 提示文本
   * 设置后 hover 时会以 tooltip 形式展示
   * 优先使用 tippy.js（需用户自行安装），不可用时降级为原生 title
   */
  @property({ type: String })
  tip: string = '';

  /**
   * tippy.js 配置选项
   * 支持通过 JSON 字符串传入，会透传给 tippy.js 实例
   * @see https://atomiks.github.io/tippyjs/v6/all-props/
   */
  @property({
    type: Object,
    attribute: 'tippy-options',
    converter: {
      fromAttribute: (value: string | null): Record<string, unknown> => {
        if (!value) return {};
        try {
          return JSON.parse(value) as Record<string, unknown>;
        } catch (error) {
          console.warn('[StatusTag] 解析 tippy-options 失败:', error);
          return {};
        }
      },
      toAttribute: (value: Record<string, unknown>): string => {
        return JSON.stringify(value);
      }
    }
  })
  tippyOptions: Record<string, unknown> = {};

  // ========== 内部状态 ==========

  /**
   * 合并后的完整状态映射配置
   * 包含默认配置和用户自定义配置
   * @internal
   */
  @state()
  private _mergedStatusMap: StatusMapConfig = DEFAULT_STATUS_MAP;

  /** tippy.js 实例 */
  private _tippyInstance: TippyInstance | null = null;

  /**
   * 类级别缓存的 tippy 函数引用
   * - undefined: 尚未尝试解析
   * - null: 解析失败（tippy.js 不可用）
   * - TippyFunction: 解析成功
   */
  private static _tippyFn: TippyFunction | null | undefined = undefined;
  private static _tippyResolving: Promise<TippyFunction | null> | null = null;

  // ========== 生命周期方法 ==========

  /**
   * 组件连接到 DOM 时的回调
   * 处理 locale 自动检测逻辑
   */
  connectedCallback(): void {
    super.connectedCallback();

    // 如果未显式设置 locale 属性，则尝试从 cookie 中读取
    if (!this.hasAttribute('locale')) {
      const cookieLocale = getLanguageFromCookie();
      if (cookieLocale) {
        this.locale = cookieLocale;
      }
    }
  }

  /**
   * 属性更新前的回调
   * 处理响应式属性变化的副作用
   *
   * @param changedProperties - 已变化的属性 Map
   */
  willUpdate(changedProperties: PropertyValues<this>): void {
    // 当 locale 变化时，更新 i18n 实例的语言设置
    if (changedProperties.has('locale')) {
      i18n.setLocale(this.locale);
    }

    // 当 statusMap 变化时，重新计算合并后的配置
    if (changedProperties.has('statusMap')) {
      this._mergedStatusMap = this._computeMergedStatusMap();
    }
  }

  /**
   * 属性更新后的回调
   * 处理 tippy.js tooltip 的初始化和更新
   */
  updated(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('tip') || changedProperties.has('tippyOptions')) {
      this._setupTippy();
    }
  }

  /**
   * 组件从 DOM 移除时的回调
   * 清理 tippy.js 实例以避免内存泄漏
   */
  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._destroyTippy();
  }

  // ========== Tippy.js 集成 ==========

  /**
   * 解析 tippy.js 函数引用
   *
   * 解析策略（按优先级）：
   * 1. 检查 window.tippy（CDN / UMD 全局引入）
   * 2. 动态 import('tippy.js')（ES Module / 打包工具）
   * 3. 均不可用时返回 null，组件降级为原生 title
   *
   * 使用类级别缓存避免重复 import，同时每次优先检查全局变量
   * 以兼容 CDN 延迟加载场景
   */
  private async _resolveTippy(): Promise<TippyFunction | null> {
    if (typeof window !== 'undefined' && 'tippy' in window) {
      return (window as unknown as Record<string, TippyFunction>).tippy;
    }

    if (StatusTag._tippyFn !== undefined) {
      return StatusTag._tippyFn;
    }

    if (StatusTag._tippyResolving) {
      return StatusTag._tippyResolving;
    }

    StatusTag._tippyResolving = (async (): Promise<TippyFunction | null> => {
      try {
        const mod: Record<string, unknown> = await import('tippy.js');
        const fn = (mod.default ?? mod) as TippyFunction;
        StatusTag._tippyFn = fn;
        return fn;
      } catch {
        StatusTag._tippyFn = null;
        return null;
      } finally {
        StatusTag._tippyResolving = null;
      }
    })();

    return StatusTag._tippyResolving;
  }

  /**
   * 初始化或更新 tippy tooltip
   * 无 tip 时清理实例；tippy.js 不可用时降级为原生 title
   */
  private async _setupTippy(): Promise<void> {
    this._destroyTippy();

    if (!this.tip) {
      this.removeAttribute('title');
      return;
    }

    const tippyFn = await this._resolveTippy();
    if (!tippyFn) {
      this.title = this.tip;
      return;
    }

    this.removeAttribute('title');
    this._tippyInstance = tippyFn(this, {
      content: this.tip,
      ...this.tippyOptions,
    });
  }

  /**
   * 销毁 tippy 实例并清理引用
   */
  private _destroyTippy(): void {
    if (this._tippyInstance) {
      this._tippyInstance.destroy();
      this._tippyInstance = null;
    }
  }

  // ========== 私有计算方法 ==========

  /**
   * 计算合并后的状态映射配置
   * 用户自定义配置会覆盖默认配置
   *
   * @returns 合并后的完整配置对象
   * @private
   */
  private _computeMergedStatusMap(): StatusMapConfig {
    return {
      ...DEFAULT_STATUS_MAP,
      ...this.statusMap
    };
  }

  /**
   * 智能匹配状态键
   * 尝试多种匹配策略以提高容错性
   *
   * 匹配顺序：
   * 1. 精确匹配
   * 2. 小写匹配
   * 3. 大写匹配
   * 4. 回退到 'unknown'
   *
   * @param status - 要匹配的状态值
   * @returns 匹配到的状态键
   * @private
   */
  private _findMatchingStatusKey(status: string): string {
    const map = this._mergedStatusMap;

    // 1. 精确匹配
    if (map[status]) {
      return status;
    }

    // 2. 小写匹配
    const lowerStatus = status.toLowerCase();
    if (map[lowerStatus]) {
      return lowerStatus;
    }

    // 3. 大写匹配
    const upperStatus = status.toUpperCase();
    if (map[upperStatus]) {
      return upperStatus;
    }

    // 4. 默认回退
    return 'unknown';
  }

  /**
   * 获取当前状态的完整配置
   * 包括翻译后的文本和主题信息
   *
   * @returns 处理后的状态配置对象
   * @private
   */
  private _getCurrentStatus(): StatusConfig {
    const matchedKey = this._findMatchingStatusKey(this.status);
    const statusConfig = this._mergedStatusMap[matchedKey] || this._mergedStatusMap['unknown'];

    // 尝试翻译：构建 status.xxx 的键
    const translationKey = `status.${statusConfig.text}`;
    const translated = i18n.t(translationKey);

    // 如果翻译结果等于键名（说明没找到翻译），则直接使用原始文本
    const text = translated === translationKey ? statusConfig.text : translated;

    return {
      ...statusConfig,
      text
    };
  }

  /**
   * 渲染状态图标
   * `customIconClass` 非空时使用用户 class 渲染 `<i>`，否则按主题渲染加载图标或圆点
   *
   * @param theme - 当前主题类型
   * @param customIconClass - 自定义 `i` 元素的 class 字符串
   * @returns 图标的模板结果
   * @private
   */
  private _renderIcon(theme: StatusTheme, customIconClass: string) {
    const trimmed = customIconClass.trim();
    if (trimmed) {
      return html`
        <span class="bkbase-status-tag-custom-icon-root">
          <i part="custom-icon" class=${trimmed}></i>
        </span>
      `;
    }
    return theme === 'loading'
      ? html`<span class="bkbase-status-tag-loading"></span>`
      : html`<span class="bkbase-status-tag-dot"></span>`;
  }

  // ========== 渲染方法 ==========

  /**
   * 主渲染函数
   * 使用 Lit 的响应式系统自动更新视图
   *
   * @returns 组件的模板结果
   */
  render() {
    const currentStatus = this._getCurrentStatus();
    const { theme, text, icon } = currentStatus;
    const customIconClass = this.customIcon?.trim() || icon?.trim() || '';

    const classes = {
      'bkbase-status-tag': true,
      [`bkbase-status-tag--${theme}`]: true,
      [`bkbase-status-tag--type-${this.type}`]: !!this.type,
      'bkbase-status-tag--has-tip': !!this.tip,
      'bkbase-status-tag--no-border': !this.border,
    };

    return html`
      <div class=${classMap(classes)}>
        ${cache(this._renderIcon(theme, customIconClass))}
        <span>${text}</span>
      </div>
    `;
  }

  // ========== 类型声明增强 ==========

  /**
   * 声明组件的 HTML 标签名
   * 用于 TypeScript 类型推断
   */
  declare static tagName: 'status-tag';
}
