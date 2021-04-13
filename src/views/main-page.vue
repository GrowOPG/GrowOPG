<template>
    <div class="bg">

    <MainHeader />

    <div class="row-fluid">
        <div class="flex-container">

            <div class="centered">
                <CategoryFilter v-for="cat in CategoryImages" :key="cat.img" :cat="cat" />
            </div>
            
        </div> 
    </div>
    
            
    <div class="container">
    <div class="dropdown-divider"></div>
    <div class="row">

        <div class="col-4 PrListing">
            <div class="centered scroll">
                <Products v-for="product in PDP" :key="product.caption" :product="product" @product-selected="setSelectedProduct" />
            </div>
        </div>

        <div class="col-1" />

        <div class="col-7 pdp" id="PopUp">
            <div class="form-popup">

                <div class="popup-container">
                    <div class="row">

                        <carousel :perPage="1">
                            <slide>
                                <img class="carousel-image" :src="selectedProduct.url">
                            </slide>

                            <slide>
                                <img class="carousel-image" :src="selectedProduct.url">
                            </slide>
                        </carousel>

                        <div>
                            <h2 class="ProductName">
                                Name:
                                {{ this.selectedProduct.caption }}
                            </h2>

                            <p>
                                Description:
                                {{ this.selectedProduct.Description }}
                            </p>

                            <p>
                                <strong>Owner and Location:</strong> {{ this.selectedProduct.OwnerAndLoc }}
                            
                            <p>
                               <strong>Quantity:</strong> <input class="QtyInput" id="Qty" type="number" max="50" />
                            </p>

                            <p>
                               <strong>Price:</strong> {{ this.selectedProduct.Price }} HRK
                            </p>
                        </div>

                    </div>
                </div>

                <button type="button" class="button" @click="getSumPrice(selectedProduct.Price)" ><span>Add To Cart</span></button>
                <button type="button" class="button closeBtn" style="float: right;" @click="closePopUp(); getSumPrice(selectedProduct.productprice)"><span>Close</span></button>
            </div>
        </div>
    </div>
    </div>

    <Footer />

    </div>
</template>

<style scoped>

.ProductName {
    text-align: center;
}

.carousel-image {
    width: 50%;
    margin-left: 25%;
}

.scroll {
    display: block;
    width: 100%;
    height: 500px;
    overflow-y: scroll;
}

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
    border: 3px solid #2d2d2d;
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

.QtyInput {
    width: 50px;
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
	background-color: green; /*we change the colors*/
	color: white; 
}
.closeBtn:hover {
    background-color: red; 
	color: white;
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
import { firebase } from '@/firebase';
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
            Products,
            selectedProduct: {
                'imageReference1':"",
                'imageReference2' : "",
                'productname': "",
                'productprice': "", 
                'productdesc': "",
                'ownerandlocation':"",
                'url': ""},
            PDP: [],
            
        }
    },
    mounted() {
        this.getPDPs();
    },
    methods: {
        getPDPs() {
            firebase.firestore()
            .collection('PRODUCTS')
            .get()
            .then((query) => {
                query.forEach((doc) => {

                    const data = doc.data();

                    this.selectedProduct = data.Name;
                    
                    this.productname = data.Name;
                    this.productdesc = data.Description;
                    this.productprice = data.Price;
                    this.ownerandlocation = data.Owner;
                    this.url = data.Url;

                    this.PDP.push({
                        'url': data.Url,
                        'caption': data.Name,
                        'Description': data.Description,
                        'Price': data.Price,
                        'OwnerAndLoc': data.Owner,
                    })

                    console.log(data)
                });
            });
        
        },
        AddToCart(Product) {
            // document.getElementById('Qty').value = ''; // doesnt work
            
        },
        closePopUp() {
            document.getElementById("PopUp").style.display = "none";
        },
        setSelectedProduct(product) {
            this.selectedProduct = product;
            document.getElementById("PopUp").style.display = "block";

            firebase.firestore()
            .collection('PRODUCTS')
            .doc(this.selectedProduct.caption)
            .get()
            .then((doc) => {
                const data = doc.data();
                
                this.productname = data.Name;
                this.productdesc = data.Description;
                this.productprice = data.Price;
                this.ownerandlocation = data.Owner;
                this.url = data.Url;

            });
        },
        getSumPrice(PrPrice) {
            var QtyRaw = document.getElementById("Qty"); // since this returns an object 
            var Qty = QtyRaw.value; // we have to extract the value to be able to use it
            var price = PrPrice;

            var sum = Qty*price
            alert(sum)
            return sum;
        }
    },
    components: {
            MainHeader,
            Footer,
            CategoryFilter,
            Products,
    }
};
</script>
