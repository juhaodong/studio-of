<template>
  <detail-text-block>
    <template v-slot:title>
      {{ detail.title }}
    </template>
    <template v-slot:subtitle>
      <p v-html="detail.subtitle" />
    </template>
    <template v-slot:desc>
      <p v-html="detail.desc" />
    </template>
  </detail-text-block>
</template>

<script>
    import DetailTextBlock from "@/components/DetailTextBlock";

    const details = require('@/assets/content.json')
    export default {
        name: "WorkDetail",
        components: {DetailTextBlock},
        props: {
            id: {
                type: String,
                default: '0'
            }
        },
        computed: {
            detail: function () {
                console.log(details.find(item => item.id === parseInt(this.id)), this.id)
                return details.find(item => item.id === parseInt(this.id))[this.$i18n.locale.toLowerCase()]
            }
        }
    }
</script>

<style scoped>

</style>
