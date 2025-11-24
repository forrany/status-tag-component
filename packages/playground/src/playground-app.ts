/**
 * Playground 主应用组件
 * 使用 Lit Element 构建的交互式演示应用
 */

import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@blueking/status-tag';
import './components/demo-section';
import './components/interactive-controller';
import './components/api-docs';
import './components/framework-examples';

@customElement('playground-app')
export class PlaygroundApp extends LitElement {
  @state() private activeSection = 'demo';

  static styles = css`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #313238;
      background: #f5f7fa;
      line-height: 1.6;
      --primary-color: #3a84ff;
      --header-height: 64px;
      --sidebar-width: 260px;
    }

    /* Layout */
    .app-layout {
      display: grid;
      grid-template-columns: var(--sidebar-width) 1fr;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
      grid-template-areas: 
        "sidebar header"
        "sidebar main"
        "sidebar footer";
    }

    /* Header */
    .header {
      grid-area: header;
      background: white;
      height: var(--header-height);
      display: flex;
      align-items: center;
      padding: 0 40px;
      border-bottom: 1px solid #dcdee5;
      position: sticky;
      top: 0;
      z-index: 10;
      backdrop-filter: blur(8px);
      background: rgba(255, 255, 255, 0.9);
    }

    h1 {
      font-size: 20px;
      font-weight: 600;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 12px;
      color: #313238;
    }

    .header-actions {
      margin-left: auto;
      display: flex;
      gap: 16px;
    }

    .github-link {
      color: #63656e;
      text-decoration: none;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: color 0.2s;
    }

    .github-link:hover {
      color: var(--primary-color);
    }

    /* Sidebar */
    .sidebar {
      grid-area: sidebar;
      background: #182132;
      color: #979ba5;
      height: 100vh;
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      border-right: 1px solid #dcdee5;
      overflow-y: auto;
    }

    .logo-area {
      height: var(--header-height);
      display: flex;
      align-items: center;
      padding: 0 24px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      color: white;
      font-weight: bold;
      font-size: 18px;
    }

    .nav-menu {
      padding: 24px 0;
      list-style: none;
      margin: 0;
    }

    .nav-item {
      padding: 0 24px;
      margin-bottom: 4px;
    }

    .nav-link {
      display: block;
      padding: 10px 16px;
      color: #979ba5;
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.2s;
      cursor: pointer;
      font-size: 14px;
    }

    .nav-link:hover {
      color: white;
      background: rgba(255,255,255,0.1);
    }

    .nav-link.active {
      color: white;
      background: var(--primary-color);
    }

    /* Main Content */
    main {
      grid-area: main;
      padding: 24px 40px;
      width: 100%;
      box-sizing: border-box;
      margin: 0 auto;
    }

    .content-section {
      margin-bottom: 60px;
      scroll-margin-top: 80px;
    }

    /* Footer */
    footer {
      grid-area: footer;
      padding: 24px 40px;
      text-align: center;
      color: #979ba5;
      font-size: 14px;
      border-top: 1px solid #dcdee5;
      background: white;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .app-layout {
        grid-template-columns: 1fr;
        grid-template-areas: 
          "header"
          "main"
          "footer";
      }

      .sidebar {
        display: none; /* Simplify for mobile for now */
      }

      .header {
        padding: 0 20px;
      }

      main {
        padding: 20px;
      }
    }
  `;

  private _scrollToSection(id: string) {
    this.activeSection = id;
    const element = this.shadowRoot?.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render() {
    return html`
      <div class="app-layout">
        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="logo-area">
            🎨 Status Tag
          </div>
          <ul class="nav-menu">
            <li class="nav-item">
              <a class="nav-link ${this.activeSection === 'demo' ? 'active' : ''}" 
                 @click=${() => this._scrollToSection('demo')}>
                基础演示
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${this.activeSection === 'interactive' ? 'active' : ''}" 
                 @click=${() => this._scrollToSection('interactive')}>
                交互控制
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${this.activeSection === 'frameworks' ? 'active' : ''}" 
                 @click=${() => this._scrollToSection('frameworks')}>
                框架集成
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${this.activeSection === 'api' ? 'active' : ''}" 
                 @click=${() => this._scrollToSection('api')}>
                API 文档
              </a>
            </li>
          </ul>
        </aside>

        <!-- Header -->
        <header class="header">
          <h1>Status Tag Playground</h1>
          <div class="header-actions">
            <a href="../../README.md" class="github-link" target="_blank">文档</a>
            <a href="https://github.com/forrany/status-tag-component" class="github-link" target="_blank">
              GitHub
            </a>
          </div>
        </header>

        <!-- Main Content -->
        <main>
          <div id="demo" class="content-section">
            <demo-section></demo-section>
          </div>
          
          <div id="interactive" class="content-section">
            <interactive-controller></interactive-controller>
          </div>

          <div id="frameworks" class="content-section">
            <framework-examples></framework-examples>
          </div>

          <div id="api" class="content-section">
            <api-docs></api-docs>
          </div>
        </main>

        <!-- Footer -->
        <footer>
          <p>
            Made with ❤️ by Blueking Team | Based on Lit Element
          </p>
        </footer>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'playground-app': PlaygroundApp;
  }
}
