<template>
    <div class="bg">
        <div class="container">
            <div class="row no-gutter">
            <Header />
                <div class="mx-auto">
                <div class= "form-box">
                    <div class="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                        </svg></div>
                    <div class ="form-header text-center"><strong>Forgot Password?</strong></div>
                    <div class="text-center"><label for=" text-center low-text mt-4 mb-3">You can reset your password here.</label></div>
                        <div class="form-group">
                            <label for="low-text mt-4 mb-3">Recovery E-mail</label>
                            <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter e-mail">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">New Password</label>
                            <input type="password" v-model="new_password" class="form-control" id="new_password" placeholder="Enter new password">
                            <p id="passwordHelpBlock" class="form-text text-muted">
                                Your password must be at least characters 6 long.
                            </p>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Repeat New Password</label>
                            <input type="password" v-model="new_password_repeat" class="form-control" id="new_password_repeat" placeholder="Retype new password">
                            <p id="passwordHelpBlock" class="form-text text-muted">
                                Your passwords must match.
                            </p>
                        </div>
                        <div class="text-center">
                            <button type="button" class="button" @click="forgot_pass()"><span><router-link to="/login">Reset your password</router-link></span></button>
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
a { /*css ne mijenja link color u blue nego odrzi color parent elementa*/
    color: inherit;
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
    /* padding-bottom: 20px; */
    font-size: 25px;
}
.form-box {
    /* text-align: center; */
    margin-top: 50px;
    border-radius: 10px;
    background: rgb(18,18,18,0.05);
    padding-top: 60px;
    padding-left: 30px;
    padding-right: 30px;
    width: 500px;
    height: 650px;
    
}
.text-center {
    text-align: center!important;
}
.low-text {
    font-size: 15px
}
.button { /*the styling for our button*/
    
	width: 250px;
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
import firebase from '@/firebase';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
   name: 'forgot-password',
   components: {
       Footer,
       Header
   },
   data() {
       return {
           email: '',
           new_password: '',
           new_password_repeat: ''
       }
   },
   methods:{
       forgot_pass() {
           console.log('login...' + this.email + this.new_password);

           const userEmail = this.email;

           firebase
           .auth()
           .sendPasswordResetEmail(
               userEmail)
            .then((success) => {
                // Password reset email sent.
                console.log('Uspješno poslan mail', );
            })
            .catch(function(error) {
                // Error occurred. Inspect error.code.
            });
       }
   }
};
</script>

