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
                <Products v-for="product in PDP" :key="product.Name" :product="product" @product-selected="setSelectedProduct" />
            </div>
              <button type="button" class="button addbtn showBtn" @click="showMore"><span>Show more products</span></button>
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
                                {{ this.selectedProduct.Name }}
                            </h2>

                            <p>
                                <strong>Description:</strong>
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

                <button type="button" class="button" @click="getSumPrice(selectedProduct.Price); AddToCart(selectedProduct)" ><span>Add To Cart</span></button>
                <button type="button" class="button closeBtn" style="float: right;" @click="closePopUp(); getSumPrice(selectedProduct.productprice)"><span>Close</span></button>
            </div>
        </div>
    </div>
    </div>

    <Footer />

    </div>
</template>

<style scoped>

.addbtn {
    margin-top: 20px;
    margin-left: 100px;
}
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
	width: 200px;
	border-radius: 10px; /*rounded*/
	padding: 5px; 

	background-color: #2D2D2D;
	color: white;

	font-size: 16px;
	text-align: center;
	
	transition: all 0.5s; /*the transition to span lasts 0.5s*/
	cursor: pointer; /*sets our pointer as cursor to activate hover*/
}
.addbutton {
    width: 250px;
}
.addBtn {
    background-color:#556b2f;
}
.button:hover { /*styiling for a hovered button*/
	background-color: #556b2f; /*we change the colors*/
	color: white; 
}
.closeBtn:hover {
    background-color: red; 
	color: white;
}
.addBtn:hover {
    background-color: #2D2D2D;  /* we change the colors */
	color: white; 
}
.showBtn:hover {
    background-color:#556b2f; 
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
.closeBtn:hover span {
	padding-right: 25px; /*how far from the right border of our button*/
}
.closeBtn span::after {
	content: '\00AB'; /*those are the two lines that display*/
	position: absolute;
	opacity: 0;
	top: 0;
	left: -120px;
	transition: 0.5s;
}

.closeBtn:hover span:after {
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
                'url': "",
                'qty': "",
                'sum': "",
                },
            PDP: [],
            lastProduct:'',
            
        }
    },
    mounted() {
        this.getPDPs();
    },
    methods: {
        getPDPs() {
            firebase.firestore()
            .collection('PRODUCTS')
            .limit(5)
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
                        'Name': data.Name,
                        'Description': data.Description,
                        'Price': data.Price,
                        'OwnerAndLoc': data.Owner,
                    })
                    this.lastProduct=data.Name;
                    console.log(data)
                });
            });
        },
        AddToCart(product) {
            var itemToCart = product; // we use a new variable to save the selected products info
            var cartLen = store.cartItems.length + 1; // variable to get the length of the array
            
            for (var i = 0; i < cartLen; i++) { // now we'll use this to input new items
                if (store.cartItems[i] == null) { // if the spot is empty, we can put a new item inside
                    store.cartItems.push(itemToCart); // we push our selected product into the array
                }
                else if (store.cartItems[i] != null) { 
                    // if the spot is already taken we check further since someone might want to add a new qty
                    if ( store.cartItems[i].Name == itemToCart.Name // if the product has the same name
                        && store.cartItems[i].OwnerAndLoc == itemToCart.OwnerAndLoc // and the same owner
                        && store.cartItems[i].Price == itemToCart.Price // AND MOST IMPORTANTLY THE SAME PRICE, we cant be mixing prices to bi bio mess
                        ) {
                        // we set the new quantity if the user selected more or less (still editable in cart.vue)
                        store.cartItems[i].qty = itemToCart.qty; 
                    }
                }

                console.log(store.cartItems);
            }

            
            
        },
        closePopUp() {
            document.getElementById("PopUp").style.display = "none";
        },
        setSelectedProduct(product) {
            this.selectedProduct = product;
            document.getElementById("PopUp").style.display = "block";

            firebase.firestore()
            .collection('PRODUCTS')
            .doc(this.selectedProduct.Name)
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

            var sum = Qty*price;

            this.selectedProduct.qty = Qty; // so we can track the selected amount of products
            this.selectedProduct.sum = sum; 
        },
        showMore(){
            firebase.firestore()
            .collection('PRODUCTS')
            .orderBy("Name")
            .startAt(this.lastProduct)
            .limit(5)
            .get()
            .then((query) => {
                query.forEach((doc) => {

                    const data = doc.data();

                    if(data.Name != this.lastProduct){
                        this.selectedProduct = data.Name;
                        this.productname = data.Name;
                        this.productdesc = data.Description;
                        this.productprice = data.Price;
                        this.ownerandlocation = data.Owner;
                        this.url = data.Url;

                        this.PDP.push({
                            'url': data.Url,
                            'Name': data.Name,
                            'Description': data.Description,
                            'Price': data.Price,
                            'OwnerAndLoc': data.Owner,
                        })
                    }
                    this.lastProduct=data.Name;
                    console.log(data)
                });
            });
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
