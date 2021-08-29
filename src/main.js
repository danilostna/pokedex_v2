import Vue from 'vue';
import VueInfiniteLoading from 'vue-infinite-loading';
import './styles/main.scss';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueInfiniteLoading, {});

new Vue({
  render: h => h(App),
}).$mount('#root');
