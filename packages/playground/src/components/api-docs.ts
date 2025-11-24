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
                <td><div class="desc">当前状态值。支持大小写不敏感匹配。</div></td>
                <td><code class="type-code">string</code></td>
                <td><span class="default">'unknown'</span></td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td><div class="desc">样式类型。支持 'stroke' | 'filled'。</div></td>
                <td><code class="type-code">string</code></td>
                <td><span class="default">''</span></td>
              </tr>
              <tr>
                <td><code>locale</code></td>
                <td><div class="desc">国际化语言代码。支持 'zh-CN' | 'en-US'。</div></td>
                <td><code class="type-code">string</code></td>
                <td><span class="default">'zh-CN'</span></td>
              </tr>
              <tr>
                <td><code>status-map</code></td>
                <td><div class="desc">自定义状态映射配置 JSON 字符串。</div></td>
                <td><code class="type-code">string | StatusMapConfig</code></td>
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
                <td><code>StatusMapConfig</code></td>
                <td>
                  <code>Record&lt;string, StatusConfig&gt;</code>
                </td>
                <td><div class="desc">状态映射配置对象，key 为状态值。</div></td>
              </tr>
              <tr>
                <td><code>StatusConfig</code></td>
                <td>
                  <pre style="margin: 0; background: transparent; padding: 0;">{
  text: string;
  theme: StatusTheme;
}</pre>
                </td>
                <td><div class="desc">单个状态的配置，包含显示文本和主题。</div></td>
              </tr>
              <tr>
                <td><code>StatusTheme</code></td>
                <td>
                  <code>'loading' | 'running' | 'stop' | 'warning' | 'unknown'</code>
                </td>
                <td><div class="desc">支持的主题类型。</div></td>
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
