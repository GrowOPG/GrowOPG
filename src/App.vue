<template>

    <router-view/>
    
</template>

<style lang="scss">

</style>

/*
<script>
import store from '@/store';
import router from '@/router';
import firebase from '@/firebase';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    console.log(user.email);
    store.currentUser = user.email;
  }
  else {
    // User is not signed in
    store.currentUser = null;
    // if the user is not signed in as is not on our 'Home' he will be redirected there
    if (router.name !== "home"){
        router.push({name:'home'})
    }
  }
});

export default {
    name:'app',
    data(){
        return {
            store,
        };
    },
    methods: {
       /* logout() { //this is going to be needed when we'll do the log out option
            firebase.auth()
            .signOut()
            .then(() => {
                this.$router.push({name: 'login'})
            }); 
        }*/
    }
} /* Ako vam ne sljaka i nis ne vidite to je do ove skripte ibacite ju u comm */
</script> 
*/
