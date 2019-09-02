import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/home.vue'
import Tips from '../pages/tips.vue'
import Sample1 from '../components/sample/test1.vue'
import Sample2 from '../pages/echartsTest.vue'

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/tips', component: Tips },
        { path: '/sample1', component: Sample1 },
        { path: '/sample2', component: Sample2 },
    ]
})

export default router;