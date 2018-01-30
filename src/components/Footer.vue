<template lang="html">
  <div>
    <section>
      <div class="modal-container">
        <div class="modal-window">
          <div class="modal-content">

            <div class="responsive-margin" style="justify-content: center;">
              <div style="text-align: center; margin-bottom: 14px; ">
                <img class="main-logo responsive-logo" src="/static/bw-logo.png" alt="">
              </div>
              <div class="" style="font-family: 'Georgia'; font-size: 24px; font-weight: 700; text-align: center; width: 75%; margin: auto; margin-bottom: 26px;">
                <p class="responsive-font-size" style="text-align: center;">
                  Specialty liquor store serving artisanal spirits, craft beer, fine wine and cigars.
                </p>
              </div>
              <div class="" style="font-family: 'Georgia'; font-size: 36px; font-weight: 700; text-align: center; width: 80%; margin: auto; margin-bottom: 20px;">
                <p style="text-align: center;">
                  <a href="https://instagram.com/_broadwayliquors">
                    <img src="/static/insta_logo.png" style="width: 32px; height: 32px; margin: 10px;" alt="Instagram Logo">
                  </a>
                  <a href="https://www.facebook.com/pages/Broadway-Liquors/100312506695474">
                    <img src="/static/fb_logo.png" style="width: 32px; height: 32px; margin: 10px;" alt="Facebook Logo">
                  </a>
                  <a href="https://www.yelp.com/biz/broadway-liquors-oakland">
                    <img src="/static/yelp_logo.png" style="width: 32px; height: 32px; margin: 10px;" alt="Yelp Logo">
                  </a>
                  <a href="https://www.pointy.com/shops/usa/california/oakland/broadway-liquors">
                    <img src="/static/pointy_logo.png" style="width: 32px; height: 32px; margin: 10px;" alt="Pointy Logo">
                  </a>
                </p>
              </div>
              <div class="col-md-4" style="float: left;">
                <p class="App-intro">
                  <strong>Hours</strong> <br>
                  9am-11pm (Mon-Thurs)  <br>
                  9am-12pm (Fri-Sat)<br>
                  10am-11pm (Sun)
                </p>
              </div>
              <div class="col-md-4" style="float: left;">
                <p class="App-intro">
                  <strong>Contact</strong> <br>
                  (510) 891-2388  <br>
                  inquiries@bwldelivery.com <br>
                  https://bwldelivery.com
                </p>
              </div>
              <div class="col-md-4" style="float: left;">
                <p class="App-intro">
                  <strong>Address</strong> <br>
                  Broadway Liquors  <br>
                  2860 Broadway <br>
                  Oakland, CA 94611
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="row" style="text-align: center;">
        <div id="footer" class="col-md-12" style="font-family: 'Open Sans', 'Helvetica', 'Helvetica Neue'; font-weight: 400; font-size: 12px; padding-bottom: 10px;">
          <router-link :to="{ path: '/about#about', params: {} }">About Us</router-link> |
          <!-- <router-link :to="{ path: '/about#faqs', params: {} }">FAQs</router-link> | -->
          <router-link :to="{ path: '/about#shipping', params: {} }">Shipping and Handling</router-link> |
          <!-- <router-link :to="{ path: '/about#returns', params: {} }">Returns</router-link> | -->
          <router-link :to="{ path: '/about#tos', params: {} }">Terms of Service</router-link>
          <br>
          © 2017 Bwldelivery.com
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="css">
</style>
