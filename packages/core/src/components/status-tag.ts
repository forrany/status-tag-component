import { LitElement, html, unsafeCSS, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { classMap } from 'lit/directives/class-map.js';
import { i18n, getLanguageFromCookie } from '../utils/i18n';
import type { StatusConfig, StatusMapConfig, StatusTheme } from '../types';

// 导入外部 SCSS 样式文件
import styles from './status-tag.scss?inline';

/**
 * 默认状态映射配置
 * 定义了五种预设状态及其对应的主题和文本
 */
const DEFAULT_STATUS_MAP: Readonly<StatusMapConfig> = {
  loading: { text: 'loading', theme: 'loading' },
  running: { text: 'running', theme: 'running' },
  stop: { text: 'stop', theme: 'stop' },
  warning: { text: 'warning', theme: 'warning' },
  unknown: { text: 'unknown', theme: 'stop' },
  failed: { text: 'failed', theme: 'unknown' } // Using 'unknown' theme which is Red
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

  // ========== 内部状态 ==========

  /**
   * 合并后的完整状态映射配置
   * 包含默认配置和用户自定义配置
   * @internal
   */
  @state()
  private _mergedStatusMap: StatusMapConfig = DEFAULT_STATUS_MAP;

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
   * 根据主题类型渲染不同的图标（加载图标或圆点）
   *
   * @param theme - 当前主题类型
   * @returns 图标的模板结果
   * @private
   */
  private _renderIcon(theme: StatusTheme) {
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
    const { theme, text } = currentStatus;

    // 使用 classMap 指令动态生成类名
    const classes = {
      'bkbase-status-tag': true,
      [`bkbase-status-tag--${theme}`]: true,
      [`bkbase-status-tag--type-${this.type}`]: !!this.type
    };

    return html`
      <div class=${classMap(classes)}>
        ${cache(this._renderIcon(theme))}
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
