import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

type Framework = 'vue3' | 'vue2' | 'react';

@customElement('framework-examples')
export class FrameworkExamples extends LitElement {
  @state() private activeTab: Framework = 'vue3';

  static styles = css`
    :host {
      display: block;
    }

    .section {
      margin-bottom: 32px;
    }

    h2 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 24px;
      color: #313238;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .framework-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .tabs {
      display: flex;
      border-bottom: 1px solid #dcdee5;
      background: #fafbfd;
    }

    .tab {
      padding: 16px 24px;
      cursor: pointer;
      font-size: 14px;
      color: #63656e;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;
      font-weight: 500;
    }

    .tab:hover {
      color: #3a84ff;
    }

    .tab.active {
      color: #3a84ff;
      border-bottom-color: #3a84ff;
      background: white;
    }

    .content {
      padding: 0;
    }

    .code-block {
      margin: 0;
      padding: 24px;
      background: #282c34;
      overflow-x: auto;
      font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
      font-size: 14px;
      line-height: 1.5;
      color: #abb2bf;
    }

    .token.tag { color: #e06c75; }
    .token.attr-name { color: #d19a66; }
    .token.attr-value { color: #98c379; }
    .token.comment { color: #5c6370; font-style: italic; }
    .token.keyword { color: #c678dd; }
    .token.string { color: #98c379; }
    .token.function { color: #61afef; }
  `;

  private _renderVue3Code() {
    return html`
<pre class="code-block">
<span class="token comment">&lt;!-- main.ts --&gt;</span>
<span class="token keyword">import</span> <span class="token string">'@blueking/status-tag'</span><span class="token punctuation">;</span>

<span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag">&lt;template&gt;</span>
  <span class="token tag">&lt;status-tag</span>
    <span class="token attr-name">status</span><span class="token attr-value">="running"</span>
    <span class="token attr-name">type</span><span class="token attr-value">="filled"</span>
    <span class="token attr-name">locale</span><span class="token attr-value">="zh-CN"</span>
  <span class="token tag">&gt;&lt;/status-tag&gt;</span>
<span class="token tag">&lt;/template&gt;</span>
</pre>`;
  }

  private _renderVue2Code() {
    return html`
<pre class="code-block">
<span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token string">'@blueking/status-tag'</span><span class="token punctuation">;</span>

<span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag">&lt;template&gt;</span>
  <span class="token tag">&lt;div&gt;</span>
    <span class="token comment">&lt;!-- Vue 2 中 Web Component 属性绑定 --&gt;</span>
    <span class="token tag">&lt;status-tag</span>
      <span class="token attr-name">status</span><span class="token attr-value">="running"</span>
      <span class="token attr-name">type</span><span class="token attr-value">="filled"</span>
      <span class="token attr-name">:status-map</span><span class="token attr-value">="JSON.stringify(customMap)"</span>
    <span class="token tag">&gt;&lt;/status-tag&gt;</span>
  <span class="token tag">&lt;/div&gt;</span>
<span class="token tag">&lt;/template&gt;</span>

<span class="token tag">&lt;script&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">()</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      customMap<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token punctuation">...</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token tag">&lt;/script&gt;</span>
</pre>`;
  }

  private _renderReactCode() {
    return html`
<pre class="code-block">
<span class="token comment">// App.tsx</span>
<span class="token keyword">import</span> <span class="token string">'@blueking/status-tag'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">()</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag">&lt;div&gt;</span>
      <span class="token comment">{/* React 中使用 Web Component */}</span>
      <span class="token tag">&lt;status-tag</span>
        <span class="token attr-name">status</span><span class="token attr-value">="running"</span>
        <span class="token attr-name">type</span><span class="token attr-value">="filled"</span>
        <span class="token attr-name">locale</span><span class="token attr-value">="en-US"</span>
      <span class="token tag">&gt;&lt;/status-tag&gt;</span>
    <span class="token tag">&lt;/div&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</pre>`;
  }

  render() {
    return html`
      <section class="section">
        <h2>🔧 框架集成</h2>
        <div class="framework-card">
          <div class="tabs">
            <div 
              class=${classMap({ tab: true, active: this.activeTab === 'vue3' })}
              @click=${() => this.activeTab = 'vue3'}
            >
              Vue 3
            </div>
            <div 
              class=${classMap({ tab: true, active: this.activeTab === 'vue2' })}
              @click=${() => this.activeTab = 'vue2'}
            >
              Vue 2
            </div>
            <div 
              class=${classMap({ tab: true, active: this.activeTab === 'react' })}
              @click=${() => this.activeTab = 'react'}
            >
              React
            </div>
          </div>
          <div class="content">
            ${this.activeTab === 'vue3' ? this._renderVue3Code() : ''}
            ${this.activeTab === 'vue2' ? this._renderVue2Code() : ''}
            ${this.activeTab === 'react' ? this._renderReactCode() : ''}
          </div>
        </div>
      </section>
    `;
  }
}
