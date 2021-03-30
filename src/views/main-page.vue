<template>
    <div class="bg">

    <MainHeader />

    <div class="row-fluid">
        <div class="flex-container">

            <div class="centered">
                <CategoryFilter v-for="cat in CategoryImages" :key="cat" :cat="cat" />
            </div>
            
        </div> 
    </div>
    
            
    <div class="container">
    <div class="dropdown-divider"></div>
    <div class="row">

        <div class="col-4 PrListing">
            <div class="centered">
                <Products v-for="product in ProductImages" :key="product" :product="product" />
            </div>
        </div>

        <div class="col-1">
            <button class="button" @click="openPopUp()"><span>PDP PopUp</span></button>
        </div>

        <div class="col-7 pdp" id="PopUp">
            <div class="form-popup">

                <div class="popup-container">
                    <div class="row">

                        <div class="col-4">
                            <h1>Product Photo</h1>
                        </div>

                        <div class="col-4">
                            Product name <br>
                            Price <br>
                            Description <br>
                            <br><br><br><br>
                            Quantity selection box
                        </div>

                        <div class="col-2" />

                    </div>
                </div>

                <button type="button" class="button closebtn" @click="closePopUp()"><span>Close</span></button>
            </div>
        </div>
    </div>
    </div>

    <Footer />

    </div>
</template>

<style scoped>

.centered {
    text-align: center;
    margin-top: 5%;
}

.PrListing {
    margin-top: 50px;
    height: 700px;
    overflow-x: hidden;
    overflow-y: auto;
    /* border: 2px solid black;
    border-radius: 10px; */
}

.pdp {
    margin-top: 50px;
    border: 1px solid #2d2d2d;
    border-radius: 10px;

    /* The popup form - hidden by default */
    display: none;
    bottom: 0;
    right: 15px;
    border: 3px solid #f1f1f1;
    z-index: 9;
}

.dropdown-divider {
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 2px solid #2D2D2D;
}

/* Add styles to the form container */
.popup-container {
  padding: 10px;
  background-color: transparent;
}

.closebtn {
    float: right;
    bottom: 0;
    /* position: fixed; */
}

.button { /*the styling for our button*/
	width: 150px;
	border-radius: 10px; /*rounded*/
	padding: 5px; 

	background-color: #2D2D2D;
	color: white;

	font-size: 16px;
	text-align: center;
	
	transition: all 0.5s; /*the transition to span lasts 0.5s*/
	cursor: pointer; /*sets our pointer as cursor to activate hover*/
}
.button:hover { /*styiling for a hovered button*/
	background-color: white; /*we change the colors*/
	color: #2D2D2D; 
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
import app from '@/App';
import store from '@/store';
import MainHeader from '../components/Main-Header';
import Footer from '../components/Footer';
import CategoryFilter from '../components/Category-Filter';
import Products from '../components/Products';

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in.
//     store.currentUser = user.email;
//   }
//   else {
//     // User is not signed in
//     store.currentUser = null;
//     // if the user is not signed in and is not on our 'Home' he will be redirected there
//     if (router.name !== "home"){
//         router.push({name:'home'})
//     }
//   }
// });

let ProductImages = [
    { 'img':"https://i.imgur.com/DZMlcsS.png", 'caption': "Cheese" },
    { 'img':"https://i.imgur.com/c06zXhX.png", 'caption': "Eggs" },
    { 'img':"https://i.imgur.com/q4cOSdh.png", 'caption': "Fruit" },
    { 'img':"https://i.imgur.com/JP7zwv0.png", 'caption': "Honey" },
    { 'img':"https://i.imgur.com/8e5N4x2.png", 'caption': "Olive Oil" },
    { 'img':"https://i.imgur.com/d2BUVSk.png", 'caption': "Vegetables" },
    { 'img':"https://i.imgur.com/qRQuc3U.png", 'caption': "Wine" },
]

let CategoryImages = [
    { 'img':"https://i.imgur.com/DZMlcsS.png", 'caption': "Cheese" },
    { 'img':"https://i.imgur.com/c06zXhX.png", 'caption': "Eggs" },
    { 'img':"https://i.imgur.com/q4cOSdh.png", 'caption': "Fruit" },
    { 'img':"https://i.imgur.com/JP7zwv0.png", 'caption': "Honey" },
    { 'img':"https://i.imgur.com/8e5N4x2.png", 'caption': "Olive Oil" },
    { 'img':"https://i.imgur.com/d2BUVSk.png", 'caption': "Vegetables" },
    { 'img':"https://i.imgur.com/qRQuc3U.png", 'caption': "Wine" },
]

export default {
    name: 'main-page',
    data: function() {
        return {
            CategoryImages,
            ProductImages,
        }
    },
    methods: {
        openPopUp() {
            console.log("Radi");
            document.getElementById("PopUp").style.display = "block";
        },
        closePopUp() {
        document.getElementById("PopUp").style.display = "none";
        },
    },
    components: {
            MainHeader,
            Footer,
            CategoryFilter,
            Products,
    }
};
</script>
