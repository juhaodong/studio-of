<template>
  <div id="app">
    <home />
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
<style lang="scss">
  $gridSize:27px;
</style>
<script>
    import Home from "@/views/Home";

    export default {
        components: {Home}
    }
</script>
