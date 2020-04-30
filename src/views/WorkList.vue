<template>
  <div class="gridContainer row">
    <template v-for="i in 8">
      <div
        :id="'work'+i"
        class="grid col-lg-4 col-md-6 col-sm-12"
        :key="i"
        @click="gotoDetail(i)"
      >
        <img
          style="width: 100%;height: auto"
          :src="'/images/'+i+'.png'"
        >
      </div>
    </template>
  </div>
</template>

<script>
    export default {
        name: "WorkList",
        data: function () {
            return {}
        },
        methods: {
            gotoDetail(id) {

                this.$router.push({name: 'detail', params: {id: id}})

            }
        }
    }
</script>

<style scoped lang="scss">
  .gridContainer {
    display: flex;
    flex-wrap: wrap;
  }


  .grid {
    cursor: pointer;
    padding: 30px;
  }

  .grid:hover {
    border: 2px solid $blueR;
  }
  @media only screen and(max-width: 600px) {
    .grid{
      width: 100%;
      padding: 0;
      margin-top: 54px;
      height: auto;
    }
  }
</style>
