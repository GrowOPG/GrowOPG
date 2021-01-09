<template>
    <div class="bg">

        <MainHeader />

        <div class="row-fluid">
            <div class="flex-container">

                <div class="centered">
                    <div class="category-filter">
                        <img class="resize" src="@/assets/cheese.png">
                        <span class="caption">Cheese</span>
                    </div>

                    <div class="category-filter">
                        <img class="resize" src="@/assets/egg.png">
                        <span class="caption">Egg</span>
                    </div>

                    <div class="category-filter">
                        <img class="resize" src="@/assets/fruits.png">
                        <span class="caption">Fruits</span>
                    </div>

                    <div class="category-filter">
                        <img class="resize" src="@/assets/honey.png">
                        <span class="caption">Honey</span>
                    </div>

                    <div class="category-filter">
                        <img class="resize" src="@/assets/olive-oil.png">
                        <span class="caption">Olive Oil</span>
                    </div>

                    <div class="category-filter">
                        <img class="resize" src="@/assets/vegetables.png">
                        <span class="caption">Vegetables</span>
                    </div>

                    <div class="category-filter">
                        <img class="resize" src="@/assets/wine.png">
                        <span class="caption">Wine</span>
                    </div>
                </div>

            </div>
        </div>

        <Footer />
        
    </div>
</template>

<style scoped>

.category-filter {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    margin-right: 3%;
}

.caption {
    display: block;
    margin-top: 2px;
    font-weight: bold;
}

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

export default {
   name: 'main-page',
   components: {
        MainHeader,
        Footer
   }
};
</script>
