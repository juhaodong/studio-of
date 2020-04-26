<template>
  <div class="grid-background">
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
    width: calc(100vw - 300px);
    height: 100vh;
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
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    /*transform: translateX(100vw);*/
    opacity: 0;
  }
  @media only screen and(max-width: 600px) {
    .grid-background {
      width: 100%;
      padding: 27px;
      padding-right: 23px;
    }
    .realSpace {
      margin: unset;
      margin-top: 81px;
      padding-top: 0;
      width: 100%;
    }
    .language-switch {
      display: none;
    }
  }
</style>
