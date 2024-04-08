import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './components/App.vue';

import 'primevue/resources/themes/aura-light-green/theme.css';

const app = createApp(App);

app.config.compilerOptions.delimiters = ['${', '}$']

app.use(PrimeVue);


app.mount('#app');