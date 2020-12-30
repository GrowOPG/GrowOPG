<template>
<body class="d-flex flex-column min-vh-100">
    <div class="bg">
    <div class="signup">
        <div class="container">
            <div class="row no-gutter">
                <Header />
            </div>
        </div>
        <div class="container">
            <div class= "form-box">
            <div class="row">
                <div class="col-6">
                    <form id="form">
                        <div class="sgp-form">
                            <label for="fullname">Full name</label>
                            <input type="text" v-model="fullname" class="form-control" id="fullname" placeholder="eg. Tommy Lee" />
                        </div>

                        <div class="sgp-form">
                            <label for="email"> Email</label>
                            <input type="email" v-model="email" class="form-control" id="mail" placeholder="eg. tommylee@gmail.com" />
                        </div>

                        <div class="sgp-form">
                            <label for="address">Address</label>
                            <input type="text" v-model="address" class="form-control" id="address" placeholder="eg. Jeretova 46" />
                        </div>

                        <div class="sgp-form">
                            <label for="city">City</label>
                            <input type="text" v-model="city" class="form-control" id="city" placeholder="eg. Pula" />
                        </div>

                        <div class="sgp-form">
                            <label for="password">Password</label>
                            <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter your password" />
                            <p id="passwordHelpBlock" class="form-text text-muted">
                                Your password must be at least 6 characters long.
                            </p>
                        </div>

                        <div class="sgp-form">
                            <label for="repeatpassword" >Repeat password</label>
                            <input type="password" v-model="passwordrepeat" class="form-control" id="repeatpassword" placeholder="Retype your password" />
                            <p id="passwordHelpBlock" class="form-text text-muted">
                                Passwords must match.
                            </p>
                        </div>
                    </form>
                </div>
                <div class="col-2" />
                <div class="col-4">
                    <div class="sgp-form">
                        <label for="DoB" class="input">Date of birth</label>
                        <input type="date" v-model="DoB" class="form-control" placeholder="mm-dd-yyyy" id="DoB" />
                    </div>

                    <div class="sgp-form"  style="margin-top: 85px;">
                        <label for="zip" class="input" >Zip code</label>
                        <input type="text" v-model="zip" class="form-control" placeholder="eg. 52100" />
                    </div>

                <router-link to="/successful-registration"><button type="button" class="button" @click="register"><span>Register now</span></button></router-link>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    <Footer />
</body>
</template>

<style scoped>
body {
min-height: 100%;
position: relative;
margin: 0;
/* padding-bottom: 100px; height of the footer */
box-sizing: border-box;
}
.container {
    margin-bottom: 50px;
}
.row.no-gutter { /*no padding on the column/row -- found on stack-overflow*/
    margin-left: 0;
    margin-right: 0;
}
.form-box {
    margin-top: 50px;
    border-radius: 10px;
    background: rgb(18,18,18,0.05);
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
    width: inherit;
    height: 640px;   
}
#form {
    position: absolute;
    width: inherit;
}
label { /*label text*/
    text-align: left;
    margin-top: 20px;
    margin-bottom: 2px;
}
.form-control{ /*all input boxes are rounded*/
    border-radius: 10px;
}
.button { /*the styling for our button*/
	width: 92%;
    position: absolute;
    margin-top: 258px;
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

import Header from '@/components/Header.vue'; //imported Header
import Footer from '@/components/Footer.vue'; //imported Footer

export default {
    name: "register",
    components: {
        Header,
        Footer
    },
    data() {
        return{
            fullname: '',
            email: '',
            address: '',
            city: '',
            zip: '',
            DoB: '',
            password: '',
            passwordrepeat: '',
        }
    },
    methods: {
        register() {
            firebase.auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(function() {
                console.log('Uspješna Registracija');
                })
            .catch(function(error) {
                console.error('Došlo je do greške', error);
            })
        }
    } 
}
</script>
