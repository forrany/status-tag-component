/**
 * 演示区域组件
 * 展示 4 主题 × 3 类型 × border 的完整组合
 */

import { LitElement, html, css, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@blueking/status-tag';
import { sharedDemoCustomIconPartStyles } from './shared-demo-custom-icon-part-styles';

@customElement('demo-section')
export class DemoSection extends LitElement {
  static styles = [
    css`
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

    .demo-card {
      background: white;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
      margin-bottom: 24px;
    }

    h3 {
      font-size: 20px;
      font-weight: 500;
      margin: 0 0 16px 0;
      color: #63656e;
    }

    .demo-preview {
      padding: 24px;
      background: #f5f7fa;
      border-radius: 8px;
      margin-bottom: 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      align-items: center;
    }

    .demo-grid {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }

    .demo-row {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .demo-row-label {
      width: 80px;
      flex-shrink: 0;
      color: #979ba5;
      font-size: 12px;
      font-weight: 500;
    }

    .demo-row-tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      align-items: center;
    }

    .demo-code {
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
    }

    code {
      color: #abb2bf;
    }

    .i18n-comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 16px;
    }

    .i18n-column h4 {
      margin: 0 0 16px 0;
      padding-bottom: 8px;
      border-bottom: 2px solid #3a84ff;
      font-size: 16px;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .i18n-comparison {
        grid-template-columns: 1fr;
      }
    }

    .demo-hint {
      margin: 0 0 16px 0;
      font-size: 13px;
      color: #979ba5;
      line-height: 1.5;
    }

    .demo-hint code {
      padding: 2px 6px;
      background: #f0f1f5;
      border-radius: 4px;
      font-size: 12px;
      color: #63656e;
    }
  `,
    sharedDemoCustomIconPartStyles,
  ];

  /** 在首次渲染后为 tipRender 演示元素注入渲染函数（JS-only 属性，无法通过 HTML 属性传入） */
  firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);
    this._initTipRenderDemos();
  }

  private _initTipRenderDemos(): void {
    type TagEl = HTMLElement & { tipRender?: (() => string | HTMLElement) | null; tippyOptions?: Record<string, unknown> };

    const set = (id: string, fn: () => string | HTMLElement, opts?: Record<string, unknown>) => {
      const el = this.renderRoot.querySelector<TagEl>(`#${id}`);
      if (!el) return;
      if (opts) el.tippyOptions = opts;
      el.tipRender = fn;
    };

    // 返回 HTMLElement — 详细服务状态卡片
    set('tip-render-running', () => {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'padding: 2px 0; min-width: 180px;';
      wrap.innerHTML = `
        <div style="font-weight:600;margin-bottom:8px;">服务运行状态</div>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
          <span style="color:#85d996;font-size:10px;">●</span>
          <span>CPU：<strong>23%</strong></span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
          <span style="color:#85d996;font-size:10px;">●</span>
          <span>内存：<strong>512 MB / 2 GB</strong></span>
        </div>
        <div style="color:#979ba5;font-size:12px;margin-top:6px;border-top:1px solid rgba(255,255,255,0.15);padding-top:6px;">
          已持续运行 72 小时
        </div>`;
      return wrap;
    });

    // 返回 HTMLElement — 警告详情
    set('tip-render-warning', () => {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'padding: 2px 0; min-width: 160px;';
      wrap.innerHTML = `
        <div style="font-weight:600;color:#f59500;margin-bottom:6px;">⚠ CPU 告警</div>
        <div>使用率已达 <strong>87%</strong>，超出阈值</div>
        <div style="color:#979ba5;font-size:12px;margin-top:6px;">
          建议扩容 / 排查异常进程
        </div>`;
      return wrap;
    });

    // 返回 HTML 字符串（需要 allowHTML: true）
    set(
      'tip-render-html-string',
      () =>
        `<div style="padding:2px 0;min-width:160px;">
          <div style="font-weight:600;margin-bottom:6px;">未知状态</div>
          <div>最后上报时间：<code style="background:rgba(255,255,255,0.15);padding:1px 4px;border-radius:3px;">2026-03-23 14:32</code></div>
          <div style="color:#979ba5;font-size:12px;margin-top:6px;">请联系运维确认</div>
        </div>`,
      { allowHTML: true },
    );
  }

  render() {
    return html`
      <!-- 快速开始 -->
      <section class="section">
        <h2>🚀 快速开始</h2>
        <div class="demo-card">
          <h3>基础用法 — 五种主色主题</h3>
          <div class="demo-preview">
            <status-tag status="loading"></status-tag>
            <status-tag status="running"></status-tag>
            <status-tag status="unknown"></status-tag>
            <status-tag status="warning"></status-tag>
            <status-tag status="danger"></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag status="loading"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running"&gt;&lt;/status-tag&gt;
&lt;status-tag status="unknown"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning"&gt;&lt;/status-tag&gt;
&lt;status-tag status="danger"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 样式类型 -->
      <section class="section">
        <h2>🎭 样式类型</h2>
        <div class="demo-card">
          <h3>三种展现形态 × 五种主色</h3>
          <div class="demo-preview">
            <div class="demo-grid">
              <div class="demo-row">
                <span class="demo-row-label">Default</span>
                <div class="demo-row-tags">
                  <status-tag status="loading"></status-tag>
                  <status-tag status="running"></status-tag>
                  <status-tag status="unknown"></status-tag>
                  <status-tag status="warning"></status-tag>
                  <status-tag status="danger"></status-tag>
                </div>
              </div>
              <div class="demo-row">
                <span class="demo-row-label">Stroke</span>
                <div class="demo-row-tags">
                  <status-tag status="loading" type="stroke"></status-tag>
                  <status-tag status="running" type="stroke"></status-tag>
                  <status-tag status="unknown" type="stroke"></status-tag>
                  <status-tag status="warning" type="stroke"></status-tag>
                  <status-tag status="danger" type="stroke"></status-tag>
                </div>
              </div>
              <div class="demo-row">
                <span class="demo-row-label">Filled</span>
                <div class="demo-row-tags">
                  <status-tag status="loading" type="filled"></status-tag>
                  <status-tag status="running" type="filled"></status-tag>
                  <status-tag status="unknown" type="filled"></status-tag>
                  <status-tag status="warning" type="filled"></status-tag>
                  <status-tag status="danger" type="filled"></status-tag>
                </div>
              </div>
            </div>
          </div>
          <div class="demo-code">
            <pre><code>&lt;!-- Default (带背景框) --&gt;
&lt;status-tag status="running"&gt;&lt;/status-tag&gt;

&lt;!-- Stroke (描边圆点) --&gt;
&lt;status-tag status="running" type="stroke"&gt;&lt;/status-tag&gt;

&lt;!-- Filled (光晕实心圆点) --&gt;
&lt;status-tag status="running" type="filled"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- Border 控制 -->
      <section class="section">
        <h2>🔲 Border 控制</h2>
        <div class="demo-card">
          <h3>有边框 vs 无边框</h3>
          <div class="demo-preview">
            <div class="demo-grid">
              <div class="demo-row">
                <span class="demo-row-label">有边框</span>
                <div class="demo-row-tags">
                  <status-tag status="loading"></status-tag>
                  <status-tag status="running"></status-tag>
                  <status-tag status="unknown"></status-tag>
                  <status-tag status="warning"></status-tag>
                  <status-tag status="danger"></status-tag>
                </div>
              </div>
              <div class="demo-row">
                <span class="demo-row-label">无边框</span>
                <div class="demo-row-tags">
                  <status-tag status="loading" border="false"></status-tag>
                  <status-tag status="running" border="false"></status-tag>
                  <status-tag status="unknown" border="false"></status-tag>
                  <status-tag status="warning" border="false"></status-tag>
                  <status-tag status="danger" border="false"></status-tag>
                </div>
              </div>
            </div>
          </div>
          <div class="demo-code">
            <pre><code>&lt;!-- 有边框（默认） --&gt;
&lt;status-tag status="running"&gt;&lt;/status-tag&gt;

&lt;!-- 无边框 --&gt;
&lt;status-tag status="running" border="false"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 国际化 -->
      <section class="section">
        <h2>🌍 国际化（i18n）</h2>
        <div class="demo-card">
          <h3>中文 vs 英文</h3>
          <div class="i18n-comparison">
            <div class="i18n-column">
              <h4>中文（zh-CN）</h4>
              <div class="demo-preview">
                <status-tag status="loading" locale="zh-CN"></status-tag>
                <status-tag status="running" locale="zh-CN"></status-tag>
                <status-tag status="unknown" locale="zh-CN"></status-tag>
                <status-tag status="warning" locale="zh-CN"></status-tag>
                <status-tag status="danger" locale="zh-CN"></status-tag>
              </div>
            </div>
            <div class="i18n-column">
              <h4>英文（en-US）</h4>
              <div class="demo-preview">
                <status-tag status="loading" locale="en-US"></status-tag>
                <status-tag status="running" locale="en-US"></status-tag>
                <status-tag status="unknown" locale="en-US"></status-tag>
                <status-tag status="warning" locale="en-US"></status-tag>
                <status-tag status="danger" locale="en-US"></status-tag>
              </div>
            </div>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag status="running" locale="zh-CN"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running" locale="en-US"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 自定义状态映射 -->
      <section class="section">
        <h2>🎨 自定义状态映射</h2>
        <div class="demo-card">
          <h3>文字自定义 + 主题复用</h3>
          <div class="demo-preview">
            <status-tag
              status="pending"
              status-map='{"pending": {"text": "待审批", "theme": "warning"}}'
            ></status-tag>
            <status-tag
              status="approved"
              status-map='{"approved": {"text": "已批准", "theme": "running"}}'
            ></status-tag>
            <status-tag
              status="rejected"
              status-map='{"rejected": {"text": "已拒绝", "theme": "unknown"}}'
            ></status-tag>
            <status-tag
              status="deploying"
              status-map='{"deploying": {"text": "部署中", "theme": "loading"}}'
            ></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;!-- 自定义文字，复用 warning 主题（黄色） --&gt;
&lt;status-tag
  status="pending"
  status-map='{"pending": {"text": "待审批", "theme": "warning"}}'
&gt;&lt;/status-tag&gt;

&lt;!-- 自定义文字，复用 running 主题（绿色） --&gt;
&lt;status-tag
  status="approved"
  status-map='{"approved": {"text": "已批准", "theme": "running"}}'
&gt;&lt;/status-tag&gt;

&lt;!-- 自定义文字，复用 unknown 主题（灰色） --&gt;
&lt;status-tag
  status="rejected"
  status-map='{"rejected": {"text": "已拒绝", "theme": "unknown"}}'
&gt;&lt;/status-tag&gt;

&lt;!-- 自定义文字，复用 loading 主题（蓝色） --&gt;
&lt;status-tag
  status="deploying"
  status-map='{"deploying": {"text": "部署中", "theme": "loading"}}'
&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 自定义前置图标 -->
      <section class="section">
        <h2>🎯 自定义前置图标</h2>
        <div class="demo-card">
          <h3>
            仅用 <code>custom-icon</code>（演示：
            <a href="https://icons.getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap Icons</a>
            字体 + <code>::part</code>）
          </h3>
          <p class="demo-hint">
            组件只负责渲染 <code>&lt;i part="custom-icon" class="…"&gt;</code>。
            Shadow 内全局 <code>.bi</code> 无效；且 CSS 不允许
            <code>::part(custom-icon)</code> 后面再接类名，应把区分样式写在
            <strong>宿主</strong>上，例如
            <code>status-tag.my-scene::part(custom-icon)::before { … }</code>（本页用
            <code>demo-bs--check</code> / <code>demo-bs--warn</code> / <code>demo-bs--star</code>）。
            业务侧用自有 icon class / 字体时，在页面样式里写
            <code>status-tag.你的场景::part(custom-icon) { … }</code> 即可（勿写 <code>::part(x).内部class</code>）。
            <code>type</code> 可与 <code>custom-icon</code> 组合；<code>status-map.icon</code> 与根节点
            <code>custom-icon</code> 优先级不变。
          </p>
          <div class="demo-preview">
            <div class="demo-grid">
              <div class="demo-row">
                <span class="demo-row-label">Default</span>
                <div class="demo-row-tags">
                  <status-tag
                    class="demo-bs--check"
                    status="running"
                    custom-icon="demo-bs-i"
                  ></status-tag>
                  <status-tag
                    class="demo-bs--warn"
                    status="warning"
                    custom-icon="demo-bs-i"
                  ></status-tag>
                  <status-tag
                    class="demo-bs--check"
                    status="unknown"
                    custom-icon="demo-bs-i"
                  ></status-tag>
                </div>
              </div>
              <div class="demo-row">
                <span class="demo-row-label">Stroke</span>
                <div class="demo-row-tags">
                  <status-tag
                    class="demo-bs--check"
                    type="stroke"
                    status="running"
                    custom-icon="demo-bs-i"
                  ></status-tag>
                  <status-tag
                    class="demo-bs--warn"
                    type="stroke"
                    status="warning"
                    custom-icon="demo-bs-i"
                  ></status-tag>
                  <status-tag
                    class="demo-bs--warn"
                    type="stroke"
                    status="danger"
                    custom-icon="demo-bs-i"
                  ></status-tag>
                </div>
              </div>
              <div class="demo-row">
                <span class="demo-row-label">Filled</span>
                <div class="demo-row-tags">
                  <status-tag
                    class="demo-bs--check"
                    type="filled"
                    status="running"
                    custom-icon="demo-bs-i"
                  ></status-tag>
                  <status-tag
                    class="demo-bs--warn"
                    type="filled"
                    status="warning"
                    custom-icon="demo-bs-i"
                  ></status-tag>
                  <status-tag
                    class="demo-bs--check"
                    type="filled"
                    status="unknown"
                    custom-icon="demo-bs-i"
                  ></status-tag>
                </div>
              </div>
              <div class="demo-row">
                <span class="demo-row-label">map</span>
                <div class="demo-row-tags">
                  <status-tag
                    class="demo-bs--star"
                    status="vip"
                    status-map='{"vip": {"text": "重点", "theme": "danger", "icon": "demo-bs-i"}}'
                  ></status-tag>
                  <status-tag
                    class="demo-bs--star"
                    type="stroke"
                    status="vip"
                    status-map='{"vip": {"text": "重点", "theme": "danger", "icon": "demo-bs-i"}}'
                  ></status-tag>
                </div>
              </div>
            </div>
          </div>
          <div class="demo-code">
            <pre><code>&lt;!-- =上方预览一致：custom-icon 为内部 &lt;i&gt; 的 class；宿主 class 供业务侧用 ::part 绑定 icon 字形 --&gt;
&lt;status-tag class="demo-bs--check" status="running" custom-icon="demo-bs-i"&gt;&lt;/status-tag&gt;
&lt;status-tag class="demo-bs--warn" status="warning" custom-icon="demo-bs-i"&gt;&lt;/status-tag&gt;
&lt;status-tag class="demo-bs--check" status="unknown" custom-icon="demo-bs-i"&gt;&lt;/status-tag&gt;

&lt;status-tag class="demo-bs--check" type="stroke" status="running" custom-icon="demo-bs-i"&gt;&lt;/status-tag&gt;
&lt;status-tag class="demo-bs--warn" type="stroke" status="warning" custom-icon="demo-bs-i"&gt;&lt;/status-tag&gt;
&lt;status-tag class="demo-bs--warn" type="stroke" status="danger" custom-icon="demo-bs-i"&gt;&lt;/status-tag&gt;

&lt;status-tag class="demo-bs--check" type="filled" status="running" custom-icon="demo-bs-i"&gt;&lt;/status-tag&gt;
&lt;status-tag class="demo-bs--warn" type="filled" status="warning" custom-icon="demo-bs-i"&gt;&lt;/status-tag&gt;
&lt;status-tag class="demo-bs--check" type="filled" status="unknown" custom-icon="demo-bs-i"&gt;&lt;/status-tag&gt;

&lt;status-tag
  class="demo-bs--star"
  status="vip"
  status-map='{"vip": {"text": "重点", "theme": "danger", "icon": "demo-bs-i"}}'
&gt;&lt;/status-tag&gt;
&lt;status-tag
  class="demo-bs--star"
  type="stroke"
  status="vip"
  status-map='{"vip": {"text": "重点", "theme": "danger", "icon": "demo-bs-i"}}'
&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- Tooltip 提示 -->
      <section class="section">
        <h2>💬 Tooltip 提示</h2>

        <!-- 字符串 tip -->
        <div class="demo-card">
          <h3>字符串 <code>tip</code>（可通过 HTML 属性直接传入）</h3>
          <div class="demo-preview">
            <status-tag status="running" tip="服务运行正常，已持续运行 72 小时"></status-tag>
            <status-tag status="warning" tip="CPU 使用率超过 80%，请关注"></status-tag>
            <status-tag status="unknown" tip="服务已于 2026-03-23 停止"></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag status="running" tip="服务运行正常，已持续运行 72 小时"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning" tip="CPU 使用率超过 80%，请关注"&gt;&lt;/status-tag&gt;
&lt;status-tag status="unknown" tip="服务已于 2026-03-23 停止"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>

        <!-- tipRender：渲染函数（仅 JS 赋值） -->
        <div class="demo-card">
          <h3><code>tipRender</code> — 渲染函数（支持富文本 / DOM）</h3>
          <p class="demo-hint">
            当 tooltip 内容比较复杂时，可通过 <code>tipRender</code> 属性传入一个函数，
            函数返回 <code>HTMLElement</code> 或 HTML 字符串（字符串需在 <code>tippyOptions</code> 中开启 <code>allowHTML: true</code>）。
            <strong>tipRender 优先级高于 tip。</strong>
            该属性为纯 JS 属性，不支持 HTML 属性传入，适合在 Vue / React 中通过 ref 赋值，或原生 JS 直接操作。
          </p>
          <div class="demo-preview">
            <status-tag id="tip-render-running" status="running"></status-tag>
            <status-tag id="tip-render-warning" status="warning"></status-tag>
            <status-tag id="tip-render-html-string" status="unknown"></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>// ① 返回 HTMLElement（推荐，无 XSS 风险）
const el = document.querySelector('status-tag');
el.tipRender = () => {
  const div = document.createElement('div');
  div.innerHTML = \`
    &lt;div style="font-weight:600;margin-bottom:8px;"&gt;服务运行状态&lt;/div&gt;
    &lt;div&gt;CPU：&lt;strong&gt;23%&lt;/strong&gt;&lt;/div&gt;
    &lt;div&gt;内存：&lt;strong&gt;512 MB / 2 GB&lt;/strong&gt;&lt;/div&gt;
  \`;
  return div;
};

// ② 返回 HTML 字符串（需配合 allowHTML: true）
el.tippyOptions = { allowHTML: true };
el.tipRender = () => \`&lt;strong&gt;富文本内容&lt;/strong&gt;&lt;br&gt;详细描述\`;</code></pre>
          </div>
        </div>
      </section>

      <!-- 大小写不敏感 -->
      <section class="section">
        <h2>🔤 大小写不敏感</h2>
        <div class="demo-card">
          <h3>状态值支持多种格式</h3>
          <div class="demo-preview">
            <status-tag status="RUNNING"></status-tag>
            <status-tag status="Running"></status-tag>
            <status-tag status="running"></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag status="RUNNING"&gt;&lt;/status-tag&gt;
&lt;status-tag status="Running"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-section': DemoSection;
  }
}
