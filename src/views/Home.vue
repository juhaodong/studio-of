<template>
  <div class="d-flex">
    <sidecol />
    <page-container />
    <transition name="slide-fade">
      <div
        v-show="loading"
        ref="loading"
        class="loading"
      />
    </transition>
    <transition name="slide-fade">
      <div
        v-show="loading"
        ref="loadingMobile"
        class="loading hideOnFull"
      />
    </transition>

    <!--    <div-->
    <!--      class="loading"-->
    <!--      v-show="!loading"-->
    <!--      v-cloak-->
    <!--    >-->
    <!--      <img src="@/assets/studioLogo.png">-->
    <!--    </div>-->
  </div>
</template>

<script>
    import lottie from 'lottie-web'
    import Sidecol from "@/components/SideCol";
    import PageContainer from "@/components/PageContainer";

    export default {
        name: 'Home',
        components: {PageContainer, Sidecol},
        data: function () {
            return {
                animation: {},
                animation2: {},
                loading: true
            }
        },
        mounted() {
            this.animation = lottie.loadAnimation({
                    container: this.$refs.loading,
                    renderer: 'svg',
                    autoplay: true,
                    path: '/data.json'
                }
            )
            setTimeout(this.stopAnimation, 7000)
            this.animation2 = lottie.loadAnimation({
                    container: this.$refs.loadingMobile,
                    renderer: 'svg',
                    autoplay: true,
                    path: '/data2.json'
                }
            )
            setTimeout(this.stopAnimation, 7000)

        },
        methods: {
            stopAnimation: function () {
                this.animation.destroy()
                this.animation2.destroy()
                this.loading = false
            }
        }
    }
</script>
<style scoped lang="scss">

  .loading {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: white;
    display: flex;
    align-items: center;
    z-index: 100;
    justify-content: center;
  }

  .loading img {
    margin-left: 3vw;
    width: 13vw;
  }

  .slide-fade-enter-active {
    transition: all .2s ease;
  }

  .slide-fade-leave-active {
    transition: all .2s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    /*transform: translateX(100vw);*/
    opacity: 0;
  }

  [v-clock] {
    display: none;
  }

  .video {
    width: 100vw;
    height: 100vh;
  }
</style>


