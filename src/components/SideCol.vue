<template>
  <div class="sideNav">
    <div class="realSide">
      <div
        class="topIcon"
        :class="{about:$route.path==='/about'}"
      >
        <router-link to="/">
          <img
            style="width:100%;height: auto"
            src="@/assets/studioLogo.png"
          >
        </router-link>
      </div>
      <div
        :class="{about:$route.path==='/about'}"
        class="nav-container"
      >
        <div>
          <router-link
            to="/about"
            class="nav-item"
          >
            ABOUT
          </router-link>
        </div>
        <div style="margin-top: 22px">
          <router-link
            to="/"
            class="nav-item"
          >
            WORK
          </router-link>
        </div>
      </div>
      <div class="bottom">
        <div class="bigger">
          Email: studio@info.com
        </div>
        <div class="bigger">
          Instagram @studioof
        </div>
        <div class="middle">
          公众号:Studio Of
        </div>
        <router-link
          to="/privacy"
          class="middle"
        >
          Privacy Policy
        </router-link>
        <div
          style="margin-top: 10px"
          class="tiny"
        >
          © 2020 Studio OF All Rights Reserved
        </div>
      </div>
      <div
        class="hideOnFull"
      >
        <transition>
          <i
            @click="mobileNavOpen=!mobileNavOpen"
            class="material-icons"
            style="font-size: 40px"
          >{{ mobileNavOpen?'close':'menu' }}</i>
        </transition>
        <language-switch />
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="mobileNavOpen"
        class="hoverMenu hideOnFull"
      >
        <div
          @click="mobileNavOpen=false"
          :class="{about:$route.path==='/about'}"
          class="nav-container-mobile"
        >
          <div>
            <router-link
              to="/"
              class="nav-item"
            >
              WORK
            </router-link>
          </div>
          <div style="margin-top:120px">
            <router-link
              to="/about"
              class="nav-item"
            >
              ABOUT
            </router-link>
          </div>
          <div style="margin-top:120px">
            <router-link
              to="/privacy"
              class="nav-item"
            >
              CONTACT
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    import LanguageSwitch from "@/components/LanguageSwitch";

    export default {
        name: "Sidecol",
        data: function () {
            return {
                mobileNavOpen: false
            }
        },
        components: {LanguageSwitch}
    }
</script>

<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .sideNav {
    position: fixed;
    z-index: 100;
    width: $sideBarWidth;
    height: 100vh;
  }


  .topIcon.about {
    width: 328px;
  }

  .nav-container.about {
    margin-top: 130px;
  }


  .realSide {
    height: 100vh;
    width: $sideBarWidth;
    position: fixed;
    left: 0;
    top: 0;
  }

  .topIcon {
    margin-top: 100px;
    margin-left: 53px;
    width: 207px;
    transition: width 0.4s;
  }

  .nav-container {
    margin-top: 150px;
    margin-left: 53px;
    font-family: 'Encode Sans', sans-serif;
    font-weight: bold;
    font-size: 23px;
    text-align: left;
    transition: margin-top 0.4s;
  }

  .nav-item {
    color: #000000;
    cursor: pointer;
    width: fit-content;
  }


  .middle {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }

  .tiny {
    font-size: 10px;
  }

  .bottom {
    font-size: 12px;
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.5);
    position: fixed;
    bottom: 13px;
    left: 22px;
    text-align: left;
  }

  .hideOnFull {
    display: none;
  }

  @media only screen and(max-width: 600px) {
    .hoverMenu {
      position: fixed;
      width: calc(100vw - 51px);
      top: 81+27px;
      height: calc(100vh - 81px - 54px);
      z-index: 7;
      left: 27px;
      background: white;
    }
    .hideOnFull {
      display: flex;
      justify-content: center;
      align-items: center
    }
    .nav-container {
      display: none;
    }
    .bottom {
      display: none;
    }
    .sideNav {
      background: white;
      position: fixed;
      height: 81px;
      width: 100vw;
      top: 0;
      left: 0;
    }
    .topIcon.about {
      width: 67px;
    }
    .nav-container.about {
      margin-top: 150px;
    }
    .realSide {
      height: 81px;
      padding: 25px;
      width: 100vw;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .topIcon {
      margin-top: auto;
      margin-left: unset;
      width: 67px;
    }
    .language-switch {
      height: 35px;
      display: flex;
      align-items: center;
    }
    .nav-container-mobile {
      font-family: 'Encode Sans', sans-serif;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
      transition: margin-top 0.4s;
    }

  }
</style>
