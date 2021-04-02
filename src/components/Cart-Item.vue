<template>
    <div class="CartItem">
        <div class="container-fluid CartItemElement">
            <div class="row CartItemElement">

                <div class="col-6 CartItemElement">
                    <div class="adjust">
                        <img src="https://i.imgur.com/DZMlcsS.png" class="resize">
                        cheese
                    </div>
                </div>

                <div class="col-1 CartItemElement" />

                <div class="col-5 CartItemElement">
                    <div class="LowerCenter">
                        <input type="number" class="QtyInput" max="50">
                        <button type="button" class="removeItemBtn"><span>Remove</span></button>
                        <!-- <select class="QtyInput">
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select> -->
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

export default {
    name: "CartItem",
    props: [
        'CartItem',
        'product',
    ],
    components: {
        product,
    }
}
</script>