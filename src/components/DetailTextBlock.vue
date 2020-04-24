<template>
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
    <div class="imgs">
      <slot name="imgs" />
    </div>
  </text-block>
</template>

<script>
    import TextBlock from "@/components/TextBlock";

    export default {
        name: "DetailTextBlock",
        components: {TextBlock}
    }
</script>

<style scoped>

</style>
