<template>
  <div id="app">
    <home />
  </div>
</template>

<style>
  html {
    scroll-behavior: smooth;
  }

  p {
    font-family: Codec, 'Noto Sans SC', sans-serif;
  }

  #app {
    font-family: Codec, 'Noto Sans SC', 'Encode Sans', "Helvetica Neue", 'Hei', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
<style lang="scss">
  @media only screen and(max-width: 600px) {
    .mobileWhite {
      background: white;
    }
  }

  $gridSize: 27px;
</style>
<script>
    import Home from "@/views/Home";

    export default {
        components: {Home}
    }
</script>
