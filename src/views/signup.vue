<template>
    <div class="bg">
    <div class="container">
        <div class="row no-gutter">
        <Header />
            <div class="mx-auto">
            <div class= "form-box">
                <div class = "form-header"><strong>Sign Up</strong></div>                   
                    <form class="form-signin">
                        <div class="custom-control custom-checkbox mb-3"> <input type="checkbox" class="custom-control-input" id="customCheck1"> </div> 
                        <router-link to="/succ_reg">
                        <button type="button" class="button" ><span>Sign up with e-mail</span></button> 
                        </router-link> 
                        <br>
                        <button type="button" class="button btn-google" ><span><i class="fab fa-google mr-2"></i> Sign up with Google </span></button>
                    <div class="text-center">
                         <p class="low-text mt-4 mb-3 ">Already have an account? Login <router-link to="/Login">here</router-link>.</p>
                    </div>
                    </form>
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

.container{
    margin-bottom: 10%;
}

.dropdown-divider {
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 2px solid #2D2D2D;
}

.row.no-gutter { /*no padding on the column/row -- found on stack-overflow*/
    margin-left: 0;
    margin-right: 0;
}

.form-header{
    padding-top: 15px;
    padding-bottom: 20px;
    margin-bottom: -45px;
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
    width: inherit;
    height: 330px;   
}

.button { /*the styling for our button*/
    
	width: 350px;
	border-radius: 10px; /*rounded*/
	padding: 12px; 
    margin-top: 25px;

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

.low-text {
    margin-top: 15px;
}

.btn-google {
    color: white;
    background-color: #ea4335;
    /* border-radius: 10px; rounded */
}
</style>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
   name: 'login',
   components: {
       Header,
       Footer
   }
};
</script>
