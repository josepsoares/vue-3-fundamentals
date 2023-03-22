import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVfm } from 'vue-final-modal';
import App from './App.vue';

import './style.css';
import 'vue-final-modal/style.css';

const app = createApp(App);
const pinia = createPinia();
const vfm = createVfm();

app.use(pinia);
app.use(vfm);
app.mount('#app');
