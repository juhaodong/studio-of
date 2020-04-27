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
    <template v-slot:imgs>
      <div
        :key="'imageBlock'+t"
        v-for="t in detail.images"
        class="img-container"
      >
        <img
          style="width: 100%;height: auto"
          :src="'/images/'+detail.id+'/'+t+'.png'"
          alt="w"
        >
      </div>
    </template>
    <div class="lastArrow">
      <div
        v-if="prev"
        class="left"
        @click="toPrev"
      >
        ←
      </div>
      <div
        v-if="next"
        class="right"
        @click="toNext"
      >
        →
      </div>
    </div>
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
                type: Number,
                default: 0
            }
        },
        computed: {
            detail: function () {
                console.log(details.find(item => item.id === parseInt(this.id)), this.id)
                const item = details.find(item => item.id === parseInt(this.id))
                return {
                    id: item.id,
                    ...item[this.$i18n.locale.toLowerCase()],
                    images: item.images

                }
            },
            next: function () {
                return details.find(item => item.id === parseInt(this.id) + 1)
            },
            prev: function () {
                return details.find(item => item.id === parseInt(this.id) - 1)
            }
        },
        methods: {
            toNext() {
                if (details.find(item => item.id === parseInt(this.id) + 1)) {
                    this.$router
                        .push('/detail/' + (parseInt(this.id) + 1))
                } else {
                    return;
                }
            },
            toPrev() {
                if (details.find(item => item.id === parseInt(this.id) - 1)) {
                    this.$router
                        .push('/detail/' + (parseInt(this.id) - 1))
                } else {
                    return;
                }
            }
        }


    }
</script>

<style scoped lang="scss">
  .lastArrow {
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    font-size: 40px;
    color: #747474;
    line-height: 48px;
    font-family: "Helvetica Neue", sans-serif;
  }

  .left {
    margin-right: 90px;
  }

  .img-container {
    margin-top: 100px;
    width: 100%;
  }

  @media only screen and(max-width: 600px) {
    .img-container {
      margin-top: 25px;
    }
  }
</style>
