import { StatusTag } from './components/status-tag';
export { StatusTag };
export { I18n, i18n } from './utils/i18n';
export type { StatusConfig, StatusMapConfig, StatusTheme, LocaleResources } from './types';

// Auto-register the component when the module is imported
if (typeof customElements !== 'undefined') {
  if (!customElements.get('status-tag')) {
    customElements.define('status-tag', StatusTag);
  }
}
