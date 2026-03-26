/**
 * Playground 内 custom-icon 演示：与 index.html 引入的 Bootstrap Icons 字体配套。
 * 不能写 ::part(custom-icon).foo；字形通过宿主 class 区分。
 */
import { css } from 'lit';

export const sharedDemoCustomIconPartStyles = css`
  status-tag.demo-bs--check::part(custom-icon),
  status-tag.demo-bs--warn::part(custom-icon),
  status-tag.demo-bs--star::part(custom-icon) {
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    line-height: 1;
    display: inline-block;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  status-tag.demo-bs--check::part(custom-icon)::before {
    font-family: 'bootstrap-icons' !important;
    content: '\\f26b';
    display: inline-block;
  }

  status-tag.demo-bs--warn::part(custom-icon)::before {
    font-family: 'bootstrap-icons' !important;
    content: '\\f33b';
    display: inline-block;
  }

  status-tag.demo-bs--star::part(custom-icon)::before {
    font-family: 'bootstrap-icons' !important;
    content: '\\f586';
    display: inline-block;
  }
`;
