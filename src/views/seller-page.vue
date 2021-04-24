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
            <!-- <button type="button" class="button addbtn showBtn" @click="showMore"><span>Show more products</span></button> -->
            <button type="button" v-show="isPopUpOpen != false" class="button addbtn addBtn" @click="OpenNewProductPopUp()"><span>Add New Product</span></button>
        </div>

        

        <div class="col-1" />

        <div class="col-7 pdp" id="PopUp">
            
            <div class="form-popup">

                <div class="popup-container">


                        <carousel :perPage="1">
                            <slide>
                                <croppa class="carousel-image" :width="300" :height="300" placeholder="Upload Image..." v-model="imageReference1" :disable-drag-to-move="true" :disable-scroll-to-zoom="true">
                                    <img slot="initial" :src="selectedProduct.url" />
                                </croppa>
                            </slide>

                            <slide>
                                <croppa class="carousel-image" :width="300" :height="300" placeholder="Upload Image..." v-model="imageReference2" :disable-drag-to-move="true" :disable-scroll-to-zoom="true"/>
                            </slide>
                        </carousel>
                        <div class="text-muted font-size-sm" style="float: center;">To insert an image click the canvas above.</div>

                        <div class="sgp-form">
                            <label for="fullname">Product Name </label>
                            <input type="text" v-model="productname" class="form-control" id="productname" required :placeholder="selectedProduct.caption"/>  
                        </div>
                        <br>
                        <div class="sgp-form">
                            <label for="fullname">Product Description</label>
                            <input type="text" v-model="productdesc" class="form-control" id="productdesc" required :placeholder="selectedProduct.Description" />
                        </div>
                         <br>
                        <div class="sgp-form">
                            <label for="fullname">Owner and Location</label>
                            <input type="text" v-model="ownerandlocation" class="form-control" id="ownerandlocation" required :placeholder="selectedProduct.OwnerAndLoc" />
                        </div>
                           <br>
                        <div class="sgp-form">
                            <label for="price">Price (HRK)</label>
                            <input type="number" v-model="productprice" class="form-control" id="productprice" required :placeholder="selectedProduct.Price" />
                        </div>
                        <br>
                </div>

                <button type="button" class="button cartbtn" @click="saveProductChanges(); postImage()"><span>Save Changes</span></button>
                <button type="button" class="button closeBtn" style="float: right;" @click="closePopUp()"><span>Close</span></button>
            </div>
        </div>
    </div>
    </div>

    <Footer />

    </div>
</template>

<script>
import { firebase, storage, db } from '@/firebase.js';
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

// let db = firebase.firestore();
// var isPopUpOpen = true;
export default {
    name: 'seller-page',
    data: function() {
        return {
            store,
            CategoryImages,
            Products,
            imageReference1: null,
            imageReference2: null,
            productname: '',
            productprice: '',
            productdesc: '',
            ownerandlocation: '' ,
            url: '',
            product: '',
            selectedProduct: {
                'SecImage1':"",
                'SecImage2' : "",
                'productname': "",
                'productprice': "", 
                'productdesc': "",
                'ownerandlocation':"",
                'url': ""},
            PDP: [],
            //lastProduct:'',
            // tempProduct:'',
            // firstProduct:'',
            isPopUpOpen: true,
            
        }
    },
    mounted() {
        this.getPDPs();
        this.getImages();
    },
    methods: {
        getPDPs() {
            let uid = firebase.auth().currentUser.uid;
            firebase.firestore()
            .collection('PRODUCTS')
            .get()
            .then((query) => {
                query.forEach((doc) => {

                    const data = doc.data();
                    if(data.CreatedBy == uid){
                        this.PDP.push({
                            'url': data.Url,
                            'caption': data.Name,
                            'Description': data.Description,
                            'Price': data.Price,
                            'OwnerAndLoc': data.Owner,
                        })
                    }
                    console.log(data)
                });
            });
        },
        // refreshPDPs() {

        //      firebase.firestore()
        //     .collection('PRODUCTS')
        //     .orderBy("Name")
        //     .limit(1)
        //     .get()
        //     .then((query) => {
        //         query.forEach((doc) => {

        //             const data = doc.data();
        //             this.firstProduct=data.Name;
        //             //alert(this.firstProduct);
            
        //         });
        //     });
        //     firebase.firestore()
        //     .collection('PRODUCTS')
        //     .orderBy("Name")
        //     .startAt(this.firstProduct)
        //     .limit(5)
        //     .get()
        //     .then((query) => {
        //         query.forEach((doc) => {

        //             const data = doc.data();
        //             this.tempProduct=data.Name;
        //             //alert(this.tempProduct);
        //             if(data.Name != this.tempProduct){
        //                 this.PDP.push({
        //                     'url': data.Url,
        //                     'caption': data.Name,
        //                     'Description': data.Description,
        //                     'Price': data.Price,
        //                     'OwnerAndLoc': data.Owner,
        //                 })
        //             }
        //            // this.tempProduct=data.Name;
        //             console.log(data)
        //         });
        //     });
        // },
        closePopUp() {
            this.isPopUpOpen = true;
            document.getElementById("PopUp").style.display = "none";
            // this.refreshPDPs();
        },
        setSelectedProduct(product) { //Postavlja da se sve sljedece akcije izvode na odabranom proizvodu, ako v-model kako spada
            this.isPopUpOpen = false;
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

            this.imageReference1.refresh();
            this.imageReference2.refresh();
        },
        OpenNewProductPopUp(product) { //  promijeniti ime, Otvara pop up za novi proizvod i brise sve iz placeholdera
        // srediti
            this.isPopUpOpen = false;

            this.selectedProduct = {};
            this.imageReference1.remove();
            this.imageReference2.remove();
            document.getElementById("PopUp").style.display = "block";
        },
        saveProductChanges() { // 1. Sprema Novi Proizvod , kasnije cemo morat napravit separate fciju koja updatea samo proizvod
            // alert(this.selectedProduct.productname);
            let user = firebase.auth().currentUser;
            firebase
            .firestore()
            .collection('PRODUCTS')
            .doc(this.productname) //Otvara lokaciju u firestoreu gdje ce se odviti spremanje novih info za taj product
            .set({
                Name : this.productname,
                Description : this.productdesc,
                Price : this.productprice,
                Owner : this.ownerandlocation,
                Url: this.url,
                CreatedBy: user.uid
                },{merge:true})
                .then(() =>{
                    alert(`Product ${this.productname} added`)
            })
            .catch((error) =>{
              console.log("Error in saving product", error)
            });
            //this.refreshPDPs();
        },
        updateProduct() {

        },
        getImages() { // povlaci url slika koje su vec unesene na stranicu - kako bi se prikazale, mozda nepotrebna
            firebase.firestore()
                .collection('PRODUCTS')
                .get()
                .then((query) => {
                    this.Products= [];
                    query.forEach((doc) => {
                        const data = doc.data;

                        this.Products.push({
                            'Url': data.url,
                            'Name': data.Name,
                            'Description': data.Description,
                            'Price': data.Price,
                            'Owner': data.ownerandlocation,
                        });
                    });
                });
            },
        postImage() { // 2. odvija se nakon sto se izvrsi "SaveProductChanges"
            this.imageReference1.generateBlob((imageData) => { // blob ima imageData -> slika prebacena u binary
                //setup storage - Folder -> Product Images > SubFolder for every user > pictures with timestamp ID
                let imageName = 'Product Images/' + store.currentUser + '/' + this.productname + Date.now() + '.png';
                let ovajProduct = this.productname;
                let user = firebase.auth().currentUser;


                console.log(ovajProduct);
                console.log(this.productname)

                storage
                    .ref(imageName) // uđemo u folder i subfolder za određenu sliku i alociramo ju
                    .put(imageData) // ubacimo u subfolder binary data slike
                    .then(result =>   {
                        result.ref.getDownloadURL().then((url) => { // izvučemo public Url kako bi ga mogli koristiti
                            console.log("url: ", url) // radi
                            
                            let imageUrl = url; // prebacujem url u varijablu
                            // alert(`Thisprod ${ovajProduct}`)
                            console.log("imageUrl: ", imageUrl) // radi

                            firebase.firestore()
                            .collection("PRODUCTS") //Sprema sav info (kako se nebi obrisao unosom samo 1 nove info) i dodaje URL od slike unesene
                            .doc(this.productname)
                            .set({
                                Name : this.productname,
                                Description : this.productdesc,
                                Price : this.productprice,
                                Owner : this.ownerandlocation,
                                Url: imageUrl,
                                CreatedBy: user.uid
                            })
                            .then(() => {
                                this.productname = '';
                                // this.imageReference1 = null;
                                this.getImages();
                            })
                            .catch(e => {
                                console.log(e)
                            })
                        })
                    }).catch(e => {
                        console.error(e);
                    })
            });
        },
        // showMore(){
        //     let uid = firebase.auth().currentUser.uid;
        //     firebase.firestore()
        //     .collection('PRODUCTS')
        //     .orderBy("Name")
        //     .startAt(this.lastProduct)
        //     .limit(5)
        //     .get()
        //     .then((query) => {
        //         query.forEach((doc) => {

        //             const data = doc.data();

        //             if(data.Name != this.lastProduct && data.CreatedBy == uid){
        //                 this.selectedProduct = data.Name;
        //                 this.productname = data.Name;
        //                 this.productdesc = data.Description;
        //                 this.productprice = data.Price;
        //                 this.ownerandlocation = data.Owner;
        //                 this.url = data.Url;

        //                 this.PDP.push({
        //                     'url': data.Url,
        //                     'caption': data.Name,
        //                     'Description': data.Description,
        //                     'Price': data.Price,
        //                     'OwnerAndLoc': data.Owner,
        //                 })
        //             }
        //             this.lastProduct=data.Name;
        //             console.log(data)
        //         });
        //     });
        // },
    },
    components: {
            MainHeader,
            Footer,
            CategoryFilter,
            Products,
    }
};
</script>

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
    margin-top: 5%;
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
    background-color: #556b2f;
}
.button:hover { /*styiling for a hovered button*/
	background-color:#556b2f; /*we change the colors*/
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