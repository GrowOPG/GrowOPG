<template>
    <div class="container-fluid ">
    <div class="row no-padding no-gutter">
        <div class="header text-left col-6">
            <div class="header-n-logo">
                <strong>GrowOPG</strong>
                <img class="resize" alt="logo" src="@/assets/logo.png">
            </div>
        </div>
        <div class="col-3" />
        <div class="header-small text-right col-3">
            <form class="d-flex ">
                <input v-model="store.searchTerm" class="button form-control me-2" type="search" placeholder="Search">
                <div class="dropdown">
                    <img class="resized" alt="user-settings" @click="showdrop()" src="@/assets/user.png">
                    <div class="dropdown-content">
                        <div class="user text-left">
                            {{email}}<br>
                            Seller/Buyer
                        </div>

                        <div class="dropdown-divider"></div>

                        <div class="options">
                            <button type="button" class="ButtonItem" @click="changeUserSettings"><span class="BtnTxt">User settings</span></button>
                            <br>
                            <div class="dropdown-divider2"></div>
                            <button type="button" class="ButtonItem" @click="logout"><span class="BtnTxt">Log out</span></button>
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
.no-padding { /*no padding on the column/row -- found on stack-overflow*/
    padding-left: 0;
    padding-right: 0;
}
.row.no-gutter { /*no margin on the column/row -- found on stack-overflow*/
    margin-left: 0;
    margin-right: 0;
}
.header-small {
    text-align: right;
    text-decoration: none;
    margin-top: auto;
}
.d-flex {
    float: right;
}
.dropdown-divider {
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 2px solid #2D2D2D;
}
.dropdown-divider2 {
    height: 0;
    margin: .5rem 0;
    margin-left: 5%;
    width: 260px;
    overflow: hidden;
    border-top: 1px solid #556b2f;
}
.header-n-logo {
    position: inherit;
    // text-align: center;    
    font-size: 50px;
    color:black;    
}

.ButtonItem {
    max-width: inherit;
    width: 200px;
    float: left;
    // margin-left: 8%;
    background-color: transparent;
    border: none;
}
.BtnTxt {
    float:left;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
    right: 0;
    // margin-top: 20px;
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
    width: 300px;
    height: 100px;
    margin-top: 5px;
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
import store from '@/store';
import firebase from '@/firebase'
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
  data(){
      return{
        store,
        email:null
     }
  },
//   computed: {
//       filtriranaKomponenta(){
//           let termin = this.store.searchTerm;
//           let newKomp = [] //recimo da je array producta

//           for (let product of this.komponenta koju cemo izbuildat) {
//               if (product.description.indexOf(termin) >= 0){
//                   newKomp.push(product);
//               }
//           }
//       }
//   },
//Sluzi za search producta
  methods: {
      logout() {
        firebase
            .auth()
            .signOut()
            .then(() => {
                console.log("user " + this.email + " signed out");
                store.userType=null;
                this.$router.push({name: 'Successfuly-signed-out'}) //need to add replace umjesto push before predaja profu
            });
      },
      changeUserSettings() {
          this.$router.push({name: 'settings-page'})
      }
  },
  created(){
      var user = firebase.auth().currentUser;
      this.email = user.email;
  }
}
</script>