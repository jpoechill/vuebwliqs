<template id="thisTemplate">
  <div class="container">
    <div class="row" style="margin-bottom: 6px;">

      <transition-group name="list" v-on:before-enter="beforeEnter" v-on:enter="enter"  tag="p" style="transform-origin: 1000px; width: 100%; margin-top: 80px; margin-bottom: -80px;" appear>
        <div v-for="(bottle, index) in bottles" v-bind:key="index" class="custom-card col-md-3" v-bind:data-index="index" style="position: relative; z-index: 1; margin-top: 0px; margin-bottom: 20px; float: left;">
          <!-- <router-link
            :to="{ path: '/spirits/vodka/hangar1/hangar1-straightvodka' }"
          > -->
            <div class="col-md-12" style="margin-bottom: 0px; position: relative; z-index: 10; line-height: 17px; font-size: 14px; font-weight: 600; min-height: 328px; background-color: #FFF; padding: 10px 18px; box-shadow: 4px 6px 14px rgba(0,0,0,.02); border-radius: 4px;">
              <a href="javascript:void(0)" style="color: #FFF; z-index: 1000;" @click="doThis">
                <div class="add-to-cart-hover-card" style="z-index: 1000;">
                  ADD TO CART
                  <!-- CART UNAVAILABE -->
                </div>
              </a>
              <!-- <router-link
                :to="{ path: '/spirits/vodka/hangar1/hangar1-straightvodka' }"
              > -->
              <div class="zoomer" style="">
                <div class="img normal" v-bind:style="{ backgroundImage: 'url(' + bottle.bottleImg + ')'}"></div>
              </div>
              <br>
              {{ bottle.bottleTitle }}<br>
              <span class="bottle-subtitle" style="font-weight: 400; text-transform: uppercase; margin-top: -4px;">
                {{ bottle.bottleSubTitle }}
              </span><br>
              <span style="line-height: 26px; font-weight: 400; font-size: 14px;">
                ${{ bottle.bottlePrice }}
              </span>
              <!-- </router-link> -->
            </div>
          <!-- </router-link> -->
        </div>

      </transition-group>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Row',
  updated: function () {
    console.log('123')
  },
  computed: {
    // bottles: function () {
    //   return this.$store.getters.allBottles
    // },
    shuffleArray: function () {
      let array = this.bottles
      let currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    scroll() {
        window.scrollTo(0,0);
    },
    doThis: function () {
      // alert('Something, something')
      store.commit('incrementShoppingCart')
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      // el.style.transformOrigin = 1000;
      // el.style.translateY = 1110
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 300

      console.log(Velocity)
      console.log(delay)

      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, translateY: '-80px', position: 'absolute'  },
          { duration: 10}, { complete: done }
        )

        // Velocity(el, { fontSize: '1em' }, { complete: done })
      }, delay)
    },
  },
  props: ['bottles']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#thisTemplate {
  font-family: 'Montesserat'
}

.add-to-cart-hover-card {
  display: none;
  position: absolute;
  z-index: 10000;
  background-color: #333;
  text-align: center;
  margin: auto;
  width: 58%;
  font-size: 12px;
  font-weight: 600;
  color: #FFF;
  margin-top: 184px;
  border-radius: 18px;
  padding: 5px 0px;
  left: 0;
  right: 0;
}

.add-to-cart-hover-card:hover {
  background-color: rgba(10, 10, 10, .9);
}

.custom-card:hover .add-to-cart-hover-card {
  /* display: block; */
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
  color: #111;
}

a:hover {
  text-decoration: none;
}

img {
  height: 110px;
  width: auto;
  padding: 10px;
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


.zoomer {
  position: relative;
  height: 200px;
  width: auto;
  border: 0;
  overflow: visible;
  padding-top: 10px;
  max-width: 100%;
  max-height: 100%;
  margin-top: 14px;

  transition: all .5s ease-out;
}

.zoomer:hover .normal {
  cursor: pointer;
  opacity: 1;
  transform: scale(1.03);
}

.img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: white;
  transition: all ease-out .3s;
}

.normal {
  z-index: 1;
  background-size: contain;
}


.list-enter-active, .list-leave-active {
  transition: all 1.2s;
}
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>
