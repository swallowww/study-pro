<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#000;
}
body{
  margin:0;
}
img{
  margin:0;
}
ul,li,p,h1,h2,h3,h4,h5,h6{
  padding:0;
  margin:0;
  font-weight: normal;
}
a{
  color:inherit;
  text-decoration: none;
}
</style>
