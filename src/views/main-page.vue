<template>
    <div class="bg">

        <MainHeader />

        <div class="row-fluid">
            <div class="flex-container">

                <div class="centered">
                    <CategoryFilter v-for="image in CategoryImages" :key="image" :image="image"/>
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
    '@/assets/cheese.png',
    '@/assets/egg.png',
    '@/assets/fruits.png',
    '@/assets/honey.png',
    '@/assets/olive-oil.png',
    '@/assets/vegetables.png',
    '@/assets/wine.png',
]

let CategoryNames = [
    "Cheese",
    "Egg",
    "Fruits",
    "Honey",
    "Olive Oil",
    "Vegetables",
    "Wine",
]

export default {
   name: 'main-page',
   data: function() {
       return {
           CategoryImages: CategoryImages, CategoryNames: CategoryNames,
       }
   },
   components: {
        MainHeader,
        Footer,
        CategoryFilter
   }
};
</script>
