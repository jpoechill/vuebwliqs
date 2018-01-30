<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row" style="margin-bottom: 8px;">
            <div class="col-md-7" style="color: #777; text-align: left; margin-top: 10px; font-size: 12px;">
              FEATURED ITEMS
            </div>
            <div class="col-md-5" style="color: #777; text-transform: uppercase; text-align: right; margin-top: 10px; font-size: 12px;">
              {{ bottles.length }} Items
              <!-- , Sorted by Price -->
              <!-- <i class="fa fa-caret-down" style="font-size: 12px; margin-top: -14px;" aria-hidden="true"></i> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-bottom: 8px;">
      <div class="col-md-12">
        <Row :bottles="bottles"></Row>
      </div>
    </div>
    <!-- <div class="row" style="margin-bottom: 8px;">
      <div class="col-md-12">
        <Row :bottles="bottles"></Row>
      </div>
    </div>
    <div class="row" style="margin-bottom: 8px;">
      <div class="col-md-12">
        <Row :bottles="bottles"></Row>
      </div>
    </div> -->
<!--
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row" style="margin-bottom: 8px;">
            <div class="col-md-12" style="color: #777; text-align: left; margin-top: 10px; font-size: 10px;">
              RECENTLY VIEWED
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <Row :bottles="bottles"></Row>
      </div>
    </div> -->
  </div>
</template>

<script>
import Row from './Row'

export default {
  name: 'Home',
  components: {
    Row: Row
  },
  computed: {
    bottles: function () {
      return this.$store.getters.allBottles.slice(0, 12)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
