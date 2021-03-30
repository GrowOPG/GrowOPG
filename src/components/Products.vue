<template>

<div class="container">
    <div class="row">
        <div class="col-2">
            <div class="products" @click="openPopUp()">
                <img class="resize" :src="product.img">
                <span class="caption">{{ product.caption }}</span>
            </div>
        </div>
        <br>
        <div class="col-2">
            <div class="products" @click="openPopUp()">
                <img class="resize" :src="product.img">
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
        openPopUp() {
            document.getElementById("PopUp").style.display = "block";
        },
    },
};

</script>

<style>
.resize {
    width: 5%;
}

.col-2 {
    margin-right: 100px;
}

.products {
    display: inline-block;
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
