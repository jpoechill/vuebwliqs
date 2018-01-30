<template id="thisTemplate">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row" style="margin-bottom: 8px;">
            <div class="col-md-12" style="color: #777; text-transform: uppercase; text-align: left; margin-top: 10px; font-size: 12px;">
              {{ this.$route.params.category }} >
              {{ this.$route.params.subcategory }} >
              {{ this.$route.params.maker }} >
              {{ bottle.bottleSubTitle }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row" style="margin-bottom: 6px;">
        <div class="col-md-12" style="margin-top: 0px; margin-bottom: 0px;">
          <div class="col-md-12" style="line-height: 17px; font-size: 14px; font-weight: 400; min-height: 220px; background-color: #FFF; padding-top: 40px; padding: 28px; box-shadow: 4px 6px 14px rgba(0,0,0,.02); border-radius: 4px;">
            <div class="row">
              <div class="col-md-4">

                <div class="zoomer">
                  <div class="img normal" v-bind:style="{ backgroundImage: 'url(' + bottle.bottleImgMedRes + ')'}"></div>
                  <!-- <div class="img zoom" style="background-image: url('http://www.afalchi.it/media/img/edea_.jpg')"></div> -->
                </div>
                <br><br>
                <div style="width: 100px; height: 100px; display: inline-block;">
                  <img :src="bottle.bottleImg" style="width: 48px; height: auto; margin-top: 2px;" alt="">
                </div>
                <div style="width: 100px; height: 100px; display: inline-block;">
                  <img :src="bottle.bottleImg" style="width: 48px; height: auto; margin-top: 2px;" alt="">
                </div>
                <div style="width: 100px; height: 100px; display: inline-block;">
                  <img :src="bottle.bottleImg" style="width: 48px; height: auto; margin-top: 2px;" alt="">
                </div>
                <br>
              </div>
              <div class="col-md-8" style="text-align: left;">
                <span style="font-weight: 700; font-size: 28px;">
                  {{ bottle.bottleTitle }}
                </span><br>
                <span style="line-height: 40px; font-size: 14px; text-transform: uppercase; color: #BBB;">
                  {{ bottle.bottleSubTitle }}
                </span><br>
                <span style="font-weight: 300;">
                  Short description.
                  <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur, dolor vitae rutrum tempor, ipsum odio ultricies diam, scelerisque pretium lectus est nec lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pellentesque scelerisque mi, tincidunt dapibus nibh varius sed. Quisque ut egestas velit, at fringilla purus. Nam eget tempus massa. Curabitur pharetra lorem eu semper pharetra. Nunc at mauris ut est tempus efficitur quis vitae lorem. Vivamus varius augue sit amet ligula tincidunt, vel ultricies augue iaculis. Ut ac enim nunc. Phasellus aliquam vulputate ante ac maximus. In non neque a nisl sollicitudin varius eget eu eros. Aliquam et tellus eu dolor molestie dapibus. Proin a sagittis velit. -->
                  <br><br>
                  <!-- Integer maximus urna sed velit venenatis pretium. Praesent interdum sit amet nulla id scelerisque. Morbi quis urna sit amet diam elementum posuere id sollicitudin eros. Aliquam vulputate pretium magna, vitae lobortis quam suscipit nec. Etiam ullamcorper lacinia ipsum, vel sodales orci consectetur a. Duis diam mauris, mattis a convallis id, finibus faucibus massa. Cras bibendum augue nec euismod gravida. -->
                </span>
                <br><br><br>
                <div class="row">
                  <div class="col-md-4">
                    <span style="font-size: 18px; font-weight: 400;">
                      $ {{ bottle.bottlePrice }} <br>
                    </span>
                    10 in stock<br><br>
                  </div>
                  <div class="col-md-8" style="text-align: right;">
                    <p class="text-right">
                      <div class="checkout-button" style="z-index: 1000;">
                        ADD TO CART
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row" style="margin-bottom: 8px;">
            <div class="col-md-12" style="color: #777; text-transform: uppercase; text-align: left; margin-top: 10px; font-size: 10px;">
              Similar items
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="margin-bottom: 0px; margin-top: 0px;">
      <div class="col-md-12">
        <Row :bottles="randomBottles"></Row>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row" style="margin-bottom: 8px;">
            <div class="col-md-12" style="color: #333; text-transform: uppercase; text-align: left; margin-top: 10px; font-size: 12px;">
              You might also like
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="row" style="margin-bottom: 8px; margin-top: 0px;">
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
    Row: Row,
  },
  computed: {
    bottle: function () {
      return this.$store.state.currentBottle[0]
    },
    randomBottles: function () {
      return this.$store.getters.getRandomBottles
    }
  },
  mounted: function () {
    console.log('QWERTY')
    console.log(this.$store.state.currentBottle)
  },
  data () {
    return {
      // bottle:
      //   {
      //     bottleTitle: 'Hangar 1',
      //     bottleSubTitle: 'All Purpose Vodka',
      //     bottlePrice: '19.99',
      //     bottleShortName: 'stgeorge-allpurposevodka',
      //     bottleDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      //     bottleImg: '/static/bottles/bottle_6.png',
      //     bottleImgMedRes: '/static/bottles/med-res/bottle_6.png'
      //   }
    }
  },
  methods: {
    moveBG: function (ev) {
      // var container = this.$refs.zoomer,
      //     imgZoom = container.childNodes[4]; // MEMO: Yes, I can select this better
      //
      // console.log('123')
      // console.log(container)
      // console.log(imgZoom)
      //
      // var e = {
      //   w: imgZoom.offsetWidth,
      //   h: imgZoom.offsetHeight
      // };
      //
      // var c = {
      //   x: Math.round((ev.clientX - (container.offsetLeft - window.scrollX)) / (e.w / 100)),
      //   y: Math.round((ev.clientY - (container.offsetTop - window.scrollY)) / (e.h / 100))
      // };
      //
      // imgZoom.style.backgroundPosition = c.x + '% ' + c.y + '%';
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
  height: 360px;
  padding: 12px;
  margin-top: 2px;
}

b {
  font-size: 14px;
}

.checkout-button {
  z-index: 10000;
  background-color: #111;
  text-align: center;
  float: right;
  width: 160px;
  font-size: 12px;
  font-weight: 600;
  color: #FFF;
  border-radius: 18px;
  padding: 5px 0px;
}

.checkout-button:hover {
  cursor: pointer;
  background-color: rgba(20, 20, 20, .9);
}

.bottle-subtitle {
    font-weight: 400;
    color: #BBB;
    font-size: 11px;
}


.zoomer {
  position: relative;
  height: 360px;
  width: auto;
  border: 0;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;

  transition: all .5s ease-out;
}

.zoomer:hover .normal {
  cursor: default;
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

/* img.normal {
  opacity: 0;
  width: 100%;
} */

/* .zoom {
  z-index: 1;
  transition: none;
} */

</style>
