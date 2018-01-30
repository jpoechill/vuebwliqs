<template id="thisTemplate">
  <div class="container">
    <div class="container">
      <div class="row" style="margin-bottom: 20px;">
        <div class="col-md-12" style="margin-top: 18px; margin-bottom: 0px;">
          <div class="col-md-12" style="line-height: 18px; font-size: 14px; font-family: 'Open Sans'; font-weight: 300; min-height: 220px; background-color: #FFF; padding-top: 40px; padding: 28px; box-shadow: 4px 6px 14px rgba(0,0,0,.02); border-radius: 4px;">
            <div class="row">
              <div class="col-md-12 text-left" style="width: 100%;">
                <span style="font-family: 'Montserrat'; font-size: 20px; font-weight: 700;">
                  Your order is on its way.
                </span>
                <br><br>
                You order of <span style="font-weight: 600;">$122.99</span> dollars has been placed. Your confirmation number is: <span style="font-weight: 600;">#123-232123</span>.<br><br>
                1 Bottle <br>
                2 Bottle <br>
                3 Bottle <br>

                <br>
                <!-- Your order number is:  <br><br> -->
                Your USPS tracking number is: <strong>#1233-4-34234-23-4-3432432</strong>.<br><br>
                Please allow for 5-10 days of business days for your order to arrive. <br><br>
                For any questions or comments, please contact our support at <strong>inquiries@bwldelivery.com</strong>.
                <br><br>
                <!-- Thank you again! <br><br> -->

                Thank you, again! <router-link :to="{ path: '/' }" style="color: #333; font-weight: 300;">Back to home page.</router-link>
              </div>
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
