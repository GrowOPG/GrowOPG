<template>
    <div class="container-fluid ">
    <div class="row no-padding no-gutter">

        <div class="header text-left col-6">
            <div class="header-n-logo">
                <strong><router-link to="/main-page">GrowOPG</router-link></strong>
                <router-link to="/main-page"><img class="resize" alt="logo" src="@/assets/logo.png"></router-link>
            </div>
        </div>

        <div class="col-3" />

        <div class="header-small text-right col-3">
            <form class="d-flex ">
                <input v-model="store.searchTerm"  class="button form-control me-2" type="search" placeholder="Search"/>
                <button type="button" class="button" @click="searchFn()" >Search!</button>
                <div class="dropdown">
                    <img class="resized" alt="user-settings" @click="showdrop()" src="@/assets/user.png">
                    <div class="dropdown-content">
                        <div class="user text-left">
                            {{ store.currentUser }}<br>
                            {{ store.userType }}
                        </div>

                        <div class="dropdown-divider"></div>

                        <div class="options">
                            <button type="button" class="ButtonItem" @click="toUserSettings"><span class="BtnTxt">User settings</span></button>
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

a {
    color: black;
}

a:hover {
    text-decoration: none;
    color: black;
}

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
import { firebase } from '@/firebase';

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function showdrop() {
//   document.getElementsByClassName("dropdown-content").classList.toggle("show");
// }
// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.resized')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

export default {
    name: 'MainHeader',
    data(){
        return{
            store,
            email: null,
            PrSearch: '',
            PrSearchArray: [],
        }
    },
    mounted() {
        this.getSearcheablePr();
    },
    methods: {
        getSearcheablePr() {
            firebase.firestore() // we get all of our products from firestore
            .collection('PRODUCTS')
            .get()
            .then((query) => {
                query.forEach((doc) => {

                    const data = doc.data();
                    
                    this.PrName = data.Name;
                    this.PrDesc = data.Description;
                    this.PrOwner = data.Owner;

                    this.PrSearchArray.push({ // now we store all of our products as objects in out productsSearch[] array
                        PrName: data.Name,
                        PrDesc: data.Description,
                        PrOwner: data.Owner,
                    })
                });
            });
        },
        searchFn() { //Sluzi za search producta
            let inputSearch = this.store.searchTerm;
            // now we convert the searchTerm to lowercase so it's the same if someone searches for 'Product' or 'product'
            var PrSearch = inputSearch.toLowerCase();
            let PrSearchArray = []; //array used to store all our products
            console.log('Search array len', this.PrSearchArray.length);
            console.log('Search array', this.PrSearchArray);
            
            // let's now loop through the array
            for (let i = 0; i < this.PrSearchArray.length; i++) {
                // need to find a way to access the object within the array
                let loopPr = this.PrSearchArray[i];
                // we now set all the attributes to lowercase since the search term  is in lowercase
                let prname = loopPr.PrName.toLowerCase();
                
                let prdesc = loopPr.PrDesc.toLowerCase();
                let prowner = loopPr.PrOwner.toLowerCase();
                // onto the search itself
                // if any of the three parameters are true we go on
                if (PrSearch == prname || PrSearch == prdesc || PrSearch == prowner ) {
                // the idea now, is to check and then list out all the products that are actually searched for by desired parameters
                    if (PrSearch == prname) console.log(i, PrSearch, "=", prname);
                    else if (PrSearch == prdesc) console.log(i, PrSearch, "=", prdesc);
                    else if (PrSearch == prowner) console.log(i, PrSearch, "=", prowner);
                    else console.log('Nema proizvoda!')
                }
            }            
        },
        logout() {
            firebase.auth()
            .signOut() 
            .then(() => {
                console.log("user " + this.email + " signed out"); 
                
                store.userType=null; // we set the userType of the current user in store.js to NULL

                this.$router.push({name: 'Successfuly-signed-out'}) //need to add replace umjesto push before predaja profu
            });
            },
            toUserSettings() {
                this.$router.push({name: 'settings-page'})
            },
    },
    created(){
        var user = firebase.auth().currentUser;
        this.email = user.email;
    }
}
</script>