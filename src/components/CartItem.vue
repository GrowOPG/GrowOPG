<template>
  <div class="container">
    <div class="row">
      <div class="col-2 fa">
        <img class="resize" :src="item.prUrl" />
      </div>

      <div class="col-3 fa">
        {{ item.prName }}
      </div>

      <div class="col-2 fa">
        Quantity:
        {{ item.prQty }}
      </div>

      <div class="col-2 fa">{{ item.prPrice }} HRK</div>

      <div class="col-1 fa">
        <button type="button" class="RmvBtn" @click="removeFromCart(item)">
          Remove Item
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  border: 2px solid #2d2d2d;
  border-radius: 10px;
  height: 75px;
  border-left: 0;
  margin-top: 2%;
}
.resize {
  width: 58%;
  height: 58%;
}
.fa {
  /* border: 1px solid red; */
  align-self: center;
}

.QtyInput {
  width: 60px;
  border-radius: 10px;
}

.RmvBtn {
  width: 150px;
  border-radius: 10px; /*rounded*/
  padding: 5px;
  background-color: rgb(190, 25, 25);
  color: white;
  font-size: 16px;
  text-align: center;

  transition: all 0.5s; /*the transition to span lasts 0.5s*/
  cursor: pointer; /*sets our pointer as cursor to activate hover*/
}
.RmvBtn:hover {
  /*styiling for a hovered button*/
  background-color: darkred; /*we change the colors*/
  color: white;
}
</style>

<script>
import store from "../store";
import cart from "../views/cart.vue";

export default {
  name: "CartItem",
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    removeFromCart(product) {
      console.log("selected", product.prName);
      console.log("old array", store.cartItems);

      // let's now remove the selected product from the cart
      for (let i = 0; i < store.cartItems.length; i++) {
        if (store.cartItems[i].Name == product.prName) {
          var deleteName = store.cartItems[i]; // there's no difference if we use store.cartItems[i].Name since they're the same
          var deleteIndex = store.cartItems.indexOf(deleteName); // we get the index of the selected product

          console.log("index -> ", deleteIndex);

          var removed = store.cartItems.splice(deleteIndex, 1); // we remove 1 item from the selected index

          console.log("We removed ", removed, " from index ", deleteIndex);
        } else console.log("NOt the same");
      }
      console.log("new array", store.cartItems);
    },
    refreshCart() {
      // now we need to work on a method to refresh the component every time  we delete a product
    },
  },
};
</script>
