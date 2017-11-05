import GrainLitElement, {html} from './node_modules/grain-lit-element/GrainLitElement.js';
import GrainTranslate from './node_modules/grain-translate/GrainTranslate.js';
import GrainTranslateMixin from './node_modules/grain-translate/GrainTranslateMixin.js';
import './node_modules/grain-translate-example/grain-translate-example.js';

new GrainTranslate({ debug: false });

// // Preload these namespaces
// window.grainTranslate.loadNamespaces(['translations', 'grain-translate-example']);

// // Directly add translations - no request will be done for these namespaces
// window.grainTranslate.proxy.addResourceBundle('en', 'translations', {
//   shop: 'Shop',
// });

class GrainShopDemo extends GrainTranslateMixin(GrainLitElement(HTMLElement)) {

  static get translateDefaults() {
    return {
      namespace: 'translations',
      loadNamespaces: ['translations', 'grain-translate-example']
    };
  }

  render() {
    console.log('r');
    return html`
      <h1>${this.t('shop')}</h1>
      <h1>${this.t('translations:shop')}</h1>
      <h1>${this.t('grain-translate-example:greeting')}</h1>
      <grain-translate-example></grain-translate-example>
      <button onclick="grainTranslate.changeLanguage('de');">Change to German</button>
      <button onclick="grainTranslate.changeLanguage('en');">Change to English</button>
    `;
  }

}

customElements.define('grain-shop-demo', GrainShopDemo);