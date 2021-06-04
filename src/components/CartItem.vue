<template>
  <div class="container">
    <div class="row">
      <div class="col-2 fa">
        <img class="resize" :src="item.url" />
      </div>

      <div class="col-4 fa">
        {{ item.prName }}
      </div>

      <div class="col-2 fa">
        <input type="number" class="QtyInput" max="50" />
      </div>

      <div class="col-2 fa">{{ item.prSum }} HRK</div>

      <div class="col-2 fa">
        <button type="button" class="RmvBtn">Remove Item</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  border: 1px solid #2d2d2d;
  border-left: 0;
}
.resize {
  width: 5%;
}
.fa {
  border: 1px solid red;
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
export default {
  name: "CartItem",
  props: ["item"],
};
</script>
