<template>
  <div>
    <div class="container">
      <h5 class="page-title">学习笔记</h5>
      <ul class="study-tips">
        <li v-for="(tip,index) in tips" :key="index">
          <a :href="tip.link" target="_blank">
            <p class="title">{{tip.title}}</p>
            <p class="sub-title">{{tip.subTitle}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import API from "../api";

export default {
  data() {
    return {
      tips: []
    };
  },
  mounted() {
    console.log(API);
    this.tips = API.tips;
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  max-width: 900px;
  margin: auto;
  .page-title {
    font-size: 1rem;
    text-align: center;
    padding: 1rem 0;
    font-weight: bold;
  }
  .study-tips {
    li {
      list-style: none;
      > a {
        display: block;
        padding: 1rem;
        .title {
          font-size: 1rem;
        }
        .sub-title {
          color: #999;
          font-size: 0.8rem;
        }
      }
      > a:hover {
        box-shadow: 0 0 4px #999;
      }
    }
  }
}
</style>