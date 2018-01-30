<template lang="html">
  <div>
    <div class="" style="position: fixed; width: 100%; top: 0; z-index: 10000;">
      <div class="row" style="text-align: center; background-color: #111; color: #FFF; padding: 6px;">
          <div class="col-md-12">
            Attention: Cryptocurrency payments and online deliveries are currently <b><i style="font-size: 14px; text-decoration: underline; padding: 0px;">DOWN</i></b> for maintenance.
          </div>
      </div>
    </div>

    <header>
      <div class="container" style="margin-top: 44px;">
        <div class="row" style="margin-top: 14px; margin-bottom: 4px; margin-right: 15px; margin-left: 15px;">
          <div class="col-md-2 offset-md-5" style="text-align: center; padding-top: 10px; padding-bottom: 4px;">
            <router-link :to="{ path: '/' }" class="header-link">
              <img src="/static/bw-logo-simple-updated.png" width="74" height="74" alt="">
            </router-link>
          </div>
          <div class="col-md-3 offset-md-2" style="text-align: left; padding-top: 18px; font-size: 14px; word-spacing: 10px; text-align: right;">
            <!-- <input type="text" size="12" name="" placeholder="Search..." value=""> -->
            <!-- <router-link active-class="active" class="uppercase lightgrey" :to="{ path: '/cart' }">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </router-link>
            <div style="font-family: 'Open Sans'; font-size: 12px; width: 10px; margin-left: -14px; display: inline-block;">
              ({{ shoppingCartCount }})
            </div> -->
          </div>
        </div>
        <div class="row">
          <div class="col-md-12" style="text-align: center; padding-top: 0px; word-spacing: 2px; font-size: 14px;">
            <div style="padding: 12px 26px; background-color: #fff; text-align: center; display: inline-block;">
              <div class="dropdown" v-for="(category, index) in categories" :key="index">

                <router-link active-class="active" class="uppercase lightgrey" :to="{ path: '/' + category.categoryShortName }">{{ category.categoryName }}
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                </router-link>
                <div class="dropdown-content">
                  <router-link active-class="active" v-for="subCategory in category.subCategories" class="uppercase lightgrey" :to="{ path: '/' + category.categoryShortName + '/' + subCategory.subCategoryShortName }">{{ subCategory.subCategoryName }}</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    categories: function () {
      return this.$store.getters.allCategories
    },
    shoppingCartCount: function () {
      return this.$store.getters.getShoppingCartCount
    }
  },
  data: {
    isActive: true,
  },
}
</script>

<style lang="css">
</style>
