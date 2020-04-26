<template>
  <div class="grid-background">
    <div class="grid-background-real" />
    <div class="realSpace">
      <transition name="slide-fade">
        <router-view />
      </transition>
    </div>
    <language-switch class="language-switch" />
  </div>
</template>

<script>
    import LanguageSwitch from "@/components/LanguageSwitch";

    export default {
        name: "PageContainer",
        components: {LanguageSwitch},
    }
</script>

<style scoped lang="scss">
  .element::-webkit-scrollbar {
    width: 0 !important
  }

  .grid-background {
    overflow-x: scroll;
    position: relative;
  }
  .grid-background-real{
    position: fixed;
    width: calc(100vw - 300px);
    height: 100vh;
    z-index: -1;
    background-color: #fff;
    background-size: $gridSize $gridSize;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3) 0.1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0.1px, transparent 1px);
  }

  .language-switch {
    position: fixed;
    top: 65px;
  }

  .realSpace {
    /*background: rgba(0,0,0,0.4);*/
    margin-left: 4 * $gridSize;
    margin-right: 3 * $gridSize;
    padding: 3*$gridSize 0;
    width: 3*405px + 2*108px;
  }

  @media only screen and(max-width: 600px) {
    .grid-background {
      width: 100%;
      overflow-x: hidden;
      padding: 0;
    }
    .grid-background-real{

      width: 100%;


    }
    .realSpace {
      padding: 27px;
      margin: unset;
      margin-top: 81px;
      width: 100%;
    }
    .language-switch {
      display: none;
    }
  }
</style>
