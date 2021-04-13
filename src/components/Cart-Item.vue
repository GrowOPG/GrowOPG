<template>
    <div class="CartItem">
        <div class="container-fluid CartItemElement">
            <div class="row CartItemElement">

                <div class="col-6 CartItemElement">
                    <!-- <Products v-for="product in PDP" :key="product.caption" :product="product" @product-selected="setSelectedProduct" /> -->
                </div>

                <div class="col-1 CartItemElement" />

                <div class="col-5 CartItemElement">
                    <div class="LowerCenter">
                        <input type="number" class="QtyInput" max="50">
                        <button type="button" class="removeItemBtn" @click="RemoveItem()"><span>Remove</span></button>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<style>
.resize {
    width: 5%;
}
.CartItem {
    height: 100px;
    margin-top: 20px;
    border: 3px solid #2d2d2d;
    border-radius: 10px;
    border-left: 0;
}

.CartItemElement {
    height: inherit;
}

.adjust {
    margin-top: 10%;
}
.LowerCenter {
    margin-top: 10%;
    float: right;
}
.products {
    display: inline-block;
}
.QtyInput {
    width: 60px;
    border-radius: 10px;
}

.removeItemBtn{
    width: 100px;
	border-radius: 10px; /*rounded*/
	padding: 5px; 
	background-color: rgb(190, 25, 25);
	color: white;
	font-size: 16px;
	text-align: center;
	
	transition: all 0.5s; /*the transition to span lasts 0.5s*/
	cursor: pointer; /*sets our pointer as cursor to activate hover*/
}
.removeItemBtn:hover { /*styiling for a hovered button*/
	background-color: white; /*we change the colors*/
	color: rgb(190, 25, 25); 
}
.removeItemBtn span {
	cursor: pointer;
	display: inline-block; /*so it displays inline to our text*/
	position: relative;
	transition: 0.5s;
}
.removeItemBtn:hover span {
	padding-right: 15px; /*how far from the right border of our button*/
}
.removeItemBtn span:after {
	content: 'X'; /*those are the two lines that display*/
	position: absolute;
	opacity: 0;
	top: 0;
	right: -20px;
	transition: 0.5s;
}
.removeItemBtn:hover span:after {
	opacity: 1;
	right: 0;
}
.caption {
    display: inline-block;
    margin-top: 2px;
    font-weight: bold;
}
</style>

<script>
import product from '../components/Products';
import Products from './Products.vue';
import PDP from '@/views/main-page.vue';

export default {
    name: "CartItem",
    data: function() {
        return {
            Products,
            selectedProduct: {
                'imageReference1':"",
                'imageReference2' : "",
                'productname': "",
                'productprice': "", 
                'productdesc': "",
                'ownerandlocation':"",
                'url': ""},
            PDP: []
        }
    },
    props: [
        'CartItem',
        'product',
    ],
    components: {
        Products,
        PDP,
    },
    methods: {
        RemoveItem() {
            product = null;
        }
    },
}
</script>