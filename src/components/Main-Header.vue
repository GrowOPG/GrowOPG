<template>
    <div class="container-fluid">
    <div class="row">
        <div class="header text-left col-6">
            <div class="header-n-logo">
                <strong>GrowOPG</strong>
                <img class="resize" alt="logo" src="@/assets/logo.png">
            </div>
        </div>
        <div class="col-3" />
        <div class="header-small text-right col-3">
            <form class="d-flex">
                <input class="button form-control me-2" type="search" placeholder="Search">
                
                <div class="dropdown">
                    <img class="resized" alt="user-settings" onclick="showdrop()" src="@/assets/user.png">
                    <div class="dropdown-content">
                        <div class="user text-left">
                            Logo here 25x25 | Username + Seller/Buyer<br>
                        </div>

                        <div class="dropdown-divider"></div>

                        <div class="options">
                            <router-link to="/" class="dropdown-item" href="#">User Settings</router-link>
                            <a class="dropdown-item" @click="logout">Log out</a>
                        </div>
                    </div>
                </div>
                <router-link to="/cart"><img class="resized" alt="cart" src="@/assets/cart.png"></router-link>
            </form>
        </div>
       </div> 
    <div class="dropdown-divider"></div>
    </div>
</template>

<style lang='scss'>
.header-small {
    text-align: right;
    text-decoration: none;
}
.dropdown-divider {
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 2px solid #2D2D2D;
}
.header-n-logo {
    position: inherit;
    // text-align: center;    
    font-size: 50px;
    color:black;    
}
.header-small{
    margin-top: auto;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
    right: 0;
    margin-top: 20px;
    display: none;
    position: absolute;
    height: 150px;
    width: 300px;
    border: 2px solid  #2d2d2d;
    border-radius: 15px;
    background-color: white;
    // box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 2;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.show {
    display: block;
}
.user {
    height: 50px;
    margin-top: 5px;
    margin-left: 5px;
}
.options {
    text-align: left;
    height: 50px;
    margin-top: 5px;
    margin-left: -20px;
}

img.resize { /*needed to resize logo*/
    width: 50px;
    height: 50px;
    vertical-align: middle;
    margin-left: 10px;    
}

img.resized { /*resized the user settings and cart icons*/
    width: 40px;
    height: 40px;
    margin-left: 15px
}

.button {
    border-radius: 20px;
    width: 200px;
}
</style>

<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showdrop() {
  document.getElementsByClassName("dropdown-content").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.resized')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
export default {
  name: 'MainHeader',
}
</script>