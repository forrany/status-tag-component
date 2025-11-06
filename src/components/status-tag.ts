import { i18n, getLanguageFromCookie } from '../utils/i18n';
import type { StatusConfig, StatusMapConfig, StatusTheme } from '../types';

const DEFAULT_STATUS_MAP: StatusMapConfig = {
  loading: { text: 'loading', theme: 'loading' },
  running: { text: 'running', theme: 'running' },
  stop: { text: 'stop', theme: 'stop' },
  warning: { text: 'warning', theme: 'warning' },
  unknown: { text: 'unknown', theme: 'unknown' }
};

const SVG_DATA_URI = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNhODRmZiI+PHBhdGggZD0iTTMzMi44IDI0My4yYzI1LjYgMjUuNiAyNS42IDY0IDAgODkuNi0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBMMjE3LjYgMzA3LjIgMTk4LjQgMjg4Yy0yNS42LTI1LjYtMjUuNi02NCAwLTg5LjZzNjQtMjUuNiA4OS42IDBsMjUuNiAyNS42TDMzMi44IDI0My4yeiIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTkyIDQ0OGMzOC40IDAgNjQgMjUuNiA2NCA2NFMyMzAuNCA1NzYgMTkyIDU3NkgxNjAgMTI4Qzg5LjYgNTc2IDY0IDU1MC40IDY0IDUxMnMyNS42LTY0IDY0LTY0aDMySDE5MnoiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGQ9Ik0yNDMuMiA2OTEuMmMyNS42LTI1LjYgNjQtMjUuNiA4OS42IDAgMjUuNiAyNS42IDI1LjYgNjQgMCA4OS42bC0yNS42IDI1LjZMMjgxLjYgODMyYy0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBzLTI1LjYtNjQgMC04OS42bDI1LjYtMjUuNkwyNDMuMiA2OTEuMnoiIG9wYWNpdHk9Ii4zIi8+PHBhdGggZD0iTTQ0OCA4MzJjMC0zOC40IDI1LjYtNjQgNjQtNjRzNjQgMjUuNiA2NCA2NHYzMlY4OTZjMCAzOC40LTI1LjYgNjQtNjQgNjRzLTY0LTI1LjYtNjQtNjR2LTMyVjgzMnoiIG9wYWNpdHk9Ii40NSIvPjxwYXRoIGQ9Ik04MjUuNiA4MjUuNmMtMjUuNiAyNS42LTY0IDI1LjYtODkuNiAwbC0yNS42LTI1LjYgMCAwLTI1LjYtMjUuNmMtMjUuNi0yNS42LTI1LjYtNjQgMC04OS42czY0LTI1LjYgODkuNiAwbDI1LjYgMjUuNiAyNS42IDI1LjYgMCAwQzg1MS4yIDc2MS42IDg1MS4yIDgwNi40IDgyNS42IDgyNS42eiIgb3BhY2l0eT0iLjYiLz48cGF0aCBkPSJNODk2IDQ0OGwtMzIgMTI4SDgzMmMtMzguNCAwLTY0LTI1LjYtNjQtNjRzMjUuNi02NCA2NC02NEg4OTZ6TTk2MCA1MTJjMCAzOC40LTI1LjYgNjQtNjQgNjRoLTMyTDg5NiA0NDhDOTM0LjQgNDQ4IDk2MCA0NzMuNiA5NjAgNTEyeiIgb3BhYWNpdHk9Ii43NSIvPjxwYXRoIGQ9Ik03NDIuNCAxOTJjMjUuNi0xOS4yIDY0LTE5LjIgODMuMiA2LjQgMjUuNiAyNS42IDI1LjYgNjQgMCA4OS42bC0yNS42IDI1LjYtMjUuNiAyNS42Yy0yNS42IDI1LjYtNjQgMjUuNi04OS42IDBzLTI1LjYtNjQgMC04OS42IiBvcGFjaXR5PSIuOSIvPjxwYXRoIGQ9Ik00NDggMTYwTDU3NiAxOTJjMCAzOC40LTI1LjYgNjQtNjQgNjRTNDQ4IDIzMC40IDQ0OCAxOTJWMTYwek01MTIgNjRjMzguNCAwIDY0IDI1LjYgNjQgNjR2MzJINDQ4VjEyOEM0NDggODkuNiA0NzMuNiA2NCA1MTIgNjR6TTQ0OCAxNjBoMTI4VjE5Mkg0NDhWMTYwem0iLz48L2c+PC9zdmc+';

const COMPONENT_STYLES = `
  .bkbase-status-tag {
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    height: 22px;
    border-radius: 13px;
    font-size: 12px;
    font-weight: 700;
    background-color: #f0f1f5;
  }

  .bkbase-status-tag-loading {
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-image: url('${SVG_DATA_URI}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    animation: bk-status-loading-rotate 1s linear infinite;
  }

  .bkbase-status-tag-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 4px;
    background-color: #c4c6cc;
    position: relative;
  }

  .bkbase-status-tag-dot::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: inherit;
    opacity: 0.2;
  }

  .bkbase-status-tag--loading {
    background-color: #EDF4FF;
    border: 1px solid #CDDFFE;
    color: #699DF4;
  }

  .bkbase-status-tag--running {
    background-color: #EBFAEF;
    border: 1px solid #CBF0DA;
    color: #299E56;
  }

  .bkbase-status-tag--running .bkbase-status-tag-dot {
    background: #E5F6EA;
    border: 1px solid #3FC06D;
  }

  .bkbase-status-tag--stop {
    background-color: #F5F7FA;
    color: #979BA5;
    border: 1px solid #EAEBF0;
  }

  .bkbase-status-tag--stop .bkbase-status-tag-dot {
    background-color: #F0F1F5;
    border: 1px solid #C4C6CC;
  }

  .bkbase-status-tag--warning {
    background-color: #FDF4E9;
    color: #F59500;
    border: 1px solid #FCE5C0;
  }

  .bkbase-status-tag--warning .bkbase-status-tag-dot {
    background: #FCE5C0;
    border: 1px solid #F59500;
  }

  .bkbase-status-tag--unknown {
    background-color: #fff3e8;
  }

  .bkbase-status-tag--unknown .bkbase-status-tag-dot {
    background-color: #ff9c01;
  }

  @keyframes bk-status-loading-rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export class StatusTag extends HTMLElement {
  private _status: string = 'unknown';
  private _statusMap: StatusMapConfig = {};
  private _locale: string = 'zh-CN';
  private _mergedStatusMap: StatusMapConfig = {};

  static get observedAttributes() {
    return ['status', 'status-map', 'locale'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // If locale attribute is not set, get language from cookie bluebkbase_language
    const localeAttr = this.getAttribute('locale');
    if (!localeAttr) {
      const cookieLocale = getLanguageFromCookie();
      this._locale = cookieLocale;
      i18n.setLocale(this._locale);
    }
    this.render();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;

    switch (name) {
      case 'status':
        this._status = newValue || 'unknown';
        break;
      case 'status-map':
        try {
          this._statusMap = newValue ? JSON.parse(newValue) : {};
        } catch (e) {
          console.warn('Invalid status-map JSON:', e);
          this._statusMap = {};
        }
        break;
      case 'locale':
        this._locale = newValue || 'zh-CN';
        i18n.setLocale(this._locale);
        break;
    }

    this.render();
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this.setAttribute('status', value);
  }

  get statusMap(): StatusMapConfig {
    return this._statusMap;
  }

  set statusMap(value: StatusMapConfig) {
    this.setAttribute('status-map', JSON.stringify(value));
  }

  get locale(): string {
    return this._locale;
  }

  set locale(value: string) {
    this.setAttribute('locale', value);
  }

  private mergeStatusMaps(): StatusMapConfig {
    this._mergedStatusMap = { ...DEFAULT_STATUS_MAP, ...this._statusMap };
    return this._mergedStatusMap;
  }

  private findMatchingStatusKey(status: string): string {
    const map = this.mergeStatusMaps();

    if (map[status]) {
      return status;
    }

    const lowerStatus = status.toLowerCase();
    if (map[lowerStatus]) {
      return lowerStatus;
    }

    const upperStatus = status.toUpperCase();
    if (map[upperStatus]) {
      return upperStatus;
    }

    return 'unknown';
  }

  private getCurrentStatus(): StatusConfig {
    const matchedKey = this.findMatchingStatusKey(this._status);
    const statusConfig = this.mergeStatusMap()[matchedKey] || this.mergeStatusMaps()['unknown'];

    return {
      ...statusConfig,
      text: i18n.t(`status.${statusConfig.text}`)
    };
  }

  private mergeStatusMap(): StatusMapConfig {
    const map = this.mergeStatusMaps();
    const merged: StatusMapConfig = {};

    for (const [key, config] of Object.entries(map)) {
      merged[key] = {
        ...config,
        text: this.isDefaultKey(key) ? config.text : config.text
      };
    }

    return merged;
  }

  private isDefaultKey(key: string): boolean {
    return ['loading', 'running', 'stop', 'warning', 'unknown'].includes(key);
  }

  private getThemeClass(theme: StatusTheme): string {
    return `bkbase-status-tag--${theme}`;
  }

  private createIcon(theme: StatusTheme): HTMLElement {
    if (theme === 'loading') {
      const icon = document.createElement('span');
      icon.className = 'bkbase-status-tag-loading';
      return icon;
    } else {
      const icon = document.createElement('span');
      icon.className = 'bkbase-status-tag-dot';
      return icon;
    }
  }

  private render(): void {
    const currentStatus = this.getCurrentStatus();
    const themeClass = this.getThemeClass(currentStatus.theme);
    const icon = this.createIcon(currentStatus.theme);
    const text = document.createElement('span');
    text.textContent = currentStatus.text;

    const wrapper = document.createElement('div');
    wrapper.className = `bkbase-status-tag ${themeClass}`;
    wrapper.appendChild(icon);
    wrapper.appendChild(text);

    const style = document.createElement('style');
    style.textContent = COMPONENT_STYLES;

    this.shadowRoot!.innerHTML = '';
    this.shadowRoot!.appendChild(style);
    this.shadowRoot!.appendChild(wrapper);
  }
}
