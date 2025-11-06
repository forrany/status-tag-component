import type { LocaleResources } from '../types';
import zhCN from '../locales/zh-CN.json';
import enUS from '../locales/en-US.json';

const resources: LocaleResources = {
  'zh-CN': zhCN,
  'en-US': enUS
};

/**
 * Get language from cookie blueking_language
 * @returns 'en-US' for 'en', otherwise 'zh-CN'
 */
export function getLanguageFromCookie(): string {
  if (typeof document === 'undefined') {
    return 'zh-CN';
  }

  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, ...valueParts] = cookie.trim().split('=');
    if (name === 'blueking_language') {
      const value = valueParts.join('=');
      // 'en' -> 'en-US', anything else -> 'zh-CN'
      return value === 'en' ? 'en-US' : 'zh-CN';
    }
  }
  return 'zh-CN'; // default to Chinese
}

export class I18n {
  private currentLocale: string = 'zh-CN';

  constructor(initialLocale: string = 'zh-CN') {
    this.currentLocale = initialLocale || 'zh-CN';
  }

  setLocale(locale: string): void {
    if (resources[locale]) {
      this.currentLocale = locale;
    }
  }

  getLocale(): string {
    return this.currentLocale;
  }

  t(key: string): string {
    const keys = key.split('.');
    let value: any = resources[this.currentLocale];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  }

  getAvailableLocales(): string[] {
    return Object.keys(resources);
  }
}

export const i18n = new I18n();
