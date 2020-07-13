import Vue from 'vue'
import App from './App.vue'
import FandingUi from './plugins/fanding-ui';

Vue.config.productionTip = false
Vue.use(FandingUi);

new Vue({
  render: h => h(App),
}).$mount('#app')
