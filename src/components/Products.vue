<template>
  <div class="container centered">
    <div class="row">
      <div class="col-2">
        <div class="products" @click="onProductSelected()">
          <img class="resize" :src="product.url" />
          <span class="caption">{{ product.Name }}</span>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: ["product"],
  methods: {
    onProductSelected() {
      // unknown method god knows what this does
      this.$emit("product-selected", this.product);
    },
  },
};
</script>

<style>
.products {
  cursor: pointer;
}

.resize {
  width: 5%;
}

.products {
  display: inline-block;
  margin-left: 100px;
}

.category-filter {
  vertical-align: top;
  display: inline-block;
  text-align: center;
  margin-right: 3%;
}

.caption {
  display: block;
  margin-top: 2px;
  width: 100px;
}
</style>
