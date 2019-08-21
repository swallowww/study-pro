import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import echarts from 'echarts'
import store from './store'
import Home from './pages/home.vue'
import Tips from './pages/tips.vue'
import Sample1 from './components/sample/test1.vue'
import Sample2 from './pages/echartsTest.vue'

import './assets/css/common.less'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.prototype.$echarts = echarts

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/tips', component: Tips },
        { path: '/sample1', component: Sample1 },
        { path: '/sample2', component: Sample2 },
    ]
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')