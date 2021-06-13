import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import vuex from './plugins/store';
import axios from './plugins/axios'
//import axios_ from 'axios'
import { IonicVue } from '@ionic/vue';
//import Socketio from '@/plugins/socket-io'
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
//import './theme/core.css';
//import './theme/material-dashboard.css';

import 'animate.css';



const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(vuex)
  .use(axios)
  .use(store)
  //.use(Socketio, {
    //connection: axios_.defaults.baseURL,
    //options: {
        // Your Socket.io options here
    //}
//})




//app.component('base-layout', BaseLayout);
  
router.isReady().then(() => {
  app.mount('#app');
});