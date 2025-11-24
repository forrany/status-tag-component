import type { LocaleResources } from '../types';
import zhCN from '../locales/zh-CN.json';
import enUS from '../locales/en-US.json';

/**
 * 支持的语言代码类型
 */
export type SupportedLocale = 'zh-CN' | 'en-US';

/**
 * Cookie 名称常量
 */
const COOKIE_NAME = 'blueking_language' as const;

/**
 * 默认语言
 */
const DEFAULT_LOCALE: SupportedLocale = 'zh-CN';

/**
 * 语言资源字典
 * 包含所有支持的语言包
 */
const resources: LocaleResources = {
  'zh-CN': zhCN,
  'en-US': enUS
} as const;

/**
 * 从 Cookie 中读取语言设置
 *
 * @remarks
 * 读取 blueking_language Cookie 的值并映射到支持的语言代码：
 * - 'en' → 'en-US'
 * - 其他值 → 'zh-CN'（默认）
 *
 * @returns 语言代码（'zh-CN' | 'en-US'）
 *
 * @example
 * ```typescript
 * // Cookie: blueking_language=en
 * const locale = getLanguageFromCookie(); // 'en-US'
 *
 * // Cookie: blueking_language=zh
 * const locale = getLanguageFromCookie(); // 'zh-CN'
 *
 * // Cookie: 不存在
 * const locale = getLanguageFromCookie(); // 'zh-CN'
 * ```
 */
export function getLanguageFromCookie(): SupportedLocale {
  // SSR 环境兼容性检查
  if (typeof document === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const cookies = document.cookie.split(';');

  for (const cookie of cookies) {
    const [name, ...valueParts] = cookie.trim().split('=');

    if (name === COOKIE_NAME) {
      const value = valueParts.join('=');
      // 映射 'en' 到 'en-US'，其他值默认为中文
      return value === 'en' ? 'en-US' : DEFAULT_LOCALE;
    }
  }

  return DEFAULT_LOCALE;
}

/**
 * 国际化工具类
 *
 * @remarks
 * 提供多语言支持的核心功能：
 * - 语言切换
 * - 嵌套键路径翻译（支持 'status.loading' 格式）
 * - 回退机制（翻译失败时返回原键名）
 *
 * @example
 * ```typescript
 * const i18n = new I18n('zh-CN');
 *
 * // 翻译文本
 * const text = i18n.t('status.loading'); // '加载中'
 *
 * // 切换语言
 * i18n.setLocale('en-US');
 * const text2 = i18n.t('status.loading'); // 'Loading'
 *
 * // 获取可用语言列表
 * const locales = i18n.getAvailableLocales(); // ['zh-CN', 'en-US']
 * ```
 */
export class I18n {
  /**
   * 当前激活的语言代码
   * @private
   */
  private currentLocale: SupportedLocale = DEFAULT_LOCALE;

  /**
   * 构造函数
   *
   * @param initialLocale - 初始语言代码，默认为 'zh-CN'
   */
  constructor(initialLocale: SupportedLocale = DEFAULT_LOCALE) {
    this.currentLocale = initialLocale;
  }

  /**
   * 设置当前语言
   *
   * @param locale - 要切换的语言代码
   * @throws 如果传入不支持的语言代码，会在控制台输出警告但不会抛出错误
   *
   * @example
   * ```typescript
   * i18n.setLocale('en-US');
   * ```
   */
  setLocale(locale: string): void {
    if (resources[locale]) {
      this.currentLocale = locale as SupportedLocale;
    } else {
      console.warn(`[I18n] 不支持的语言代码: ${locale}，将继续使用 ${this.currentLocale}`);
    }
  }

  /**
   * 获取当前激活的语言代码
   *
   * @returns 当前语言代码
   *
   * @example
   * ```typescript
   * const locale = i18n.getLocale(); // 'zh-CN'
   * ```
   */
  getLocale(): SupportedLocale {
    return this.currentLocale;
  }

  /**
   * 翻译指定键的文本
   *
   * @remarks
   * 支持嵌套键路径，使用 '.' 分隔，例如 'status.loading'
   * 如果翻译失败，会返回原键名作为回退值
   *
   * @param key - 翻译键，支持嵌套路径（如 'status.loading'）
   * @returns 翻译后的文本，失败时返回原键名
   *
   * @example
   * ```typescript
   * // 简单键
   * i18n.t('status.loading'); // '加载中'
   *
   * // 深层嵌套
   * i18n.t('errors.network.timeout'); // '网络超时'
   *
   * // 键不存在时的回退
   * i18n.t('not.exist'); // 'not.exist'
   * ```
   */
  t(key: string): string {
    const keys = key.split('.');
    let value: any = resources[this.currentLocale];

    // 逐级遍历嵌套对象
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // 翻译失败，返回原键名
        console.debug(`[I18n] 翻译键未找到: ${key} (语言: ${this.currentLocale})`);
        return key;
      }
    }

    // 确保最终值是字符串
    return typeof value === 'string' ? value : key;
  }

  /**
   * 获取所有可用的语言代码列表
   *
   * @returns 支持的语言代码数组
   *
   * @example
   * ```typescript
   * const locales = i18n.getAvailableLocales(); // ['zh-CN', 'en-US']
   * ```
   */
  getAvailableLocales(): SupportedLocale[] {
    return Object.keys(resources) as SupportedLocale[];
  }

  /**
   * 检查指定语言是否受支持
   *
   * @param locale - 要检查的语言代码
   * @returns 是否支持该语言
   *
   * @example
   * ```typescript
   * i18n.isLocaleSupported('zh-CN'); // true
   * i18n.isLocaleSupported('fr-FR'); // false
   * ```
   */
  isLocaleSupported(locale: string): boolean {
    return locale in resources;
  }
}

/**
 * 全局单例 i18n 实例
 *
 * @remarks
 * 默认使用中文（zh-CN），可通过 setLocale() 方法切换语言
 *
 * @example
 * ```typescript
 * import { i18n } from './utils/i18n';
 *
 * i18n.setLocale('en-US');
 * const text = i18n.t('status.loading');
 * ```
 */
export const i18n = new I18n();
