<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @font-face {
    font-family: 'supercell';
    src: url('https://clashroyale.com/fonts/supercell-magic.woff') format('woff');
  }
  
  #app {
    font-family: 'supercell', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
