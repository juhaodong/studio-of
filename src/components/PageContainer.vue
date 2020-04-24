<template>
  <div class="grid-background">
    <div class="realSpace">
      <router-view />
    </div>
    <div class="langSwitch">
      中文
    </div>
  </div>
</template>

<script>
    export default {
        name: "PageContainer"
    }
</script>

<style scoped lang="scss">
  .element::-webkit-scrollbar {
    width: 0 !important
  }

  .grid-background {
    overflow-x: scroll;
    position: relative;
    width: calc(100vw - 300px);
    min-height: 100vh;
    background-color: #fff;
    background-size: $gridSize $gridSize;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3) 0.1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0.1px, transparent 1px);

  }

  .langSwitch {
    cursor: pointer;
    position: fixed;
    top: 62.5px;
    right: 2*$gridSize;
    font-size: 16px;
    font-family: SIL-Hei-Med-Jian;
  }

  .realSpace {
    /*background: rgba(0,0,0,0.4);*/
    margin-left: 4 * $gridSize;
    margin-right: 3 * $gridSize;
    padding: 3*$gridSize 0;
    width: 3*405px + 2*108px;
  }

</style>
