<template>

    <router-view/>
    
</template>

<style lang="scss">

</style>


<script>
import store from '@/store';
import router from '@/router';
import { firebase } from '@/firebase';

firebase.auth().onAuthStateChanged((user) => {
   // we're setting a const of the currentRoute we're on
   const currentRoute = router.currentRoute;

    if (user) {
    // User is signed in.
        console.log(user.email);
        store.currentUser = user.email;
    }
    else {
    // User is not signed in
        console.log('*** No user');
        store.currentUser = null;
    // if the user is not signed in on the pages we require to be signed in he will be redirected to 'home'
        if (currentRoute.meta.needsUser){
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
