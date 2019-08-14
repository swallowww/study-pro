<template>
  <div>
    <p class="show">name:{{$store.state.User.name}}</p>
    <input type="text" placeholder="请输入新名字" v-model="renameValue">
    <input type="button" value="确定" v-on:click="rename">
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      renameValue:''
    };
  },
  mounted() {

  },
  methods: {
    rename() {
      this.$store.commit("rename",this.renameValue);
    }
  }
};
</script>

<style scoped lang="less">
.show{
    font-size: 16px;
    line-height: 22px;
}
</style>