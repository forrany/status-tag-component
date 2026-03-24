import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('api-docs')
export class ApiDocs extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding-bottom: 60px;
    }

    h2 {
      font-size: 28px;
      font-weight: 600;
      margin: 40px 0 24px 0;
      color: #313238;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid #dcdee5;
      padding-bottom: 16px;
    }

    h3 {
      font-size: 20px;
      font-weight: 500;
      margin: 32px 0 16px 0;
      color: #313238;
    }

    .table-container {
      overflow-x: auto;
      border-radius: 8px;
      border: 1px solid #dcdee5;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      font-size: 14px;
    }

    th, td {
      padding: 16px;
      text-align: left;
      border-bottom: 1px solid #f0f1f5;
    }

    th {
      background: #fafbfd;
      color: #63656e;
      font-weight: 600;
      white-space: nowrap;
    }

    tr:last-child td {
      border-bottom: none;
    }

    code {
      font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
      background: #f0f1f5;
      padding: 2px 6px;
      border-radius: 4px;
      color: #c41d7f;
      font-size: 13px;
    }

    .type-code {
      color: #096dd9;
    }

    .desc {
      line-height: 1.6;
      color: #63656e;
    }

    .default {
      color: #63656e;
      font-family: monospace;
    }
  `;

  render() {
    return html`
      <section id="api-docs">
        <h2>📖 API 文档</h2>
        
        <h3>属性 (Attributes / Properties)</h3>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>属性名</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>status</code></td>
                <td><div class="desc">当前状态值。支持大小写不敏感匹配，未匹配时回退到 unknown。</div></td>
                <td><code class="type-code">string</code></td>
                <td><span class="default">'unknown'</span></td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td><div class="desc">展现形态。<code>''</code> 默认带背景框；<code>'stroke'</code> 描边圆点；<code>'filled'</code> 光晕实心圆点。</div></td>
                <td><code class="type-code">'' | 'stroke' | 'filled'</code></td>
                <td><span class="default">''</span></td>
              </tr>
              <tr>
                <td><code>border</code></td>
                <td><div class="desc">是否显示标签外框边框。设为 <code>false</code> 时隐藏边框。</div></td>
                <td><code class="type-code">boolean</code></td>
                <td><span class="default">true</span></td>
              </tr>
              <tr>
                <td><code>locale</code></td>
                <td><div class="desc">国际化语言。未设置时自动从 <code>blueking_language</code> cookie 读取。</div></td>
                <td><code class="type-code">'zh-CN' | 'en-US'</code></td>
                <td><span class="default">'zh-CN'</span></td>
              </tr>
              <tr>
                <td><code>status-map</code></td>
                <td><div class="desc">自定义状态映射。将业务状态映射到四种主色主题，支持自定义文字。</div></td>
                <td><code class="type-code">string | StatusMapConfig</code></td>
                <td><span class="default">{}</span></td>
              </tr>
              <tr>
                <td><code>tip</code></td>
                <td><div class="desc">Tooltip 提示文本。hover 时展示，优先使用 tippy.js，不可用时降级为原生 title。</div></td>
                <td><code class="type-code">string</code></td>
                <td><span class="default">''</span></td>
              </tr>
              <tr>
                <td><code>tippy-options</code></td>
                <td><div class="desc">tippy.js 配置选项的 JSON 字符串，透传给 tippy 实例。</div></td>
                <td><code class="type-code">string | object</code></td>
                <td><span class="default">{}</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>类型定义 (Types)</h3>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>类型名称</th>
                <th>定义</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>StatusTheme</code></td>
                <td>
                  <code>'loading' | 'running' | 'unknown' | 'warning'</code>
                </td>
                <td><div class="desc">四种主色主题：蓝（loading）、绿（running）、灰（unknown）、黄（warning）。</div></td>
              </tr>
              <tr>
                <td><code>StatusConfig</code></td>
                <td>
                  <pre style="margin: 0; background: transparent; padding: 0;">{ text: string; theme: StatusTheme; }</pre>
                </td>
                <td><div class="desc">单个状态配置，text 为显示文本（支持 i18n 键），theme 决定视觉主色。</div></td>
              </tr>
              <tr>
                <td><code>StatusMapConfig</code></td>
                <td>
                  <code>Record&lt;string, StatusConfig&gt;</code>
                </td>
                <td><div class="desc">状态映射表。key 为业务状态值，value 为对应的 StatusConfig。</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'api-docs': ApiDocs;
  }
}
