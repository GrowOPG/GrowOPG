<template>
  <div class="bg">
    <MainHeader />

    <div>
      <img
        :src="require('@/assets/back.svg')"
        class="backButton"
        @click="backToMain()"
      />
      <p class="backButtonText" @click="backToMain()">Back to Main page</p>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <CartItem
            v-for="item in cartItemsArray"
            :key="item.prName"
            :item="item"
          />
        </div>

        <div class="col-1" />

        <div class="col-4">
          <div class="Receipt">
            <div class="ReceiptData">
              <span class="text">Subtotal</span>
              <span class="prices">HRK {{ this.subTotal }}</span>
            </div>

            <br />

            <div class="ReceiptData">
              <span class="text">Delivery</span>
              <span class="prices">HRK {{ this.deliveryFee }}</span>
            </div>

            <div class="dropdown-divider"></div>

            <div class="ReceiptData">
              <span class="text">Total</span>
              <span class="prices">HRK {{ this.totalCost }}</span>
            </div>

            <div class="dropdown-divider"></div>

            <div class="CheckoutBtn">
              <button type="button" class="button" @click="checkout()">
                <span>Checkout</span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-1" />
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  margin-left: 5%;
  width: 90%;
  overflow: hidden;
  border-top: 2px solid #2d2d2d;
}
/* .CartList {
    border: 2px solid red;
    margin-top: 50px;
    height: 700px;
    overflow-x: hidden;
    overflow-y: auto;
} */
.Receipt {
  margin-top: 50px;
  height: 400px;
  border: 2px solid #2d2d2d;
  border-radius: 10px;
}
.ReceiptData {
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 5%;
  margin-right: 5%;
}
.text {
  float: left;
  vertical-align: baseline;
}
.prices {
  float: right;
  vertical-align: baseline;
}
.CheckoutBtn {
  margin-top: 50px;
  margin-left: 35%;
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
.button {
  /*the styling for our button*/
  width: 150px;
  border-radius: 10px; /*rounded*/
  padding: 5px;
  background-color: #556b2f;
  color: white;
  font-size: 16px;
  text-align: center;

  transition: all 0.5s; /*the transition to span lasts 0.5s*/
  cursor: pointer; /*sets our pointer as cursor to activate hover*/
}
.button:hover {
  /*styiling for a hovered button*/
  background-color: white; /*we change the colors*/
  color: #556b2f;
}
.button span {
  cursor: pointer;
  display: inline-block; /*so it displays inline to our text*/
  position: relative;
  transition: 0.5s;
}
.button:hover span {
  padding-right: 25px; /*how far from the right border of our button*/
}
.button span:after {
  content: "\00bb"; /*those are the two lines that display*/
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>

<script>
import MainHeader from "@/components/Main-Header.vue";
import Footer from "@/components/Footer.vue";
import CartItem from "@/components/CartItem.vue";
import store from "@/store";

var subTotal = 0;
var totalCost = 0;
var deliveryFee = 0;

export default {
  name: "cart",
  data() {
    return {
      cartItemsArray: [],
      totalCost,
      subTotal,
      deliveryFee,
    };
  },
  components: {
    MainHeader,
    Footer,
    CartItem,
    store,
  },
  mounted() {
    this.getCartItems();
  },
  methods: {
    backToMain() {
      this.$router.push({ name: "main-page" });
      if (store.userType != "Buyer") {
        this.$router.push({ name: "seller-page" });
        //     // this.$router.replace({name: "main-page-seller"})
      } else if (store.userType != "Seller") {
        this.$router.push({ name: "main-page" });
        //     /*this.$router.replace({name: "main-page-buyer"}) */
      }
    },
    checkout() {
      this.$router.push({ name: "checkout" });
    },
    getCartItems() {
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
        });
        // now let's set the subTotal which will be a sum of all the items' prices
        this.subTotal += tempList[i].sum;
      }

      this.deliveryFee = Math.floor(Math.random() * 25); // since we dont have a set delivery fee i think the best is to get a random number(max 25kn delivery fee)

      this.totalCost = this.subTotal + this.deliveryFee;

      console.log(
        "subtotal",
        this.subTotal,
        "deliveryfee",
        this.deliveryFee,
        "totalcost",
        this.totalCost
      );
    },
  },
};
</script>
