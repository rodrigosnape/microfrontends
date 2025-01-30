import { defineCustomElement } from 'vue';
import App from './App.vue';

// Criar o Web Component
const VueAppElement = defineCustomElement(App);

if (!customElements.get('vue-app')) {
    customElements.define('vue-app', VueAppElement);
  }  
