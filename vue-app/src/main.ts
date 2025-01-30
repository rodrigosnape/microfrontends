import { createApp } from 'vue'
import App from './App.vue'
import { defineCustomElement } from 'vue'

// Definir o Web Component
const AppElement = defineCustomElement(App)

// Registrar o Web Component
customElements.define('vue-app', AppElement)

// Criar a aplicação Vue
createApp(App).mount('#app')