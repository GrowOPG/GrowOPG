<template>
    <div class="bg"> <!--This div should contain our background image and fill the page-->
    <header>

    </header>
        <div class="shadow-box"> <!--Buyer/Seller info and selection-->
            <p> Gang Gang Gang Gang</p>
            <div id="buyer">
                 <button id="button" type="button"><span>I'm a buyer</span></button>
            </div>

            <div id="seller">
                <button id="button" type="button"><span>I'm a seller</span></button>
            </div>

        </div>
    
    </div>
</template>

<style scoped>
    .shadow-box {
        width: 1000px;
        height: 500px;
        position: absolute;

        top: 15%;
        left: 25%;
        
        margin-top: 100px;
        padding: 10px;
        border: 5px solid black;
        border-radius: 15px;
       /* opacity: 30%; */
    }

    #button {
        width: 150px;
        border-radius: 10px;
        padding: 5px;

        background-color: olivedrab;
        color: white;

        font-size: 16px;
        text-align: center;

        transition: all 0.5s;
        cursor: pointer;
    }
    #button:hover {
        background-color: white;
        color: olivedrab;
    }
    #button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }
    #button:hover span {
        padding-right: 25px;
    }
    #button span:after {
        content: '\00bb'; /*Little arrow things!!!*/ 
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }
    #button:hover span:after {
        opacity: 1;
        right: 0;
    }


</style>

<script>


</script>
