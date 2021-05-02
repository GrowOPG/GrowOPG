<template>
    <div class="bg">
        
    <MainHeader />
        
         <div>
            <img :src="require('@/assets/back.svg')"  class="backButton"  @click="backToMain()" >
            <p class="backButtonText"  @click="backToMain()">Back to Main page</p>
        </div>
        <div class="container-fluid">
        <div class="row">
            <div class="col-6">
                <div class="CartList">

                    <CartItem />

                </div>
            </div>
            
            <div class="col-1" />

            <div class="col-4">
                <div class="Receipt">
                    <div class="ReceiptData">
                        <span class="text">Subtotal</span>
                        <span class="prices">HRK 150.00</span> 
                    </div>
                    <br>
                    <div class="ReceiptData">
                        <span class="text">Delivery</span>
                        <span class="prices">HRK 50.00</span> 
                    </div>
                    
                    <div class="dropdown-divider"></div>

                    <div class="ReceiptData">
                        <span class="text">Total</span>
                        <span class="prices">HRK 150.00</span> 
                    </div>

                    <div class="dropdown-divider"></div>

                    <div class="CheckoutBtn">
                        <button type="button" class="button"><span>Checkout</span></button>
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
    margin: .5rem 0;
    margin-left: 5%;
    width: 90%;
    overflow: hidden;
    border-top: 2px solid #2D2D2D;
}
.CartList {
    /* border: 2px solid red; */
    margin-top: 50px;
    height: 700px;
    overflow-x: hidden;
    overflow-y: auto;
}
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
.backButton{
    display: inline-block;
    white-space: nowrap;
    margin-left: 20px;
    max-height: 20px;
    max-width: 30px;
}
.backButtonText{
    font-style: italic;
    font-weight: 500;
    color: #556b2f;
    display: inline-block;
    white-space: nowrap;
    margin-top: 20px;
    max-height: 20px;
    max-width: 30px;
}
.button { /*the styling for our button*/
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
.button:hover { /*styiling for a hovered button*/
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
	content: '\00bb'; /*those are the two lines that display*/
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
import MainHeader from '@/components/Main-Header.vue';
import Footer from '@/components/Footer.vue';
import CartItem from '@/components/Cart-Item.vue';
import store from '@/store';

export default {
   name: 'cart',
   components: {
        MainHeader,
        Footer,
        CartItem,
        store
   },
   methods: {
        backToMain() {
             this.$router.push({name: "main-page"})
              if (store.userType != 'Buyer'){
                this.$router.push({name: "seller-page"})
            //     // this.$router.replace({name: "main-page-seller"}) 
             } 
             else if(store.userType != 'Seller'){
                this.$router.push({name: "main-page"})
            //     /*this.$router.replace({name: "main-page-buyer"}) */
            };
        },
   }
};
</script>