<template>
    <div class="bg">
        <div class="container-fluid">
            <div class="row CartItem">

                <div class="col-2 CartItemPicture">
                    <!-- somehow proc kroz cartItemsArray i izvaditi iz njega podatke o proizvodima(slika, ime, cijena, kolicina i suma) -->
                    <img class="itemPicture" :src="cartItemsArray.Url">
                </div>

                <div class="col-2 CartItemName">
                    <!-- somehow proc kroz cartItemsArray i izvaditi iz njega podatke o proizvodima(slika, ime, cijena, kolicina i suma) -->
                    <span class="ProductName">
                        {{ this.cartItemsArray.Name }}
                    </span>
                </div>

                <div class="col-5 CartItemMoney">
                    <!-- somehow proc kroz cartItemsArray i izvaditi iz njega podatke o proizvodima(slika, ime, cijena, kolicina i suma) -->
                    <span class="ProductName">
                        cijena: 
                        {{ this.cartItemsArray.Price }}
                        HRK
                    </span>
                    <input type="number" class="QtyInput" max="50">
                </div>

                <div class="col-1 CartItemElement" />

                <div class="col-2 CartItemElement">
                    <div class="LowerCenter">
                        <button type="button" class="removeItemBtn" @click="RemoveItem(this.selectedProduct)"><span>Remove</span></button>
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

.itemPicture {
    padding-top: 2%;
    height: 15%;
    border-radius: 10px;
}
.CartItemName {
    align-self: center;
    height: inherit;
}
.CartItemMoney {
    align-self: center;
    height: inherit;
}
.CartItemElement {
    align-self: center;
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
import store from '../store.js';
import selectedProduct from '../views/main-page';

var cartLen = store.cartItems.length; // i need it more times so ill declare it here

export default {
    name: "CartItem",
    data: function() {
        return {
            'cartItemsArray': [],
        }
    },
    mounted() {
        this.getCartItems();
    },
    methods: {
        getCartItems() {
            // in this method we have to get the cartItems list from store.js
            // for (var i = 0; i < cartLen; i++) {
            //     // for every item in our store, we send it to the cart array
            //     var izbaci = store.cartItems.pop();

            //     cartItemsArray.push(izbaci);
            // }
            // now we have our products array

            var fakePodaci = {
                'Name': "Jabuka",
                'Price': 12,
                'Url': "https://firebasestorage.googleapis.com/v0/b/growopg.appspot.com/o/Product%20Images%2Fea-poe%40mail.com%2FApple1619035303377.png?alt=media&token=d48473a9-e042-4b8e-b8a6-dce762e59379"
            }
            this.cartItemsArray = fakePodaci;
        },
        RemoveItem(product) {
            // will have to remove just from cartItemsArray
            var toRemove = product;

            for (var i = 0; i < cartLen; i++) {
                if (toRemove.name == cartItemsArray[i].name) {
                    var izbaci = cartItemsArray[i].pop();

                    console.log(izbaci)
                }
            }

        }
    },
}
</script>