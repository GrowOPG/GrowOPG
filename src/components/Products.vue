<template>

<div class="container centered">
    <div class="row">
        <div class="col-2">
            <div class="products" @click="onProductSelected()">
                <!-- <img class="resize" :src="product.img"> -->
                <span class="caption">{{ product.caption }}</span>
            </div>
        </div>
        <br>

    </div>
</div>

</template>

<script>
export default {
    name: 'Products',
    props: ['product',],
    methods: {
        onProductSelected() { // method used to open our popup
            this.$emit('product-selected', this.product);
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
