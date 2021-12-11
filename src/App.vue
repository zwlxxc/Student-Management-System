<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {

    }
  }
</script>

<style>
  @import "assets/css/base.css";
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
