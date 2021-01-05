<template>
    <div class="container-fluid no-gutters no-padding">
        <div class="row no-gutters justify-content-around">
            
            
            <div class="col-lg-4 choice">
                <router-link to="/login">
                    <img src="@/assets/black-bg.jpg" style="width: 100%; height: 100vh;">
                
                    <div class="side-text">
                        <strong class="smaller-title">I am a</strong>
                        <h2 class="small-title">BUYER</h2>
                    </div>

                </router-link>
            </div>
            

            <div class="col-lg-4">

                <img src="@/assets/wood-bg.jpg" style="width: 100%; height: 100vh;" >

                <div class="logo"> 
                    <img class="resize" src="@/assets/logo.png">
                </div>

                <div class="text-box-centered"> 
                   <h1 class="main-title">Welcome to GrowOPG</h1>
                   <p class="excerpt">GrowOPG is a platform/web-app connecting farmers and customers 
                       who value quality of fresh, homemade or locally grown produce. On our platform you can choose
                       wether you're a seller or a buyer. A seller is a person who..</p>
                </div>

                    

            </div>

            
            <div class="col-lg-4 choice">
                <router-link to="/login">
                    <img src="@/assets/grey-bg.jpg" style="width: 100%; height: 100vh;">

                <div class="side-text">
                        <strong class="smaller-title black">I am a</strong>
                        <h2 class="small-title black">SELLER</h2>
                    </div>

                </router-link>
            </div>
            
        </div>       
    </div>
</template>

<style scoped>

.no-padding { /*no padding on the column/row -- found on stack-overflow*/
    padding-left: 0;
    padding-right: 0;
}
.row.no-gutter { /*no margin on the column/row -- found on stack-overflow*/
    margin-left: 0;
    margin-right: 0;
}

.text-box-centered { /* */
    position: absolute;
    top: 35%;
    left: 15%;
    right: 15%;
    text-align: center;    
}

.side-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    transition: 0.3s ease-out;
}

.side-text:hover {
    filter: drop-shadow(16px 16px 10px black);
}

.small-title {
    color: white;
    font-size: 4rem;
    font-weight: bold;
}

.smaller-title {
    color: white;
    font-size: 3rem;
    font-weight: bold;
}

.logo {
    position: absolute;
    top: 10%;
    left: 34%;
}
img.resize { /*needed to resize logo*/
    width: 50%;
    height: 50%;
}

.main-title {
    color: white;
    font-size: 3rem;
    font-weight: bolder;
}

.excerpt {
    color: white;
    font-size: 1.2rem;
}

.black {
    color: black;
}

</style>

<script>


</script>
