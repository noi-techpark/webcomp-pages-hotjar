import { LitElement, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import _ from 'lodash';

class HotJarElement extends LitElement {

  constructor() {
    super();

    this.siteID = '';
  }

  static get properties() {
    return {
      siteID: { attribute: 'site-id', type: String }
    };
  }

  render() {
    return html``;
  }

  async firstUpdated() {
    let self = this;

    if (!!self.siteID) {
      ((h, o, t, j, a, r) => {
        h.hj = h.hj || function() {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
        h._hjSettings = { hjid: parseInt(self.siteID), hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    }
  }

}

if (!customElements.get('pages-hotjar')) {
  customElements.define('pages-hotjar', HotJarElement);
}