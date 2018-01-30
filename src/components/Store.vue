<template lang="html">
  <div class="">
    <Header />
      <main style="background-color: #F8F8F8; padding-bottom: 0px;">
        <router-view :key="$route.fullPath" />
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Store',
  components: {
    Header: Header,
    Footer: Footer
  }
}
</script>

<style lang="css">
</style>
