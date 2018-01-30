<template id="thisTemplate">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row" style="margin-bottom: 8px;">
            <div class="col-md-7" style="color: #777; text-transform: uppercase; text-align: left; margin-top: 10px; font-size: 12px;">
              <router-link :to="{ path: '/' + thisCategoryShortName }">
                {{ thisCategory }}</router-link> >
              <router-link :to="{ path: '/' + thisCategoryShortName + '/' + thisSubCategoryShortName }">
                {{ thisSubCategory }}</router-link>
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

    <div class="row" style="margin-bottom: 8px; margin-top: 0px;">
      <div class="col-md-12">
        <Row :bottles="bottles"></Row>
      </div>
    </div>
  </div>
</template>

<script>
import Row from './Row'

export default {
  name: 'Category',
  components: {
    Row: Row
  },
  computed: {
    categories: function () {
      return this.$store.getters.allCategories
    },
    bottles: function () {
      return this.$store.getters.getBottlesBySubCategory(this.$route.params.subcategory)
    }
  },
  mounted() {
    console.log(this.bottles)
    console.log('123456')
    // Set parent scope
    let self = this

    // Get category, subcategory shortnames
    self.thisCategoryShortName = this.$route.params.category
    self.thisSubCategoryShortName = this.$route.params.subcategory

    // Match category, subcategory shortnames to fullnames
    self.categories.map(category => {
      if (category.categoryShortName === self.thisCategoryShortName) {
        self.thisCategory = category.categoryName
        category.subCategories.map(subCategory => {
          if (subCategory.subCategoryShortName == self.thisSubCategoryShortName) {
            self.thisSubCategory = subCategory.subCategoryName
            // console.log(subCategory)
          }
        })
      }
    })
  },
  props: ['category'],
  data () {
    return {
      thisCategory: 'Bird',
      thisCategoryShortName: 'bird',
      thisSubCategory: 'Word',
      thisSubCategoryShortName: 'word'
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
  color: #777;
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
