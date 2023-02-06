import Vue from 'vue'
import App from './App.vue'
// import { Button } from 'vant';
// import 'vant/lib/index.css';
// import { initTheme } from '@atom/b2c-tokens';
import '@atom/b2c-tokens/dist/variables.css';

// initTheme();

Vue.config.productionTip = false

Vue.use(window.hxmui);
// Vue.use(Button);

new Vue({
  render: h => h(App),
}).$mount('#app')
