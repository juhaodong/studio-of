<template>
  <div
    style="width: 100%"
    class="mobileWhite"
  >
    <text-block>
      <p class="title">
        <slot name="title" />
      </p>
      <p class="subtitle">
        <slot name="subtitle" />
      </p>
      <p class="desc">
        <slot name="desc" />
      </p>
    </text-block>
    <div class="imgs">
      <slot name="imgs" />
    </div>
    <slot />
  </div>
</template>

<script>
    import TextBlock from "@/components/TextBlock";

    export default {
        name: "DetailTextBlock",
        components: {TextBlock}
    }
</script>

<style lang="scss">
  .title {
    font-size: 65px;
    color: $blueR;
  }

  .subtitle {
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 500;
    font-size: 27px;
    color: #000;
  }

  .desc {
    margin-top: 120px;
    font-size: 25px;
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 400;
  }

  .imgs {
    margin-top: 196px;
  }

  @media only screen and(max-width: 600px) {
    .title {
      font-size: 30px;
      line-height: 31px;
    }
    .subtitle {
      font-size: 20px;
    }
    .desc {
      margin-top: 25px;
      font-size: 14px;
    }
    .imgs {
      margin-top: 25px;
    }
  }
</style>
