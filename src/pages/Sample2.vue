<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{item.content}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "sample2",
  data() {
    return {
      list:[]
    };
  },
  components: {

  },
  created(){
    this.getPageInfo();
  },
  mounted() {
    
  },
  methods: {
    getPageInfo(){
      let self=this;
      this.axios.get('/api/test1.json?r='+parseInt(Math.random()*10000))
      .then(res => {
        // 成功回调
        if(res.data){
          self.list=res.data.test;
        }
      }, res => {
        // 错误回调
      })
    }
  }
};
</script>

<style scoped lang="less">
</style>
