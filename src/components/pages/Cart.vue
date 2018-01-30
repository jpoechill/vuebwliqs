<template id="thisTemplate">
  <div class="container">
    <div class="container">
      <div class="row" style="margin-bottom: 2px;">
        <div class="col-md-12" style="margin-top: 18px; margin-bottom: 0px;">
          <div class="col-md-12" style="line-height: 18px; font-size: 14px; font-family: 'Open Sans'; font-weight: 300; min-height: 220px; background-color: #FFF; padding-top: 40px; padding: 28px; box-shadow: 4px 6px 14px rgba(0,0,0,.02); border-radius: 4px;">
            <div class="row">
              <div class="col-md-12 text-left">
                <span style="font-family: 'Montserrat'; font-size: 20px; font-weight: 700;">
                  Shopping Cart
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-left" style="width: 100%;">
                <br>
                <div class="row">
                  <div class="col-md-12" v-for="(item, index) in shoppingCart" v-if="index < 4" style="background-color: #FFF; margin-top: 14px;">
                    <div class="row">
                      <div class="col-md-2 text-center">
                        <img :src="item.bottleImg" style="width: 32px; margin-right: 14px;">
                      </div>
                      <div class="col-md-5 text-left">
                        <span style="font-size: 16px; font-family: 'Montserrat'; font-weight: 600;">
                          {{ item.bottleTitle }}
                        </span><br>
                        <span style="text-transform: uppercase; font-size: 12px; font-family: 'Montserrat'; font-weight: 400; color: #777;">
                          {{ item.bottleSubTitle }}

                        </span>
                        <span style="font-size: 14px; font-weight: 500; float: right; text-align: right;">
                        </span>
                      </div>
                      <div class="col-md-2">
                        <span style="font-size: 14px; font-weight: 400; color: #555; text-transform: none; font-family: 'Open Sans';">
                          Quantity 1<br>
                          <!-- Delete Item -->
                        </span>
                      </div>
                      <div class="col-md-2 text-right">
                        <span style="font-size: 16px; font-weight: 500; float: right; text-align: right;">
                          ${{ item.bottlePrice }}
                        </span>
                      </div>
                      <div class="col-md-1 text-right">
                        X
                      </div>
                    </div>
                    <hr>
                    <span style="padding-right: 20px;">
                      <!-- {{ index + 1 }} -->
                    </span>

                  </div>
                </div>
                <!-- <p>
                  CHECKOUT => ENTER PAYMENT, SHIPPING INFO => CONFIRM ORDER => APPRECIATION, THANK YOU – CONTINUE SHOPPING
                </p> -->

              </div>
              <div class="offset-6 col-md-6">
                <p class="text-right" style="float: right; line-height: 22px; font-size: 14px;">
                  SubTotal: ${{ subTotal }}<br>
                  Tax: ${{ tax }}<br><br>
                  Total: ${{ total }}<br>
                </p>
              </div>
            </div>
            <div class="row" style="margin-top: 0px;">
              <!-- <div class="col-md-4 text-left" style="width: 100%;">
                <span style="font-family: 'Montserrat'; font-size: 20px; font-weight: 700;">
                  Card Information
                </span><br><br>
                <p style="float: left;"></p>Name on Card: <p style="float: right; margin-bottom: 4px;"><input type="text" name="" value=""></p>
                <div style="clear: both;"></div>
                <p style="float: left;"></p>Card Number: <p style="float: right; margin-bottom: 4px;"><input type="text" name="" value=""></p>
                <div style="clear: both;"></div>
                <p style="float: left;"></p>Expiration: <p style="float: right; margin-bottom: 4px;"><input type="text" name="" value=""></p>
              </div>
              <div class="col-md-4 text-left" style="width: 100%;">
                <span style="font-family: 'Montserrat'; font-size: 20px; font-weight: 700;">
                  Billing Information
                </span><br><br>
                <p style="float: left;"></p>Name: <p style="float: right; margin-bottom: 4px;"><input type="text" name="" value=""></p>
                <div style="clear: both;"></div>
                <p style="float: left;"></p>Address: <p style="float: right; margin-bottom: 4px;"><input type="text" name="" value=""></p>
                <div style="clear: both;"></div>
                <p style="float: left;"></p>City, State: <p style="float: right; margin-bottom: 4px;"><input type="text" name="" value=""></p>
                <div style="clear: both;"></div>
                <p style="float: left;"></p>Zipcode: <p style="float: right; margin-bottom: 4px;"><input type="text" name="" value=""></p>
                <div style="clear: both;"></div>
              </div>
              <div class="col-md-4 text-left" style="width: 100%; line-spacing: 40px;">
                <span style="font-family: 'Montserrat'; font-size: 20px; font-weight: 700;">
                  Shipping Information
                </span><br><br>
                <p style="float: left;"></p>Name: <p style="float: right; margin-bottom: 4px;"><input type="text" name="" value=""></p>
                <div style="clear: both;"></div>
                <p style="float: left;"></p>Address: <p style="float: right; margin-bottom: 4px;"><input type="text" name="" value=""></p>
                <div style="clear: both;"></div>
                <p style="float: left;"></p>City, State: <p style="float: right; margin-bottom: 4px;"><input type="text" name="" value=""></p>
                <div style="clear: both;"></div>
                <p style="float: left;"></p>Zipcode: <p style="float: right; margin-bottom: 4px;"><input type="text" name="" value=""></p>
                <div style="clear: both;"></div>
                Same as billing? <br>
              </div> -->
            </div>
            <!-- <div class="row">
              <div class="col-md-12 text-left" style="width: 100%;">
                <span style="font-family: 'Montserrat'; font-size: 20px; font-weight: 700;">
                  Billing and Shipping Information
                </span><br><br>
                Name: <input type="text" name="" value=""><br>
                Address: <input type="text" name="" value=""><br>
                City, State: <input type="text" name="" value=""><br>
                Zipcode: <input type="text" name="" value=""><br>
                <br><br>
              </div>
            </div> -->
            <div class="row">
              <div class="col-md-12 text-left" style="width: 100%;">
                <p class="text-right">
                  <div class="checkout-button" style="z-index: 1000;">
                    <router-link :to="{ path: '/checkout' }">
                      CHECK OUT
                    </router-link>
                  </div>
                </p>
                <div id="faqs"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    shoppingCart: function () {
      return this.$store.getters.getShoppingCart
    },
    subTotal: function () {
      let subTotal = 0

      this.shoppingCart.forEach((element) => {
        subTotal += parseFloat(element.bottlePrice)
      })

      return subTotal
    },
    tax: function () {
      console.log(this.subTotal)
      // console.log(this.subTotal * .)
      return (this.subTotal * (.097)).toFixed(2)
    },
    total: function () {
      let subTotal = this.subTotal
      // console.log(typeof subTotal)
      // console.log(typeof this.tax)
      return (this.subTotal + parseFloat(this.tax))
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#thisTemplate {
  font-family: 'Montserrat';
  font-weight: 300;
}

a {
  color: #FFF
}

a:hover {
  text-decoration: none;
}

.checkout-button {
  /* display: none; */
  /* position: absolute; */
  z-index: 10000;
  background-color: #111;
  text-align: center;
  float: right;
  width: 160px;
  font-size: 12px;
  font-weight: 600;
  color: #FFF;
  /* margin-top: 165px; */
  border-radius: 18px;
  padding: 5px 0px;
}

.checkout-button:hover {
  cursor: pointer;
  background-color: rgba(20, 20, 20, .9);
}
</style>
