<template>
  <div class="sideNav">
    <div class="realSide">
      <div class="topIcon">
        <img
          style="width:100%;height: auto"
          src="@/assets/studioLogo.png"
        >
      </div>
      <div class="nav-container">
        <div>
          <router-link
            to="about"
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
    </div>
  </div>
</template>

<script>
    export default {
        name: "Sidecol"
    }
</script>

<style scoped lang="scss">
  .sideNav {
    width: $sideBarWidth;
    height: 100vh;
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
  }

  .nav-container {
    margin-top: 150px;
    margin-left: 53px;
    font-family: 'EncodeSans', Arial, sans-serif;
    font-weight: bold;
    font-size: 23px;
    text-align: left;
  }

  .nav-item {
    color:#000000;
    cursor: pointer;
    width: fit-content;
  }

  .nav-item:last-child {
    margin-top: 22px;
  }

  .bigger {

  }

  .middle {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }

  .tiny {
    font-size: 10px;
  }

  .bottom {
    font-size: 18px;
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.5);
    position: fixed;
    bottom: 13px;
    left: 22px;
    text-align: left;
  }
</style>
