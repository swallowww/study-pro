const state = {
    name: '张三',
}

// Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
// getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
const getters = {
    beforeName: () => {
        return 'Mr.'
    },
    combName: (state, getters) => (para) => {
        return getters.beforeName + state.name + para
    }
}

const mutations = {
    rename(state, newname) {
        state.name = newname;
    }
}

export default {
    // namespaced: true,
    state,
    getters,
    // actions,
    mutations
}