<template id="thisTemplate">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row" style="margin-bottom: 8px;">
            <div class="col-md-7" style="color: #777; text-transform: uppercase; text-align: left; margin-top: 10px; font-size: 12px;">
              {{ this.$route.params.category }} > {{ this.$route.params.subcategory }} > {{ this.$route.params.makers }}
            </div>
            <div class="col-md-5" style="color: #777; text-transform: uppercase; text-align: right; margin-top: 10px; font-size: 12px;">
              103 Items
              <!-- , Sorted by Price -->
              <!-- <i class="fa fa-caret-down" style="font-size: 12px; margin-top: -14px;" aria-hidden="true"></i> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-for="n in 6" class="row" style="margin-bottom: 8px; margin-top: 0px;">
      <div class="col-md-12">
        <Row></Row>
      </div>
    </div>
  </div>
</template>

<script>
import Row from './Row'

export default {
  name: 'Detail',
  components: {
    Row: Row
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#thisTemplate {
  font-family: 'Montesserat'
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img {
  height: 180px;
  padding: 12px;
  margin-top: 2px;
}

b {
  font-size: 14px;
}

.bottle-subtitle {
    font-weight: 400;
    color: #BBB;
    font-size: 11px;
}
</style>
