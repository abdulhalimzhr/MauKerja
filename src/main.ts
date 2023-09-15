import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/app.css';
import { en, ms } from './locales/locales';

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  messages: {
    en: en,
    ms: ms
  }
});

createApp(App).use(store).use(router).use(i18n).mount('#app');
