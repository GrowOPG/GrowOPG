<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 fa">
        <img class="resize" :src="item.prUrl" />
      </div>

      <div class="col-2 fa">
        {{ item.prName }}
      </div>

      <div class="col-2 fa">
        Quantity:
        {{ item.prQty }}
      </div>

      <div class="col-3 fa">
        Cost per item:
        {{ item.prCost }} HRK
      </div>

      <div class="col-3 fa">
        Item total:
        {{ item.prPrice }} HRK
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
  border-right: 0;
  margin-top: 1%;
}
.resize {
  width: 60%;
  height: 60%;
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

var totalCost = 0;

export default {
  name: "orderItem",
  props: ["item"],
  data() {
    return {
      totalCost,
    };
  },
  methods: {
    getTotalCost() {
      // in this method we have to get the cartItems list from store.js
      var tempList;

      // but i don't need all the data so lets do this
      for (var i = 0; i < store.cartItems.length; i++) {
        this.tempList.push({
          prPrice: tempList[i].sum,
          prCost: tempList[i].Price,
          prQty: tempList[i].qty,
        });
        // now let's set the subTotal which will be a sum of all the items' prices
        console.log(this.tempList);

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
  },
};
</script>
