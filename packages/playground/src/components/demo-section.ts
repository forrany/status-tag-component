/**
 * 演示区域组件
 * 展示组件的基础用法和各种场景
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
          <h3>基础用法</h3>
          <div class="demo-preview">
            <status-tag status="loading"></status-tag>
            <status-tag status="running"></status-tag>
            <status-tag status="stop"></status-tag>
            <status-tag status="warning"></status-tag>
            <status-tag status="danger"></status-tag>
            <status-tag status="failed"></status-tag>
            <status-tag status="unknown"></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag status="loading"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running"&gt;&lt;/status-tag&gt;
&lt;status-tag status="stop"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning"&gt;&lt;/status-tag&gt;
&lt;status-tag status="danger"&gt;&lt;/status-tag&gt;
&lt;status-tag status="failed"&gt;&lt;/status-tag&gt;
&lt;status-tag status="unknown"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 样式类型 -->
      <section class="section">
        <h2>🎭 样式类型</h2>
        <div class="demo-card">
          <h3>多种展现形态</h3>
          <div class="demo-preview">
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="display: flex; align-items: center; gap: 16px;">
                <span style="width: 60px; color: #999; font-size: 12px;">Default</span>
                <div style="display: flex; gap: 8px;">
                  <status-tag status="loading"></status-tag>
                  <status-tag status="running"></status-tag>
                  <status-tag status="stop"></status-tag>
                  <status-tag status="warning"></status-tag>
                  <status-tag status="danger"></status-tag>
                  <status-tag status="failed"></status-tag>
                  <status-tag status="unknown"></status-tag>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 16px;">
                <span style="width: 60px; color: #999; font-size: 12px;">Stroke</span>
                <div style="display: flex; gap: 8px;">
                  <status-tag status="loading" type="stroke"></status-tag>
                  <status-tag status="running" type="stroke"></status-tag>
                  <status-tag status="stop" type="stroke"></status-tag>
                  <status-tag status="warning" type="stroke"></status-tag>
                  <status-tag status="danger" type="stroke"></status-tag>
                  <status-tag status="failed" type="stroke"></status-tag>
                  <status-tag status="unknown" type="stroke"></status-tag>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 16px;">
                <span style="width: 60px; color: #999; font-size: 12px;">Filled</span>
                <div style="display: flex; gap: 8px;">
                  <status-tag status="loading" type="filled"></status-tag>
                  <status-tag status="stop" type="filled"></status-tag>
                  <status-tag status="warning" type="filled"></status-tag>
                  <status-tag status="danger" type="filled"></status-tag>
                  <status-tag status="failed" type="filled"></status-tag>
                  <status-tag status="unknown" type="filled"></status-tag>
                </div>
              </div>
            </div>
          </div>
          <div class="demo-code">
            <pre><code>&lt;!-- Default (带背景框) --&gt;
&lt;status-tag status="loading"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running"&gt;&lt;/status-tag&gt;
&lt;status-tag status="stop"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning"&gt;&lt;/status-tag&gt;
&lt;status-tag status="failed"&gt;&lt;/status-tag&gt;
&lt;status-tag status="unknown"&gt;&lt;/status-tag&gt;

&lt;!-- Stroke (8px 描边) --&gt;
&lt;status-tag status="loading" type="stroke"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running" type="stroke"&gt;&lt;/status-tag&gt;
&lt;status-tag status="stop" type="stroke"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning" type="stroke"&gt;&lt;/status-tag&gt;
&lt;status-tag status="failed" type="stroke"&gt;&lt;/status-tag&gt;
&lt;status-tag status="unknown" type="stroke"&gt;&lt;/status-tag&gt;

&lt;!-- Filled (13px 光晕 + 7px 实心) --&gt;
&lt;status-tag status="loading" type="filled"&gt;&lt;/status-tag&gt;
&lt;status-tag status="running" type="filled"&gt;&lt;/status-tag&gt;
&lt;status-tag status="stop" type="filled"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning" type="filled"&gt;&lt;/status-tag&gt;
&lt;status-tag status="failed" type="filled"&gt;&lt;/status-tag&gt;
&lt;status-tag status="unknown" type="filled"&gt;&lt;/status-tag&gt;</code></pre>
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
                <status-tag status="stop" locale="zh-CN"></status-tag>
                <status-tag status="warning" locale="zh-CN"></status-tag>
                <status-tag status="danger" locale="zh-CN"></status-tag>
                <status-tag status="failed" locale="zh-CN"></status-tag>
                <status-tag status="unknown" locale="zh-CN"></status-tag>
              </div>
            </div>
            <div class="i18n-column">
              <h4>英文（en-US）</h4>
              <div class="demo-preview">
                <status-tag status="loading" locale="en-US"></status-tag>
                <status-tag status="running" locale="en-US"></status-tag>
                <status-tag status="stop" locale="en-US"></status-tag>
                <status-tag status="warning" locale="en-US"></status-tag>
                <status-tag status="danger" locale="en-US"></status-tag>
                <status-tag status="failed" locale="en-US"></status-tag>
                <status-tag status="unknown" locale="en-US"></status-tag>
              </div>
            </div>
          </div>
          <div class="demo-code">
            <pre><code>&lt;!-- 中文 --&gt;
&lt;status-tag status="running" locale="zh-CN"&gt;&lt;/status-tag&gt;

&lt;!-- 英文 --&gt;
&lt;status-tag status="running" locale="en-US"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 自定义状态 -->
      <section class="section">
        <h2>🎨 自定义状态映射</h2>
        <div class="demo-card">
          <h3>自定义业务状态</h3>
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
              status-map='{"rejected": {"text": "已拒绝", "theme": "stop"}}'
            ></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag
  status="pending"
  status-map='{"pending": {"text": "待审批", "theme": "warning"}}'
&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- Tooltip 提示 -->
      <section class="section">
        <h2>💬 Tooltip 提示</h2>
        <div class="demo-card">
          <h3>基础提示（hover 查看效果）</h3>
          <div class="demo-preview">
            <status-tag status="running" tip="服务运行正常，已持续运行 72 小时"></status-tag>
            <status-tag status="danger" tip="检测到异常，错误码: E5001"></status-tag>
            <status-tag status="warning" tip="CPU 使用率超过 80%，请关注"></status-tag>
            <status-tag status="stop" tip="服务已于 2026-03-23 停止"></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;status-tag status="running" tip="服务运行正常，已持续运行 72 小时"&gt;&lt;/status-tag&gt;
&lt;status-tag status="danger" tip="检测到异常，错误码: E5001"&gt;&lt;/status-tag&gt;
&lt;status-tag status="warning" tip="CPU 使用率超过 80%，请关注"&gt;&lt;/status-tag&gt;
&lt;status-tag status="stop" tip="服务已于 2026-03-23 停止"&gt;&lt;/status-tag&gt;</code></pre>
          </div>
        </div>
        <div class="demo-card">
          <h3>自定义 Tippy 配置</h3>
          <div class="demo-preview">
            <status-tag
              status="running"
              tip="展示在下方"
              tippy-options='{"placement": "bottom"}'
            ></status-tag>
            <status-tag
              status="danger"
              tip="展示在右侧"
              tippy-options='{"placement": "right"}'
            ></status-tag>
            <status-tag
              status="warning"
              tip="带箭头 + 延迟显示"
              tippy-options='{"arrow": true, "delay": [300, 0]}'
            ></status-tag>
          </div>
          <div class="demo-code">
            <pre><code>&lt;!-- 底部展示 --&gt;
&lt;status-tag
  status="running"
  tip="展示在下方"
  tippy-options='{"placement": "bottom"}'
&gt;&lt;/status-tag&gt;

&lt;!-- 右侧展示 --&gt;
&lt;status-tag
  status="danger"
  tip="展示在右侧"
  tippy-options='{"placement": "right"}'
&gt;&lt;/status-tag&gt;

&lt;!-- 带箭头 + 延迟 --&gt;
&lt;status-tag
  status="warning"
  tip="带箭头 + 延迟显示"
  tippy-options='{"arrow": true, "delay": [300, 0]}'
&gt;&lt;/status-tag&gt;</code></pre>
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
            <status-tag status="Stop"></status-tag>
            <status-tag status="STOP"></status-tag>
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
