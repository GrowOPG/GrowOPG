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

        <Footer />
        
    </div>
</template>

<style scoped>

.centered {
    text-align: center;
    margin-top: 5%;
}

</style>

<script>
import app from '@/App';
import store from '@/store';
import MainHeader from '../components/Main-Header';
import Footer from '../components/Footer';
import CategoryFilter from '../components/Category-Filter';

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
           CategoryImages: CategoryImages,
       }
   },
   components: {
        MainHeader,
        Footer,
        CategoryFilter
   }
};
</script>
