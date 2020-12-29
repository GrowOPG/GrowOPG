<template>
    <div class="container no-gutters no-padding">
        <div class="row no-gutters justify-content-around">
            <div class="col-3 no-padding">
                <router-link to="/login">
                    <img src="@/assets/black-bg.jpg" style="width: 100%; height: 100vh;">
                </router-link>
                    
                    <div class="buyer-text"><strong>I am a</strong></div>
                    <div class="buyer-text2"><strong>BUYER</strong></div>
                
            </div>

            <div class="col-6">

                <img src="@/assets/wood-bg.jpg" style="width: 100%; height: 100vh;" >

                <div class="logo"> 
                    <img class="resize" src="@/assets/grow-opg-logo.png">
                </div>

                <div class="desc"> 
                   <strong>Welcome to GrowOPG</strong>
                </div>

                <div class="desc2">
                    Who are we? Who is a buyer? itd itd itd itd itd itd tiriirt titiit tititi
                </div>
            </div>

            <div class="col-3">
                <router-link to="/login">
                    <img src="@/assets/grey-bg.jpg" style="width: 100%; height: 100vh;">
                </router-link>
                                   
                <div class="seller-text"><strong>I am a</strong></div>
                <div class="seller-text2"><strong>SELLER</strong></div>


            </div>
        </div>       
    </div>
</template>

<style scoped>
.container { /*so that theres no margin on the right*/
    margin-right: 0;
}
.dropdown-divider {
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 2px solid white;
}
.buyer-text { /* */
    position: absolute;
    top: 45%;
    left: 32%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    color: white;
}
.buyer-text2 { /* */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 70px;
    color: white;
}
.logo { /* */
    position: absolute;
    top: 20%;
    left: 41%;
    /* transform: translate(-50%, -50%); */
}
img.resize { /*needed to resize logo*/
    width: 30%;
    height: 30%;
}
.desc { /* */
    position: absolute;
    top: 35%;
    left: 15%;
    right: 15%;
    /* transform: translate(-50%, -50%); */
    text-align: center;    
    font-size: 35px;
    color: white;
}
.desc2 { /* */
    position: absolute;
    top: 45%;
    left: 10%;
    right: 10%;
    /* transform: translate(-50%, -50%); */
    text-align: justify;
    text-align: center;
    font-size: 25px;
    color: white;
}
.seller-text { /* */
    position: absolute;
    top: 45%;
    left: 32%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    color: #2D2D2D;
}
.seller-text2 { /* */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 70px;
    color: #2D2D2D;
}
.no-padding { /*no padding on the column/row -- found on stack-overflow*/
    padding-left: 0;
    padding-right: 0;
}
.row.no-gutter { /*no margin on the column/row -- found on stack-overflow*/
    margin-left: 0;
    margin-right: 0;
}
</style>

<script>


</script>
