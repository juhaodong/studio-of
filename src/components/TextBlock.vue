<template>
  <div class="text-block">
    <slot />
  </div>
</template>

<script>
    export default {
        name: "TextBlock"
    }
</script>

<style scoped>
  .text-block{
    width: 100%;
    max-width:900px ;text-align: left
  }
  @media only screen and(max-width: 600px) {
   .text-block{
     width: 100%;
   }
  }

</style>
