<template>
  <div class="gridContainer">
    <template v-for="i in 8">
      <div
        :id="'work'+i"
        class="grid"
        :key="i"
        @click="gotoDetail(i)"
      >
        <img
          style="width: 100%;height: auto"
          :src="'/icons/'+i+'.png'"
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
    margin-left: 108px;
    width: 405px;
    height: 405px;
    /*background: white;*/
  }

  .grid:hover {
    border: 2px solid $blueR;
  }

  .grid:nth-child(n+4) {
    margin-top: 108px;
  }

  .grid:nth-child(3n+1) {
    margin-left: 0;
  }
  @media only screen and(max-width: 600px) {
    .grid{
      margin:unset;
      margin-top: 54px;
      width: 100%;
      height: auto;
    }
    .grid:nth-child(n+4) {
      margin-top: 54px;
    }
  }
</style>
