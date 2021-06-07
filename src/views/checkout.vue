<template>
  <div class="bg">
    <div>
      <img
        :src="require('@/assets/back.svg')"
        class="backButton"
        @click="backToCart()"
      />
      <p class="backButtonText" @click="backToCart()">Back to Cart</p>
    </div>

    <div class="container">
      <div class="row no-gutter">
        <Header />
        <div class="mx-auto">
          <div class="form-box">
            <div class="tick-sign">
              <img class="resize" src="@/assets/tick-icon-symbol.png" />
            </div>
            <p class="text">
              You have successfully completed your purchase. You can review your
              order below.
            </p>
            <br />
            <div class="col-10 item">
              <orderItem
                v-for="item in cartItemsArray"
                :key="item.prName"
                :item="item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
body,
html {
  height: 100%;
}

.container {
  margin-bottom: 15%;
}

.row.no-gutter {
  /*no padding on the column/row -- found on stack-overflow*/
  margin-left: 0;
  margin-right: 0;
}

.form-header {
  padding-top: 15px;
  padding-bottom: 20px;
  margin-bottom: -45px;
  font-size: 25px;
  text-align: center;
}

img.resize {
  display: block;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
  height: auto;
}

.text {
  text-align: center;
  font-size: 25px;
}

.item {
  margin-left: 8%;
}

.backButton {
  display: inline-block;
  white-space: nowrap;
  margin-left: 20px;
  max-height: 20px;
  max-width: 30px;
}
.backButtonText {
  font-style: italic;
  font-weight: 500;
  color: #556b2f;
  display: inline-block;
  white-space: nowrap;
  margin-top: 20px;
  max-height: 20px;
  max-width: 30px;
}
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import cart from "../views/cart.vue";
import orderItem from "@/components/orderItem.vue";
import store from "../store";
import OrderItem from "../components/orderItem.vue";

var subTotal = 0;
var totalCost = 0;
var deliveryFee = 0;

export default {
  name: "checkout",
  components: {
    Header,
    Footer,
    orderItem,
    totalCost,
    subTotal,
    deliveryFee,
  },
  data() {
    return {
      cartItemsArray: [],
    };
  },
  mounted() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      // in this method we have to get the cartItems list from store.js
      var tempList;
      tempList = store.cartItems; // now when we add an item to the cart it goes to store.js and we grab it from store.js so we can use it here
      // but i don't need all the data so lets do this
      for (var i = 0; i < tempList.length; i++) {
        this.cartItemsArray.push({
          prName: tempList[i].Name,
          prUrl: tempList[i].url,
          prPrice: tempList[i].sum,
          prCost: tempList[i].Price,
          prQty: tempList[i].qty,
          total: this.totalCost,
        });
        // now let's set the subTotal which will be a sum of all the items' prices
        console.log(this.cartItemsArray);

        subTotal += this.cartItemsArray[i].prPrice;
        console.log(subTotal);
      }

      this.deliveryFee = Math.floor(Math.random() * 25); // since we dont have a set delivery fee i think the best is to get a random number(max 25kn delivery fee)

      this.totalCost = subTotal + this.deliveryFee;

      console.log(
        "subtotal",
        subTotal,
        "deliveryfee",
        this.deliveryFee,
        "totalcost",
        this.totalCost
      );
    },
    backToCart() {
      this.$router.push({ name: "Cart" });
    },
  },
};
</script>
