/**
 * 演示区域组件
 * 展示 4 主题 × 3 类型 × border 的完整组合
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@blueking/status-tag';

@customElement('demo-section')
export class DemoSection extends LitElement {
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
  `;

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

      <!-- Tooltip 提示 -->
      <section class="section">
        <h2>💬 Tooltip 提示</h2>
        <div class="demo-card">
          <h3>hover 查看效果</h3>
          <div class="demo-preview">
            <status-tag status="running" tip="服务运行正常，已持续运行 72 小时"></status-tag>
            <status-tag status="warning" tip="CPU 使用率超过 80%，请关注"></status-tag>
            <status-tag status="unknown" tip="服务已于 2026-03-23 停止"></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag status="running" tip="服务运行正常"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning" tip="CPU 使用率超过 80%"&gt;&lt;/status-tag&gt;</code></pre>
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
