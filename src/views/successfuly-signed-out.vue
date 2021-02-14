<template>
    <div class="bg">
    <div class="container">
        <div class="row no-gutter">
            <Header />
            <div class="mx-auto">
            <div class="form-box">
                <div class="tick-sign">
                    <img class="resize" src="@/assets/tick-icon-symbol.png">
                </div>
                <p class="text">You have been successfully signed out.</p><br>
                <p class="text">You will be automatically redirected to our landing page in 5 seconds, or you can click <router-link to="/">here</router-link>.</p>
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
    margin-bottom: 15%;
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

img.resize{ 
     display: block;
     margin-top: 80px;
     margin-left: auto;
     margin-right: auto;
     width: 15%;
     height: auto;  
}

.text{
    text-align: center;
    font-size: 25px;
}
</style>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
   name: 'successfuly-logged-out',
   components: {
       Header,
       Footer
   },
    mounted(){
        // const self = this;
        setTimeout( () => this.$router.push({name: 'Home'}), 5000);
    }
};
</script>
