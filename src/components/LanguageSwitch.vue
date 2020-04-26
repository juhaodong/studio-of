<template>
  <div
    @click="changeLanguage"
    class="langSwitch"
  >
    {{ $t('中文') }}
  </div>
</template>

<script>
    export default {
        name: "LanguageSwitch",
        methods: {
            changeLanguage: function () {
                this.$i18n.locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
            }
        }
    }
</script>

<style scoped lang="scss">
  .langSwitch {
    cursor: pointer;
    right: 2*$gridSize;
    font-size: 16px;
    font-family: SIL-Hei-Med-Jian;
  }

</style>
