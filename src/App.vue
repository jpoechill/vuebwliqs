<template>
  <div id="app">
    <!-- <Header /> -->

    <!-- <main style="background-color: #F8F8F8; padding-bottom: 20px;"> -->
      <router-view :key="$route.fullPath" />
    <!-- </main> -->

    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',

  components: {
    Header: Header,
    Footer: Footer
  }
}
</script>

<style>

.uppercase {
  text-transform: uppercase;
}

.lightgrey {
  color: #333;
}

.dropdown {
  position: relative;
  display: inline-block;
  padding: 0px 18px;
}

.dropdown a {
  /* color: #777; */
  display: block;
}

.dropdown a:hover {
  color: #777;
  text-decoration: none;
}

.dropdown-content {
  top: 20px;
  display: none;
  position: absolute;
  background-color: #FFF;
  color: #999;
  left: -6px;
  padding: 18px 10px 6px 2px;
  z-index: 100;
}

.dropdown-content a {
  font-size: 14px;
  white-space: nowrap;
  padding: 4px 22px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  /* background-color: #f1f1f1 */
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  /* background-color: #3e8e41; */
}

#footer a {
  color: #333;
}

body {
  background-color: #FFF;
  margin: 0px;
}

.header-link {
  /* padding: 6px;
  margin: 4px; */
  text-transform: uppercase;
}

.header-link:hover {
  color: #333;
  text-decoration: none;
  /* font-weight: 700; */
}

/* /* .dropdown {
  display: inline-block;
  padding: 0px 18px;
} */

.dropdown-menu {
  border: 0px;
  font-size: 14px;
}

#custom-dropdown {
  top: 0px !important;
  left: -22px !important;
}

.dropdown-item {
  color: #999;
  text-transform: uppercase;
} */

.active {
  color: #333;
}

.fa {
  padding-top: 6px;
  /*font-size: 18px;*/
}

#app {
  font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  font-size: 14px;
  margin-top: 0px;
}

.App-intro {
  color: #333;
  font-size: 14px;
  font-weight: 400;
  min-width: 60px;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  margin-left: 0px;
  min-width: 100px;
  margin-bottom: 12px;
}

.main-logo {
  width: 74px;
  height: 74px;
  margin-top: 20px;
}

.modal-container {
  width: 100%;
  height:100%;
  /* overflow-x: auto; */
  /* overflow-y: scroll; */

  -webkit-overflow-scrolling: touch;
}

.modal-container .modal-window {
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  -ms-flex-align: center;
  -ms-flex-pack: center;
}

.modal-container .modal-window .modal-content {
  border: 0px;
  width: 80%;
  padding: 10px;
  margin: auto;
}

/*
  CSS Media Queries
*/

.responsive-margin {
  margin: 8px;
}

.responsive-panel {
  width: 33%;
  min-height: 80px;
}

i {
  padding-right: 12px;
  margin-top: 0px;
  /* font-size: 10px; */
}
</style>
