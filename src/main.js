import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import echarts from 'echarts'
import store from './store'
import router from './router'

import './assets/css/common.less'

Vue.config.productionTip = false
Vue.use(Vuex)

Vue.prototype.$echarts = echarts

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')