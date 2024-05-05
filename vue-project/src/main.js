import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from "./router";

import "../node_modules/primeflex/primeflex.css";
import "../node_modules/primevue/resources/themes/aura-light-green/theme.css";
import "../node_modules/primeicons/primeicons.css";
import "./style.css";
import "./flags.css";


createApp(App).use(PrimeVue).use(router).mount('#app');
