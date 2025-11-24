import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@blueking/status-tag';

@customElement('interactive-controller')
export class InteractiveController extends LitElement {
  @state() private status = 'running';
  @state() private type = '';
  @state() private locale = 'zh-CN';
  @state() private useCustomMap = false;
  @state() private customMap = '{"pending": {"text": "待处理", "theme": "warning"}}';

  static styles = css`
    /* 样式省略，参考原 playground/styles.css */
  `;

  render() {
    return html`
      <section class="section">
        <h2>🎮 交互式控制器</h2>
        <div class="demo-card">
          <div class="preview">
            <status-tag
              status=${this.status}
              type=${this.type}
              locale=${this.locale}
              .statusMap=${this.useCustomMap ? JSON.parse(this.customMap) : {}}
            ></status-tag>
          </div>
          <div class="controls">
            <label>
              Status:
              <select @change=${(e: Event) => this.status = (e.target as HTMLSelectElement).value}>
                <option value="loading">loading</option>
                <option value="running" selected>running</option>
                <option value="stop">stop</option>
                <option value="warning">warning</option>
                <option value="failed">failed</option>
                <option value="unknown">unknown</option>
              </select>
            </label>
            <label>
              Type:
              <select @change=${(e: Event) => this.type = (e.target as HTMLSelectElement).value}>
                <option value="" selected>Default</option>
                <option value="stroke">Stroke</option>
                <option value="filled">Filled</option>
              </select>
            </label>
            <label>
              Locale:
              <select @change=${(e: Event) => this.locale = (e.target as HTMLSelectElement).value}>
                <option value="zh-CN" selected>zh-CN</option>
                <option value="en-US">en-US</option>
              </select>
            </label>
          </div>
        </div>
      </section>
    `;
  }
}
