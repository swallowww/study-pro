const state = {
    name: '张三',
}

const mutations = {
    rename(state, newname) {
        state.name = newname;
    }
}

export default {
    // namespaced: true,
    state,
    // getters,
    // actions,
    mutations
}