<template>
    <div class="bg">
        <div class="container">
            <div class="row no-gutter">
            <Header />
                <div class="mx-auto">
                <div class= "form-box">
                    <div class = "form-header"><strong>Login</strong></div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            {{store.userType}}
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                            <div v-if="password.length < 6" class="text-danger">Your password must be at least 6 characters long.</div>
                        </div>
                        <div class="checkbox mb-3 text-center">
                            <label><input type="checkbox" value="remember-me"> Remember me</label>
                        </div>
                        <div class="text-center">
                            <div v-if="kriviUser==true" class="text-danger mt-3 mb-3">Incorrect Password or Email.</div>
                            <button type="button" class="button" @click="login"><span>Submit</span></button>
                            <p class="low-text mt-4 mb-3 ">Don't have an account? Register<router-link to="/signup"> here</router-link>.</p>
                            <p class="low-text "><router-link to="/forgot-password">Forgot your password?</router-link></p>
                        </div>
                </div>
                </div>
            </div>
        </div>
        <Footer />
     </div>
</template>

<style scoped>
body, html {
    height: 100%;
}
.container {
    margin-bottom: 10%;
}
.row.no-gutter { /*no padding on the column/row -- found on stack-overflow*/
    margin-left: 0;
    margin-right: 0;
}
.form-header{
    padding-top: 15px;
    padding-bottom: 20px;
    font-size: 25px;
    text-align: center;
}
.form-box {
    margin-top: 50px;
    border-radius: 10px;
    background: rgb(18,18,18,0.05);
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    width: 500px;
    height: 500px;
    
}
.text-center {
    text-align: center!important;
}
.low-text {
    font-size: 15px
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
	background-color: white; /*we change the colors*/
	color: #2D2D2D; 
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
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import store from '@/store';

export default {
   name: 'login',
   components: {
       Footer,
       Header
   },
   data() {
       return {
           email: '',
           password: '',
           kriviUser: '',
           store
       }
   },
   methods: {
       login() {
        console.log('logging in user -> ' + this.email)
        
        firebase
	    .auth()
           .signInWithEmailAndPassword(this.email, this.password)
           .then((result) => {
               console.log('Uspješna prijava', result);

               if (store.userType!='Buyer'){
                   console.log('You are not a buyer, but a seller!')
                   /*this.$router.replace({name: "main-page-seller"}) // ovako cemo napravit kad budemo imali gotov main page - pa ga kopirat za sellera i buyera*/

               } 
               else if(store.userType!='Seller'){
                   console.log('You are not a seller, but a buyer!')
                   /*this.$router.replace({name: "main-page-buyer"}) */
               }
               this.$router.replace({name: "main-page"}) //.replace instead of .push so the user can't go back to login page (since he just logged in)
           })
	   .catch((e) => {
               console.error('greska', e);
               this.kriviUser=true;
           })
        //return kriviUser;
       }
   }
};
</script>
