import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store'
import Home from './pages/home.vue'
import Tips from './pages/tips.vue'
import Sample1 from './components/sample/test1.vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/tips', component: Tips },
        { path: '/sample1', component: Sample1 },
    ]
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')