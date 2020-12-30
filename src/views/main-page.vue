<template>
    <div class="bg">
        


        <Footer />
    </div>
</template>

<style scoped>

</style>

<script>
import app from '@/App';
import store from '@/store';
import Footer from '../components/Footer.vue';
/*
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    console.log(user.email);
    store.currentUser = user.email;
  }
  else {
    // User is not signed in
    store.currentUser = null;
    // if the user is not signed in and is not on our 'Home' he will be redirected there
    if (router.name !== "home"){
        router.push({name:'home'})
    }
  }
});
*/
export default {
   name: 'main-page',
   components: {
      Footer
   }
};
</script>
