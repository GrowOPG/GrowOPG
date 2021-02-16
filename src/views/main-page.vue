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

            <div class="col-1" />

            <div class="col-7 pdp">
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
}
.dropdown-divider {
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 2px solid #2D2D2D;
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
   components: {
        MainHeader,
        Footer,
        CategoryFilter,
        Products,
   }
};
</script>
