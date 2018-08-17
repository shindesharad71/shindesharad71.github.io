<style>

.lh-vars {
  --text-font-family: Roboto, Helvetica, Arial, sans-serif;
  --monospace-font-family: 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace;
  --body-background-color: #fff;
  --body-font-size: 14px;
  --body-line-height: 18px;
  --subheader-font-size: 14px;
  --subheader-line-height: 20px;
  --subheader-color: hsl(206, 6%, 25%);
  --header-bg-color: #f1f3f4;
  --header-font-size: 20px;
  --header-line-height: 24px;
  --title-font-size: 24px;
  --title-line-height: 28px;
  --caption-font-size: 12px;
  --caption-line-height: 16px;
  --default-padding: 12px;
  --section-padding: 16px;
  --section-indent: 16px;
  --audit-group-indent: 16px;
  --audit-item-gap: 5px;
  --audit-indent: 16px;
  --text-indent: 8px;
  --expandable-indent: 20px;
  --secondary-text-color: #565656;
  /*--accent-color: #3879d9;*/
  --fail-color: hsl(1, 73%, 45%);
  --average-color: hsl(31, 100%, 45%); /* md orange 800 */
  --pass-color: hsl(139, 70%, 30%);
  --informative-color: #0c50c7;
  --medium-75-gray: #757575;
  --medium-50-gray: hsl(210, 17%, 98%);
  --medium-100-gray: hsl(200, 12%, 95%);
  --warning-color: #ffab00; /* md amber a700 */
  --report-border-color: #ccc;
  --report-secondary-border-color: #ebebeb;
  --metric-timeline-rule-color: #b3b3b3;
  --display-value-gray: hsl(216, 5%, 39%);
  --report-width: calc(60 * var(--body-font-size));
  --report-content-width: calc(var(--report-width));
  --report-header-height: 161px;
  --report-header-color: #202124;
  --navitem-font-size: var(--body-font-size);
  --navitem-line-height: var(--body-line-height);
  --navitem-hpadding: var(--body-font-size);
  --navitem-vpadding: calc(var(--navitem-line-height) / 2);
  --lh-score-highlight-bg: hsla(0, 0%, 90%, 0.2);
  --lh-score-icon-background-size: 24px;
  --lh-score-margin: 12px;
  --lh-table-header-bg: #f8f9fa;
  --lh-table-higlight-bg: hsla(0, 0%, 75%, 0.1);
  --lh-sparkline-height: 5px;
  --lh-sparkline-thin-height: 3px;
  --lh-filmstrip-thumbnail-width: 60px;
  --lh-score-icon-width: calc(var(--body-font-size) / 14 * 16);
  --lh-category-score-width: calc(5 * var(--body-font-size));
  --lh-audit-vpadding: 8px;
  --lh-audit-index-width: 18px;
  --lh-audit-hgap: 12px;
  --lh-audit-group-vpadding: 8px;
  --lh-section-vpadding: 12px;
  --chevron-size: 12px;

  /* Voodoo magic here to get narrow columns. 0 doesn't size the column like our friend 1px does */
  --bytes-col-width: 1px;

  --pass-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>check</title><path fill="hsl(139, 70%, 30%)" d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"/></svg>');
  --average-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>info</title><path fill="hsl(31, 100%, 45%)" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z"/></svg>');
  --fail-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>warn</title><path fill="hsl(1, 73%, 45%)" d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z"/></svg>');

  --av-timer-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M0 0h48v48H0z" fill="none"/><path d="M22 34c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm0-28v8h4v-3.84c6.78.97 12 6.79 12 13.84 0 7.73-6.27 14-14 14s-14-6.27-14-14c0-3.36 1.18-6.43 3.15-8.85L24 26l2.83-2.83-13.6-13.6-.02.04C8.84 12.89 6 18.11 6 24c0 9.94 8.04 18 17.99 18S42 33.94 42 24 33.94 6 23.99 6H22zm14 18c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-24 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" fill="hsl(216, 5%, 39%)"/></svg>');
  --photo-filter-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="none" d="M0 0h48v48H0V0z"/><path d="M38.04 20v18H10V10h18V6H10.04c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V20h-4zM34 20l1.88-4.12L40 14l-4.12-1.88L34 8l-1.88 4.12L28 14l4.12 1.88zm-7.5 1.5L24 16l-2.5 5.5L16 24l5.5 2.5L24 32l2.5-5.5L32 24z" fill="hsl(216, 5%, 39%)"/></svg>');
  --visibility-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M0 0h48v48H0z" fill="none"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="hsl(216, 5%, 39%)"/></svg>');
  --check-circle-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M0 0h48v48H0z" fill="none"/><path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" fill="hsl(216, 5%, 39%)"/></svg>');
  --check-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M0 0h48v48H0z" fill="none"/><path d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z"/></svg>');
  --search-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M31 28h-1.59l-.55-.55C30.82 25.18 32 22.23 32 19c0-7.18-5.82-13-13-13S6 11.82 6 19s5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55V31l10 9.98L40.98 38 31 28zm-12 0a9 9 0 1 1 .001-18.001A9 9 0 0 1 19 28z" fill="hsl(216, 5%, 39%)"/><path d="M0 0h48v48H0z" fill="none" /></svg>');
  --remove-circle-icon-url: url('data:image/svg+xml;utf8,<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="hsl(216, 5%, 39%)"/></svg>');
}

.lh-vars.lh-devtools {
  --text-font-family: '.SFNSDisplay-Regular', 'Helvetica Neue', 'Lucida Grande', sans-serif;
  --monospace-font-family: 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace;
  --body-font-size: 12px;
  --body-line-height: 16px;
  --subheader-font-size: 14px;
  --subheader-line-height: 18px;
  --header-font-size: 16px;
  --header-line-height: 20px;
  --title-font-size: 20px;
  --title-line-height: 24px;
  --caption-font-size: 11px;
  --caption-line-height: 14px;
  --default-padding: 12px;
  --section-padding: 12px;
  --section-indent: 8px;
  --audit-group-indent: 16px;
  --audit-indent: 16px;
  --expandable-indent: 16px;

  --lh-audit-vpadding: 4px;
  --lh-audit-hgap: 12px;
  --lh-audit-group-vpadding: 12px;
  --lh-section-vpadding: 8px;
}

@keyframes fadeIn {
  0% { opacity: 0;}
  100% { opacity: 0.6;}
}

.lh-root * {
  box-sizing: border-box;
}

.lh-root {
  font-family: var(--text-font-family);
  font-size: var(--body-font-size);
  margin: 0;
  line-height: var(--body-line-height);
  background: var(--body-background-color);
  scroll-behavior: smooth;
}

.lh-root :focus {
    outline: -webkit-focus-ring-color auto 3px;
}
.lh-root summary:focus {
    outline: 1px solid hsl(217, 89%, 61%);
}


.lh-root [hidden] {
  display: none !important;
}

.lh-audit-group a,
.lh-category-header__description a {
  color: #0c50c7;
}


.lh-audit__description,
.lh-load-opportunity__description,
.lh-details {
  --inner-audit-left-padding: calc(var(--text-indent) + var(--lh-audit-index-width) + 2 * var(--audit-item-gap));
  --inner-audit-right-padding: calc(var(--text-indent) + 2px);
  margin-left: var(--inner-audit-left-padding);
  margin-right: var(--inner-audit-right-padding);
}

.lh-details {
  font-size: var(--body-font-size);
  margin-top: var(--default-padding);
  margin-bottom: var(--default-padding);
  /* whatever the .lh-details side margins are */
  width: calc(100% - var(--inner-audit-left-padding) - var(--inner-audit-right-padding));
}

.lh-details.flex .lh-code {
  max-width: 70%;
}

/* Report header */

.report-icon {
  opacity: 0.7;
}
.report-icon:hover {
  opacity: 1;
}
.report-icon[disabled] {
  opacity: 0.3;
  pointer-events: none;
}

.report-icon--share {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>');
}
.report-icon--print {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><path fill="none" d="M0 0h24v24H0z"/></svg>');
}
.report-icon--copy {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>');
}
.report-icon--open {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>');
}
.report-icon--download {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
}

/* Node */
.lh-node {
  display: block;
  font-family: var(--monospace-font-family);
  word-break: break-word;
  color: hsl(174, 100%, 27%);
}
.lh-node:hover {
    background: hsl(0, 0%, 98%);
    border-radius: 2px;
}

/* Score */

.lh-audit__score-icon {
  margin-left: var(--lh-score-margin);
  width: var(--lh-score-icon-width);
  height: var(--lh-score-icon-width);
  background: none no-repeat center center / contain;
}

.lh-audit--pass .lh-audit__display-text {
  color: var(--pass-color);
}
.lh-audit--pass .lh-audit__score-icon {
  background-image: var(--pass-icon-url);
}

.lh-audit--average .lh-audit__display-text {
  color: var(--average-color);
}
.lh-audit--average .lh-audit__score-icon {
  background-image: var(--average-icon-url);
}

.lh-audit--fail .lh-audit__display-text {
  color: var(--fail-color);
}
.lh-audit--fail .lh-audit__score-icon {
  background-image: var(--fail-icon-url);
}

.lh-audit--informative .lh-audit__display-text {
  color: var(--display-value-gray);
}

.lh-audit--informative .lh-audit__score-icon,
.lh-audit--manual .lh-audit__score-icon {
  visibility: hidden;
}
.lh-audit--error .lh-audit__score-icon {
  display: none;
}

.lh-category-header__description,
.lh-audit__description   {
  color: var(--secondary-text-color);
}

.lh-category-header__description  {
  font-size: var(--body-font-size);
  margin: calc(var(--default-padding) / 2) 0 var(--default-padding);
}


.lh-audit__index,
.lh-audit__title,
.lh-audit__display-text,
.lh-audit__score-icon,
.lh-load-opportunity__sparkline,
.lh-chevron-container {
  margin: 0 var(--audit-item-gap);
}
.lh-audit__index {
  margin-left: 0;
}
.lh-chevron-container {
  margin-right: 0;
}


.lh-audit__header .lh-audit__index {
  width: var(--lh-audit-index-width);
}

.lh-audit__title {
  flex: 1;
}

/* Expandable Details (Audit Groups, Audits) */
.lh-audit__header {
  display: flex;
  padding: var(--lh-audit-vpadding) var(--text-indent);
  cursor: pointer;
}

.lh-audit--load-opportunity .lh-audit__header {
  display: block;
}

.lh-audit__header:hover {
  background-color: #F8F9FA;
}

.lh-audit-group__summary::-webkit-details-marker,
.lh-expandable-details__summary::-webkit-details-marker {
  display: none;
}


/* Perf Metric */

.lh-metric-container {
  display: flex;
}

.lh-metric-column {
  flex: 1;
}
.lh-metric-column:first-of-type {
  margin-right: 20px;
}

.lh-metric {
  border-bottom: 1px solid var(--report-secondary-border-color);
}

.lh-metric__innerwrap {
  display: flex;
  justify-content: space-between;
  padding: 11px var(--text-indent);
}

.lh-metric__details {
  order: -1;
}

.lh-metric__title {
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
  display: flex;
}

.lh-metric__name {
  flex: 1;
}

.lh-metrics__disclaimer {
  color: var(--medium-75-gray);
  text-align: right;
  margin: var(--lh-section-vpadding) 0;
  padding: 0 var(--text-indent);
}

.lh-metric__description {
  color: var(--secondary-text-color);
}

.lh-metric__value {
  white-space: nowrap; /* No wrapping between metric value and the icon */
}


.lh-metric .lh-metric__value::after {
  content: '';
  width: var(--lh-score-icon-width);
  height: var(--lh-score-icon-width);
  background-size: contain;
  display: inline-block;
  vertical-align: text-bottom;
  margin-left: calc(var(--body-font-size) / 2);
}

.lh-metric--pass .lh-metric__value {
  color: var(--pass-color);
}
.lh-metric--pass .lh-metric__value::after {
  background: var(--pass-icon-url) no-repeat 50% 50%;
}


.lh-metric--average .lh-metric__value {
  color: var(--average-color);
}
.lh-metric--average .lh-metric__value::after {
  background: var(--average-icon-url) no-repeat 50% 50%;
}


.lh-metric--fail .lh-metric__value {
  color: var(--fail-color);
}
.lh-metric--fail .lh-metric__value::after {
  background: var(--fail-icon-url) no-repeat 50% 50%;
}

.lh-metric--error .lh-metric__value,
.lh-metric--error .lh-metric__description {
  color: var(--fail-color);
}

/* Hide icon if there was an error */
.lh-metric--error .lh-metric__value::after {
  display: none;
}

/* Perf load opportunity */

.lh-load-opportunity__cols {
  display: flex;
  align-items: flex-start;
}

.lh-load-opportunity__header .lh-load-opportunity__col {
  background-color: var(--medium-50-gray);
  color: var(--medium-75-gray);
  text-align: center;
  display: unset;
  line-height: calc(2.3 * var(--body-font-size));
}

.lh-load-opportunity__col {
  display: flex;
  justify-content: space-between;
}

.lh-load-opportunity__col--one {
  flex: 5;
  margin-right: 2px;
}
.lh-load-opportunity__col--two {
  flex: 4;
}

.lh-audit--load-opportunity .lh-audit__display-text {
  text-align: right;
  flex: 0 0 calc(3 * var(--body-font-size));
}


/* Sparkline */

.lh-load-opportunity__sparkline {
  flex: 1;
  margin-top: calc((var(--body-line-height) - var(--lh-sparkline-height)) / 2);
}

.lh-sparkline {
  height: var(--lh-sparkline-height);
  width: 100%;
}

.lh-sparkline__bar {
  height: 100%;
  float: right;
}

.lh-audit--pass .lh-sparkline__bar {
  background: var(--pass-color);
}

.lh-audit--average .lh-sparkline__bar {
  background: var(--average-color);
}

.lh-audit--fail .lh-sparkline__bar {
  background: var(--fail-color);
}



/* Filmstrip */

.lh-filmstrip-container {
  padding: 0 var(--expandable-indent);
  margin: 0 auto;
}


.lh-filmstrip {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: var(--default-padding);
}

.lh-filmstrip__frame {
  text-align: right;
  position: relative;
}

.lh-filmstrip__thumbnail {
  border: 1px solid var(--report-secondary-border-color);
  max-height: 100px;
  max-width: 60px;
}

/* Audit */

.lh-audit {
  border-bottom: 1px solid var(--report-secondary-border-color);
}

.lh-audit:last-child  {
  border-bottom: none;
}

.lh-audit--error .lh-audit__display-text {
  color: var(--fail-color);
}

/* Audit Group */

.lh-audit-group {
  padding: var(--lh-audit-group-vpadding) 0;
  border-bottom: 1px solid var(--report-secondary-border-color);
}

.lh-audit-group:last-child {
  border-bottom: none;
}

.lh-audit-group__header {
  font-size: var(--subheader-font-size);
  line-height: var(--subheader-line-height);
  color: var(--subheader-color);
  flex: 1;
  font-weight: bold;
}

.lh-audit-group__header::before {
  content: '';
  width: calc(var(--subheader-font-size) / 14 * 24);
  height: calc(var(--subheader-font-size) / 14 * 24);
  margin-right: calc(var(--subheader-font-size) / 2);
  background: var(--medium-100-gray) none no-repeat center / 16px;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
}

/* A11y/Seo groups within Passed don't get an icon */
.lh-audit-group--unadorned .lh-audit-group__header::before {
  content: none;
}


.lh-audit-group--manual .lh-audit-group__header::before {
  background-image: var(--search-icon-url);
}
.lh-passed-audits .lh-audit-group__header::before {
  background-image: var(--check-icon-url);
}
.lh-audit-group--diagnostics .lh-audit-group__header::before {
  background-image: var(--search-icon-url);
}
.lh-audit-group--opportunities .lh-audit-group__header::before {
  background-image: var(--photo-filter-icon-url);
}
.lh-audit-group--metrics .lh-audit-group__header::before {
  background-image: var(--av-timer-icon-url);
}
.lh-audit-group--not-applicable .lh-audit-group__header::before {
  background-image: var(--remove-circle-icon-url);
}

/* Removing too much whitespace */
.lh-audit-group--metrics {
  margin-top: -28px;
  border-bottom: none;
}

.lh-audit-group__summary {
  display: flex;
  justify-content: space-between;
  padding-right: var(--text-indent);
}

.lh-audit-group__itemcount {
  color: var(--display-value-gray);
  margin: 0 10px;
}

.lh-audit-group__description {
  font-size: var(--body-font-size);
  color: var(--medium-75-gray);
  margin: var(--lh-audit-group-vpadding) 0;
}

.lh-audit-group--unadorned .lh-audit-group__description {
  margin-top: 0;
}

.lh-audit-explanation {
  margin: var(--lh-audit-vpadding) 0 calc(var(--lh-audit-vpadding) / 2);
  line-height: var(--caption-line-height);
}

.lh-audit--fail .lh-audit-explanation {
  color: var(--fail-color);
}

/* Report */

.lh-container {
  display: flex;
  max-width: var(--report-content-width);
  word-wrap: break-word;
  margin: 0 auto;
}

.lh-header-sticky {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
  will-change: transform;
}
.lh-header-plain {
  margin-top: var(--section-padding);
}

.lh-header-container {
  display: block;
  margin: 0 auto;
  max-width: var(--report-content-width);
  position: relative;
  word-wrap: break-word;
}

.lh-report {
  background-color: #fff;
}
@media screen {
  .lh-report {
    width: var(--report-width);
  }
}

.lh-exception {
  font-size: large;
}

.lh-code {
  white-space: normal;
  margin-top: 0;
  font-size: 85%;
  word-break: break-word;
}

.lh-warnings {
  --item-margin: calc(var(--body-line-height) / 6);
  border: 1px solid var(--average-color);
  border-radius: 4px;
  margin: var(--lh-audit-vpadding) 0;
  padding: calc(var(--lh-audit-vpadding) / 2) var(--lh-audit-vpadding);
}

.lh-warnings--toplevel {
  --item-margin: calc(var(--header-line-height) / 4);
  color: var(--secondary-text-color);
  margin: var(--section-padding);
  padding: var(--section-padding);
}
.lh-warnings ul {
  padding-left: calc(var(--section-padding) * 2);
  margin: 0;
}
.lh-warnings li {
  margin: var(--item-margin) 0;
}
.lh-warnings li:last-of-type {
  margin-bottom: 0;
}

.lh-scores-header {
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  position: relative;
  padding: var(--section-indent) calc(var(--section-indent) / 2) calc(var(--section-indent) * 2);
}
.lh-scores-header__solo {
  padding: 0;
  border: 0;
}

.lh-scorescale {
  color: var(--medium-75-gray);
  padding: 0 calc(var(--section-indent) * 1.5) 0;
  text-align: right;
  transform-origin: bottom right;
  will-change: opacity; /* opacity is changed on scroll */
}

.lh-scorescale-range {
  margin-left: 10px;
}

.lh-scorescale-range::before {
  content: '';
  width: var(--body-font-size);
  height: calc(var(--body-font-size) * .60);
  border-radius: 4px;
  display: inline-block;
  margin: 0 5px;
}

.lh-scorescale-range--pass::before {
  background-color: var(--pass-color);
}

.lh-scorescale-range--average::before {
  background-color: var(--average-color);
}

.lh-scorescale-range--fail::before {
  background-color: var(--fail-color);
}

/* Hide category score gauages if it's a single category report */
.lh-header--solo-category .lh-scores-wrapper {
  display: none;
}


.lh-categories {
  width: 100%;
  overflow: hidden;
}

.lh-category {
  --circle-size: calc(2.5 * var(--header-font-size));

  padding: var(--section-padding);
  border-top: 1px solid var(--report-border-color);
}

.lh-category:first-of-type {
  padding-top: calc(2 * var(--section-padding));
  border: none;
}

/* section hash link jump should preserve fixed header
   https://css-tricks.com/hash-tag-links-padding/
*/
.lh-category > .lh-permalink {
  margin-top: calc((var(--report-header-height) + var(--default-padding)) * -1);
  padding-bottom: calc(var(--report-header-height) + var(--default-padding));
  display: block;
  visibility: hidden;
}

.lh-category-header {
  font-size: var(--header-font-size);
  min-height: var(--circle-size);
  margin-bottom: var(--lh-section-vpadding);
}

.lh-category-header__title {
  line-height: 24px;
}

.lh-category-header .lh-score__gauge .lh-gauge__label {
  display: none;
}


.lh-category-header .lh-score__gauge {
  float: right;
}

.lh-category .lh-score__gauge {
  margin-left: var(--section-indent);
}

.lh-category-header .lh-audit__title {
  font-size: var(--header-font-size);
  line-height: var(--header-line-height);
}

.lh-passed-audits[open] summary.lh-passed-audits-summary {
  margin-bottom: calc(var(--default-padding) * 2);
}

summary.lh-passed-audits-summary {
  margin: calc(var(--default-padding) * 2) var(--default-padding);
  margin-left: var(--default-padding);
  margin-bottom: 0;
  font-size: 15px;
  display: flex;
  align-items: center;
}

#lh-log {
  position: fixed;
  background-color: #323232;
  color: #fff;
  min-height: 48px;
  min-width: 288px;
  padding: 16px 24px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  border-radius: 2px;
  margin: 12px;
  font-size: 14px;
  cursor: default;
  transition: transform 0.3s, opacity 0.3s;
  transform: translateY(100px);
  opacity: 0;
  -webkit-font-smoothing: antialiased;
  bottom: 0;
  left: 0;
  z-index: 3;
}

#lh-log.show {
  opacity: 1;
  transform: translateY(0);
}

/* 964 fits the min-width of the filmstrip */
@media screen and (max-width: 964px) {
  .lh-report {
    margin-left: 0;
    width: 100%;
    min-width: 400px;
  }
}

@media print {
  body {
    -webkit-print-color-adjust: exact; /* print background colors */
  }
  .lh-container {
    display: block;
  }
  .lh-report {
    margin-left: 0;
    padding-top: 0;
  }
  .lh-categories {
    margin-top: 0;
  }
}

.lh-table {
  --image-preview-size: 24px;
  border-collapse: collapse;
}

.lh-table thead {
  background: var(--lh-table-header-bg);
}
.lh-table thead th {
  color: var(--medium-75-gray);
  font-weight: normal;
}

.lh-table tbody tr:nth-child(even) {
  background-color: var(--lh-table-higlight-bg);
}

.lh-table th,
.lh-table td {
  padding: 8px 6px;
}

.lh-table-column--text,
.lh-table-column--bytes,
.lh-table-column--timespanMs,
.lh-table-column--ms {
  text-align: right;
}

.lh-table-column--thumbnail {
  width: calc(var(--image-preview-size) * 2);
}

.lh-table-column--url {
  text-align: left;
  min-width: 250px;
  white-space: nowrap;
  max-width: 0;
}

/* Keep bytes columns narrow if they follow the URL column */
.lh-table-column--url + th.lh-table-column--bytes,
.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--bytes {
  width: var(--bytes-col-width);
}

.lh-table-column--code {
  max-width: var(--url-col-max-width);
}

.lh-text__url {
  overflow: hidden;
  text-overflow: ellipsis;
}

.lh-text__url:hover {
  text-decoration: underline dotted #999;
  text-decoration-skip-ink: auto;
}

.lh-text__url > .lh-text, .lh-text__url-host {
  display: inline-block;
}

.lh-text__url-host {
  margin-left: calc(var(--body-font-size) / 2);
  opacity: 0.6;
  font-size: 90%
}

.lh-thumbnail {
  height: var(--image-preview-size);
  width: var(--image-preview-size);
  object-fit: contain;
}

/* Chevron
   https://codepen.io/paulirish/pen/LmzEmK
 */
.lh-chevron {
  --chevron-angle: 42deg;
  width: var(--chevron-size);
  height: var(--chevron-size);
  margin-top: calc((var(--body-line-height) - 12px) / 2);
}

.lh-chevron__lines {
  transition: transform 0.4s;
  transform: translateY(var(--body-line-height));
}
.lh-chevron__line {
 stroke: var(--display-value-gray);
 stroke-width: var(--chevron-size);
 stroke-linecap: square;
 transform-origin: 50%;
 transform: rotate(var(--chevron-angle));
 transition: transform 300ms, stroke 300ms;
}

.lh-audit-group > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-right,
.lh-audit-group[open] > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-left,
.lh-audit > .lh-expandable-details .lh-chevron__line-right,
.lh-audit > .lh-expandable-details[open] .lh-chevron__line-left {
 transform: rotate(calc(var(--chevron-angle) * -1));
}

.lh-audit-group[open] > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-right,
.lh-audit > .lh-expandable-details[open] .lh-chevron__line-right {
  transform: rotate(var(--chevron-angle));
}

.lh-audit-group[open] > .lh-audit-group__summary > .lh-chevron .lh-chevron__lines,
.lh-audit > .lh-expandable-details[open] .lh-chevron__lines {
 transform: translateY(calc(var(--chevron-size) * -1));
}



/* Tooltip */
.tooltip-boundary {
  position: relative;
}

.tooltip {
  position: absolute;
  display: none; /* Don't retain these layers when not needed */
  opacity: 0;
  background: #ffffff;
  min-width: 246px;
  max-width: 275px;
  padding: 15px;
  border-radius: 5px;
  text-align: initial;
}
/* shrink tooltips to not be cutoff on left edge of narrow viewports
   45vw is chosen to be ~= width of the left column of metrics
*/
@media screen and (max-width: 535px) {
  .tooltip {
    min-width: 45vw;
    padding: 3vw;
  }
}

.tooltip-boundary:hover {
  background-color: #F8F9FA;
}

.tooltip-boundary:hover .tooltip {
  display: block;
  animation: fadeInTooltip 250ms;
  animation-fill-mode: forwards;
  animation-delay: 850ms;
  bottom: 100%;
  z-index: 1;
  will-change: opacity;
  right: 0;
}

.tooltip::before {
  content: "";
  border: solid transparent;
  border-bottom-color: #fff;
  border-width: 10px;
  position: absolute;
  bottom: -20px;
  right: 6px;
  transform: rotate(180deg);
  pointer-events: none;
}

@keyframes fadeInTooltip {
  0% { opacity: 0; }
  75% { opacity: 1; }
  100% { opacity: 1;  filter: drop-shadow(1px 0px 1px #aaa) drop-shadow(0px 2px 4px hsla(206, 6%, 25%, 0.15)); }
}
</style>
</head>
<body class="lh-root lh-vars">
  <noscript>Lighthouse report requires JavaScript. Please enable.</noscript>
  <div hidden><!-- Lighthouse run warnings -->
<template id="tmpl-lh-warnings--toplevel">
  <div class="lh-warnings lh-warnings--toplevel">
    <strong>There were issues affecting this run of Lighthouse:</strong>
    <ul></ul>
  </div>
</template>

<!-- Lighthouse score scale -->
<template id="tmpl-lh-scorescale">
  <div class="lh-scorescale">
    <span class="lh-scorescale-label">Score scale:</span>
    <span class="lh-scorescale-range lh-scorescale-range--fail">0-44</span>
    <span class="lh-scorescale-range lh-scorescale-range--average">45-74</span>
    <span class="lh-scorescale-range lh-scorescale-range--pass">75-100</span>
  </div>
</template>

<!-- Toggle arrow chevron -->
<template id="tmpl-lh-chevron">
  <svg class="lh-chevron" title="See audits" xmlns="http://www.w3.org/2000/svg"  viewbox="0 0 100 100">
    <g class="lh-chevron__lines">
      <path class="lh-chevron__line lh-chevron__line-left" d="M10 50h40" stroke="#707173"/>
      <path class="lh-chevron__line lh-chevron__line-right" d="M90 50H50" stroke="#707173"/>
    </g>
  </svg>
</template>

<!-- Lighthouse category header -->
<template id="tmpl-lh-category-header">
  <div class="lh-category-header">
    <div class="lh-score__gauge"></div>
    <span class="lh-category-header__title"></span>
    <div class="lh-category-header__description"></div>
  </div>
</template>

<!-- Lighthouse audit -->
<template id="tmpl-lh-audit">
  <div class="lh-audit">
    <details class="lh-expandable-details">
      <summary class="lh-audit__header lh-expandable-details__summary">
        <span class="lh-audit__index"></span>
        <span class="lh-audit__title"></span>
        <span class="lh-audit__display-text"></span>
        <div class="lh-audit__score-icon"></div>
        <div class="lh-chevron-container"></div>
      </summary>
      <div class="lh-audit__description"></div>
    </details>
  </div>
</template>

<!-- Lighthouse perf metric -->
<template id="tmpl-lh-metric">
  <div class="lh-metric">
    <div class="lh-metric__innerwrap tooltip-boundary">
      <span class="lh-metric__title"></span>
      <div class="lh-metric__value"></div>
      <div class="lh-metric__description tooltip"></div>
    </div>
  </div>
</template>

<!-- Lighthouse perf opportunity -->
<template id="tmpl-lh-opportunity">
  <div class="lh-audit lh-audit--load-opportunity">
    <details class="lh-expandable-details">
      <summary class="lh-audit__header lh-expandable-details__summary">
        <div class="lh-load-opportunity__cols">
          <div class="lh-load-opportunity__col lh-load-opportunity__col--one">
            <span class="lh-audit__index"></span>
            <div class="lh-audit__title"></div>
          </div>
          <div class="lh-load-opportunity__col lh-load-opportunity__col--two">
            <div class="lh-load-opportunity__sparkline">
              <div class="lh-sparkline"><div class="lh-sparkline__bar"></div></div>
            </div>
            <div class="lh-audit__display-text"></div>
            <div class="lh-chevron-container" title="See resources"></div>
          </div>
        </div>
      </summary>
      <div class="lh-audit__description"></div>
    </details>
  </div>
</template>


<!-- Lighthouse perf opportunity header -->
<template id="tmpl-lh-opportunity-header">
  <div class="lh-load-opportunity__header lh-load-opportunity__cols">
    <div class="lh-load-opportunity__col lh-load-opportunity__col--one">
      Resource to optimize
    </div>
    <div class="lh-load-opportunity__col lh-load-opportunity__col--two">
      Estimated Savings
    </div>
  </div>
</template>


<!-- Lighthouse score container -->
<template id="tmpl-lh-scores-wrapper">
  <style>
    .lh-scores-wrapper__background,
    .lh-scores-wrapper__shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      border-radius: 8px;
    }
    .lh-scores-wrapper__shadow {
      border-radius: 0;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 0px -2px
    }
    .lh-scores-container {
      padding-bottom: calc(var(--section-indent) / 2);
      position: relative;
      width: 100%;
    }
  </style>
  <div class="lh-scores-wrapper">
    <div class="lh-scores-container">
      <div class="lh-scores-wrapper__background"></div>
      <div class="lh-scores-wrapper__shadow"></div>
    </div>
  </div>
</template>


<!-- Lighthouse header -->
<template id="tmpl-lh-heading">
  <style>
    :root {
      --report-header-overlap-top: 30px;
    }
    .lh-header-bg {
      background-color: var(--header-bg-color);
      height: var(--report-header-height);
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      will-change: transform;
    }
    .lh-lighthouse {
      position: absolute;
      top: var(--report-header-height);
      right: 50%;
      transform: translate3d(calc(var(--report-content-width) / 2), -100%, 0);
      opacity: 1;
      transform-origin: bottom right;
      will-change: transform, opacity;
    }
    .lh-header {
      width: 100%;
      height: var(--report-header-height);
      max-width: 100%; /* support text-overflow on url */
      position: relative;
    }
    .lh-metadata {
      flex: 1 1 0;
      padding: calc(var(--section-padding) / 2);
      padding-left: var(--section-indent);
      line-height: 20px;
      color: var(--report-header-color);
      z-index: 1;
      position: relative;
    }
    .lh-metadata__results {
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .lh-metadata__url {
      color: currentColor;
    }
    .lh-scores-wrapper {
      margin-top: -30px;
      transform: translateZ(1px);
    }
    .lh-scores-wrapper__shadow {
      opacity: 0;
    }
    .lh-scores-wrapper__background,
    .lh-scores-wrapper__shadow {
      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      will-change: opacity, transform;
      transform-origin: top;
    }

    .lh-product-info, .lh-toolbar__metadata {
      align-items: center;
      white-space: nowrap;
      color: #5F6369;
      display: flex;
      font-size: calc(var(--body-font-size) * 0.9);
      margin-left: var(--section-indent);
      opacity: 0;
      transform: translateY(-50%);
      will-change: opacity;
    }
    .lh-product-info__icon {
      height: 20px;
      margin-right: var(--default-padding);
    }
    .lh-toolbar {
      height: 50px;
      position: absolute;
      top: 25px;
      will-change: transform;
      display: flex;
      width: calc(100% - 70px);  /* give room for export */
    }
    .lh-toolbar__metadata {
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }
    .lh-toolbar__url {
      color: currentColor;
      display: block;
      white-space: nowrap;
      margin-right: 2px;
    }
    .lh-export {
      position: absolute;
      right: var(--section-indent);
      transform: translateY(0);
      top: calc(var(--section-padding) / 2);
      will-change: transform;
      z-index: 2;
    }
    .lh-export__button {
      background-color: #fff;
      border: 1px solid #dadada;
      border-radius: 2px;
      cursor: pointer;
      outline: none;
      height: 32px;
      width: 48px;
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: 50% 50%;
      will-change: transform;
    }
    .lh-export__button:focus,
    .lh-export__button.active {
      box-shadow: 1px 1px 3px #ccc;
    }
    .lh-export__button.active + .lh-export__dropdown {
      opacity: 1;
      clip: rect(0, 164px, 200px, 0);
    }
    .lh-export__dropdown {
      position: absolute;
      background-color: #fff;
      border: 1px solid var(--report-border-color);
      border-radius: 3px;
      padding: calc(var(--default-padding) / 2) 0;
      cursor: pointer;
      top: 36px;
      right: 0;
      box-shadow: 1px 1px 3px #ccc;
      min-width: 125px;
      clip: rect(0, 164px, 0, 0);
      opacity: 0;
      transition: all 200ms cubic-bezier(0,0,0.2,1);
    }
    .lh-export__dropdown a {
      display: block;
      color: currentColor;
      text-decoration: none;
      white-space: nowrap;
      padding: 0 12px;
      line-height: 2;
    }
    .lh-export__dropdown a:hover,
    .lh-export__dropdown a:focus {
      background-color: #efefef;
      outline: none;
    }
    .lh-export__dropdown .report-icon {
      cursor: pointer;
      background-repeat: no-repeat;
      background-position: 8px 50%;
      background-size: 18px;
      background-color: transparent;
      text-indent: 18px;
    }
    /* copy icon needs slight adjustments to look great */
    .lh-export__dropdown .report-icon--copy {
      background-size: 16px;
      background-position: 9px 50%;
    }
    /* save-as-gist option hidden in report */
    .lh-export__dropdown .lh-export--gist {
      display: none;
    }
    .lh-config {
      color: var(--secondary-text-color);
    }
    .lh-config__timestamp {
      font-size: var(--caption-font-size);
      display: block;
    }
    a.lh-config__emulation {
      color: inherit;
      text-decoration: none;
    }
    @media screen and (max-width: 964px) {
      .lh-export__dropdown {
        right: 0;
        left: initial;
      }
    }
    @media print {
      .lh-header {
        position: static;
        margin-left: 0;
      }
    }
/*
    TODO: Enable animating the clouds
    .lh-lighthouse__clouds {
      animation: panacross 30s linear infinite;
      animation-play-state: paused;
    }
    @keyframes panacross {
      0% { transform: translateX(0px); }
      77% { transform: translateX(-680px); }
      77.0001% { transform: translateX(195px); }
      100% { transform: translateX(0px); }
    } */
  </style>
  <div class="lh-header-bg"></div>
  <div class="lh-lighthouse">
    <svg width="217" height="148" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <mask id="a" x="-56" y="-54" width="284" height="202" maskUnits="userSpaceOnUse">
          <path d="M-56-54h284v202H-56z" fill="#fff"/>
        </mask>
        <linearGradient id="b" x1="-525.16" y1="560.08" x2="-524.23" y2="560.08" gradientTransform="matrix(91 0 0 -77 47797 43181)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#f1f3f4"/>
          <stop offset="1" stop-color="#fff"/>
        </linearGradient>
      </defs>
      <g mask="url(#a)">
        <path d="M95 47h24v2H95z" fill="#ec5548"/>
        <path d="M98 49h18v11H98z" fill="#fbc21b"/>
        <path d="M95 59h24v7H95z" fill="#ec5548"/>
        <path d="M97.63 66h19.74l2.63 47H95z" fill="#fff"/>
        <path d="M107 38a10 10 0 0 1 10 10v1H97v-1a10 10 0 0 1 10-10zM96.77 82.23l21-10.7.63 11.87-22.31 11.87zM95 110.8L119.1 98l.9 14H95z" fill="#ec5548"/>
        <path d="M0 148a177.58 177.58 0 0 1 217 0z" fill="#e8eaed"/>
        <path d="M103 49a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" fill="#fef0c8"/>
        <path d="M7 16l91 33.18v10L7 93z" fill="url(#b)"/>
      </g>
      <g mask="url(#a)" class="lh-lighthouse__clouds">
        <path d="M60 .19A9.77 9.77 0 0 1 61.93 0a9.44 9.44 0 0 1 9.24 7.83A7.24 7.24 0 0 1 79 14.45v.73A7.37 7.37 0 0 1 76.2 21h-31a7.44 7.44 0 0 1-1.2-4.09 7.31 7.31 0 0 1 7.26-7.36 6.84 6.84 0 0 1 1.28.1v-.11A9.51 9.51 0 0 1 60 .19m79.78 22.31h-17.9a4.37 4.37 0 0 1-.63-2.25 4.2 4.2 0 0 1 4.16-4.25 4.37 4.37 0 0 1 .72.06V16a5.35 5.35 0 0 1 10.64-1h.33a4.2 4.2 0 0 1 4.15 4.25 4.29 4.29 0 0 1-1.47 3.25zM163 62h-24.15a5.1 5.1 0 0 1-.85-2.81 5.65 5.65 0 0 1 6.59-5.19v-.08a7.07 7.07 0 0 1 7.24-6.92 7.15 7.15 0 0 1 7.17 5.64h.44a5.46 5.46 0 0 1 5.6 5.32A5.19 5.19 0 0 1 163 62z" fill="#fff"/>
      </g>
    </svg>
  </div>

  <div class="lh-header-container">
    <div class="lh-header">
      <div class="lh-metadata">
        <div class="lh-metadata__results"><a href="" class="lh-metadata__url" target="_blank" rel="noopener"></a></div>
        <div class="lh-config">
          <span class="lh-config__timestamp"></span>
          <a href="#runtime-settings" class="lh-config__emulation"></a>
        </div>
      </div>
    </div>

    <div class="lh-scores-wrapper-placeholder"></div>

    <div class="lh-toolbar">
      <div class="lh-product-info">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAADjklEQVR4AWI08P/HQEvAQrxSQKvlECfLFYXx75xCY2qmh89GbNvOMjb3v9jOOlxnFWxj206ebQ3b7q6q+z1rNagu8/zvPSZACAABpeUAA0miMgU7SA7JjCraFGwZwECOwvL75dWjsKgWBKtx0jvWo+vkBAFbACCkByMP6nMn48+AVgXB2fzSCwsv22/lMGlUhmJ0AE7BH8dyUUDbUEgN6RzJRSeaPxhdRYR0Inel+7Hd5lBiFpkMAxACc0394//9C4voFHDiAAGLpuOXebdfdHfctgwJKaZRLRKy6ItrSis6RBnVBgGtbHyKTEmJHQoEXoBCE5BCrDeA2ogMUIGDAKEBDEhUqwgMqBYDjW4DQzmuffVdqff42/ZQYYqVcMXGZsMPyCsH3lyJSetxvEaxAQXdjR1HjfwCdIS7lo2DZke26Qe+MXO12OWkGT0O6oE7vMGkMnkYw4aN1KQgMKExhXqswfiov4+a7MQ11XPnbr/5qpKlgACAAQj94Lu271bN9DUecQasIZlNzG72llRAAKJiAi+/BSHrSFjRvQhg3DEKEqJh08tsmLTx597+f6enr4cc2Zpk57pihfX24dW7RHcOLLUbJYhJSl0ErQCI9BVXH/XrO97QasuvQQSiECa0BrQCIIJp6X9T/r8QG6L71WYSqCoIIGo2BZDUBnS/D9EA9Nun1iYvbM0MFExIDQRoKFatc1Z6zrm5uWeObJotq0BGV9FuQBWq5a4Fw3PPz848rZHstZSuA5FWAFSMP2nOppOOGpl6qh9PCSg0IFyHKjSQyDNQHTru2t75NOEe0fsf246oAmFkI6vCdnWvbQFQFCKx8vCswV8TrDLiDLgH4Nr7RAtNsrC9d8sfk7b8ls4igdNy8CQKAISlsB0FjZfd3Lfp155tf8fKI4BxZZIj/oTdVEAIAcJFOCmzauHG71I7/rdreUAgAqpDP05fDARCAQQARwEIBQSVxq0FyaLvZZtevpHa8WHw8cft6cpxlq8eAJtIhnSbWDf951yx3y13OqUuu5qyGgkxCgGFh9cDihDGbTa6BqvT1lWmrav3bmt2ZMJ4mU6TGgIC4DBzcv/JqAau1WhzSt3x9Ixk/4Jk/8J4ZrrViFMA4W6A7+WK8xcVjvyrOmVD0FbAXokcT48r+xVqLKvuJYbmpNadnlp3mpufJHOe/GXktM+r09bT8kEdq9BRYAbGSgzP7ll82U71Mc+ZFooXgwAAAABJRU5ErkJggg==" alt="" class="lh-product-info__icon" />
        <span class="lh-product-info__name">Lighthouse</span>&nbsp;
        <span class="lh-product-info__version"></span>
      </div>

      <div class="lh-toolbar__metadata">
        <a href="" class="lh-toolbar__url" target="_blank" rel="noopener"></a>
        <span class="lh-toggle-arrow" title="See report's runtime settings"></span>
      </div>
    </div>

    <div class="lh-export">
      <button class="report-icon report-icon--share lh-export__button" title="Export report"></button>
      <div class="lh-export__dropdown">
        <a href="#" class="report-icon report-icon--print" data-action="print-summary">Print Summary</a>
        <a href="#" class="report-icon report-icon--print" data-action="print-expanded">Print Expanded</a>
        <a href="#" class="report-icon report-icon--copy" data-action="copy">Copy JSON</a>
        <a href="#" class="report-icon report-icon--download" data-action="save-html">Save as HTML</a>
        <a href="#" class="report-icon report-icon--download" data-action="save-json">Save as JSON</a>
        <a href="#" class="report-icon report-icon--open lh-export--viewer" data-action="open-viewer">Open in Viewer</a>
        <a href="#" class="report-icon report-icon--open lh-export--gist" data-action="save-gist">Save as Gist</a>
      </div>
    </div>
</template>


<!-- Lighthouse footer -->
<template id="tmpl-lh-footer">
  <style>
    .lh-footer {
      background-color: var(--header-bg-color);
      border-top: 1px solid var(--report-secondary-border-color);
      padding: var(--section-indent) calc(var(--default-padding) * 2);
    }
    .lh-footer .lh-generated {
      text-align: center;
      border-top: 1px solid var(--report-border-color);
      padding-top: var(--default-padding);
    }
    .lh-env {
      padding: var(--default-padding) 0;
    }
    .lh-env__items {
      padding-left: 16px;
    }
    span.lh-env__name {
      font-weight: bold;
      color: var(--secondary-text-color);
    }
    span.lh-env__description {
      font-family: var(--monospace-font-family);
      font-size: var(--caption-font-size);
      padding-left: 5px;
    }
  </style>
  <footer class="lh-footer">
    <div class="lh-env">
      <div class="lh-env__title">Runtime settings</div>
      <ul class="lh-env__items">
        <template id="tmpl-lh-env__items">
          <li class="lh-env__item">
            <span class="lh-env__name"></span>
            <span class="lh-env__description"></span>
          </li>
        </template>
      </ul>
    </div>

    <div class="lh-generated">
      Generated by <b>Lighthouse</b> <span class="lh-footer__version"></span> |
      <a href="https://github.com/GoogleChrome/Lighthouse/issues" target="_blank" rel="noopener">File an issue</a>
    </div>
  </footer>
</template>

<!-- Lighthouse score gauge -->
<template id="tmpl-lh-gauge">
  <style>
    .lh-gauge__wrapper {
      --circle-size: calc(3 * var(--header-font-size));
      --circle-size-half: calc(var(--circle-size) / 2);
      --circle-background: hsl(216, 12%, 92%);
      --circle-border-width: 9;
      --inset-size: calc(var(--circle-size) - 2 * var(--circle-border-width));
      --transition-length: 1s;
    }

    .lh-gauge__wrapper--pass,
    .lh-gauge__wrapper--pass .lh-gauge {
      --circle-color: var(--pass-color);
      color: var(--circle-color);
    }

    .lh-gauge__wrapper--average,
    .lh-gauge__wrapper--average .lh-gauge {
      --circle-color: var(--average-color);
      color: var(--circle-color);
    }

    .lh-gauge__wrapper--fail,
    .lh-gauge__wrapper--fail .lh-gauge {
      --circle-color: var(--fail-color);
      color: var(--circle-color);
    }

    .lh-gauge {
        max-width: 360px;
        max-height: 360px;
        stroke-linecap: round;
        width: var(--circle-size);
        height: var(--circle-size);
    }

    .lh-gauge-base {
        fill: none;
        stroke: var(--circle-background);
        stroke-width: var(--circle-border-width);
    }
    .lh-gauge-arc {
        fill: none;
        stroke: var(--circle-color);
        stroke-width: var(--circle-border-width);
        animation: load-gauge var(--transition-length) ease forwards;
        animation-delay: 250ms;
    }

    @keyframes load-gauge {
      from { stroke-dasharray: 0 329; }
    }

    .lh-gauge__percentage {
      --spacer: calc((var(--circle-size) - var(--inset-size)) / 2);
      width: var(--inset-size);
      height: var(--inset-size);
      position: absolute;
      border-radius: inherit;
      font-size: var(--header-font-size);
      text-align: center;
      top: calc(var(--circle-size) / 3);
    }

    .lh-gauge__wrapper {
      display: inline-flex;
      align-items: center;
      flex-direction: column;
      text-decoration: none;
      flex: 1;
      min-width: auto;
      position: relative;

      /* Contain the layout style paint & layers during animation*/
      contain: content;
      will-change: opacity; /* Only using for layer promotion */
    }

    .lh-gauge__label {
      font-size: var(--body-font-size);
      line-height: var(--body-line-height);
      margin-top: calc(0.5 * var(--body-line-height));
      text-align: center;
      color: black;
    }

  </style>
  <a href="#" class="lh-gauge__wrapper">
    <svg viewBox="0 0 120 120" class="lh-gauge" fill="none" stroke-width="2">
      <circle class="lh-gauge-base" r="53" cx="60" cy="60"></circle>
      <circle class="lh-gauge-arc" transform="rotate(-90 60 60)" stroke-dasharray="0 329" stroke-dashoffset="0" r="53" cx="60" cy="60"></circle>
    </svg>
    <div class="lh-gauge__percentage"></div>
    <div class="lh-gauge__label"></div>
  </a>
</template>

<!-- Lighthouse crtiical request chains component -->
<template id="tmpl-lh-crc">
  <div class="lh-crc-container">
    <style>
      .lh-crc .tree-marker {
        width: 12px;
        height: 26px;
        display: block;
        float: left;
        background-position: top left;
      }
      .lh-crc .horiz-down {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><g fill="%23D8D8D8" fill-rule="evenodd"><path d="M16 12v2H-2v-2z"/><path d="M9 12v14H7V12z"/></g></svg>');
      }
      .lh-crc .right {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v2H0v-2z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .up-right {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v14H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .vert-right {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v27H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .vert {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v26H7z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .crc-tree {
        font-size: 14px;
        width: 100%;
        overflow-x: auto;
      }
      .lh-crc .crc-node {
        height: 26px;
        line-height: 26px;
        white-space: nowrap;
      }
      .lh-crc .crc-node__tree-value {
        margin-left: 10px;
      }
      .lh-crc .crc-node__chain-duration {
        font-weight: 700;
      }
      .lh-crc .crc-node__tree-hostname {
        color: #595959;
      }
      .lh-crc .crc-initial-nav {
        color: #595959;
        font-style: italic;
      }
    </style>
    <div>
      Longest chain: <b class="lh-crc__longest_duration"><!-- fill me: longestChain.duration --></b>
      over <b class="lh-crc__longest_length"><!-- fill me: longestChain.length --></b> requests, totalling
      <b class="lh-crc__longest_transfersize"><!-- fill me: longestChain.length --></b>
    </div>
    <div class="lh-crc">
      <div class="crc-initial-nav">Initial Navigation</div>
      <!-- stamp for each chain -->
      <template id="tmpl-lh-crc__chains">
        <div class="crc-node">
          <span class="crc-node__tree-marker">

          </span>
          <span class="crc-node__tree-value">
            <span class="crc-node__tree-file"><!-- fill me: node.request.url.file --></span>
            <span class="crc-node__tree-hostname">(<!-- fill me: node.request.url.host -->)</span>

          </span>
        </div>
      </template>
    </div>
  </div>
</template>
</div>

  <main><!-- report populated here --></main>

  <div id="lh-log"></div>

  <script>/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* globals self URL */

const ELLIPSIS = '\u2026';
const NBSP = '\xa0';
const PASS_THRESHOLD = 0.75;

const RATINGS = {
  PASS: {label: 'pass', minScore: PASS_THRESHOLD},
  AVERAGE: {label: 'average', minScore: 0.45},
  FAIL: {label: 'fail'},
  ERROR: {label: 'error'},
};

class Util {
  static get PASS_THRESHOLD() {
    return PASS_THRESHOLD;
  }

  static get MS_DISPLAY_VALUE() {
    return `%10d${NBSP}ms`;
  }

  /**
   * @param {string|Array<string|number>=} displayValue
   * @return {string}
   */
  static formatDisplayValue(displayValue) {
    if (typeof displayValue === 'string') return displayValue;
    if (!displayValue) return '';

    const replacementRegex = /%([0-9]*(\.[0-9]+)?d|s)/;
    const template = /** @type {string} */ (displayValue[0]);
    if (typeof template !== 'string') {
      // First value should always be the format string, but we don't want to fail to build
      // a report, return a placeholder.
      return 'UNKNOWN';
    }

    let output = template;
    for (const replacement of displayValue.slice(1)) {
      if (!replacementRegex.test(output)) {
        // eslint-disable-next-line no-console
        console.warn('Too many replacements given');
        break;
      }

      output = output.replace(replacementRegex, match => {
        const granularity = Number(match.match(/[0-9.]+/)) || 1;
        return match === '%s' ?
          replacement.toLocaleString() :
          (Math.round(Number(replacement) / granularity) * granularity).toLocaleString();
      });
    }

    if (replacementRegex.test(output)) {
      // eslint-disable-next-line no-console
      console.warn('Not enough replacements given');
    }

    return output;
  }

  /**
   * Used to determine if the "passed" for the purposes of showing up in the "failed" or "passed"
   * sections of the report.
   *
   * @param {{score: (number|null), scoreDisplayMode: string}} audit
   * @return {boolean}
   */
  static showAsPassed(audit) {
    switch (audit.scoreDisplayMode) {
      case 'manual':
      case 'not-applicable':
        return true;
      case 'error':
      case 'informative':
        return false;
      case 'numeric':
      case 'binary':
      default:
        // Numeric audits that are within PASS_THRESHOLD will still show up with failing.
        // For opportunities, we want to have them show up with other failing for contrast.
        // For diagnostics, we sort by score so they'll be lowest priority.
        return Number(audit.score) === 1;
    }
  }

  /**
   * Convert a score to a rating label.
   * @param {number|null} score
   * @param {string=} scoreDisplayMode
   * @return {string}
   */
  static calculateRating(score, scoreDisplayMode) {
    // Handle edge cases first, manual and not applicable receive 'pass', errored audits receive 'error'
    if (scoreDisplayMode === 'manual' || scoreDisplayMode === 'not-applicable') {
      return RATINGS.PASS.label;
    } else if (scoreDisplayMode === 'error') {
      return RATINGS.ERROR.label;
    } else if (score === null) {
      return RATINGS.FAIL.label;
    }

    // At this point, we're rating a standard binary/numeric audit
    let rating = RATINGS.FAIL.label;
    if (score >= RATINGS.PASS.minScore) {
      rating = RATINGS.PASS.label;
    } else if (score >= RATINGS.AVERAGE.minScore) {
      rating = RATINGS.AVERAGE.label;
    }
    return rating;
  }

  /**
   * Format number.
   * @param {number} number
   * @param {number=} granularity Number of decimal places to include. Defaults to 0.1.
   * @return {string}
   */
  static formatNumber(number, granularity = 0.1) {
    const coarseValue = Math.round(number / granularity) * granularity;
    return coarseValue.toLocaleString();
  }

  /**
   * @param {number} size
   * @param {number=} granularity Controls how coarse the displayed value is, defaults to .01
   * @return {string}
   */
  static formatBytesToKB(size, granularity = 0.1) {
    const kbs = (Math.round(size / 1024 / granularity) * granularity).toLocaleString();
    return `${kbs}${NBSP}KB`;
  }

  /**
   * @param {number} ms
   * @param {number=} granularity Controls how coarse the displayed value is, defaults to 10
   * @return {string}
   */
  static formatMilliseconds(ms, granularity = 10) {
    const coarseTime = Math.round(ms / granularity) * granularity;
    return `${coarseTime.toLocaleString()}${NBSP}ms`;
  }

  /**
   * @param {number} ms
   * @param {number=} granularity Controls how coarse the displayed value is, defaults to 0.1
   * @return {string}
   */
  static formatSeconds(ms, granularity = 0.1) {
    const coarseTime = Math.round(ms / 1000 / granularity) * granularity;
    return `${coarseTime.toLocaleString()}${NBSP}s`;
  }

  /**
   * Format time.
   * @param {string} date
   * @return {string}
   */
  static formatDateTime(date) {
    const options = {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: 'numeric', timeZoneName: 'short',
    };
    let formatter = new Intl.DateTimeFormat('en-US', options);

    // Force UTC if runtime timezone could not be detected.
    // See https://github.com/GoogleChrome/lighthouse/issues/1056
    const tz = formatter.resolvedOptions().timeZone;
    if (!tz || tz.toLowerCase() === 'etc/unknown') {
      options.timeZone = 'UTC';
      formatter = new Intl.DateTimeFormat('en-US', options);
    }
    return formatter.format(new Date(date));
  }
  /**
   * Converts a time in milliseconds into a duration string, i.e. `1d 2h 13m 52s`
   * @param {number} timeInMilliseconds
   * @return {string}
   */
  static formatDuration(timeInMilliseconds) {
    let timeInSeconds = timeInMilliseconds / 1000;
    if (Math.round(timeInSeconds) === 0) {
      return 'None';
    }

    /** @type {Array<string>} */
    const parts = [];
    const unitLabels = /** @type {Object<string, number>} */ ({
      d: 60 * 60 * 24,
      h: 60 * 60,
      m: 60,
      s: 1,
    });

    Object.keys(unitLabels).forEach(label => {
      const unit = unitLabels[label];
      const numberOfUnits = Math.floor(timeInSeconds / unit);
      if (numberOfUnits > 0) {
        timeInSeconds -= numberOfUnits * unit;
        parts.push(`${numberOfUnits}\xa0${label}`);
      }
    });

    return parts.join(' ');
  }

  /**
   * @param {URL} parsedUrl
   * @param {{numPathParts?: number, preserveQuery?: boolean, preserveHost?: boolean}=} options
   * @return {string}
   */
  static getURLDisplayName(parsedUrl, options) {
    // Closure optional properties aren't optional in tsc, so fallback needs undefined  values.
    options = options || {numPathParts: undefined, preserveQuery: undefined,
      preserveHost: undefined};
    const numPathParts = options.numPathParts !== undefined ? options.numPathParts : 2;
    const preserveQuery = options.preserveQuery !== undefined ? options.preserveQuery : true;
    const preserveHost = options.preserveHost || false;

    let name;

    if (parsedUrl.protocol === 'about:' || parsedUrl.protocol === 'data:') {
      // Handle 'about:*' and 'data:*' URLs specially since they have no path.
      name = parsedUrl.href;
    } else {
      name = parsedUrl.pathname;
      const parts = name.split('/').filter(part => part.length);
      if (numPathParts && parts.length > numPathParts) {
        name = ELLIPSIS + parts.slice(-1 * numPathParts).join('/');
      }

      if (preserveHost) {
        name = `${parsedUrl.host}/${name.replace(/^\//, '')}`;
      }
      if (preserveQuery) {
        name = `${name}${parsedUrl.search}`;
      }
    }

    const MAX_LENGTH = 64;
    // Always elide hexadecimal hash
    name = name.replace(/([a-f0-9]{7})[a-f0-9]{13}[a-f0-9]*/g, `$1${ELLIPSIS}`);
    // Also elide other hash-like mixed-case strings
    name = name.replace(/([a-zA-Z0-9-_]{9})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-_]{10,}/g,
      `$1${ELLIPSIS}`);
    // Also elide long number sequences
    name = name.replace(/(\d{3})\d{6,}/g, `$1${ELLIPSIS}`);
    // Merge any adjacent ellipses
    name = name.replace(/\u2026+/g, ELLIPSIS);

    // Elide query params first
    if (name.length > MAX_LENGTH && name.includes('?')) {
      // Try to leave the first query parameter intact
      name = name.replace(/\?([^=]*)(=)?.*/, `?$1$2${ELLIPSIS}`);

      // Remove it all if it's still too long
      if (name.length > MAX_LENGTH) {
        name = name.replace(/\?.*/, `?${ELLIPSIS}`);
      }
    }

    // Elide too long names next
    if (name.length > MAX_LENGTH) {
      const dotIndex = name.lastIndexOf('.');
      if (dotIndex >= 0) {
        name = name.slice(0, MAX_LENGTH - 1 - (name.length - dotIndex)) +
          // Show file extension
          `${ELLIPSIS}${name.slice(dotIndex)}`;
      } else {
        name = name.slice(0, MAX_LENGTH - 1) + ELLIPSIS;
      }
    }

    return name;
  }

  /**
   * Split a URL into a file, hostname and origin for easy display.
   * @param {string} url
   * @return {{file: string, hostname: string, origin: string}}
   */
  static parseURL(url) {
    const parsedUrl = new URL(url);
    return {
      file: Util.getURLDisplayName(parsedUrl),
      hostname: parsedUrl.hostname,
      origin: parsedUrl.origin,
    };
  }

  /**
   * @param {number} startTime
   * @param {number} endTime
   * @return {string}
   */
  static chainDuration(startTime, endTime) {
    return Util.formatNumber((endTime - startTime) * 1000);
  }

  /**
   * @param {LH.Config.Settings} settings
   * @return {Array<{name: string, description: string}>}
   */
  static getEnvironmentDisplayValues(settings) {
    const emulationDesc = Util.getEmulationDescriptions(settings);

    return [
      {
        name: 'Device',
        description: emulationDesc.deviceEmulation,
      },
      {
        name: 'Network throttling',
        description: emulationDesc.networkThrottling,
      },
      {
        name: 'CPU throttling',
        description: emulationDesc.cpuThrottling,
      },
    ];
  }

  /**
   * @param {LH.Config.Settings} settings
   * @return {{deviceEmulation: string, networkThrottling: string, cpuThrottling: string, summary: string}}
   */
  static getEmulationDescriptions(settings) {
    let cpuThrottling;
    let networkThrottling;
    let summary;

    const throttling = settings.throttling;

    switch (settings.throttlingMethod) {
      case 'provided':
        cpuThrottling = 'Provided by environment';
        networkThrottling = 'Provided by environment';
        summary = 'No throttling applied';
        break;
      case 'devtools': {
        const {cpuSlowdownMultiplier, requestLatencyMs} = throttling;
        cpuThrottling = `${Util.formatNumber(cpuSlowdownMultiplier)}x slowdown (DevTools)`;
        networkThrottling = `${Util.formatNumber(requestLatencyMs)}${NBSP}ms HTTP RTT, ` +
          `${Util.formatNumber(throttling.downloadThroughputKbps)}${NBSP}Kbps down, ` +
          `${Util.formatNumber(throttling.uploadThroughputKbps)}${NBSP}Kbps up (DevTools)`;
        summary = 'Throttled Fast 3G network';
        break;
      }
      case 'simulate': {
        const {cpuSlowdownMultiplier, rttMs, throughputKbps} = throttling;
        cpuThrottling = `${Util.formatNumber(cpuSlowdownMultiplier)}x slowdown (Simulated)`;
        networkThrottling = `${Util.formatNumber(rttMs)}${NBSP}ms TCP RTT, ` +
          `${Util.formatNumber(throughputKbps)}${NBSP}Kbps throughput (Simulated)`;
        summary = 'Simulated Fast 3G network';
        break;
      }
      default:
        cpuThrottling = 'Unknown';
        networkThrottling = 'Unknown';
        summary = 'Unknown';
    }

    const deviceEmulation = settings.disableDeviceEmulation ? 'No emulation' : 'Emulated Nexus 5X';
    return {
      deviceEmulation,
      cpuThrottling,
      networkThrottling,
      summary: `${deviceEmulation}, ${summary}`,
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Util;
} else {
  self.Util = Util;
}
;
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* globals URL self */

class DOM {
  /**
   * @param {Document} document
   */
  constructor(document) {
    /** @type {Document} */
    this._document = document;
  }

  // TODO(bckenny): can pass along `createElement`'s inferred type
  /**
   * @param {string} name
   * @param {string=} className
   * @param {Object<string, (string|undefined)>=} attrs Attribute key/val pairs.
   *     Note: if an attribute key has an undefined value, this method does not
   *     set the attribute on the node.
   * @return {Element}
   */
  createElement(name, className, attrs = {}) {
    const element = this._document.createElement(name);
    if (className) {
      element.className = className;
    }
    Object.keys(attrs).forEach(key => {
      const value = attrs[key];
      if (typeof value !== 'undefined') {
        element.setAttribute(key, value);
      }
    });
    return element;
  }

  /**
   * @return {DocumentFragment}
   */
  createFragment() {
    return this._document.createDocumentFragment();
  }

  /**
   * @param {Element} parentElem
   * @param {string} elementName
   * @param {string=} className
   * @param {Object<string, (string|undefined)>=} attrs Attribute key/val pairs.
   *     Note: if an attribute key has an undefined value, this method does not
   *     set the attribute on the node.
   * @return {Element}
   */
  createChildOf(parentElem, elementName, className, attrs) {
    const element = this.createElement(elementName, className, attrs);
    parentElem.appendChild(element);
    return element;
  }

  /**
   * @param {string} selector
   * @param {ParentNode} context
   * @return {DocumentFragment} A clone of the template content.
   * @throws {Error}
   */
  cloneTemplate(selector, context) {
    const template = /** @type {?HTMLTemplateElement} */ (context.querySelector(selector));
    if (!template) {
      throw new Error(`Template not found: template${selector}`);
    }

    const clone = this._document.importNode(template.content, true);

    // Prevent duplicate styles in the DOM. After a template has been stamped
    // for the first time, remove the clone's styles so they're not re-added.
    if (template.hasAttribute('data-stamped')) {
      this.findAll('style', clone).forEach(style => style.remove());
    }
    template.setAttribute('data-stamped', 'true');

    return clone;
  }

  /**
   * Resets the "stamped" state of the templates.
   */
  resetTemplates() {
    this.findAll('template[data-stamped]', this._document).forEach(t => {
      t.removeAttribute('data-stamped');
    });
  }

  /**
   * @param {string} text
   * @return {Element}
   */
  convertMarkdownLinkSnippets(text) {
    const element = this.createElement('span');

    // Split on markdown links (e.g. [some link](https://...)).
    const parts = text.split(/\[([^\]]*?)\]\((https?:\/\/.*?)\)/g);

    while (parts.length) {
      // Pop off the same number of elements as there are capture groups.
      const [preambleText, linkText, linkHref] = parts.splice(0, 3);
      element.appendChild(this._document.createTextNode(preambleText));

      // Append link if there are any.
      if (linkText && linkHref) {
        const a = /** @type {HTMLAnchorElement} */ (this.createElement('a'));
        a.rel = 'noopener';
        a.target = '_blank';
        a.textContent = linkText;
        a.href = (new URL(linkHref)).href;
        element.appendChild(a);
      }
    }

    return element;
  }

  /**
   * @param {string} text
   * @return {Element}
   */
  convertMarkdownCodeSnippets(text) {
    const element = this.createElement('span');

    const parts = text.split(/`(.*?)`/g); // Split on markdown code slashes
    while (parts.length) {
      // Pop off the same number of elements as there are capture groups.
      const [preambleText, codeText] = parts.splice(0, 2);
      element.appendChild(this._document.createTextNode(preambleText));
      if (codeText) {
        const pre = /** @type {HTMLPreElement} */ (this.createElement('code'));
        pre.textContent = codeText;
        element.appendChild(pre);
      }
    }

    return element;
  }

  /**
   * @return {Document}
   */
  document() {
    return this._document;
  }

  /**
   * TODO(paulirish): import and conditionally apply the DevTools frontend subclasses instead of this
   * @return {boolean}
   */
  isDevTools() {
    return !!this._document.querySelector('.lh-devtools');
  }

  /**
   * Guaranteed context.querySelector. Always returns an element or throws if
   * nothing matches query.
   * @param {string} query
   * @param {ParentNode} context
   * @return {HTMLElement}
   */
  find(query, context) {
    /** @type {?HTMLElement} */
    const result = context.querySelector(query);
    if (result === null) {
      throw new Error(`query ${query} not found`);
    }
    return result;
  }

  /**
   * Helper for context.querySelectorAll. Returns an Array instead of a NodeList.
   * @param {string} query
   * @param {ParentNode} context
   * @return {Array<HTMLElement>}
   */
  findAll(query, context) {
    return Array.from(context.querySelectorAll(query));
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DOM;
} else {
  self.DOM = DOM;
}
;
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* globals self CriticalRequestChainRenderer Util URL */

/** @typedef {import('./dom.js')} DOM */
/** @typedef {import('./crc-details-renderer.js')} CRCDetailsJSON */
/** @typedef {LH.Result.Audit.OpportunityDetails} OpportunityDetails */

/** @type {Array<string>} */
const URL_PREFIXES = ['http://', 'https://', 'data:'];

class DetailsRenderer {
  /**
   * @param {DOM} dom
   */
  constructor(dom) {
    /** @type {DOM} */
    this._dom = dom;
    /** @type {ParentNode} */
    this._templateContext; // eslint-disable-line no-unused-expressions
  }

  /**
   * @param {ParentNode} context
   */
  setTemplateContext(context) {
    this._templateContext = context;
  }

  /**
   * @param {DetailsJSON|OpportunityDetails} details
   * @return {Element}
   */
  render(details) {
    switch (details.type) {
      case 'text':
        return this._renderText(/** @type {StringDetailsJSON} */ (details));
      case 'url':
        return this._renderTextURL(/** @type {StringDetailsJSON} */ (details));
      case 'bytes':
        return this._renderBytes(/** @type {NumericUnitDetailsJSON} */ (details));
      case 'ms':
        // eslint-disable-next-line max-len
        return this._renderMilliseconds(/** @type {NumericUnitDetailsJSON} */ (details));
      case 'link':
        // @ts-ignore - TODO(bckenny): Fix type hierarchy
        return this._renderLink(/** @type {LinkDetailsJSON} */ (details));
      case 'thumbnail':
        return this._renderThumbnail(/** @type {ThumbnailDetails} */ (details));
      case 'filmstrip':
        // @ts-ignore - TODO(bckenny): Fix type hierarchy
        return this._renderFilmstrip(/** @type {FilmstripDetails} */ (details));
      case 'table':
        // @ts-ignore - TODO(bckenny): Fix type hierarchy
        return this._renderTable(/** @type {TableDetailsJSON} */ (details));
      case 'code':
        return this._renderCode(/** @type {DetailsJSON} */ (details));
      case 'node':
        return this.renderNode(/** @type {NodeDetailsJSON} */(details));
      case 'criticalrequestchain':
        return CriticalRequestChainRenderer.render(this._dom, this._templateContext,
          // @ts-ignore - TODO(bckenny): Fix type hierarchy
          /** @type {CRCDetailsJSON} */ (details));
      case 'opportunity':
        // @ts-ignore - TODO(bckenny): Fix type hierarchy
        return this._renderOpportunityTable(details);
      default: {
        throw new Error(`Unknown type: ${details.type}`);
      }
    }
  }

  /**
   * @param {{value: number, granularity?: number}} details
   * @return {Element}
   */
  _renderBytes(details) {
    // TODO: handle displayUnit once we have something other than 'kb'
    const value = Util.formatBytesToKB(details.value, details.granularity);
    return this._renderText({value});
  }

  /**
   * @param {{value: number, granularity?: number, displayUnit?: string}} details
   * @return {Element}
   */
  _renderMilliseconds(details) {
    let value = Util.formatMilliseconds(details.value, details.granularity);
    if (details.displayUnit === 'duration') {
      value = Util.formatDuration(details.value);
    }

    return this._renderText({value});
  }

  /**
   * @param {{value: string}} text
   * @return {HTMLElement}
   */
  _renderTextURL(text) {
    const url = text.value;

    let displayedPath;
    let displayedHost;
    let title;
    try {
      const parsed = Util.parseURL(url);
      displayedPath = parsed.file === '/' ? parsed.origin : parsed.file;
      displayedHost = parsed.file === '/' ? '' : `(${parsed.hostname})`;
      title = url;
    } catch (/** @type {!Error} */ e) {
      if (!e.name.startsWith('TypeError')) {
        throw e;
      }
      displayedPath = url;
    }

    const element = /** @type {HTMLElement} */ (this._dom.createElement('div', 'lh-text__url'));
    element.appendChild(this._renderText({
      value: displayedPath,
    }));

    if (displayedHost) {
      const hostElem = this._renderText({
        value: displayedHost,
      });
      hostElem.classList.add('lh-text__url-host');
      element.appendChild(hostElem);
    }

    if (title) element.title = url;
    return element;
  }

  /**
   * @param {LinkDetailsJSON} details
   * @return {Element}
   */
  _renderLink(details) {
    const allowedProtocols = ['https:', 'http:'];
    const url = new URL(details.url);
    if (!allowedProtocols.includes(url.protocol)) {
      // Fall back to just the link text if protocol not allowed.
      return this._renderText({
        value: details.text,
      });
    }

    const a = /** @type {HTMLAnchorElement} */ (this._dom.createElement('a'));
    a.rel = 'noopener';
    a.target = '_blank';
    a.textContent = details.text;
    a.href = url.href;

    return a;
  }

  /**
   * @param {{value: string}} text
   * @return {Element}
   */
  _renderText(text) {
    const element = this._dom.createElement('div', 'lh-text');
    element.textContent = text.value;
    return element;
  }

  /**
   * Create small thumbnail with scaled down image asset.
   * If the supplied details doesn't have an image/* mimeType, then an empty span is returned.
   * @param {{value: string}} details
   * @return {Element}
   */
  _renderThumbnail(details) {
    const element = /** @type {HTMLImageElement}*/ (this._dom.createElement('img', 'lh-thumbnail'));
    const strValue = details.value;
    element.src = strValue;
    element.title = strValue;
    element.alt = '';
    return element;
  }

  /**
   * @param {TableDetailsJSON} details
   * @return {Element}
   */
  _renderTable(details) {
    if (!details.items.length) return this._dom.createElement('span');

    const tableElem = this._dom.createElement('table', 'lh-table');
    const theadElem = this._dom.createChildOf(tableElem, 'thead');
    const theadTrElem = this._dom.createChildOf(theadElem, 'tr');

    for (const heading of details.headings) {
      const itemType = heading.itemType || 'text';
      const classes = `lh-table-column--${itemType}`;
      this._dom.createChildOf(theadTrElem, 'th', classes).appendChild(this.render({
        type: 'text',
        value: heading.text || '',
      }));
    }

    const tbodyElem = this._dom.createChildOf(tableElem, 'tbody');
    for (const row of details.items) {
      const rowElem = this._dom.createChildOf(tbodyElem, 'tr');
      for (const heading of details.headings) {
        const key = /** @type {keyof DetailsJSON} */ (heading.key);
        // TODO(bckenny): type should be naturally inferred here.
        const value = /** @type {number|string|DetailsJSON|undefined} */ (row[key]);

        if (typeof value === 'undefined' || value === null) {
          this._dom.createChildOf(rowElem, 'td', 'lh-table-column--empty');
          continue;
        }
        // handle nested types like code blocks in table rows.
        // @ts-ignore - TODO(bckenny): narrow first
        if (value.type) {
          const valueAsDetails = /** @type {DetailsJSON} */ (value);
          const classes = `lh-table-column--${valueAsDetails.type}`;
          this._dom.createChildOf(rowElem, 'td', classes).appendChild(this.render(valueAsDetails));
          continue;
        }

        // build new details item to render
        const item = {
          value: /** @type {number|string} */ (value),
          type: heading.itemType,
          displayUnit: heading.displayUnit,
          granularity: heading.granularity,
        };

        /** @type {string|undefined} */
        // @ts-ignore - TODO(bckenny): handle with refactoring above
        const valueType = value.type;
        const classes = `lh-table-column--${valueType || heading.itemType}`;
        this._dom.createChildOf(rowElem, 'td', classes).appendChild(this.render(item));
      }
    }
    return tableElem;
  }

  /**
   * TODO(bckenny): migrate remaining table rendering to this function, then rename
   * back to _renderTable and replace the original.
   * @param {OpportunityDetails} details
   * @return {Element}
   */
  _renderOpportunityTable(details) {
    if (!details.items.length) return this._dom.createElement('span');

    const tableElem = this._dom.createElement('table', 'lh-table');
    const theadElem = this._dom.createChildOf(tableElem, 'thead');
    const theadTrElem = this._dom.createChildOf(theadElem, 'tr');

    for (const heading of details.headings) {
      const valueType = heading.valueType || 'text';
      const classes = `lh-table-column--${valueType}`;
      const labelEl = this._dom.createElement('div', 'lh-text');
      labelEl.textContent = heading.label;
      this._dom.createChildOf(theadTrElem, 'th', classes).appendChild(labelEl);
    }

    const tbodyElem = this._dom.createChildOf(tableElem, 'tbody');
    for (const row of details.items) {
      const rowElem = this._dom.createChildOf(tbodyElem, 'tr');
      for (const heading of details.headings) {
        const key = /** @type {keyof LH.Result.Audit.OpportunityDetailsItem} */ (heading.key);
        const value = row[key];

        if (typeof value === 'undefined' || value === null) {
          this._dom.createChildOf(rowElem, 'td', 'lh-table-column--empty');
          continue;
        }

        const valueType = heading.valueType;
        let itemElement;

        // TODO(bckenny): as we add more table types, split out into _renderTableItem fn.
        switch (valueType) {
          case 'url': {
            // Fall back to <pre> rendering if not actually a URL.
            const strValue = /** @type {string} */ (value);
            if (URL_PREFIXES.some(prefix => strValue.startsWith(prefix))) {
              itemElement = this._renderTextURL({value: strValue});
            } else {
              const codeValue = /** @type {(number|string|undefined)} */ (value);
              itemElement = this._renderCode({value: codeValue});
            }
            break;
          }
          case 'timespanMs': {
            const numValue = /** @type {number} */ (value);
            itemElement = this._renderMilliseconds({value: numValue});
            break;
          }
          case 'bytes': {
            const numValue = /** @type {number} */ (value);
            itemElement = this._renderBytes({value: numValue, granularity: 1});
            break;
          }
          case 'thumbnail': {
            const strValue = /** @type {string} */ (value);
            itemElement = this._renderThumbnail({value: strValue});
            break;
          }
          default: {
            throw new Error(`Unknown valueType: ${valueType}`);
          }
        }

        const classes = `lh-table-column--${valueType}`;
        this._dom.createChildOf(rowElem, 'td', classes).appendChild(itemElement);
      }
    }
    return tableElem;
  }

  /**
   * @param {NodeDetailsJSON} item
   * @return {Element}
   * @protected
   */
  renderNode(item) {
    const element = /** @type {HTMLSpanElement} */ (this._dom.createElement('span', 'lh-node'));
    if (item.snippet) {
      element.textContent = item.snippet;
    }
    if (item.selector) {
      element.title = item.selector;
    }
    if (item.path) element.setAttribute('data-path', item.path);
    if (item.selector) element.setAttribute('data-selector', item.selector);
    if (item.snippet) element.setAttribute('data-snippet', item.snippet);
    return element;
  }

  /**
   * @param {FilmstripDetails} details
   * @return {Element}
   */
  _renderFilmstrip(details) {
    const filmstripEl = this._dom.createElement('div', 'lh-filmstrip');

    for (const thumbnail of details.items) {
      const frameEl = this._dom.createChildOf(filmstripEl, 'div', 'lh-filmstrip__frame');
      this._dom.createChildOf(frameEl, 'img', 'lh-filmstrip__thumbnail', {
        src: `data:image/jpeg;base64,${thumbnail.data}`,
        alt: `Screenshot`,
      });
    }
    return filmstripEl;
  }

  /**
   * @param {{value?: string|number}} details
   * @return {Element}
   */
  _renderCode(details) {
    const pre = this._dom.createElement('pre', 'lh-code');
    pre.textContent = /** @type {string} */ (details.value);
    return pre;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DetailsRenderer;
} else {
  self.DetailsRenderer = DetailsRenderer;
}

// TODO, what's the diff between DetailsJSON and NumericUnitDetailsJSON?
/**
 * @typedef {{
      type: string,
      value: (string|number|undefined),
      granularity?: number,
      displayUnit?: string
  }} DetailsJSON
 */

/**
 * @typedef {{
      type: string,
      value: string,
      granularity?: number,
      displayUnit?: string,
  }} StringDetailsJSON
 */

/**
 * @typedef {{
      type: string,
      value: number,
      granularity?: number,
      displayUnit?: string,
  }} NumericUnitDetailsJSON
 */

/**
 * @typedef {{
      type: string,
      path?: string,
      selector?: string,
      snippet?: string
  }} NodeDetailsJSON
 */

/**
 * @typedef {{
      itemType: string,
      key: string,
      text?: string,
      granularity?: number,
      displayUnit?: string,
  }} TableHeaderJSON
 */

/** @typedef {{
      type: string,
      items: Array<DetailsJSON>,
      headings: Array<TableHeaderJSON>
  }} TableDetailsJSON
 */

/** @typedef {{
      type: string,
      value: string,
  }} ThumbnailDetails
 */

/** @typedef {{
      type: string,
      text: string,
      url: string
  }} LinkDetailsJSON
 */

/** @typedef {{
      type: string,
      scale: number,
      items: Array<{timing: number, timestamp: number, data: string}>,
  }} FilmstripDetails
 */
;
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * @fileoverview This file contains helpers for constructing and rendering the
 * critical request chains network tree.
 */

/* globals self Util */

/** @typedef {import('./dom.js')} DOM */

class CriticalRequestChainRenderer {
  /**
   * Create render context for critical-request-chain tree display.
   * @param {LH.Audit.SimpleCriticalRequestNode} tree
   * @return {{tree: LH.Audit.SimpleCriticalRequestNode, startTime: number, transferSize: number}}
   */
  static initTree(tree) {
    let startTime = 0;
    const rootNodes = Object.keys(tree);
    if (rootNodes.length > 0) {
      const node = tree[rootNodes[0]];
      startTime = node.request.startTime;
    }

    return {tree, startTime, transferSize: 0};
  }

  /**
   * Helper to create context for each critical-request-chain node based on its
   * parent. Calculates if this node is the last child, whether it has any
   * children itself and what the tree looks like all the way back up to the root,
   * so the tree markers can be drawn correctly.
   * @param {LH.Audit.SimpleCriticalRequestNode} parent
   * @param {string} id
   * @param {number} startTime
   * @param {number} transferSize
   * @param {Array<boolean>=} treeMarkers
   * @param {boolean=} parentIsLastChild
   * @return {CRCSegment}
   */
  static createSegment(parent, id, startTime, transferSize, treeMarkers, parentIsLastChild) {
    const node = parent[id];
    const siblings = Object.keys(parent);
    const isLastChild = siblings.indexOf(id) === (siblings.length - 1);
    const hasChildren = Object.keys(node.children).length > 0;

    // Copy the tree markers so that we don't change by reference.
    const newTreeMarkers = Array.isArray(treeMarkers) ? treeMarkers.slice(0) : [];

    // Add on the new entry.
    if (typeof parentIsLastChild !== 'undefined') {
      newTreeMarkers.push(!parentIsLastChild);
    }

    return {
      node,
      isLastChild,
      hasChildren,
      startTime,
      transferSize: transferSize + node.request.transferSize,
      treeMarkers: newTreeMarkers,
    };
  }

  /**
   * Creates the DOM for a tree segment.
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {CRCSegment} segment
   * @return {Node}
   */
  static createChainNode(dom, tmpl, segment) {
    const chainsEl = dom.cloneTemplate('#tmpl-lh-crc__chains', tmpl);

    // Hovering over request shows full URL.
    dom.find('.crc-node', chainsEl).setAttribute('title', segment.node.request.url);

    const treeMarkeEl = dom.find('.crc-node__tree-marker', chainsEl);

    // Construct lines and add spacers for sub requests.
    segment.treeMarkers.forEach(separator => {
      if (separator) {
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker vert'));
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));
      } else {
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));
      }
    });

    if (segment.isLastChild) {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker up-right'));
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));
    } else {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker vert-right'));
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));
    }

    if (segment.hasChildren) {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker horiz-down'));
    } else {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));
    }

    // Fill in url, host, and request size information.
    const {file, hostname} = Util.parseURL(segment.node.request.url);
    const treevalEl = dom.find('.crc-node__tree-value', chainsEl);
    dom.find('.crc-node__tree-file', treevalEl).textContent = `${file}`;
    dom.find('.crc-node__tree-hostname', treevalEl).textContent = hostname ? `(${hostname})` : '';

    if (!segment.hasChildren) {
      const span = dom.createElement('span', 'crc-node__chain-duration');
      span.textContent = ' - ' + Util.chainDuration(
          segment.node.request.startTime, segment.node.request.endTime) + 'ms, ';
      const span2 = dom.createElement('span', 'crc-node__chain-duration');
      span2.textContent = Util.formatBytesToKB(segment.node.request.transferSize, 0.01);

      treevalEl.appendChild(span);
      treevalEl.appendChild(span2);
    }

    return chainsEl;
  }

  /**
   * Recursively builds a tree from segments.
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {CRCSegment} segment
   * @param {Element} elem Parent element.
   * @param {CRCDetailsJSON} details
   */
  static buildTree(dom, tmpl, segment, elem, details) {
    elem.appendChild(CriticalRequestChainRenderer.createChainNode(dom, tmpl, segment));

    for (const key of Object.keys(segment.node.children)) {
      const childSegment = CriticalRequestChainRenderer.createSegment(segment.node.children, key,
         segment.startTime, segment.transferSize, segment.treeMarkers, segment.isLastChild);
      CriticalRequestChainRenderer.buildTree(dom, tmpl, childSegment, elem, details);
    }
  }

  /**
   * @param {DOM} dom
   * @param {ParentNode} templateContext
   * @param {CRCDetailsJSON} details
   * @return {Element}
   */
  static render(dom, templateContext, details) {
    const tmpl = dom.cloneTemplate('#tmpl-lh-crc', templateContext);
    const containerEl = dom.find('.lh-crc', tmpl);

    // Fill in top summary.
    dom.find('.lh-crc__longest_duration', tmpl).textContent =
        Util.formatNumber(details.longestChain.duration) + 'ms';
    dom.find('.lh-crc__longest_length', tmpl).textContent = details.longestChain.length.toString();
    dom.find('.lh-crc__longest_transfersize', tmpl).textContent =
        Util.formatBytesToKB(details.longestChain.transferSize);

    // Construct visual tree.
    const root = CriticalRequestChainRenderer.initTree(details.chains);
    for (const key of Object.keys(root.tree)) {
      const segment = CriticalRequestChainRenderer.createSegment(root.tree, key,
          root.startTime, root.transferSize);
      CriticalRequestChainRenderer.buildTree(dom, tmpl, segment, containerEl, details);
    }

    return dom.find('.lh-crc-container', tmpl);
  }
}

// Allow Node require()'ing.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CriticalRequestChainRenderer;
} else {
  self.CriticalRequestChainRenderer = CriticalRequestChainRenderer;
}

/** @typedef {{
      type: string,
      header: {text: string},
      longestChain: {duration: number, length: number, transferSize: number},
      chains: LH.Audit.SimpleCriticalRequestNode
  }} CRCDetailsJSON
 */

/** @typedef {{
      node: LH.Audit.SimpleCriticalRequestNode[string],
      isLastChild: boolean,
      hasChildren: boolean,
      startTime: number,
      transferSize: number,
      treeMarkers: Array<boolean>
  }} CRCSegment
 */
;
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* global URL */

/**
 * @fileoverview
 * @suppress {reportUnknownTypes}
 */

/**
 * Generate a filenamePrefix of hostname_YYYY-MM-DD_HH-MM-SS
 * Date/time uses the local timezone, however Node has unreliable ICU
 * support, so we must construct a YYYY-MM-DD date format manually. :/
 * @param {{finalUrl: string, fetchTime: string}} lhr
 * @return {string}
 */
function getFilenamePrefix(lhr) {
  const hostname = new (getUrlConstructor())(lhr.finalUrl).hostname;
  const date = (lhr.fetchTime && new Date(lhr.fetchTime)) || new Date();

  const timeStr = date.toLocaleTimeString('en-US', {hour12: false});
  const dateParts = date.toLocaleDateString('en-US', {
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).split('/');
  // @ts-ignore - parts exists
  dateParts.unshift(dateParts.pop());
  const dateStr = dateParts.join('-');

  const filenamePrefix = `${hostname}_${dateStr}_${timeStr}`;
  // replace characters that are unfriendly to filenames
  return filenamePrefix.replace(/[/?<>\\:*|":]/g, '-');
}

function getUrlConstructor() {
  if (typeof module !== 'undefined' && module.exports) {
    return require('./url-shim');
  } else {
    return URL;
  }
}

// @ts-ignore - suppress `module` error for type-checking in a browser context.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {getFilenamePrefix};
}
;
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * Logs messages via a UI butter.
 */
class Logger {
  /**
   * @param {Element} element
   */
  constructor(element) {
    /** @type {Element} */
    this.el = element;
    this._id = undefined;
  }

  /**
   * Shows a butter bar.
   * @param {string} msg The message to show.
   * @param {boolean=} autoHide True to hide the message after a duration.
   *     Default is true.
   */
  log(msg, autoHide = true) {
    this._id && clearTimeout(this._id);

    this.el.textContent = msg;
    this.el.classList.add('show');
    if (autoHide) {
      this._id = setTimeout(_ => {
        this.el.classList.remove('show');
      }, 7000);
    }
  }

  /**
   * @param {string} msg
   */
  warn(msg) {
    this.log('Warning: ' + msg);
  }

  /**
   * @param {string} msg
   */
  error(msg) {
    this.log(msg);

    // Rethrow to make sure it's auditable as an error, but in a setTimeout so page
    // recovers gracefully and user can try loading a report again.
    setTimeout(_ => {
      throw new Error(msg);
    }, 0);
  }

  /**
   * Explicitly hides the butter bar.
   */
  hide() {
    this._id && clearTimeout(this._id);
    this.el.classList.remove('show');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Logger;
}
;
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * @fileoverview Adds export button, print, and other dynamic functionality to
 * the report.
 */

/* globals self URL Blob CustomEvent getFilenamePrefix window */

/** @typedef {import('./dom.js')} DOM */

class ReportUIFeatures {
  /**
   * @param {DOM} dom
   */
  constructor(dom) {
    /** @type {LH.ReportResult} */
    this.json; // eslint-disable-line no-unused-expressions
    /** @type {DOM} */
    this._dom = dom;
    /** @type {Document} */
    this._document = this._dom.document();
    /** @type {boolean} */
    this._copyAttempt = false;
    /** @type {HTMLElement} */
    this.exportButton; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.headerSticky; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.headerBackground; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.lighthouseIcon; // eslint-disable-line no-unused-expressions
    /** @type {!HTMLElement} */
    this.scoresWrapperBg; // eslint-disable-line no-unused-expressions
    /** @type {!HTMLElement} */
    this.productInfo; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.toolbar; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.toolbarMetadata; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.env; // eslint-disable-line no-unused-expressions
    /** @type {number} */
    this.headerOverlap = 0;
    /** @type {number} */
    this.headerHeight = 0;
    /** @type {number} */
    this.latestKnownScrollY = 0;
    /** @type {boolean} */
    this.isAnimatingHeader = false;

    this.onMediaQueryChange = this.onMediaQueryChange.bind(this);
    this.onCopy = this.onCopy.bind(this);
    this.onExportButtonClick = this.onExportButtonClick.bind(this);
    this.onExport = this.onExport.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.printShortCutDetect = this.printShortCutDetect.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onChevronClick = this.onChevronClick.bind(this);
  }

  /**
   * Adds export button, print, and other functionality to the report. The method
   * should be called whenever the report needs to be re-rendered.
   * @param {LH.ReportResult} report
   */
  initFeatures(report) {
    if (this._dom.isDevTools()) return;

    this.json = report;
    this._setupMediaQueryListeners();
    this._setupExportButton();
    this._setUpCollapseDetailsAfterPrinting();
    this._setupHeaderAnimation();
    this._resetUIState();
    this._document.addEventListener('keydown', this.printShortCutDetect);
    // @ts-ignore - tsc thinks document can't listen for `copy`
    this._document.addEventListener('copy', this.onCopy);
  }

  /**
   * Fires a custom DOM event on target.
   * @param {string} name Name of the event.
   * @param {Node=} target DOM node to fire the event on.
   * @param {*=} detail Custom data to include.
   */
  _fireEventOn(name, target = this._document, detail) {
    const event = new CustomEvent(name, detail ? {detail} : undefined);
    target.dispatchEvent(event);
  }

  _setupMediaQueryListeners() {
    const mediaQuery = self.matchMedia('(max-width: 600px)');
    mediaQuery.addListener(this.onMediaQueryChange);
    // Ensure the handler is called on init
    this.onMediaQueryChange(mediaQuery);
  }

  /**
   * Handle media query change events.
   * @param {MediaQueryList} mql
   */
  onMediaQueryChange(mql) {
    const root = this._dom.find('.lh-root', this._document);
    root.classList.toggle('lh-narrow', mql.matches);
  }

  _setupExportButton() {
    this.exportButton = this._dom.find('.lh-export__button', this._document);
    this.exportButton.addEventListener('click', this.onExportButtonClick);

    const dropdown = this._dom.find('.lh-export__dropdown', this._document);
    dropdown.addEventListener('click', this.onExport);
  }

  _setupHeaderAnimation() {
    const scoresWrapper = this._dom.find('.lh-scores-wrapper', this._document);
    this.headerOverlap = /** @type {number} */
      // @ts-ignore - TODO: move off CSSOM to support other browsers
      (scoresWrapper.computedStyleMap().get('margin-top').value);

    this.headerSticky = this._dom.find('.lh-header-sticky', this._document);
    this.headerBackground = this._dom.find('.lh-header-bg', this._document);
    this.lighthouseIcon = this._dom.find('.lh-lighthouse', this._document);
    this.scoresWrapperBg = this._dom.find('.lh-scores-wrapper__background', this._document);
    this.productInfo = this._dom.find('.lh-product-info', this._document);
    this.toolbar = this._dom.find('.lh-toolbar', this._document);
    this.toolbarMetadata = this._dom.find('.lh-toolbar__metadata', this._document);

    // @ts-ignore - TODO: move off CSSOM to support other browsers
    this.headerHeight = this.headerBackground.computedStyleMap().get('height').value;

    this._document.addEventListener('scroll', this.onScroll, {passive: true});

    const toolbarChevron = this._dom.find('.lh-toggle-arrow', this.toolbar);
    toolbarChevron.addEventListener('click', this.onChevronClick);
  }

  /**
   * Handle copy events.
   * @param {ClipboardEvent} e
   */
  onCopy(e) {
    // Only handle copy button presses (e.g. ignore the user copying page text).
    if (this._copyAttempt) {
      // We want to write our own data to the clipboard, not the user's text selection.
      e.preventDefault();
      e.clipboardData.setData('text/plain', JSON.stringify(this.json, null, 2));

      this._fireEventOn('lh-log', this._document, {
        cmd: 'log', msg: 'Report JSON copied to clipboard',
      });
    }

    this._copyAttempt = false;
  }

  /**
   * Copies the report JSON to the clipboard (if supported by the browser).
   */
  onCopyButtonClick() {
    this._fireEventOn('lh-analytics', this._document, {
      cmd: 'send',
      fields: {hitType: 'event', eventCategory: 'report', eventAction: 'copy'},
    });

    try {
      if (this._document.queryCommandSupported('copy')) {
        this._copyAttempt = true;

        // Note: In Safari 10.0.1, execCommand('copy') returns true if there's
        // a valid text selection on the page. See http://caniuse.com/#feat=clipboard.
        if (!this._document.execCommand('copy')) {
          this._copyAttempt = false; // Prevent event handler from seeing this as a copy attempt.

          this._fireEventOn('lh-log', this._document, {
            cmd: 'warn', msg: 'Your browser does not support copy to clipboard.',
          });
        }
      }
    } catch (/** @type {Error} */ e) {
      this._copyAttempt = false;
      this._fireEventOn('lh-log', this._document, {cmd: 'log', msg: e.message});
    }
  }

  onScroll() {
    this.latestKnownScrollY = window.scrollY;

    if (!this.isAnimatingHeader) {
      window.requestAnimationFrame(this.animateHeader.bind(this));
    }
    this.isAnimatingHeader = true;
  }

  onChevronClick() {
    const toggle = this._dom.find('.lh-config__settings-toggle', this._document);

    if (toggle.hasAttribute('open')) {
      toggle.removeAttribute('open');
    } else {
      toggle.setAttribute('open', 'true');
    }
  }

  animateHeader() {
    const collapsedHeaderHeight = 50;
    const heightDiff = this.headerHeight - collapsedHeaderHeight + this.headerOverlap;
    const scrollPct = Math.min(1,
      this.latestKnownScrollY / (this.headerHeight - collapsedHeaderHeight));

    const scoresContainer = /** @type {HTMLElement} */ (this.scoresWrapperBg.parentElement);

    this.headerSticky.style.transform = `translateY(${heightDiff * scrollPct * -1}px)`;
    this.headerBackground.style.transform = `translateY(${scrollPct * this.headerOverlap}px)`;
    this.lighthouseIcon.style.transform =
      `translate3d(calc(var(--report-content-width) / 2),` +
      ` calc(-100% - ${scrollPct * this.headerOverlap * -1}px), 0) scale(${1 - scrollPct})`;
    this.lighthouseIcon.style.opacity = Math.max(0, 1 - scrollPct).toString();

    // Switch up the score background & shadows
    this.scoresWrapperBg.style.opacity = (1 - scrollPct).toString();
    this.scoresWrapperBg.style.transform = `scaleY(${1 - scrollPct * 0.2})`;
    const scoreShadow = this._dom.find('.lh-scores-wrapper__shadow', scoresContainer);
    scoreShadow.style.opacity = scrollPct.toString();
    scoreShadow.style.transform = `scaleY(${1 - scrollPct * 0.2})`;

    // Fade & move the scorescale
    const scoreScalePositionDelta = 32;
    const scoreScale = this._dom.find('.lh-scorescale', scoresContainer);
    scoreScale.style.opacity = `${1 - scrollPct}`;
    scoreScale.style.transform = `translateY(${scrollPct * -scoreScalePositionDelta}px)`;

    // Move the toolbar & export
    this.toolbar.style.transform = `translateY(${heightDiff * scrollPct}px)`;
    const exportParent = this.exportButton.parentElement;
    if (exportParent) {
      exportParent.style.transform = `translateY(${heightDiff * scrollPct}px)`;
    }
    this.exportButton.style.transform = `scale(${1 - 0.2 * scrollPct})`;
    // Start showing the productinfo when we are at the 50% mark of our animation
    const opacity = scrollPct < 0.5 ? 0 : (scrollPct - 0.5) * 2;
    this.productInfo.style.opacity = this.toolbarMetadata.style.opacity = opacity.toString();

    this.isAnimatingHeader = false;
  }

  closeExportDropdown() {
    this.exportButton.classList.remove('active');
  }

  /**
   * Click handler for export button.
   * @param {Event} e
   */
  onExportButtonClick(e) {
    e.preventDefault();
    const el = /** @type {Element} */ (e.target);
    el.classList.toggle('active');
    this._document.addEventListener('keydown', this.onKeyDown);
  }

  /**
   * Resets the state of page before capturing the page for export.
   * When the user opens the exported HTML page, certain UI elements should
   * be in their closed state (not opened) and the templates should be unstamped.
   */
  _resetUIState() {
    this.closeExportDropdown();
    this._dom.resetTemplates();
  }

  /**
   * Handler for "export as" button.
   * @param {Event} e
   */
  onExport(e) {
    e.preventDefault();

    const el = /** @type {?Element} */ (e.target);

    if (!el || !el.hasAttribute('data-action')) {
      return;
    }

    switch (el.getAttribute('data-action')) {
      case 'copy':
        this.onCopyButtonClick();
        break;
      case 'print-summary':
        this.collapseAllDetails();
        this.closeExportDropdown();
        self.print();
        break;
      case 'print-expanded':
        this.expandAllDetails();
        this.closeExportDropdown();
        self.print();
        break;
      case 'save-json': {
        const jsonStr = JSON.stringify(this.json, null, 2);
        this._saveFile(new Blob([jsonStr], {type: 'application/json'}));
        break;
      }
      case 'save-html': {
        const htmlStr = this.getReportHtml();
        try {
          this._saveFile(new Blob([htmlStr], {type: 'text/html'}));
        } catch (/** @type {Error} */ e) {
          this._fireEventOn('lh-log', this._document, {
            cmd: 'error', msg: 'Could not export as HTML. ' + e.message,
          });
        }
        break;
      }
      case 'open-viewer': {
        const viewerPath = '/lighthouse/viewer/';
        ReportUIFeatures.openTabAndSendJsonReport(this.json, viewerPath);
        break;
      }
      case 'save-gist': {
        this.saveAsGist();
        break;
      }
    }

    this.closeExportDropdown();
    this._document.removeEventListener('keydown', this.onKeyDown);
  }

  /**
   * Keydown handler for the document.
   * @param {KeyboardEvent} e
   */
  onKeyDown(e) {
    if (e.keyCode === 27) { // ESC
      this.closeExportDropdown();
    }
  }

  /**
   * Opens a new tab to the online viewer and sends the local page's JSON results
   * to the online viewer using postMessage.
   * @param {LH.ReportResult} reportJson
   * @param {string} viewerPath
   * @protected
   */
  static openTabAndSendJsonReport(reportJson, viewerPath) {
    const VIEWER_ORIGIN = 'https://googlechrome.github.io';
    // Chrome doesn't allow us to immediately postMessage to a popup right
    // after it's created. Normally, we could also listen for the popup window's
    // load event, however it is cross-domain and won't fire. Instead, listen
    // for a message from the target app saying "I'm open".
    const json = reportJson;
    window.addEventListener('message', function msgHandler(/** @type {Event} */ e) {
      const messageEvent = /** @type {MessageEvent} */ (e);
      if (messageEvent.origin !== VIEWER_ORIGIN) {
        return;
      }
      if (popup && messageEvent.data.opened) {
        popup.postMessage({lhresults: json}, VIEWER_ORIGIN);
        window.removeEventListener('message', msgHandler);
      }
    });

    // The popup's window.name is keyed by version+url+fetchTime, so we reuse/select tabs correctly
    // @ts-ignore - If this is a v2 LHR, use old `generatedTime`.
    const fallbackFetchTime = /** @type {string} */ (json.generatedTime);
    const fetchTime = json.fetchTime || fallbackFetchTime;
    const windowName = `${json.lighthouseVersion}-${json.requestedUrl}-${fetchTime}`;
    const popup = window.open(`${VIEWER_ORIGIN}${viewerPath}`, windowName);
  }

  /**
   * Expands audit details when user prints via keyboard shortcut.
   * @param {KeyboardEvent} e
   */
  printShortCutDetect(e) {
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 80) { // Ctrl+P
      this.closeExportDropdown();
    }
  }

  /**
   * Expands all audit `<details>`.
   * Ideally, a print stylesheet could take care of this, but CSS has no way to
   * open a `<details>` element.
   */
  expandAllDetails() {
    const details = /** @type {Array<HTMLDetailsElement>} */ (this._dom.findAll(
        '.lh-categories details', this._document));
    details.map(detail => detail.open = true);
  }

  /**
   * Collapses all audit `<details>`.
   * open a `<details>` element.
   */
  collapseAllDetails() {
    const details = /** @type {Array<HTMLDetailsElement>} */ (this._dom.findAll(
        '.lh-categories details', this._document));
    details.map(detail => detail.open = false);
  }

  /**
   * Sets up listeners to collapse audit `<details>` when the user closes the
   * print dialog, all `<details>` are collapsed.
   */
  _setUpCollapseDetailsAfterPrinting() {
    // FF and IE implement these old events.
    if ('onbeforeprint' in self) {
      self.addEventListener('afterprint', this.collapseAllDetails);
    } else {
      const win = /** @type {Window} */ (self);
      // Note: FF implements both window.onbeforeprint and media listeners. However,
      // it doesn't matchMedia doesn't fire when matching 'print'.
      win.matchMedia('print').addListener(mql => {
        if (mql.matches) {
          this.expandAllDetails();
        } else {
          this.collapseAllDetails();
        }
      });
    }
  }

  /**
   * Returns the html that recreates this report.
   * @return {string}
   * @protected
   */
  getReportHtml() {
    this._resetUIState();
    return this._document.documentElement.outerHTML;
  }

  /**
   * Save json as a gist. Unimplemented in base UI features.
   * @protected
   */
  saveAsGist() {
    throw new Error('Cannot save as gist from base report');
  }

  /**
   * Downloads a file (blob) using a[download].
   * @param {Blob|File} blob The file to save.
   * @private
   */
  _saveFile(blob) {
    const filename = getFilenamePrefix({
      finalUrl: this.json.finalUrl,
      fetchTime: this.json.fetchTime,
    });

    const ext = blob.type.match('json') ? '.json' : '.html';
    const href = URL.createObjectURL(blob);

    const a = /** @type {HTMLAnchorElement} */ (this._dom.createElement('a'));
    a.download = `${filename}${ext}`;
    a.href = href;
    this._document.body.appendChild(a); // Firefox requires anchor to be in the DOM.
    a.click();

    // cleanup.
    this._document.body.removeChild(a);
    setTimeout(_ => URL.revokeObjectURL(href), 500);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReportUIFeatures;
} else {
  self.ReportUIFeatures = ReportUIFeatures;
}
;
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* globals self, Util */

/** @typedef {import('./dom.js')} DOM */
/** @typedef {import('./report-renderer.js')} ReportRenderer */
/** @typedef {import('./details-renderer.js')} DetailsRenderer */
/** @typedef {import('./util.js')} Util */

class CategoryRenderer {
  /**
   * @param {DOM} dom
   * @param {DetailsRenderer} detailsRenderer
   */
  constructor(dom, detailsRenderer) {
    /** @type {DOM} */
    this.dom = dom;
    /** @type {DetailsRenderer} */
    this.detailsRenderer = detailsRenderer;
    /** @type {ParentNode} */
    this.templateContext = this.dom.document();

    this.detailsRenderer.setTemplateContext(this.templateContext);
  }

  /**
   * @param {LH.ReportResult.AuditRef} audit
   * @param {number} index
   * @return {Element}
   */
  renderAudit(audit, index) {
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-audit', this.templateContext);
    return this.populateAuditValues(audit, index, tmpl);
  }

  /**
   * Populate an DOM tree with audit details. Used by renderAudit and renderOpportunity
   * @param {LH.ReportResult.AuditRef} audit
   * @param {number} index
   * @param {DocumentFragment} tmpl
   * @return {Element}
   */
  populateAuditValues(audit, index, tmpl) {
    const auditEl = this.dom.find('.lh-audit', tmpl);
    auditEl.id = audit.result.id;
    const scoreDisplayMode = audit.result.scoreDisplayMode;

    if (audit.result.displayValue) {
      const displayValue = Util.formatDisplayValue(audit.result.displayValue);
      this.dom.find('.lh-audit__display-text', auditEl).textContent = displayValue;
    }

    const titleEl = this.dom.find('.lh-audit__title', auditEl);
    titleEl.appendChild(this.dom.convertMarkdownCodeSnippets(audit.result.title));
    this.dom.find('.lh-audit__description', auditEl)
        .appendChild(this.dom.convertMarkdownLinkSnippets(audit.result.description));

    const header = /** @type {HTMLDetailsElement} */ (this.dom.find('details', auditEl));
    if (audit.result.details && audit.result.details.type) {
      const elem = this.detailsRenderer.render(audit.result.details);
      elem.classList.add('lh-details');
      header.appendChild(elem);
    }
    this.dom.find('.lh-audit__index', auditEl).textContent = `${index + 1}`;

    // Add chevron SVG to the end of the summary
    this.dom.find('.lh-chevron-container', auditEl).appendChild(this._createChevron());
    this._setRatingClass(auditEl, audit.result.score, scoreDisplayMode);

    if (audit.result.scoreDisplayMode === 'error') {
      auditEl.classList.add(`lh-audit--error`);
      const textEl = this.dom.find('.lh-audit__display-text', auditEl);
      textEl.textContent = 'Error!';
      textEl.classList.add('tooltip-boundary');
      const tooltip = this.dom.createChildOf(textEl, 'div', 'tooltip tooltip--error');
      tooltip.textContent = audit.result.errorMessage || 'Report error: no audit information';
    } else if (audit.result.explanation) {
      const explEl = this.dom.createChildOf(titleEl, 'div', 'lh-audit-explanation');
      explEl.textContent = audit.result.explanation;
    }
    const warnings = audit.result.warnings;
    if (!warnings || warnings.length === 0) return auditEl;

    // Add list of warnings or singular warning
    const warningsEl = this.dom.createChildOf(titleEl, 'div', 'lh-warnings');
    if (warnings.length === 1) {
      warningsEl.textContent = `Warning: ${warnings.join('')}`;
    } else {
      warningsEl.textContent = 'Warnings: ';
      const warningsUl = this.dom.createChildOf(warningsEl, 'ul');
      for (const warning of warnings) {
        const item = this.dom.createChildOf(warningsUl, 'li');
        item.textContent = warning;
      }
    }
    return auditEl;
  }

  /**
   * @return {HTMLElement}
   */
  _createChevron() {
    const chevronTmpl = this.dom.cloneTemplate('#tmpl-lh-chevron', this.templateContext);
    const chevronEl = this.dom.find('.lh-chevron', chevronTmpl);
    return chevronEl;
  }

  /**
   * @param {Element} element DOM node to populate with values.
   * @param {number|null} score
   * @param {string} scoreDisplayMode
   * @return {Element}
   */
  _setRatingClass(element, score, scoreDisplayMode) {
    const rating = Util.calculateRating(score, scoreDisplayMode);
    element.classList.add(`lh-audit--${rating}`, `lh-audit--${scoreDisplayMode}`);
    return element;
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @return {Element}
   */
  renderCategoryHeader(category) {
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-category-header', this.templateContext);

    const gaugeContainerEl = this.dom.find('.lh-score__gauge', tmpl);
    const gaugeEl = this.renderScoreGauge(category);
    gaugeContainerEl.appendChild(gaugeEl);

    this.dom.find('.lh-category-header__title', tmpl).appendChild(
      this.dom.convertMarkdownCodeSnippets(category.title));
    if (category.description) {
      const descEl = this.dom.convertMarkdownLinkSnippets(category.description);
      this.dom.find('.lh-category-header__description', tmpl).appendChild(descEl);
    }

    return /** @type {Element} */ (tmpl.firstElementChild);
  }

  /**
   * Renders the group container for a group of audits. Individual audit elements can be added
   * directly to the returned element.
   * @param {LH.Result.ReportGroup} group
   * @param {{expandable: boolean, itemCount?: number}} opts
   * @return {Element}
   */
  renderAuditGroup(group, opts) {
    const expandable = opts.expandable;
    const groupEl = this.dom.createElement(expandable ? 'details' : 'div', 'lh-audit-group');
    const summmaryEl = this.dom.createChildOf(groupEl, 'summary', 'lh-audit-group__summary');
    const headerEl = this.dom.createChildOf(summmaryEl, 'div', 'lh-audit-group__header');
    const itemCountEl = this.dom.createChildOf(summmaryEl, 'div', 'lh-audit-group__itemcount');
    if (expandable) {
      const chevronEl = summmaryEl.appendChild(this._createChevron());
      chevronEl.title = 'Show audits';
    }

    if (group.description) {
      const auditGroupDescription = this.dom.createElement('div', 'lh-audit-group__description');
      auditGroupDescription.appendChild(this.dom.convertMarkdownLinkSnippets(group.description));
      groupEl.appendChild(auditGroupDescription);
    }
    headerEl.textContent = group.title;

    if (opts.itemCount) {
      itemCountEl.textContent = `${opts.itemCount} audits`;
    }
    return groupEl;
  }

  /**
   * Find the total number of audits contained within a section.
   * Accounts for nested subsections like Accessibility.
   * @param {Array<Element>} elements
   * @return {number}
   */
  _getTotalAuditsLength(elements) {
    // Create a scratch element to append sections to so we can reuse querySelectorAll().
    const scratch = this.dom.createElement('div');
    elements.forEach(function(element) {
      scratch.appendChild(element);
    });
    const subAudits = scratch.querySelectorAll('.lh-audit');
    if (subAudits.length) {
      return subAudits.length;
    } else {
      return elements.length;
    }
  }

  /**
   * @param {Array<Element>} elements
   * @return {Element}
   */
  _renderFailedAuditsSection(elements) {
    const failedElem = this.dom.createElement('div');
    failedElem.classList.add('lh-failed-audits');
    elements.forEach(elem => failedElem.appendChild(elem));
    return failedElem;
  }

  /**
   * @param {Array<Element>} elements
   * @return {Element}
   */
  renderPassedAuditsSection(elements) {
    const passedElem = this.renderAuditGroup({
      title: `Passed audits`,
    }, {expandable: true, itemCount: this._getTotalAuditsLength(elements)});
    passedElem.classList.add('lh-passed-audits');
    elements.forEach(elem => passedElem.appendChild(elem));
    return passedElem;
  }

  /**
   * @param {Array<Element>} elements
   * @return {Element}
   */
  _renderNotApplicableAuditsSection(elements) {
    const notApplicableElem = this.renderAuditGroup({
      title: `Not applicable`,
    }, {expandable: true, itemCount: this._getTotalAuditsLength(elements)});
    notApplicableElem.classList.add('lh-audit-group--not-applicable');
    elements.forEach(elem => notApplicableElem.appendChild(elem));
    return notApplicableElem;
  }

  /**
   * @param {Array<LH.ReportResult.AuditRef>} manualAudits
   * @param {string} [manualDescription]
   * @return {Element}
   */
  _renderManualAudits(manualAudits, manualDescription) {
    const group = {title: 'Additional items to manually check', description: manualDescription};
    const auditGroupElem = this.renderAuditGroup(group,
        {expandable: true, itemCount: manualAudits.length});
    auditGroupElem.classList.add('lh-audit-group--manual');
    manualAudits.forEach((audit, i) => {
      auditGroupElem.appendChild(this.renderAudit(audit, i));
    });
    return auditGroupElem;
  }

  /**
   * @param {ParentNode} context
   */
  setTemplateContext(context) {
    this.templateContext = context;
    this.detailsRenderer.setTemplateContext(context);
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @return {DocumentFragment}
   */
  renderScoreGauge(category) {
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-gauge', this.templateContext);
    const wrapper = /** @type {HTMLAnchorElement} */ (this.dom.find('.lh-gauge__wrapper', tmpl));
    wrapper.href = `#${category.id}`;
    wrapper.classList.add(`lh-gauge__wrapper--${Util.calculateRating(category.score)}`);

    // Cast `null` to 0
    const numericScore = Number(category.score);
    const gauge = this.dom.find('.lh-gauge', tmpl);
    // 329 is ~= 2 * Math.PI * gauge radius (53)
    // https://codepen.io/xgad/post/svg-radial-progress-meters
    // score of 50: `stroke-dasharray: 164.5 329`;
    /** @type {?SVGCircleElement} */
    const gaugeArc = gauge.querySelector('.lh-gauge-arc');
    if (gaugeArc) {
      gaugeArc.style.strokeDasharray = `${numericScore * 329} 329`;
    }

    const scoreOutOf100 = Math.round(numericScore * 100);
    const percentageEl = this.dom.find('.lh-gauge__percentage', tmpl);
    percentageEl.textContent = scoreOutOf100.toString();
    if (category.score === null) {
      percentageEl.textContent = '?';
      percentageEl.title = 'Errors occurred while auditing';
    }

    this.dom.find('.lh-gauge__label', tmpl).textContent = category.title;
    return tmpl;
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @param {Object<string, LH.Result.ReportGroup>} [groupDefinitions]
   * @return {Element}
   */
  render(category, groupDefinitions) {
    const element = this.dom.createElement('div', 'lh-category');
    this.createPermalinkSpan(element, category.id);
    element.appendChild(this.renderCategoryHeader(category));

    const auditRefs = category.auditRefs;
    const manualAudits = auditRefs.filter(audit => audit.result.scoreDisplayMode === 'manual');
    const nonManualAudits = auditRefs.filter(audit => !manualAudits.includes(audit));

    /** @type {Object<string, {passed: Array<LH.ReportResult.AuditRef>, failed: Array<LH.ReportResult.AuditRef>, notApplicable: Array<LH.ReportResult.AuditRef>}>} */
    const auditsGroupedByGroup = {};
    const auditsUngrouped = {passed: [], failed: [], notApplicable: []};

    nonManualAudits.forEach(auditRef => {
      let group;

      if (auditRef.group) {
        const groupId = auditRef.group;

        if (auditsGroupedByGroup[groupId]) {
          group = auditsGroupedByGroup[groupId];
        } else {
          group = {passed: [], failed: [], notApplicable: []};
          auditsGroupedByGroup[groupId] = group;
        }
      } else {
        group = auditsUngrouped;
      }

      if (auditRef.result.scoreDisplayMode === 'not-applicable') {
        group.notApplicable.push(auditRef);
      } else if (Util.showAsPassed(auditRef.result)) {
        group.passed.push(auditRef);
      } else {
        group.failed.push(auditRef);
      }
    });

    const failedElements = /** @type {Array<Element>} */ ([]);
    const passedElements = /** @type {Array<Element>} */ ([]);
    const notApplicableElements = /** @type {Array<Element>} */ ([]);

    auditsUngrouped.failed.forEach((audit, i) => failedElements.push(this.renderAudit(audit, i)));
    auditsUngrouped.passed.forEach((audit, i) => passedElements.push(this.renderAudit(audit, i)));
    auditsUngrouped.notApplicable.forEach((audit, i) => notApplicableElements.push(
        this.renderAudit(audit, i)));

    Object.keys(auditsGroupedByGroup).forEach(groupId => {
      if (!groupDefinitions) return; // We never reach here if there aren't groups, but TSC needs convincing

      const group = groupDefinitions[groupId];
      const groups = auditsGroupedByGroup[groupId];

      if (groups.failed.length) {
        const auditGroupElem = this.renderAuditGroup(group, {expandable: false});
        groups.failed.forEach((item, i) => auditGroupElem.appendChild(this.renderAudit(item, i)));
        auditGroupElem.classList.add('lh-audit-group--unadorned');
        failedElements.push(auditGroupElem);
      }

      if (groups.passed.length) {
        const auditGroupElem = this.renderAuditGroup(group, {expandable: true});
        groups.passed.forEach((item, i) => auditGroupElem.appendChild(this.renderAudit(item, i)));
        auditGroupElem.classList.add('lh-audit-group--unadorned');
        passedElements.push(auditGroupElem);
      }

      if (groups.notApplicable.length) {
        const auditGroupElem = this.renderAuditGroup(group, {expandable: true});
        groups.notApplicable.forEach((item, i) =>
            auditGroupElem.appendChild(this.renderAudit(item, i)));
        auditGroupElem.classList.add('lh-audit-group--unadorned');
        notApplicableElements.push(auditGroupElem);
      }
    });

    if (failedElements.length) {
      const failedElem = this._renderFailedAuditsSection(failedElements);
      element.appendChild(failedElem);
    }

    if (manualAudits.length) {
      const manualEl = this._renderManualAudits(manualAudits, category.manualDescription);
      element.appendChild(manualEl);
    }

    if (passedElements.length) {
      const passedElem = this.renderPassedAuditsSection(passedElements);
      element.appendChild(passedElem);
    }

    if (notApplicableElements.length) {
      const notApplicableElem = this._renderNotApplicableAuditsSection(notApplicableElements);
      element.appendChild(notApplicableElem);
    }

    return element;
  }

  /**
   * Create a non-semantic span used for hash navigation of categories
   * @param {Element} element
   * @param {string} id
   */
  createPermalinkSpan(element, id) {
    const permalinkEl = this.dom.createChildOf(element, 'span', 'lh-permalink');
    permalinkEl.id = id;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CategoryRenderer;
} else {
  self.CategoryRenderer = CategoryRenderer;
}
;
/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* globals self, Util, CategoryRenderer */

/** @typedef {import('./dom.js')} DOM */
/** @typedef {import('./details-renderer.js').FilmstripDetails} FilmstripDetails */
/** @typedef {LH.Result.Audit.OpportunityDetails} OpportunityDetails */

class PerformanceCategoryRenderer extends CategoryRenderer {
  /**
   * @param {LH.ReportResult.AuditRef} audit
   * @return {Element}
   */
  _renderMetric(audit) {
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-metric', this.templateContext);
    const element = this.dom.find('.lh-metric', tmpl);
    element.id = audit.result.id;
    const rating = Util.calculateRating(audit.result.score, audit.result.scoreDisplayMode);
    element.classList.add(`lh-metric--${rating}`);

    const titleEl = this.dom.find('.lh-metric__title', tmpl);
    titleEl.textContent = audit.result.title;

    const valueEl = this.dom.find('.lh-metric__value', tmpl);
    valueEl.textContent = Util.formatDisplayValue(audit.result.displayValue);

    const descriptionEl = this.dom.find('.lh-metric__description', tmpl);
    descriptionEl.appendChild(this.dom.convertMarkdownLinkSnippets(audit.result.description));

    if (audit.result.scoreDisplayMode === 'error') {
      descriptionEl.textContent = '';
      valueEl.textContent = 'Error!';
      const tooltip = this.dom.createChildOf(descriptionEl, 'span');
      tooltip.textContent = audit.result.errorMessage || 'Report error: no metric information';
    }

    return element;
  }

  /**
   * @param {LH.ReportResult.AuditRef} audit
   * @param {number} index
   * @param {number} scale
   * @return {Element}
   */
  _renderOpportunity(audit, index, scale) {
    const oppTmpl = this.dom.cloneTemplate('#tmpl-lh-opportunity', this.templateContext);
    const element = this.populateAuditValues(audit, index, oppTmpl);
    element.id = audit.result.id;

    if (!audit.result.details || audit.result.scoreDisplayMode === 'error') {
      return element;
    }
    // TODO(bckenny): remove cast when details is fully discriminated based on `type`.
    const details = /** @type {OpportunityDetails} */ (audit.result.details);
    if (details.type !== 'opportunity') {
      return element;
    }

    // Overwrite the displayValue with opportunity's wastedMs
    const displayEl = this.dom.find('.lh-audit__display-text', element);
    const sparklineWidthPct = `${details.overallSavingsMs / scale * 100}%`;
    this.dom.find('.lh-sparkline__bar', element).style.width = sparklineWidthPct;
    displayEl.textContent = Util.formatSeconds(details.overallSavingsMs, 0.01);

    // Set [title] tooltips
    if (audit.result.displayValue) {
      const displayValue = Util.formatDisplayValue(audit.result.displayValue);
      this.dom.find('.lh-load-opportunity__sparkline', element).title = displayValue;
      displayEl.title = displayValue;
    }

    return element;
  }

  /**
   * Get an audit's wastedMs to sort the opportunity by, and scale the sparkline width
   * Opportunties with an error won't have a details object, so MIN_VALUE is returned to keep any
   * erroring opportunities last in sort order.
   * @param {LH.ReportResult.AuditRef} audit
   * @return {number}
   */
  _getWastedMs(audit) {
    if (audit.result.details && audit.result.details.type === 'opportunity') {
      // TODO(bckenny): remove cast when details is fully discriminated based on `type`.
      const details = /** @type {OpportunityDetails} */ (audit.result.details);
      if (typeof details.overallSavingsMs !== 'number') {
        throw new Error('non-opportunity details passed to _getWastedMs');
      }
      return details.overallSavingsMs;
    } else {
      return Number.MIN_VALUE;
    }
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @param {Object<string, LH.Result.ReportGroup>} groups
   * @return {Element}
   * @override
   */
  render(category, groups) {
    const element = this.dom.createElement('div', 'lh-category');
    this.createPermalinkSpan(element, category.id);
    element.appendChild(this.renderCategoryHeader(category));

    // Metrics
    const metricAudits = category.auditRefs.filter(audit => audit.group === 'metrics');
    const metricAuditsEl = this.renderAuditGroup(groups['metrics'], {expandable: false});

    const keyMetrics = metricAudits.filter(a => a.weight >= 3);
    const otherMetrics = metricAudits.filter(a => a.weight < 3);

    const metricsBoxesEl = this.dom.createChildOf(metricAuditsEl, 'div', 'lh-metric-container');
    const metricsColumn1El = this.dom.createChildOf(metricsBoxesEl, 'div', 'lh-metric-column');
    const metricsColumn2El = this.dom.createChildOf(metricsBoxesEl, 'div', 'lh-metric-column');

    keyMetrics.forEach(item => {
      metricsColumn1El.appendChild(this._renderMetric(item));
    });
    otherMetrics.forEach(item => {
      metricsColumn2El.appendChild(this._renderMetric(item));
    });
    const estValuesEl = this.dom.createChildOf(metricsColumn2El, 'div',
        'lh-metrics__disclaimer lh-metrics__disclaimer');
    estValuesEl.textContent = 'Values are estimated and may vary.';

    metricAuditsEl.classList.add('lh-audit-group--metrics');
    element.appendChild(metricAuditsEl);

    // Filmstrip
    const timelineEl = this.dom.createChildOf(element, 'div', 'lh-filmstrip-container');
    const thumbnailAudit = category.auditRefs.find(audit => audit.id === 'screenshot-thumbnails');
    const thumbnailResult = thumbnailAudit && thumbnailAudit.result;
    if (thumbnailResult && thumbnailResult.details) {
      timelineEl.id = thumbnailResult.id;
      const filmstripEl = this.detailsRenderer.render(thumbnailResult.details);
      timelineEl.appendChild(filmstripEl);
    }

    // Opportunities
    const opportunityAudits = category.auditRefs
        .filter(audit => audit.group === 'load-opportunities' && !Util.showAsPassed(audit.result))
        .sort((auditA, auditB) => this._getWastedMs(auditB) - this._getWastedMs(auditA));

    if (opportunityAudits.length) {
      // Scale the sparklines relative to savings, minimum 2s to not overstate small savings
      const minimumScale = 2000;
      const wastedMsValues = opportunityAudits.map(audit => this._getWastedMs(audit));
      const maxWaste = Math.max(...wastedMsValues);
      const scale = Math.max(Math.ceil(maxWaste / 1000) * 1000, minimumScale);
      const groupEl = this.renderAuditGroup(groups['load-opportunities'], {expandable: false});
      const tmpl = this.dom.cloneTemplate('#tmpl-lh-opportunity-header', this.templateContext);
      const headerEl = this.dom.find('.lh-load-opportunity__header', tmpl);
      groupEl.appendChild(headerEl);
      opportunityAudits.forEach((item, i) =>
          groupEl.appendChild(this._renderOpportunity(item, i, scale)));
      groupEl.classList.add('lh-audit-group--opportunities');
      element.appendChild(groupEl);
    }

    // Diagnostics
    const diagnosticAudits = category.auditRefs
        .filter(audit => audit.group === 'diagnostics' && !Util.showAsPassed(audit.result))
        .sort((a, b) => {
          const scoreA = a.result.scoreDisplayMode === 'informative' ? 100 : Number(a.result.score);
          const scoreB = b.result.scoreDisplayMode === 'informative' ? 100 : Number(b.result.score);
          return scoreA - scoreB;
        });

    if (diagnosticAudits.length) {
      const groupEl = this.renderAuditGroup(groups['diagnostics'], {expandable: false});
      diagnosticAudits.forEach((item, i) => groupEl.appendChild(this.renderAudit(item, i)));
      groupEl.classList.add('lh-audit-group--diagnostics');
      element.appendChild(groupEl);
    }

    // Passed audits
    const passedElements = category.auditRefs
        .filter(audit => (audit.group === 'load-opportunities' || audit.group === 'diagnostics') &&
            Util.showAsPassed(audit.result))
        .map((audit, i) => this.renderAudit(audit, i));

    if (!passedElements.length) return element;

    const passedElem = this.renderPassedAuditsSection(passedElements);
    element.appendChild(passedElem);
    return element;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceCategoryRenderer;
} else {
  self.PerformanceCategoryRenderer = PerformanceCategoryRenderer;
}
;
/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * @fileoverview The entry point for rendering the Lighthouse report based on the JSON output.
 *    This file is injected into the report HTML along with the JSON report.
 *
 * Dummy text for ensuring report robustness: \u003c/script> pre$`post %%LIGHTHOUSE_JSON%%
 */

/** @typedef {import('./dom.js')} DOM */
/** @typedef {import('./details-renderer.js').DetailsJSON} DetailsJSON */

/* globals self, Util, DetailsRenderer, CategoryRenderer, PerformanceCategoryRenderer */

class ReportRenderer {
  /**
   * @param {DOM} dom
   */
  constructor(dom) {
    /** @type {DOM} */
    this._dom = dom;
    /** @type {ParentNode} */
    this._templateContext = this._dom.document();
  }

  /**
   * @param {LH.ReportResult} report
   * @param {Element} container Parent element to render the report into.
   */
  renderReport(report, container) {
    // If any mutations happen to the report within the renderers, we want the original object untouched
    const clone = /** @type {LH.ReportResult} */ (JSON.parse(JSON.stringify(report)));

    // TODO(phulce): we all agree this is technical debt we should fix
    if (typeof clone.categories !== 'object') throw new Error('No categories provided.');
    clone.reportCategories = Object.values(clone.categories);
    ReportRenderer.smooshAuditResultsIntoCategories(clone.audits, clone.reportCategories);

    container.textContent = ''; // Remove previous report.
    container.appendChild(this._renderReport(clone));
    return /** @type {Element} **/ (container);
  }

  /**
   * Define a custom element for <templates> to be extracted from. For example:
   *     this.setTemplateContext(new DOMParser().parseFromString(htmlStr, 'text/html'))
   * @param {ParentNode} context
   */
  setTemplateContext(context) {
    this._templateContext = context;
  }

  /**
   * @param {LH.ReportResult} report
   * @return {DocumentFragment}
   */
  _renderReportHeader(report) {
    const el = this._dom.cloneTemplate('#tmpl-lh-heading', this._templateContext);
    const domFragment = this._dom.cloneTemplate('#tmpl-lh-scores-wrapper', this._templateContext);
    const placeholder = this._dom.find('.lh-scores-wrapper-placeholder', el);
    /** @type {HTMLDivElement} */ (placeholder.parentNode).replaceChild(domFragment, placeholder);

    this._dom.find('.lh-config__timestamp', el).textContent =
        Util.formatDateTime(report.fetchTime);
    this._dom.find('.lh-product-info__version', el).textContent = report.lighthouseVersion;
    const metadataUrl = /** @type {HTMLAnchorElement} */ (this._dom.find('.lh-metadata__url', el));
    const toolbarUrl = /** @type {HTMLAnchorElement}*/ (this._dom.find('.lh-toolbar__url', el));
    metadataUrl.href = metadataUrl.textContent = report.finalUrl;
    toolbarUrl.href = toolbarUrl.textContent = report.finalUrl;

    const emulationDescriptions = Util.getEmulationDescriptions(report.configSettings || {});
    this._dom.find('.lh-config__emulation', el).textContent = emulationDescriptions.summary;
    return el;
  }

  /**
   * @return {Element}
   */
  _renderReportShortHeader() {
    const shortHeaderContainer = this._dom.createElement('div', 'lh-header-container');
    const wrapper = this._dom.cloneTemplate('#tmpl-lh-scores-wrapper', this._templateContext);
    shortHeaderContainer.appendChild(wrapper);
    return shortHeaderContainer;
  }


  /**
   * @param {LH.ReportResult} report
   * @return {DocumentFragment}
   */
  _renderReportFooter(report) {
    const footer = this._dom.cloneTemplate('#tmpl-lh-footer', this._templateContext);

    const env = this._dom.find('.lh-env__items', footer);
    env.id = 'runtime-settings';
    const envValues = Util.getEnvironmentDisplayValues(report.configSettings || {});
    [
      {name: 'URL', description: report.finalUrl},
      {name: 'Fetch time', description: Util.formatDateTime(report.fetchTime)},
      ...envValues,
      {name: 'User agent', description: report.userAgent},
    ].forEach(runtime => {
      const item = this._dom.cloneTemplate('#tmpl-lh-env__items', env);
      this._dom.find('.lh-env__name', item).textContent = `${runtime.name}:`;
      this._dom.find('.lh-env__description', item).textContent = runtime.description;
      env.appendChild(item);
    });

    this._dom.find('.lh-footer__version', footer).textContent = report.lighthouseVersion;
    return footer;
  }

  /**
   * Returns a div with a list of top-level warnings, or an empty div if no warnings.
   * @param {LH.ReportResult} report
   * @return {Node}
   */
  _renderReportWarnings(report) {
    if (!report.runWarnings || report.runWarnings.length === 0) {
      return this._dom.createElement('div');
    }

    const container = this._dom.cloneTemplate('#tmpl-lh-warnings--toplevel', this._templateContext);
    const warnings = this._dom.find('ul', container);
    for (const warningString of report.runWarnings) {
      const warning = warnings.appendChild(this._dom.createElement('li'));
      warning.textContent = warningString;
    }

    return container;
  }

  /**
   * @param {LH.ReportResult} report
   * @return {DocumentFragment}
   */
  _renderReport(report) {
    let header;
    const headerContainer = this._dom.createElement('div');
    if (this._dom.isDevTools()) {
      headerContainer.classList.add('lh-header-plain');
      header = this._renderReportShortHeader();
    } else {
      headerContainer.classList.add('lh-header-sticky');
      header = this._renderReportHeader(report);
    }
    headerContainer.appendChild(header);
    const scoresContainer = this._dom.find('.lh-scores-container', headerContainer);

    const container = this._dom.createElement('div', 'lh-container');
    const reportSection = container.appendChild(this._dom.createElement('div', 'lh-report'));

    reportSection.appendChild(this._renderReportWarnings(report));

    let scoreHeader;
    const isSoloCategory = report.reportCategories.length === 1;
    if (!isSoloCategory) {
      scoreHeader = this._dom.createElement('div', 'lh-scores-header');
    } else {
      headerContainer.classList.add('lh-header--solo-category');
    }

    const detailsRenderer = new DetailsRenderer(this._dom);
    const categoryRenderer = new CategoryRenderer(this._dom, detailsRenderer);
    categoryRenderer.setTemplateContext(this._templateContext);
    const perfCategoryRenderer = new PerformanceCategoryRenderer(this._dom, detailsRenderer);
    perfCategoryRenderer.setTemplateContext(this._templateContext);

    const categories = reportSection.appendChild(this._dom.createElement('div', 'lh-categories'));

    for (const category of report.reportCategories) {
      if (scoreHeader) {
        scoreHeader.appendChild(categoryRenderer.renderScoreGauge(category));
      }

      let renderer = categoryRenderer;
      if (category.id === 'performance') {
        renderer = perfCategoryRenderer;
      }
      categories.appendChild(renderer.render(category, report.categoryGroups));
    }

    if (scoreHeader) {
      const scoreScale = this._dom.cloneTemplate('#tmpl-lh-scorescale', this._templateContext);
      scoresContainer.appendChild(scoreHeader);
      scoresContainer.appendChild(scoreScale);
    }

    reportSection.appendChild(this._renderReportFooter(report));

    const reportFragment = this._dom.createFragment();
    reportFragment.appendChild(headerContainer);
    reportFragment.appendChild(container);

    return reportFragment;
  }

  /**
   * Place the AuditResult into the auditDfn (which has just weight & group)
   * @param {Object<string, LH.Audit.Result>} audits
   * @param {Array<LH.ReportResult.Category>} reportCategories
   */
  static smooshAuditResultsIntoCategories(audits, reportCategories) {
    for (const category of reportCategories) {
      category.auditRefs.forEach(auditMeta => {
        const result = audits[auditMeta.id];
        auditMeta.result = result;
      });
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReportRenderer;
} else {
  self.ReportRenderer = ReportRenderer;
}

  //# sourceURL=compiled-reportrenderer.js
  </script>
  <script>window.__LIGHTHOUSE_JSON__ = {"userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36","lighthouseVersion":"3.0.0-beta.0","fetchTime":"2018-08-17T18:28:45.516Z","requestedUrl":"https://sharadshinde.in/","finalUrl":"https://sharadshinde.in/","runWarnings":[],"audits":{"is-on-https":{"id":"is-on-https","title":"Uses HTTPS","description":"All sites should be protected with HTTPS, even ones that don't handle sensitive data. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/https).","score":1,"scoreDisplayMode":"binary","rawValue":true,"displayValue":"","details":{"type":"table","headings":[],"items":[]}},"redirects-http":{"id":"redirects-http","title":"Redirects HTTP traffic to HTTPS","description":"If you've already set up HTTPS, make sure that you redirect all HTTP traffic to HTTPS. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http-redirects-to-https).","score":1,"scoreDisplayMode":"binary","rawValue":true},"service-worker":{"id":"service-worker","title":"Registers a service worker","description":"The service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/registered-service-worker).","score":1,"scoreDisplayMode":"binary","rawValue":true},"works-offline":{"id":"works-offline","title":"Responds with a 200 when offline","description":"If you're building a Progressive Web App, consider using a service worker so that your app can work offline. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http-200-when-offline).","score":1,"scoreDisplayMode":"binary","rawValue":true,"warnings":[]},"viewport":{"id":"viewport","title":"Has a `\u003cmeta name=\"viewport\">` tag with `width` or `initial-scale`","description":"Add a viewport meta tag to optimize your app for mobile screens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/has-viewport-meta-tag).","score":1,"scoreDisplayMode":"binary","rawValue":true,"warnings":[]},"without-javascript":{"id":"without-javascript","title":"Contains some content when JavaScript is not available","description":"Your app should display some content when JavaScript is disabled, even if it's just a warning to the user that JavaScript is required to use the app. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/no-js).","score":1,"scoreDisplayMode":"binary","rawValue":true},"first-contentful-paint":{"id":"first-contentful-paint","title":"First Contentful Paint","description":"First contentful paint marks the time at which the first text/image is painted. [Learn more](https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#first_paint_and_first_contentful_paint).","score":1,"scoreDisplayMode":"numeric","rawValue":1851.7879,"displayValue":["%10d ms",1851.7879]},"first-meaningful-paint":{"id":"first-meaningful-paint","title":"First Meaningful Paint","description":"First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint).","score":0.31,"scoreDisplayMode":"numeric","rawValue":4913.64885,"displayValue":["%10d ms",4913.64885]},"load-fast-enough-for-pwa":{"id":"load-fast-enough-for-pwa","title":"Page load is fast enough on 3G","description":"A fast page load over a 3G network ensures a good mobile user experience. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/fast-3g).","score":1,"scoreDisplayMode":"binary","rawValue":5856.36535},"speed-index":{"id":"speed-index","title":"Speed Index","description":"Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/speed-index).","score":0.91,"scoreDisplayMode":"numeric","rawValue":3309.602722798407,"displayValue":["%10d ms",3309.602722798407]},"screenshot-thumbnails":{"id":"screenshot-thumbnails","title":"Screenshot Thumbnails","description":"This is what the load of your site looked like.","score":null,"scoreDisplayMode":"informative","rawValue":true,"details":{"type":"filmstrip","scale":3000,"items":[{"timing":300,"timestamp":6988076759,"data":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQB//Z"},{"timing":600,"timestamp":6988376759,"data":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQB//Z"},{"timing":900,"timestamp":6988676759,"data":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIANUAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1ToAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAh6igBaACgAoAKACgAoAKACgAoAKACgAoAKACgBD1FAC0AFABQAUAFABQAUAFABQAUAFABQAUAFACHqKAFoAKACgAoAKACgAoAKACgAoAKACgAoAKAEPUUALQAUAFABQAUAFABQAUAFABQAUAFABQAUAIeooAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9RQB//Z"},{"timing":1200,"timestamp":6988976759,"data":"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"},{"timing":1500,"timestamp":6989276759,"data":"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"},{"timing":1800,"timestamp":6989576759,"data":"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"},{"timing":2100,"timestamp":6989876759,"data":"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"},{"timing":2400,"timestamp":6990176759,"data":"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"},{"timing":2700,"timestamp":6990476759,"data":"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"},{"timing":3000,"timestamp":6990776759,"data":"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"}]}},"estimated-input-latency":{"id":"estimated-input-latency","title":"Estimated Input Latency","description":"The score above is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/estimated-input-latency).","score":0.41,"scoreDisplayMode":"numeric","rawValue":109.80000000000001,"displayValue":["%d ms",109.80000000000001]},"errors-in-console":{"id":"errors-in-console","title":"Browser errors were logged to the console","description":"Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns.","score":0,"scoreDisplayMode":"binary","rawValue":3,"details":{"type":"table","headings":[{"key":"url","itemType":"url","text":"URL"},{"key":"description","itemType":"code","text":"Description"}],"items":[{"source":"network","description":"Failed to load resource: net::ERR_CONNECTION_RESET","url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff2?v=4.3.0"},{"source":"network","description":"Failed to load resource: net::ERR_CONNECTION_RESET","url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff?v=4.3.0"},{"source":"network","description":"Failed to load resource: net::ERR_CONNECTION_RESET","url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.ttf?v=4.3.0"}]}},"time-to-first-byte":{"id":"time-to-first-byte","title":"Keep server response times low (TTFB)","description":"Time To First Byte identifies the time at which your server sends a response. [Learn more](https://developers.google.com/web/tools/chrome-devtools/network-performance/issues).","score":1,"scoreDisplayMode":"binary","rawValue":93.228,"displayValue":"","details":{"summary":{"wastedMs":-506.772}}},"first-cpu-idle":{"id":"first-cpu-idle","title":"First CPU Idle","description":"First CPU Idle marks the first time at which the page's main thread is quiet enough to handle input. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-interactive).","score":0.73,"scoreDisplayMode":"numeric","rawValue":4913.64885,"displayValue":["%10d ms",4913.64885]},"interactive":{"id":"interactive","title":"Time to Interactive","description":"Interactive marks the time at which the page is fully interactive. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/consistently-interactive).","score":0.67,"scoreDisplayMode":"numeric","rawValue":5856.36535,"displayValue":["%10d ms",5856.36535]},"user-timings":{"id":"user-timings","title":"User Timing marks and measures","description":"Consider instrumenting your app with the User Timing API to create custom, real-world measurements of key user experiences. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/user-timing).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true,"displayValue":"","details":{"type":"table","headings":[],"items":[]}},"critical-request-chains":{"id":"critical-request-chains","title":"Critical Request Chains","description":"The Critical Request Chains below show you what resources are issued with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/critical-request-chains).","score":null,"scoreDisplayMode":"informative","rawValue":false,"displayValue":"14 chains found","details":{"type":"criticalrequestchain","header":{"type":"text","text":"View critical network waterfall:"},"chains":{"61299487FB583A67CDB6E1EF853CC3E0":{"request":{"url":"https://sharadshinde.in/","startTime":6987.78053,"endTime":6987.96276,"_responseReceivedTime":6987.884494,"transferSize":7389},"children":{"1000020826.451":{"request":{"url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css","startTime":6988.001732,"endTime":6988.582025,"_responseReceivedTime":6988.573888999999,"transferSize":5857},"children":{}},"1000020826.452":{"request":{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/css/materialize.min.css","startTime":6988.002294,"endTime":6988.130178,"_responseReceivedTime":6988.118818,"transferSize":21610},"children":{}},"1000020826.453":{"request":{"url":"https://sharadshinde.in/style.css","startTime":6988.002778,"endTime":6988.259999,"_responseReceivedTime":6988.256676,"transferSize":2006},"children":{}},"1000020826.454":{"request":{"url":"https://sharadshinde.in/lazy.js","startTime":6988.135082,"endTime":6988.261543,"_responseReceivedTime":6988.258127,"transferSize":1529},"children":{}},"1000020826.455":{"request":{"url":"https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js","startTime":6988.135586,"endTime":6988.219811,"_responseReceivedTime":6988.198419,"transferSize":33581},"children":{}},"1000020826.456":{"request":{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/js/materialize.min.js","startTime":6988.14037,"endTime":6988.334858,"_responseReceivedTime":6988.237212,"transferSize":34932},"children":{"1000020826.468":{"request":{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Thin.ttf","startTime":6988.655351,"endTime":6989.051721,"_responseReceivedTime":6988.949896,"transferSize":127780},"children":{}},"1000020826.469":{"request":{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Light.ttf","startTime":6988.657537,"endTime":6989.10155,"_responseReceivedTime":6989.052201,"transferSize":126988},"children":{}},"1000020826.466":{"request":{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/material-design-icons/Material-Design-Icons.woff","startTime":6988.658745,"endTime":6988.882094,"_responseReceivedTime":6988.702394,"transferSize":141864},"children":{}},"1000020826.470":{"request":{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Regular.ttf","startTime":6988.65925,"endTime":6988.908932,"_responseReceivedTime":6988.882995,"transferSize":126268},"children":{}},"1000020826.471":{"request":{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Medium.ttf","startTime":6988.659709,"endTime":6988.943032,"_responseReceivedTime":6988.916123999999,"transferSize":127684},"children":{}},"1000020826.475":{"request":{"url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff2?v=4.3.0","startTime":6988.660449,"endTime":6989.493374,"_responseReceivedTime":6989.171325,"transferSize":415},"children":{}}}},"1000020826.457":{"request":{"url":"https://sharadshinde.in/sw.js","startTime":6988.14072,"endTime":6988.285984,"_responseReceivedTime":6988.282031000001,"transferSize":483},"children":{}},"1000020826.476":{"request":{"url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff?v=4.3.0","startTime":6989.494762,"endTime":6990.319682,"_responseReceivedTime":6989.956507,"transferSize":414},"children":{}},"1000020826.477":{"request":{"url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.ttf?v=4.3.0","startTime":6990.321757,"endTime":6991.118419,"_responseReceivedTime":6990.807275,"transferSize":415},"children":{}}}}},"longestChain":{"duration":3337.8890000003594,"length":2,"transferSize":415}}},"redirects":{"id":"redirects","title":"Avoid multiple page redirects","description":"Redirects introduce additional delays before the page can be loaded. [Learn more](https://developers.google.com/speed/docs/insights/AvoidRedirects).","score":1,"scoreDisplayMode":"numeric","rawValue":0,"displayValue":["%d ms",0],"details":{"type":"table","headings":[],"items":[],"summary":{"wastedMs":0}}},"webapp-install-banner":{"id":"webapp-install-banner","title":"User can be prompted to Install the Web App","description":"Browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/install-prompt).","score":1,"scoreDisplayMode":"binary","rawValue":true,"warnings":[]},"splash-screen":{"id":"splash-screen","title":"Configured for a custom splash screen","description":"A themed splash screen ensures a high-quality experience when users launch your app from their homescreens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/custom-splash-screen).","score":1,"scoreDisplayMode":"binary","rawValue":true},"themed-omnibox":{"id":"themed-omnibox","title":"Address bar matches brand colors","description":"The browser address bar can be themed to match your site. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/address-bar).","score":1,"scoreDisplayMode":"binary","rawValue":true},"manifest-short-name-length":{"id":"manifest-short-name-length","title":"Manifest's `short_name` won't be truncated when displayed on homescreen","description":"Make your app's `short_name` fewer than 12 characters to ensure that it's not truncated on homescreens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/manifest-short_name-is-not-truncated).","score":1,"scoreDisplayMode":"binary","rawValue":true},"content-width":{"id":"content-width","title":"Content is sized correctly for the viewport","description":"If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/content-sized-correctly-for-viewport).","score":1,"scoreDisplayMode":"binary","rawValue":true,"explanation":""},"image-aspect-ratio":{"id":"image-aspect-ratio","title":"Displays images with correct aspect ratio","description":"Image display dimensions should match natural aspect ratio.","score":1,"scoreDisplayMode":"binary","rawValue":true,"warnings":[],"details":{"type":"table","headings":[],"items":[]}},"deprecations":{"id":"deprecations","title":"Avoids deprecated APIs","description":"Deprecated APIs will eventually be removed from the browser. [Learn more](https://www.chromestatus.com/features#deprecated).","score":1,"scoreDisplayMode":"binary","rawValue":true,"displayValue":"","details":{"type":"table","headings":[],"items":[]}},"mainthread-work-breakdown":{"id":"mainthread-work-breakdown","title":"Has significant main thread work","description":"Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this.","score":0.58,"scoreDisplayMode":"numeric","rawValue":3610.0599999688566,"displayValue":["%10d ms",3610.0599999688566],"details":{"type":"table","headings":[{"key":"group","itemType":"text","text":"Category"},{"key":"category","itemType":"text","text":"Work"},{"key":"duration","itemType":"ms","granularity":1,"text":"Time spent"}],"items":[{"category":"Layout","group":"Style & Layout","duration":1061.4319999963045},{"category":"Recalculate Style","group":"Style & Layout","duration":803.1160000041127},{"category":"Evaluate Script","group":"Script Evaluation","duration":502.8679999858141},{"category":"Run Microtasks","group":"Script Evaluation","duration":8.092000000178814},{"category":"Parse HTML","group":"Parsing HTML & CSS","duration":428.0200000144541},{"category":"Parse Stylesheet","group":"Parsing HTML & CSS","duration":62.80000000074506},{"category":"Compile Script","group":"Script Parsing & Compile","duration":235.48800000175834},{"category":"Update Layer Tree","group":"Compositing","duration":156.695999994874},{"category":"Composite Layers","group":"Compositing","duration":31.76800000295043},{"category":"Paint","group":"Paint","duration":170.01999996230006},{"category":"Minor GC","group":"Garbage collection","duration":118.79200001060963},{"category":"Major GC","group":"Garbage collection","duration":30.96799999475479}]}},"bootup-time":{"id":"bootup-time","title":"JavaScript boot-up time","description":"Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/bootup).","score":0.88,"scoreDisplayMode":"numeric","rawValue":1408.5719999969006,"displayValue":["%10d ms",1408.5719999969006],"details":{"type":"table","headings":[{"key":"url","itemType":"url","text":"URL"},{"key":"scripting","granularity":1,"itemType":"ms","text":"Script Evaluation"},{"key":"scriptParseCompile","granularity":1,"itemType":"ms","text":"Script Parsing & Compile"}],"items":[{"url":"https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js","sum":122.41599998995662,"scripting":78.43599998950958,"scriptParseCompile":43.980000000447035},{"url":"chrome-extension://bgnkhhnnamicmpeenaelnjfhikgbkllg/lib/content-script/common-script.js","sum":117.69599999859929,"scripting":116.61600000038743,"scriptParseCompile":1.0799999982118607},{"url":"chrome-extension://bgnkhhnnamicmpeenaelnjfhikgbkllg/lib/libs/extended-css.js","sum":108.53999999910593,"scripting":39.635999999940395,"scriptParseCompile":68.90399999916553},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/js/materialize.min.js","sum":75.46000000461936,"scripting":34.10800000280142,"scriptParseCompile":41.35200000181794},{"url":"chrome-extension://bgnkhhnnamicmpeenaelnjfhikgbkllg/lib/content-script/preload.js","sum":61.368000000715256,"scripting":36.135999999940395,"scriptParseCompile":25.23200000077486},{"url":"chrome-extension://gppongmhjkpfnbhagpmjfkannfbllamg/js/lib/iframe.js","sum":58.38799999654293,"scripting":46.41999999806285,"scriptParseCompile":11.967999998480082},{"url":"chrome-extension://gppongmhjkpfnbhagpmjfkannfbllamg/js/content.js","sum":58.096000000834465,"scripting":57.06399999931455,"scriptParseCompile":1.0320000015199184}],"summary":{"wastedMs":1408.5719999969006}}},"uses-rel-preload":{"id":"uses-rel-preload","title":"Preload key requests","description":"Consider using \u003clink rel=preload> to prioritize fetching late-discovered resources sooner. [Learn more](https://developers.google.com/web/updates/2016/03/link-rel-preload).","score":0,"scoreDisplayMode":"numeric","rawValue":778,"displayValue":["Potential savings of %10d ms",778],"details":{"type":"table","headings":[{"key":"url","itemType":"url","text":"URL"},{"key":"wastedMs","itemType":"ms","text":"Potential Savings","granularity":10}],"items":[{"url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff2?v=4.3.0","wastedMs":778},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Thin.ttf","wastedMs":478},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Light.ttf","wastedMs":328},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/material-design-icons/Material-Design-Icons.woff","wastedMs":193},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Regular.ttf","wastedMs":178}],"summary":{"wastedMs":778}}},"uses-rel-preconnect":{"id":"uses-rel-preconnect","title":"Avoid multiple, costly round trips to any origin","description":"Consider adding preconnect or dns-prefetch resource hints to establish early connections to important third-party origins. [Learn more](https://developers.google.com/web/fundamentals/performance/resource-prioritization#preconnect).","score":0.65,"scoreDisplayMode":"numeric","rawValue":300,"displayValue":["Potential savings of %10d ms",300],"details":{"type":"table","headings":[{"key":"url","itemType":"url","text":"Origin"},{"key":"wastedMs","itemType":"ms","text":"Potential Savings"}],"items":[{"url":"https://maxcdn.bootstrapcdn.com","wastedMs":300}],"summary":{"wastedMs":300}}},"font-display":{"id":"font-display","title":"All text remains visible during webfont loads","description":"Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://developers.google.com/web/updates/2016/02/font-display).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"network-requests":{"id":"network-requests","title":"Network Requests","description":"Lists the network requests that were made during page load.","score":null,"scoreDisplayMode":"informative","rawValue":23,"details":{"type":"table","headings":[{"key":"url","itemType":"url","text":"URL"},{"key":"startTime","itemType":"ms","granularity":1,"text":"Start Time"},{"key":"endTime","itemType":"ms","granularity":1,"text":"End Time"},{"key":"transferSize","itemType":"bytes","displayUnit":"kb","granularity":1,"text":"Transfer Size"},{"key":"statusCode","itemType":"text","text":"Status Code"},{"key":"mimeType","itemType":"text","text":"MIME Type"},{"key":"resourceType","itemType":"text","text":"Resource Type"}],"items":[{"url":"https://sharadshinde.in/","startTime":0,"endTime":182.23000000034517,"transferSize":7389,"statusCode":200,"mimeType":"text/html","resourceType":"document"},{"url":"https://sharadshinde.in/static/img/coditas.png","startTime":219.34299999975337,"endTime":417.1649999998408,"transferSize":4303,"statusCode":200,"mimeType":"image/png","resourceType":"image"},{"url":"https://sharadshinde.in/static/img/webmatrix-logo.png","startTime":220.4170000004524,"endTime":475.10700000020734,"transferSize":5559,"statusCode":200,"mimeType":"image/png","resourceType":"image"},{"url":"https://sharadshinde.in/static/img/tutorshere-logo.png","startTime":360.50499999964813,"endTime":583.4420000001046,"transferSize":5279,"statusCode":200,"mimeType":"image/png","resourceType":"image"},{"url":"https://sharadshinde.in/static/img/projects-repo.png","startTime":419.84099999990576,"endTime":946.8839999999545,"transferSize":40546,"statusCode":200,"mimeType":"image/png","resourceType":"image"},{"url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css","startTime":221.201999999721,"endTime":801.4949999997043,"transferSize":5857,"statusCode":200,"mimeType":"text/css","resourceType":"stylesheet"},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/css/materialize.min.css","startTime":221.7639999998937,"endTime":349.648000000343,"transferSize":21610,"statusCode":200,"mimeType":"text/css","resourceType":"stylesheet"},{"url":"https://sharadshinde.in/style.css","startTime":222.24800000003597,"endTime":479.4689999998809,"transferSize":2006,"statusCode":200,"mimeType":"text/css","resourceType":"stylesheet"},{"url":"https://sharadshinde.in/lazy.js","startTime":354.55199999978504,"endTime":481.01299999962066,"transferSize":1529,"statusCode":200,"mimeType":"application/javascript","resourceType":"script"},{"url":"https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js","startTime":355.05600000033155,"endTime":439.2809999999372,"transferSize":33581,"statusCode":200,"mimeType":"text/javascript","resourceType":"script"},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/js/materialize.min.js","startTime":359.84000000007654,"endTime":554.3280000001687,"transferSize":34932,"statusCode":200,"mimeType":"application/javascript","resourceType":"script"},{"url":"https://sharadshinde.in/sw.js","startTime":360.19000000032975,"endTime":505.45400000009977,"transferSize":483,"statusCode":200,"mimeType":"application/javascript","resourceType":"script"},{"url":"https://sharadshinde.in/static/img/bg.png","startTime":858.6040000000139,"endTime":960.0639999998748,"transferSize":237,"statusCode":200,"mimeType":"image/png","resourceType":"image"},{"url":"https://sharadshinde.in/static/img/sharad.jpg","startTime":869.7910000000775,"endTime":2572.178999999778,"transferSize":123875,"statusCode":200,"mimeType":"image/jpeg","resourceType":"image"},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Thin.ttf","startTime":874.8210000003382,"endTime":1271.190999999817,"transferSize":127780,"statusCode":200,"mimeType":"application/octet-stream","resourceType":"font"},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Light.ttf","startTime":877.0070000000487,"endTime":1321.020000000317,"transferSize":126988,"statusCode":200,"mimeType":"application/octet-stream","resourceType":"font"},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/material-design-icons/Material-Design-Icons.woff","startTime":878.2149999997273,"endTime":1101.5639999995983,"transferSize":141864,"statusCode":200,"mimeType":"application/octet-stream","resourceType":"font"},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Regular.ttf","startTime":878.7199999997028,"endTime":1128.4020000002783,"transferSize":126268,"statusCode":200,"mimeType":"application/octet-stream","resourceType":"font"},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Medium.ttf","startTime":879.1789999995672,"endTime":1162.5020000001314,"transferSize":127684,"statusCode":200,"mimeType":"application/octet-stream","resourceType":"font"},{"url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff2?v=4.3.0","startTime":879.9189999999726,"endTime":1712.8439999996772,"transferSize":415,"statusCode":200,"mimeType":"application/font-woff2","resourceType":"font"},{"url":"chrome-extension://gppongmhjkpfnbhagpmjfkannfbllamg/js/inject.js","startTime":1238.3829999998852,"endTime":1256.1649999997826,"transferSize":0,"statusCode":200,"mimeType":"application/javascript","resourceType":"script"},{"url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff?v=4.3.0","startTime":1714.2320000002655,"endTime":2539.1520000002856,"transferSize":414,"statusCode":200,"mimeType":"application/font-woff","resourceType":"font"},{"url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.ttf?v=4.3.0","startTime":2541.226999999708,"endTime":3337.8890000003594,"transferSize":415,"statusCode":200,"mimeType":"application/x-font-ttf","resourceType":"font"}]}},"metrics":{"id":"metrics","title":"Metrics","description":"Collects all available metrics.","score":null,"scoreDisplayMode":"informative","rawValue":5856.36535,"details":{"items":[{"firstContentfulPaint":1852,"firstMeaningfulPaint":4914,"firstCPUIdle":4914,"interactive":5856,"speedIndex":3310,"estimatedInputLatency":110,"observedNavigationStart":0,"observedNavigationStartTs":6987776759,"observedFirstPaint":1022,"observedFirstPaintTs":6988798339,"observedFirstContentfulPaint":1022,"observedFirstContentfulPaintTs":6988798347,"observedFirstMeaningfulPaint":1531,"observedFirstMeaningfulPaintTs":6989307444,"observedTraceEnd":4506,"observedTraceEndTs":6992282808,"observedLoad":3342,"observedLoadTs":6991119116,"observedDomContentLoaded":990,"observedDomContentLoadedTs":6988766912,"observedFirstVisualChange":1039,"observedFirstVisualChangeTs":6988815759,"observedLastVisualChange":2705,"observedLastVisualChangeTs":6990481759,"observedSpeedIndex":1575,"observedSpeedIndexTs":6989351479}]}},"pwa-cross-browser":{"id":"pwa-cross-browser","title":"Site works cross-browser","description":"To reach the most number of users, sites should work across every major browser. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist#site-works-cross-browser).","score":null,"scoreDisplayMode":"manual","rawValue":false},"pwa-page-transitions":{"id":"pwa-page-transitions","title":"Page transitions don't feel like they block on the network","description":"Transitions should feel snappy as you tap around, even on a slow network, a key to perceived performance. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist#page-transitions-dont-feel-like-they-block-on-the-network).","score":null,"scoreDisplayMode":"manual","rawValue":false},"pwa-each-page-has-url":{"id":"pwa-each-page-has-url","title":"Each page has a URL","description":"Ensure individual pages are deep linkable via the URLs and that URLs are unique for the purpose of shareability on social media. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist#each-page-has-a-url).","score":null,"scoreDisplayMode":"manual","rawValue":false},"accesskeys":{"id":"accesskeys","title":"`[accesskey]` values are unique","description":"Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more](https://dequeuniversity.com/rules/axe/2.2/accesskeys?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"aria-allowed-attr":{"id":"aria-allowed-attr","title":"`[aria-*]` attributes match their roles","description":"Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn more](https://dequeuniversity.com/rules/axe/2.2/aria-allowed-attr?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"aria-required-attr":{"id":"aria-required-attr","title":"`[role]`s have all required `[aria-*]` attributes","description":"Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more](https://dequeuniversity.com/rules/axe/2.2/aria-required-attr?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"aria-required-children":{"id":"aria-required-children","title":"Elements with `[role]` that require specific children `[role]`s, are present","description":"Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/2.2/aria-required-children?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"aria-required-parent":{"id":"aria-required-parent","title":"`[role]`s are contained by their required parent element","description":"Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/2.2/aria-required-parent?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"aria-roles":{"id":"aria-roles","title":"`[role]` values are valid","description":"ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more](https://dequeuniversity.com/rules/axe/2.2/aria-roles?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"aria-valid-attr-value":{"id":"aria-valid-attr-value","title":"`[aria-*]` attributes have valid values","description":"Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more](https://dequeuniversity.com/rules/axe/2.2/aria-valid-attr-value?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"aria-valid-attr":{"id":"aria-valid-attr","title":"`[aria-*]` attributes are valid and not misspelled","description":"Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more](https://dequeuniversity.com/rules/axe/2.2/aria-valid-attr?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"audio-caption":{"id":"audio-caption","title":"`\u003caudio>` elements contain a `\u003ctrack>` element with `[kind=\"captions\"]`","description":"Captions make audio elements usable for deaf or hearing-impaired users, providing critical information such as who is talking, what they're saying, and other non-speech information. [Learn more](https://dequeuniversity.com/rules/axe/2.2/audio-caption?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"button-name":{"id":"button-name","title":"Buttons have an accessible name","description":"When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn more](https://dequeuniversity.com/rules/axe/2.2/button-name?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"bypass":{"id":"bypass","title":"The page contains a heading, skip link, or landmark region","description":"Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more](https://dequeuniversity.com/rules/axe/2.2/bypass?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"color-contrast":{"id":"color-contrast","title":"Background and foreground colors have a sufficient contrast ratio","description":"Low-contrast text is difficult or impossible for many users to read. [Learn more](https://dequeuniversity.com/rules/axe/2.2/color-contrast?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"definition-list":{"id":"definition-list","title":"`\u003cdl>`'s contain only properly-ordered `\u003cdt>` and `\u003cdd>` groups, `\u003cscript>` or `\u003ctemplate>` elements.","description":"When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn more](https://dequeuniversity.com/rules/axe/2.2/definition-list?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"dlitem":{"id":"dlitem","title":"Definition list items are wrapped in `\u003cdl>` elements","description":"Definition list items (`\u003cdt>` and `\u003cdd>`) must be wrapped in a parent `\u003cdl>` element to ensure that screen readers can properly announce them. [Learn more](https://dequeuniversity.com/rules/axe/2.2/dlitem?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"document-title":{"id":"document-title","title":"Document has a `\u003ctitle>` element","description":"The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/title).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"duplicate-id":{"id":"duplicate-id","title":"`[id]` attributes on the page are unique","description":"The value of an id attribute must be unique to prevent other instances from being overlooked by assistive technologies. [Learn more](https://dequeuniversity.com/rules/axe/2.2/duplicate-id?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"frame-title":{"id":"frame-title","title":"`\u003cframe>` or `\u003ciframe>` elements have a title","description":"Screen reader users rely on frame titles to describe the contents of frames. [Learn more](https://dequeuniversity.com/rules/axe/2.2/frame-title?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"html-has-lang":{"id":"html-has-lang","title":"`\u003chtml>` element has a `[lang]` attribute","description":"If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more](https://dequeuniversity.com/rules/axe/2.2/html-lang?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"html-lang-valid":{"id":"html-lang-valid","title":"`\u003chtml>` element has a valid value for its `[lang]` attribute","description":"Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn more](https://dequeuniversity.com/rules/axe/2.2/valid-lang?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"image-alt":{"id":"image-alt","title":"Image elements have `[alt]` attributes","description":"Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more](https://dequeuniversity.com/rules/axe/2.2/image-alt?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"input-image-alt":{"id":"input-image-alt","title":"`\u003cinput type=\"image\">` elements have `[alt]` text","description":"When an image is being used as an `\u003cinput>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn more](https://dequeuniversity.com/rules/axe/2.2/input-image-alt?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"label":{"id":"label","title":"Form elements have associated labels","description":"Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more](https://dequeuniversity.com/rules/axe/2.2/label?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"layout-table":{"id":"layout-table","title":"Presentational `\u003ctable>` elements avoid using `\u003cth>`, `\u003ccaption>` or the `[summary]` attribute.","description":"A table being used for layout purposes should not include data elements, such as the th or caption elements or the summary attribute, because this can create a confusing experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/2.2/layout-table?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"link-name":{"id":"link-name","title":"Links have a discernible name","description":"Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/2.2/link-name?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"list":{"id":"list","title":"Lists contain only `\u003cli>` elements and script supporting elements (`\u003cscript>` and `\u003ctemplate>`).","description":"Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more](https://dequeuniversity.com/rules/axe/2.2/list?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"listitem":{"id":"listitem","title":"List items (`\u003cli>`) are contained within `\u003cul>` or `\u003col>` parent elements","description":"Screen readers require list items (`\u003cli>`) to be contained within a parent `\u003cul>` or `\u003col>` to be announced properly. [Learn more](https://dequeuniversity.com/rules/axe/2.2/listitem?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"meta-refresh":{"id":"meta-refresh","title":"The document does not use `\u003cmeta http-equiv=\"refresh\">`","description":"Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more](https://dequeuniversity.com/rules/axe/2.2/meta-refresh?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"meta-viewport":{"id":"meta-viewport","title":"`[user-scalable=\"no\"]` is not used in the `\u003cmeta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.","description":"Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more](https://dequeuniversity.com/rules/axe/2.2/meta-viewport?application=lighthouse).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"object-alt":{"id":"object-alt","title":"`\u003cobject>` elements have `[alt]` text","description":"Screen readers cannot translate non-text content. Adding alt text to `\u003cobject>` elements helps screen readers convey meaning to users. [Learn more](https://dequeuniversity.com/rules/axe/2.2/object-alt?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"tabindex":{"id":"tabindex","title":"No element has a `[tabindex]` value greater than 0","description":"A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more](https://dequeuniversity.com/rules/axe/2.2/tabindex?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"td-headers-attr":{"id":"td-headers-attr","title":"Cells in a `\u003ctable>` element that use the `[headers]` attribute only refer to other cells of that same table.","description":"Screen readers have features to make navigating tables easier. Ensuring `\u003ctd>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/2.2/td-headers-attr?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"th-has-data-cells":{"id":"th-has-data-cells","title":"`\u003cth>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.","description":"Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more](https://dequeuniversity.com/rules/axe/2.2/th-has-data-cells?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"valid-lang":{"id":"valid-lang","title":"`[lang]` attributes have a valid value","description":"Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn more](https://dequeuniversity.com/rules/axe/2.2/valid-lang?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"video-caption":{"id":"video-caption","title":"`\u003cvideo>` elements contain a `\u003ctrack>` element with `[kind=\"captions\"]`","description":"When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more](https://dequeuniversity.com/rules/axe/2.2/video-caption?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"video-description":{"id":"video-description","title":"`\u003cvideo>` elements contain a `\u003ctrack>` element with `[kind=\"description\"]`","description":"Audio descriptions provide relevant information for videos that dialogue cannot, such as facial expressions and scenes. [Learn more](https://dequeuniversity.com/rules/axe/2.2/video-description?application=lighthouse).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"custom-controls-labels":{"id":"custom-controls-labels","title":"Custom controls have associated labels","description":"Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).","score":null,"scoreDisplayMode":"manual","rawValue":false},"custom-controls-roles":{"id":"custom-controls-roles","title":"Custom controls have ARIA roles","description":"Custom interactive controls have appropriate ARIA roles. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).","score":null,"scoreDisplayMode":"manual","rawValue":false},"focus-traps":{"id":"focus-traps","title":"User focus is not accidentally trapped in a region","description":"A user can tab into and out of any control or region without accidentally trapping their focus. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).","score":null,"scoreDisplayMode":"manual","rawValue":false},"focusable-controls":{"id":"focusable-controls","title":"Interactive controls are keyboard focusable","description":"Custom interactive controls are keyboard focusable and display a focus indicator. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).","score":null,"scoreDisplayMode":"manual","rawValue":false},"heading-levels":{"id":"heading-levels","title":"Headings don't skip levels","description":"Headings are used to create an outline for the page and heading levels are not skipped. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#take_advantage_of_headings_and_landmarks).","score":null,"scoreDisplayMode":"manual","rawValue":false},"logical-tab-order":{"id":"logical-tab-order","title":"The page has a logical tab order","description":"Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).","score":null,"scoreDisplayMode":"manual","rawValue":false},"managed-focus":{"id":"managed-focus","title":"The user's focus is directed to new content added to the page","description":"If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#start_with_the_keyboard).","score":null,"scoreDisplayMode":"manual","rawValue":false},"offscreen-content-hidden":{"id":"offscreen-content-hidden","title":"Offscreen content is hidden from assistive technology","description":"Offscreen content is hidden with display: none or aria-hidden=true. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).","score":null,"scoreDisplayMode":"manual","rawValue":false},"use-landmarks":{"id":"use-landmarks","title":"HTML5 landmark elements are used to improve navigation","description":"Landmark elements (\u003cmain>, \u003cnav>, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#take_advantage_of_headings_and_landmarks).","score":null,"scoreDisplayMode":"manual","rawValue":false},"visual-order-follows-dom":{"id":"visual-order-follows-dom","title":"Visual order on the page follows DOM order","description":"DOM order matches the visual order, improving navigation for assistive technology. [Learn more](https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader).","score":null,"scoreDisplayMode":"manual","rawValue":false},"uses-long-cache-ttl":{"id":"uses-long-cache-ttl","title":"Uses efficient cache policy on static assets","description":"A long cache lifetime can speed up repeat visits to your page. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#cache-control).","score":1,"scoreDisplayMode":"numeric","rawValue":0,"displayValue":"0 assets found","details":{"type":"table","headings":[],"items":[],"summary":{"wastedBytes":0}}},"total-byte-weight":{"id":"total-byte-weight","title":"Avoids enormous network payloads","description":"Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/network-payloads).","score":1,"scoreDisplayMode":"numeric","rawValue":939014,"displayValue":["Total size was %d KB",917.005859375],"details":{"type":"table","headings":[{"key":"url","itemType":"url","text":"URL"},{"key":"totalBytes","itemType":"bytes","displayUnit":"kb","granularity":1,"text":"Total Size"},{"key":"totalMs","itemType":"ms","text":"Transfer Time"}],"items":[{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/material-design-icons/Material-Design-Icons.woff","totalBytes":141864,"totalMs":342.82234272388143},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Thin.ttf","totalBytes":127780,"totalMs":308.787563816455},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Medium.ttf","totalBytes":127684,"totalMs":308.55557441180343},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Light.ttf","totalBytes":126988,"totalMs":306.87365122807944},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/font/roboto/Roboto-Regular.ttf","totalBytes":126268,"totalMs":305.1337306931925},{"url":"https://sharadshinde.in/static/img/sharad.jpg","totalBytes":123875,"totalMs":299.350911470992},{"url":"https://sharadshinde.in/static/img/projects-repo.png","totalBytes":40546,"totalMs":97.9816916771168},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/js/materialize.min.js","totalBytes":34932,"totalMs":84.41514461759591},{"url":"https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js","totalBytes":33581,"totalMs":81.15037705838454},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/css/materialize.min.css","totalBytes":21610,"totalMs":52.221781609591424}]}},"offscreen-images":{"id":"offscreen-images","title":"Defer offscreen images","description":"Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/offscreen-images).","score":1,"scoreDisplayMode":"numeric","rawValue":0,"displayValue":["Potential savings of %d KB",54],"warnings":[],"details":{"type":"table","headings":[{"key":"url","itemType":"thumbnail","text":""},{"key":"url","itemType":"url","text":"URL"},{"key":"totalBytes","itemType":"bytes","displayUnit":"kb","granularity":1,"text":"Original"},{"key":"wastedBytes","itemType":"bytes","displayUnit":"kb","granularity":1,"text":"Potential Savings"}],"items":[{"url":"https://sharadshinde.in/static/img/projects-repo.png","requestStartTime":6988.200371,"totalBytes":40500,"wastedBytes":40500,"wastedPercent":100},{"url":"https://sharadshinde.in/static/img/webmatrix-logo.png","requestStartTime":6988.000947,"totalBytes":5531,"wastedBytes":5531,"wastedPercent":100},{"url":"https://sharadshinde.in/static/img/tutorshere-logo.png","requestStartTime":6988.141035,"totalBytes":5251,"wastedBytes":5251,"wastedPercent":100},{"url":"https://sharadshinde.in/static/img/coditas.png","requestStartTime":6987.999873,"totalBytes":4271,"wastedBytes":4271,"wastedPercent":100}],"summary":{"wastedMs":0,"wastedBytes":55553}}},"render-blocking-resources":{"id":"render-blocking-resources","title":"Eliminate render-blocking resources","description":"Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/blocking-resources).","score":0.65,"scoreDisplayMode":"numeric","rawValue":658,"displayValue":"2 resources delayed first paint by 658ms","details":{"type":"table","headings":[{"key":"url","itemType":"url","text":"URL"},{"key":"totalBytes","itemType":"bytes","displayUnit":"kb","granularity":0.01,"text":"Size (KB)"},{"key":"wastedMs","itemType":"ms","text":"Download Time (ms)","granularity":1}],"items":[{"url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css","totalBytes":5857,"wastedMs":453},{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/css/materialize.min.css","totalBytes":21610,"wastedMs":658}],"summary":{"wastedMs":658}}},"unminified-css":{"id":"unminified-css","title":"Minify CSS","description":"Minifying CSS files can reduce network payload sizes. [Learn more](https://developers.google.com/speed/docs/insights/MinifyResources).","score":1,"scoreDisplayMode":"numeric","rawValue":0,"displayValue":"","details":{"type":"table","headings":[],"items":[],"summary":{"wastedMs":0,"wastedBytes":0}}},"unminified-javascript":{"id":"unminified-javascript","title":"Minify JavaScript","description":"Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://developers.google.com/speed/docs/insights/MinifyResources).","score":1,"scoreDisplayMode":"numeric","rawValue":0,"displayValue":"","warnings":[],"details":{"type":"table","headings":[],"items":[],"summary":{"wastedMs":0,"wastedBytes":0}}},"unused-css-rules":{"id":"unused-css-rules","title":"Defer unused CSS","description":"Remove unused rules from stylesheets to reduce unnecessary bytes consumed by network activity. [Learn more](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery).","score":0.9,"scoreDisplayMode":"numeric","rawValue":150,"displayValue":["Potential savings of %d KB",25],"details":{"type":"table","headings":[{"key":"url","itemType":"url","text":"URL"},{"key":"totalBytes","itemType":"bytes","displayUnit":"kb","granularity":1,"text":"Original"},{"key":"wastedBytes","itemType":"bytes","displayUnit":"kb","granularity":1,"text":"Potential Savings"}],"items":[{"url":"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/css/materialize.min.css","wastedBytes":20051,"wastedPercent":92.78551798831478,"totalBytes":21610},{"url":"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css","wastedBytes":5771,"wastedPercent":98.52563292472303,"totalBytes":5857}],"summary":{"wastedMs":150,"wastedBytes":25822}}},"uses-webp-images":{"id":"uses-webp-images","title":"Serve images in next-gen formats","description":"Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/webp).","score":0.65,"scoreDisplayMode":"numeric","rawValue":300,"displayValue":["Potential savings of %d KB",52],"warnings":[],"details":{"type":"table","headings":[{"key":"url","itemType":"thumbnail","text":""},{"key":"url","itemType":"url","text":"URL"},{"key":"totalBytes","itemType":"bytes","displayUnit":"kb","granularity":1,"text":"Original"},{"key":"wastedBytes","itemType":"bytes","displayUnit":"kb","granularity":1,"text":"Potential Savings"}],"items":[{"url":"https://sharadshinde.in/static/img/sharad.jpg","fromProtocol":true,"isCrossOrigin":false,"totalBytes":123784,"wastedBytes":32020},{"url":"https://sharadshinde.in/static/img/projects-repo.png","fromProtocol":true,"isCrossOrigin":false,"totalBytes":40500,"wastedBytes":20934}],"summary":{"wastedMs":300,"wastedBytes":52954}}},"uses-optimized-images":{"id":"uses-optimized-images","title":"Efficiently encode images","description":"Optimized images load faster and consume less cellular data. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/optimize-images).","score":1,"scoreDisplayMode":"numeric","rawValue":0,"displayValue":"","warnings":[],"details":{"type":"table","headings":[],"items":[],"summary":{"wastedMs":0,"wastedBytes":0}}},"uses-text-compression":{"id":"uses-text-compression","title":"Enable text compression","description":"Text-based responses should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer).","score":1,"scoreDisplayMode":"numeric","rawValue":0,"displayValue":"","details":{"type":"table","headings":[],"items":[],"summary":{"wastedMs":0,"wastedBytes":0}}},"uses-responsive-images":{"id":"uses-responsive-images","title":"Properly size images","description":"Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/oversized-images).","score":1,"scoreDisplayMode":"numeric","rawValue":0,"displayValue":"","warnings":[],"details":{"type":"table","headings":[],"items":[],"summary":{"wastedMs":0,"wastedBytes":0}}},"efficient-animated-content":{"id":"efficient-animated-content","title":"Use video formats for animated content","description":"Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/)","score":1,"scoreDisplayMode":"numeric","rawValue":0,"displayValue":"","details":{"type":"table","headings":[],"items":[],"summary":{"wastedMs":0,"wastedBytes":0}}},"appcache-manifest":{"id":"appcache-manifest","title":"Avoids Application Cache","description":"Application Cache is deprecated. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/appcache).","score":1,"scoreDisplayMode":"binary","rawValue":true,"displayValue":""},"dom-size":{"id":"dom-size","title":"Avoids an excessive DOM size","description":"Browser engineers recommend pages contain fewer than ~1,500 DOM nodes. The sweet spot is a tree depth \u003c 32 elements and fewer than 60 children/parent element. A large DOM can increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://developers.google.com/web/tools/lighthouse/audits/dom-size).","score":0.88,"scoreDisplayMode":"numeric","rawValue":858,"displayValue":["%d nodes",858],"details":{"type":"table","headings":[{"key":"totalNodes","itemType":"text","text":"Total DOM Nodes"},{"key":"depth","itemType":"text","text":"Maximum DOM Depth"},{"key":"width","itemType":"text","text":"Maximum Children"}],"items":[{"totalNodes":"858","depth":"12","width":"40"},{"totalNodes":"","depth":{"type":"code","value":"\u003ca href=\"https://coditas.com\" rel=\"noopener\" target=\"_blank\" class=\"teal-text hoverline\">"},"width":{"type":"code","value":"\u003cbody>"}}]}},"external-anchors-use-rel-noopener":{"id":"external-anchors-use-rel-noopener","title":"Links to cross-origin destinations are safe","description":"Add `rel=\"noopener\"` or `rel=\"noreferrer\"` to any external links to improve performance and prevent security vulnerabilities. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/noopener).","score":1,"scoreDisplayMode":"binary","rawValue":true,"warnings":[],"details":{"type":"table","headings":[],"items":[]}},"geolocation-on-start":{"id":"geolocation-on-start","title":"Avoids requesting the geolocation permission on page load","description":"Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to user gestures instead. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/geolocation-on-load).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"no-document-write":{"id":"no-document-write","title":"Avoids `document.write()`","description":"For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/document-write).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"no-mutation-events":{"id":"no-mutation-events","title":"Avoids Mutation Events in its own scripts","description":"Mutation Events are deprecated and harm performance. Consider using Mutation Observers instead. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/mutation-events).","score":1,"scoreDisplayMode":"binary","rawValue":true,"warnings":[],"details":{"type":"table","headings":[],"items":[]}},"no-vulnerable-libraries":{"id":"no-vulnerable-libraries","title":"Includes front-end JavaScript libraries with known security vulnerabilities","description":"Some third-party scripts may contain known security vulnerabilities  that are easily identified and exploited by attackers.","score":0,"scoreDisplayMode":"binary","rawValue":false,"displayValue":"1 vulnerability detected","details":{"type":"table","headings":[{"key":"detectedLib","itemType":"link","text":"Library Version"},{"key":"vulnCount","itemType":"text","text":"Vulnerability Count"},{"key":"highestSeverity","itemType":"text","text":"Highest Severity"}],"items":[{"highestSeverity":"Medium","vulnCount":1,"detectedLib":{"text":"jQuery@1.11.2","url":"https://snyk.io/vuln/npm:jquery?lh@1.11.2","type":"link"}}],"summary":{}}},"no-websql":{"id":"no-websql","title":"Avoids WebSQL DB","description":"Web SQL is deprecated. Consider using IndexedDB instead. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/web-sql).","score":1,"scoreDisplayMode":"binary","rawValue":true,"displayValue":""},"notification-on-start":{"id":"notification-on-start","title":"Avoids requesting the notification permission on page load","description":"Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/notifications-on-load).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"password-inputs-can-be-pasted-into":{"id":"password-inputs-can-be-pasted-into","title":"Allows users to paste into password fields","description":"Preventing password pasting undermines good security policy. [Learn more](https://www.ncsc.gov.uk/blog-post/let-them-paste-passwords).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"uses-http2":{"id":"uses-http2","title":"Uses HTTP/2 for its own resources","description":"HTTP/2 offers many benefits over HTTP/1.1, including binary headers, multiplexing, and server push. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/http2).","score":1,"scoreDisplayMode":"binary","rawValue":true,"displayValue":"","details":{"type":"table","headings":[],"items":[]}},"uses-passive-event-listeners":{"id":"uses-passive-event-listeners","title":"Uses passive listeners to improve scrolling performance","description":"Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/passive-event-listeners).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"meta-description":{"id":"meta-description","title":"Document has a meta description","description":"Meta descriptions may be included in search results to concisely summarize page content. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/description).","score":1,"scoreDisplayMode":"binary","rawValue":true},"http-status-code":{"id":"http-status-code","title":"Page has successful HTTP status code","description":"Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/successful-http-code).","score":1,"scoreDisplayMode":"binary","rawValue":true},"font-size":{"id":"font-size","title":"Document uses legible font sizes","description":"Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/font-sizes).","score":1,"scoreDisplayMode":"binary","rawValue":true,"displayValue":["%.1d% legible text",100],"details":{"type":"table","headings":[{"key":"source","itemType":"url","text":"Source"},{"key":"selector","itemType":"code","text":"Selector"},{"key":"coverage","itemType":"text","text":"% of Page Text"},{"key":"fontSize","itemType":"text","text":"Font Size"}],"items":[{"source":"Legible text","selector":"","coverage":"100.00%","fontSize":"≥ 12px"}]}},"link-text":{"id":"link-text","title":"Links have descriptive text","description":"Descriptive link text helps search engines understand your content. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[],"summary":{}}},"is-crawlable":{"id":"is-crawlable","title":"Page isn’t blocked from indexing","description":"Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/indexing).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"robots-txt":{"id":"robots-txt","title":"robots.txt is valid","description":"If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed.","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"hreflang":{"id":"hreflang","title":"Document has a valid `hreflang`","description":"hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/hreflang).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"plugins":{"id":"plugins","title":"Document avoids plugins","description":"Search engines can't index plugin content, and many devices restrict plugins or don't support them. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/plugins).","score":1,"scoreDisplayMode":"binary","rawValue":true,"details":{"type":"table","headings":[],"items":[]}},"canonical":{"id":"canonical","title":"Document has a valid `rel=canonical`","description":"Canonical links suggest which URL to show in search results. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/canonical).","score":null,"scoreDisplayMode":"not-applicable","rawValue":true},"mobile-friendly":{"id":"mobile-friendly","title":"Page is mobile friendly","description":"Take the [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) to check for audits not covered by Lighthouse, like sizing tap targets appropriately. [Learn more](https://developers.google.com/search/mobile-sites/).","score":null,"scoreDisplayMode":"manual","rawValue":false},"structured-data":{"id":"structured-data","title":"Structured data is valid","description":"Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more](https://developers.google.com/search/docs/guides/mark-up-content).","score":null,"scoreDisplayMode":"manual","rawValue":false}},"configSettings":{"output":"json","maxWaitForLoad":45000,"throttlingMethod":"simulate","throttling":{"rttMs":150,"throughputKbps":1638.4,"requestLatencyMs":562.5,"downloadThroughputKbps":1474.5600000000002,"uploadThroughputKbps":675,"cpuSlowdownMultiplier":4},"auditMode":false,"gatherMode":false,"disableStorageReset":false,"disableDeviceEmulation":false,"blockedUrlPatterns":null,"additionalTraceCategories":null,"extraHeaders":null,"onlyAudits":null,"onlyCategories":["performance","pwa","best-practices","accessibility","seo"],"skipAudits":null},"categories":{"performance":{"title":"Performance","auditRefs":[{"id":"first-contentful-paint","weight":3,"group":"metrics"},{"id":"first-meaningful-paint","weight":1,"group":"metrics"},{"id":"speed-index","weight":4,"group":"metrics"},{"id":"interactive","weight":5,"group":"metrics"},{"id":"first-cpu-idle","weight":2,"group":"metrics"},{"id":"estimated-input-latency","weight":0,"group":"metrics"},{"id":"render-blocking-resources","weight":0,"group":"load-opportunities"},{"id":"uses-responsive-images","weight":0,"group":"load-opportunities"},{"id":"offscreen-images","weight":0,"group":"load-opportunities"},{"id":"unminified-css","weight":0,"group":"load-opportunities"},{"id":"unminified-javascript","weight":0,"group":"load-opportunities"},{"id":"unused-css-rules","weight":0,"group":"load-opportunities"},{"id":"uses-optimized-images","weight":0,"group":"load-opportunities"},{"id":"uses-webp-images","weight":0,"group":"load-opportunities"},{"id":"uses-text-compression","weight":0,"group":"load-opportunities"},{"id":"uses-rel-preconnect","weight":0,"group":"load-opportunities"},{"id":"time-to-first-byte","weight":0,"group":"load-opportunities"},{"id":"redirects","weight":0,"group":"load-opportunities"},{"id":"uses-rel-preload","weight":0,"group":"load-opportunities"},{"id":"efficient-animated-content","weight":0,"group":"load-opportunities"},{"id":"total-byte-weight","weight":0,"group":"diagnostics"},{"id":"uses-long-cache-ttl","weight":0,"group":"diagnostics"},{"id":"dom-size","weight":0,"group":"diagnostics"},{"id":"critical-request-chains","weight":0,"group":"diagnostics"},{"id":"network-requests","weight":0},{"id":"metrics","weight":0},{"id":"user-timings","weight":0,"group":"diagnostics"},{"id":"bootup-time","weight":0,"group":"diagnostics"},{"id":"screenshot-thumbnails","weight":0},{"id":"mainthread-work-breakdown","weight":0,"group":"diagnostics"},{"id":"font-display","weight":0,"group":"diagnostics"}],"id":"performance","score":0.78},"pwa":{"title":"Progressive Web App","description":"These checks validate the aspects of a Progressive Web App, as specified by the baseline [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist).","manualDescription":"These checks are required by the baseline [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist) but are not automatically checked by Lighthouse. They do not affect your score but it's important that you verify them manually.","auditRefs":[{"id":"service-worker","weight":1},{"id":"works-offline","weight":1},{"id":"without-javascript","weight":1},{"id":"is-on-https","weight":1},{"id":"redirects-http","weight":1},{"id":"load-fast-enough-for-pwa","weight":1},{"id":"webapp-install-banner","weight":1},{"id":"splash-screen","weight":1},{"id":"themed-omnibox","weight":1},{"id":"viewport","weight":1},{"id":"content-width","weight":1},{"id":"pwa-cross-browser","weight":0},{"id":"pwa-page-transitions","weight":0},{"id":"pwa-each-page-has-url","weight":0}],"id":"pwa","score":1},"accessibility":{"title":"Accessibility","description":"These checks highlight opportunities to [improve the accessibility of your web app](https://developers.google.com/web/fundamentals/accessibility). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.","manualDescription":"These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review).","auditRefs":[{"id":"accesskeys","weight":0,"group":"a11y-correct-attributes"},{"id":"aria-allowed-attr","weight":3,"group":"a11y-aria"},{"id":"aria-required-attr","weight":0,"group":"a11y-aria"},{"id":"aria-required-children","weight":0,"group":"a11y-aria"},{"id":"aria-required-parent","weight":0,"group":"a11y-aria"},{"id":"aria-roles","weight":0,"group":"a11y-aria"},{"id":"aria-valid-attr-value","weight":2,"group":"a11y-aria"},{"id":"aria-valid-attr","weight":5,"group":"a11y-aria"},{"id":"audio-caption","weight":0,"group":"a11y-correct-attributes"},{"id":"button-name","weight":0,"group":"a11y-element-names"},{"id":"bypass","weight":10,"group":"a11y-describe-contents"},{"id":"color-contrast","weight":6,"group":"a11y-color-contrast"},{"id":"definition-list","weight":0,"group":"a11y-well-structured"},{"id":"dlitem","weight":0,"group":"a11y-well-structured"},{"id":"document-title","weight":2,"group":"a11y-describe-contents"},{"id":"duplicate-id","weight":5,"group":"a11y-well-structured"},{"id":"frame-title","weight":0,"group":"a11y-describe-contents"},{"id":"html-has-lang","weight":4,"group":"a11y-language"},{"id":"html-lang-valid","weight":1,"group":"a11y-language"},{"id":"image-alt","weight":8,"group":"a11y-correct-attributes"},{"id":"input-image-alt","weight":0,"group":"a11y-correct-attributes"},{"id":"label","weight":0,"group":"a11y-describe-contents"},{"id":"layout-table","weight":0,"group":"a11y-describe-contents"},{"id":"link-name","weight":9,"group":"a11y-element-names"},{"id":"list","weight":5,"group":"a11y-well-structured"},{"id":"listitem","weight":4,"group":"a11y-well-structured"},{"id":"meta-refresh","weight":0,"group":"a11y-meta"},{"id":"meta-viewport","weight":3,"group":"a11y-meta"},{"id":"object-alt","weight":0,"group":"a11y-describe-contents"},{"id":"tabindex","weight":0,"group":"a11y-correct-attributes"},{"id":"td-headers-attr","weight":0,"group":"a11y-correct-attributes"},{"id":"th-has-data-cells","weight":0,"group":"a11y-correct-attributes"},{"id":"valid-lang","weight":0,"group":"a11y-language"},{"id":"video-caption","weight":0,"group":"a11y-describe-contents"},{"id":"video-description","weight":0,"group":"a11y-describe-contents"},{"id":"logical-tab-order","weight":0},{"id":"focusable-controls","weight":0},{"id":"managed-focus","weight":0},{"id":"focus-traps","weight":0},{"id":"custom-controls-labels","weight":0},{"id":"custom-controls-roles","weight":0},{"id":"visual-order-follows-dom","weight":0},{"id":"offscreen-content-hidden","weight":0},{"id":"heading-levels","weight":0},{"id":"use-landmarks","weight":0}],"id":"accessibility","score":1},"best-practices":{"title":"Best Practices","auditRefs":[{"id":"appcache-manifest","weight":1},{"id":"no-websql","weight":1},{"id":"is-on-https","weight":1},{"id":"uses-http2","weight":1},{"id":"uses-passive-event-listeners","weight":1},{"id":"no-mutation-events","weight":1},{"id":"no-document-write","weight":1},{"id":"external-anchors-use-rel-noopener","weight":1},{"id":"geolocation-on-start","weight":1},{"id":"no-vulnerable-libraries","weight":1},{"id":"notification-on-start","weight":1},{"id":"deprecations","weight":1},{"id":"manifest-short-name-length","weight":1},{"id":"password-inputs-can-be-pasted-into","weight":1},{"id":"errors-in-console","weight":1},{"id":"image-aspect-ratio","weight":1}],"id":"best-practices","score":0.88},"seo":{"title":"SEO","description":"These checks ensure that your page is optimized for search engine results ranking. There are additional factors Lighthouse does not check that may affect your search ranking. [Learn more](https://support.google.com/webmasters/answer/35769).","manualDescription":"Run these additional validators on your site to check additional SEO best practices.","auditRefs":[{"id":"viewport","weight":1,"group":"seo-mobile"},{"id":"document-title","weight":1,"group":"seo-content"},{"id":"meta-description","weight":1,"group":"seo-content"},{"id":"http-status-code","weight":1,"group":"seo-crawl"},{"id":"link-text","weight":1,"group":"seo-content"},{"id":"is-crawlable","weight":1,"group":"seo-crawl"},{"id":"robots-txt","weight":0,"group":"seo-crawl"},{"id":"hreflang","weight":1,"group":"seo-content"},{"id":"canonical","weight":0,"group":"seo-content"},{"id":"font-size","weight":1,"group":"seo-mobile"},{"id":"plugins","weight":1,"group":"seo-content"},{"id":"mobile-friendly","weight":0},{"id":"structured-data","weight":0}],"id":"seo","score":1}},"categoryGroups":{"metrics":{"title":"Metrics"},"load-opportunities":{"title":"Opportunities","description":"These are opportunities to speed up your application by optimizing the following resources."},"diagnostics":{"title":"Diagnostics","description":"More information about the performance of your application."},"a11y-color-contrast":{"title":"Color Contrast Is Satisfactory","description":"These are opportunities to improve the legibility of your content."},"a11y-describe-contents":{"title":"Elements Describe Contents Well","description":"These are opportunities to make your content easier to understand for a user of assistive technology, like a screen reader."},"a11y-well-structured":{"title":"Elements Are Well Structured","description":"These are opportunities to make sure your HTML is appropriately structured."},"a11y-aria":{"title":"ARIA Attributes Follow Best Practices","description":"These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."},"a11y-correct-attributes":{"title":"Elements Use Attributes Correctly","description":"These are opportunities to improve the configuration of your HTML elements."},"a11y-element-names":{"title":"Elements Have Discernible Names","description":"These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."},"a11y-language":{"title":"Page Specifies Valid Language","description":"These are opportunities to improve the interpretation of your content by users in different locales."},"a11y-meta":{"title":"Meta Tags Used Properly","description":"These are opportunities to improve the user experience of your site."},"seo-mobile":{"title":"Mobile Friendly","description":"Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/)."},"seo-content":{"title":"Content Best Practices","description":"Format your HTML in a way that enables crawlers to better understand your app’s content."},"seo-crawl":{"title":"Crawling and Indexing","description":"To appear in search results, crawlers need access to your app."}},"timing":{"total":19347}};</script>
  <script>
    window.addEventListener('DOMContentLoaded', _ => {
      const dom = new DOM(document);
      const renderer = new ReportRenderer(dom);

      const container = document.querySelector('main');
      renderer.renderReport(window.__LIGHTHOUSE_JSON__, container);

      // Hook in JS features and page-level event listeners after the report
      // is in the document.
      const features = new ReportUIFeatures(dom);
      features.initFeatures(window.__LIGHTHOUSE_JSON__);
    });

    document.addEventListener('lh-analytics', e => {
      if (window.ga) {
        ga(e.detail.cmd, e.detail.fields);
      }
    });

    document.addEventListener('lh-log', e => {
      const logger = new Logger(document.querySelector('#lh-log'));

      switch (e.detail.cmd) {
        case 'log':
          logger.log(e.detail.msg);
          break;
        case 'warn':
          logger.warn(e.detail.msg);
          break;
        case 'error':
          logger.error(e.detail.msg);
          break;
        case 'hide':
          logger.hide();
          break;
      }
    });
  </script>
