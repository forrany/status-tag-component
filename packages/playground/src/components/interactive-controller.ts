import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@blueking/status-tag';

@customElement('interactive-controller')
export class InteractiveController extends LitElement {
  @state() private status = 'running';
  @state() private type = '';
  @state() private locale = 'zh-CN';
  @state() private border = true;
  @state() private useCustomMap = false;
  @state() private customText = '';

  static styles = css`
    :host { display: block; }

    h2 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 24px;
      color: #313238;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .demo-card {
      background: white;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    }

    .preview {
      padding: 32px;
      background: #f5f7fa;
      border-radius: 8px;
      margin-bottom: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 60px;
    }

    .controls {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 13px;
      color: #63656e;
      font-weight: 500;
    }

    select, input[type="text"] {
      padding: 8px 12px;
      border: 1px solid #dcdee5;
      border-radius: 4px;
      font-size: 14px;
      background: white;
      color: #313238;
    }

    select:focus, input:focus {
      outline: none;
      border-color: #3a84ff;
    }

    .toggle-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .toggle {
      position: relative;
      width: 36px;
      height: 20px;
      cursor: pointer;
    }

    .toggle input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .toggle-slider {
      position: absolute;
      inset: 0;
      background: #c4c6cc;
      border-radius: 10px;
      transition: background 0.2s;
    }

    .toggle-slider::before {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      left: 2px;
      top: 2px;
      background: white;
      border-radius: 50%;
      transition: transform 0.2s;
    }

    .toggle input:checked + .toggle-slider {
      background: #3a84ff;
    }

    .toggle input:checked + .toggle-slider::before {
      transform: translateX(16px);
    }

    .code-output {
      margin-top: 24px;
      background: #282c34;
      border-radius: 8px;
      padding: 16px;
      overflow-x: auto;
    }

    pre {
      margin: 0;
      font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
      font-size: 14px;
      line-height: 1.5;
      color: #abb2bf;
    }
  `;

  private get _statusMap(): Record<string, { text: string; theme: string }> {
    if (!this.useCustomMap || !this.customText) return {};
    return {
      [this.status]: { text: this.customText, theme: this.status }
    };
  }

  private _renderCode(): string {
    const attrs = [`status="${this.status}"`];
    if (this.type) attrs.push(`type="${this.type}"`);
    if (this.locale !== 'zh-CN') attrs.push(`locale="${this.locale}"`);
    if (!this.border) attrs.push(`border="false"`);
    if (this.useCustomMap && this.customText) {
      attrs.push(`status-map='${JSON.stringify(this._statusMap)}'`);
    }
    return `<status-tag ${attrs.join(' ')}></status-tag>`;
  }

  render() {
    return html`
      <section>
        <h2>🎮 交互式控制器</h2>
        <div class="demo-card">
          <div class="preview">
            <status-tag
              status=${this.status}
              type=${this.type}
              locale=${this.locale}
              ?border=${this.border}
              .statusMap=${this._statusMap}
            ></status-tag>
          </div>

          <div class="controls">
            <label>
              Status
              <select @change=${(e: Event) => { this.status = (e.target as HTMLSelectElement).value; }}>
                <option value="loading">loading</option>
                <option value="running" selected>running</option>
                <option value="unknown">unknown</option>
                <option value="warning">warning</option>
                <option value="danger">danger</option>
              </select>
            </label>

            <label>
              Type
              <select @change=${(e: Event) => { this.type = (e.target as HTMLSelectElement).value; }}>
                <option value="" selected>Default</option>
                <option value="stroke">Stroke</option>
                <option value="filled">Filled</option>
              </select>
            </label>

            <label>
              Locale
              <select @change=${(e: Event) => { this.locale = (e.target as HTMLSelectElement).value; }}>
                <option value="zh-CN" selected>zh-CN</option>
                <option value="en-US">en-US</option>
              </select>
            </label>

            <label>
              Border
              <div class="toggle-row">
                <label class="toggle">
                  <input
                    type="checkbox"
                    .checked=${this.border}
                    @change=${(e: Event) => { this.border = (e.target as HTMLInputElement).checked; }}
                  />
                  <span class="toggle-slider"></span>
                </label>
                <span>${this.border ? '有边框' : '无边框'}</span>
              </div>
            </label>

            <label>
              自定义文字
              <input
                type="text"
                placeholder="留空使用默认翻译"
                .value=${this.customText}
                @input=${(e: Event) => {
                  this.customText = (e.target as HTMLInputElement).value;
                  this.useCustomMap = !!this.customText;
                }}
              />
            </label>
          </div>

          <div class="code-output">
            <pre><code>${this._renderCode()}</code></pre>
          </div>
        </div>
      </section>
    `;
  }
}
