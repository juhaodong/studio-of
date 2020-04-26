<template>
  <p class="pageTitle">
    <slot />
  </p>
</template>

<script>
    export default {
        name: "PageTitle"
    }
</script>

<style lang="scss">
  .pageTitle{
    display: none;
    font-family: 'Encode Sans', sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 51px;
  }
  @media only screen and(max-width: 600px) {
    .pageTitle {
      display: block;
    }
  }

</style>
