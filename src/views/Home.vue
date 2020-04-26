<template>
  <div class="d-flex">
    <sidecol />
    <page-container />
  </div>
</template>

<script>

    import Sidecol from "@/components/SideCol";
    import PageContainer from "@/components/PageContainer";

    export default {
        name: 'Home',
        components: {PageContainer, Sidecol},
    }
</script>
