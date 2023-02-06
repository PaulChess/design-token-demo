<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" @test="handleParams(arguments)" />
    <hxm-button @click="showDialog">测试</hxm-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    showDialog() {
      this.$dialog({
        title: '标题',
        content: '代码写出来是给人看的',
        btns: [
          {
            text: '我知道了',
          },
        ],
      });
    },
    handleParams(params) {
      console.log(params);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
