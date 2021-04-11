import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';


import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                           //icons
import Tooltip from 'primevue/tooltip';


const app = createApp(App)
app.directive('tooltip', Tooltip);
app.use(router)
app.use(PrimeVue);
app.mount('#app')
