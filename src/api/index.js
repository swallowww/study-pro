const API = {
    tips: [{
        title: 'Mutation 需遵守 Vue 的响应规则',
        subTitle: '既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项',
        link: 'https://vuex.vuejs.org/zh/guide/mutations.html'
    }, {
        title: 'Vue-给对象新增属性（使用Vue.$set()）',
        subTitle: 'this.obj= Object.assign({}, this.obj, { a: 1, e: 2 })',
        link: 'https://www.jianshu.com/p/71b1807b1815'
    }, {
        title: 'Object.assign()',
        subTitle: 'Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。',
        link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign'
    }]
}
export default API;