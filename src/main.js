import './styles/index.scss';
import { createApp } from 'vue';
import i18n from './plugins/i18n';
import App from './App.vue';
import store from './store';

createApp(App)
  .use(store)
  .use(i18n)
  .mount('#app');
