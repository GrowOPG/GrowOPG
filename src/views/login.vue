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
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            <p id="passwordHelpBlock" class="form-text text-muted">
                                Your password must be at least 6 long.
                            </p>
                        </div>
                        <div class="checkbox mb-3 text-center">
                            <label><input type="checkbox" value="remember-me"> Remember me</label>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="button"><span>Submit</span></button>
                            <p class="low-text mt-4 mb-3 ">Don't have an account? Register<router-link to="/signup"> here</router-link>.</p>
                            <p class="low-text "><a href="">Forgot your password?</a></p>
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
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
   name: 'login',
   components: {
       Footer,
       Header
   }
};
</script>
