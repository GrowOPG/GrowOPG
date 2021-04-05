<template>
 <div class=bg> 
    <div class="container-fluid">
      <MainHeader />
      <img :src="require('@/assets/back.svg')" class="backButton" @click="backToMain()">
      <div class="row gutters-sm">
        <div class="col-md-1"/>
        <div class="col-md-3 d-none d-md-block">
          <div class="card">
            <div class="card-body">
              <nav class="nav flex-column nav-pills nav-gap-y-1">
                <a href="#profile" data-toggle="tab" class="nav-item nav-link has-icon nav-link-faded active">
                  Personal Information
                </a>
                <a href="#account" data-toggle="tab" class="nav-item nav-link has-icon nav-link-faded">
                  Delete Account
                </a>
                <a href="#security" data-toggle="tab" class="nav-item nav-link has-icon nav-link-faded">
                  Security
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card">
            <div class="card-header border-bottom mb-3 d-flex d-md-none">
              <ul class="nav nav-tabs card-header-tabs nav-gap-x-1" role="tablist">
                <li class="nav-item">
                  <a href="#profile" data-toggle="tab" class="nav-link has-icon active"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>
                </li>
                <li class="nav-item">
                  <a href="#account" data-toggle="tab" class="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></a>
                </li>
                <li class="nav-item">
                  <a href="#security" data-toggle="tab" class="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></a>
                </li>
              </ul>
            </div>
            <div class="card-body tab-content">
              <div class="tab-pane active" id="profile">
                <h6>CHANGE YOUR PERSONAL INFORMATION</h6>
                <hr>
                <form>
                  <div class="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="text" v-model="fullname" class="form-control" id="fullName" aria-describedby="fullNameHelp" required placeholder="eg. John Doe">
                    <!-- <div class="form-group small text-muted">Current: {{oldname}}</div> -->
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                      <input 
                                 type="email" 
                                 v-model="email" 
                                 class="form-control" 
                                 id="mail" 
                                 required 
                                 aria-describedby="emailHelp"
                                 placeholder="eg. tommylee@gmail.com" />
                      <!-- <div class="form-group small text-muted">Current: {{oldmail}}</div> -->
                  </div>
                  <div class="form-group">
                    <label for="location">Adress</label>
                    <input type="text" v-model="adress" class="form-control" id="adress" required placeholder="eg. Jeretova 46">
                    <!-- <div class="form-group small text-muted">Current: {{oldadress}}</div> -->
                  </div>
                  <div class="form-group">
                    <label for="location">City</label>
                    <input type="text" v-model="city" class="form-control" id="city" required placeholder="eg. Pula">
                    <!-- <div class="form-group small text-muted">Current: {{oldcity}}</div> -->
                  </div>
                  <div class="form-group">
                    <label for="location">Zip Code</label>
                    <input type="text" v-model="zip" class="form-control" id="zip" required placeholder="eg. 52100">
                    <!-- <div class="form-group small text-muted">Current: {{oldzip}}</div> -->
                  </div>
                  <div class="form-group">
                   <label for="DoB" class="input">Date of birth</label>
                   <input type="date" v-model="DoB" class="form-control" placeholder="mm-dd-yyyy" id="DoB" />
                   <!-- <div class="form-group small text-muted">Current: {{oldDoB}}</div> -->
                  </div>
                  <!-- <div class="form-group small text-muted"></div> -->
                  <button type="button" class="btn btn-primary" @click="saveNewUserInfo()">Update Profile</button>
                  <button type="reset" class="btn btn-light" @click="resetUserInfo()">Reset Changes</button>
                </form>
              </div>
              <div class="tab-pane" id="account">
                <h6>ACCOUNT DELETION</h6>
                <form>
                  <hr>
                  <div class="form-group">
                    <label class="d-block text-danger">Deleting Account:</label>
                    <p class="text-muted font-size-sm">Once you delete your account, there is no going back. Please be certain before clicking the button.</p>
                  </div>
                  <br>
                  <button class="btn btn-danger" type="button" @click="deleteUser()" >Delete Account</button>
                </form>
              </div>
              <div class="tab-pane" id="security">
                <h6>CHANGE PASSWORD</h6>
                <hr>
                <form>
                  <div class="form-group">
                    <!-- <label class="d-block text-danger">Change Password</label> -->
                    <label for="password">Old password</label>
                    <input type="password" v-model="password" class="form-control mt-1" id="password" required placeholder="Enter your old password">
                  </div>
                  <div class="form-group">
                    <label for="password">NEW password</label>
                    <input type="password" v-model="newpassword" class="form-control mt-1" id="newpassword" required placeholder="New password" />
                    <div v-if="newpassword.length < 6" class="text-danger">Your password must be at least 6 characters long.</div>
                  </div>
                  <div class="form-group">
                    <input type="password" v-model="newpasswordrepeat" class="form-control mt-1" id="newpasswordrepeat" required placeholder="Confirm new password">
                    <div v-if="newpassword != newpasswordrepeat" class="text-danger">Passwords don't match!</div>
                  </div>
                   <div class="form-group small text-muted">By clicking on update password, your profile will be updated with a newly entered password.</div>
                    <button type="button" class="btn btn-primary" @click="changeUserPass()">Change Password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
 </div>
  
    
</template>

<style scoped>
body{
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

.nav-link {
    color: #4a5568;
}

.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background: rgb(18,18,18,0.05);
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
    margin-top: 48px;
}
.backButton{
    width: 30px;
}
.btn.btn-primary{
   background-color: #556b2f;
   border-color: #2D2D2D;
   margin-right: 5px;
}

.btn-light {
  border-color: #2D2D2D;
}
.nav-link.active{
  background-color:#2D2D2D
}
/* @import "/common.css";
@import "/rotate.css"; */
</style>

<script>
import MainHeader from '../components/Main-Header';
import Footer from '../components/Footer';
import store from '@/store';
import firebase from '@/firebase';

// import Vodal from 'vodal';

// Vue.component(Vodal.name, Vodal);

var userUID = firebase.auth().currentUser.uid;
var docRef = firebase.firestore().collection('USERS').doc(userUID);

var getOptions = {
    source: 'default'
};

export default {
   name: 'settings-page',
   components: {
        MainHeader,
        Footer
   },
   data() {
       return {
           fullname: '',
           password: '',
           passwordrepeat: '',
           email:'',
           DoB: '',
           adress: '',
           city:'',
           zip:'',
           oldname: '',
           oldpassword: '',
           oldmail: '',
           oldadress: '',
           oldcity: '',
           oldzip: '',
           oldDoB: '',
           tempfullname: '',
           tempemail:'',
           tempadress:'',
           tempcity:'',
           tempzip:'',
           tempDoB:'',
           newpassword: '',
           newpasswordrepeat:''
       }
   },
  //  computed:{
  //    isDisabled

  //  },
   methods: {
     gibOldUserInfo(){ //vraca na stranicu user info unesen pri registraciji
        
      docRef.get(getOptions).then((doc) => { //fcija za citanje iz dokumenta iz db
        //console.log(doc.data().FullName) //ovako citamo data iz FS doc-a
          this.oldname = doc.data().FullName;
          this.oldmail = doc.data().Email;
          this.oldadress = doc.data().Address;
          this.oldcity = doc.data().City;
          this.oldzip = doc.data().ZipCode;
          this.oldDoB = doc.data().DateOfBirth;
          this.oldpassword = doc.data().Pass;
      }).catch((error) => {
          console.log("Error getting cached document:", error);
      });
    },
    gibCurrentUserInfo(){ //vraca na stranicu user info iz Firebasea i sprema u current polja
        
      docRef.get(getOptions).then((doc) => { //fcija za citanje iz dokumenta iz db
        //console.log(doc.data().FullName) //ovako citamo data iz FS doc-a
          this.fullname = doc.data().FullName;
          this.email = doc.data().Email;
          this.adress = doc.data().Address;
          this.city = doc.data().City;
          this.zip = doc.data().ZipCode;
          this.DoB = doc.data().DateOfBirth;
      }).catch((error) => {
          console.log("Error getting cached document:", error);
      });
    },
    gibTempUserInfo(){
      this.fullname =  this.tempfullname;
      this.email = this.tempemail;
      this.adress = this.tempadress;
      this.city = this.tempcity;
      this.zip = this.tempzip;
      this.DoB = this.tempDoB;
    },
    storeOldInfo(){ //sprema prvotni user info
      this.tempfullname = this.oldname;
      this.tempemail = this.oldmail;
      this.tempadress = this.oldadress;
      this.tempcity = this.oldcity;
      this.tempzip = this.oldzip;
      this.tempDoB = this.oldDoB;
      //alert(this.tempfullname);
    },
      saveInfo(){ //sprema novi info u Firestore
        
        docRef.set({ //radi
          FullName : this.fullname,
          Email : this.email,
          Address : this.adress,
          City : this.city,
          ZipCode : this.zip,
          DateOfBirth : this.DoB
          
        },{merge:true})
        .then(() =>{
          console.log("User information updated")
        })
        .catch((error) =>{
          console.log("Error in updating information")
        })

      },
      resetUserInfo(){ //resetira user info na onaj unesen prije promjena
        this.storeOldInfo();
        // alert(this.tempfullname);
        docRef.set({ //radi
          FullName : this.tempfullname,
          Email : this.tempemail,
          Address : this.tempadress,
          City :  this.tempcity,
          ZipCode : this.tempzip,
          DateOfBirth : this.tempDoB
          },{merge:true})
        .then(() =>{
          console.log("User information reset");
          this.gibCurrentUserInfo();
        })
        .catch((error) =>{
          console.log("Error in updating information")
        })
      },
      saveNewUserInfo(){//koristimo .set za updateat info, provjerava koja je polja user ispunio, poziva funkciju da spremi novi unesen info
        
          if (this.fullname == ''){
            this.fullname = this.oldname;
          };
          if (this.email== ''){
            this.email = this.oldmail;
            // alert(this.fullname);
          };
          if (this.adress==''){
            this.adress =  this.oldadress;
          };
          if (this.zip==''){
            this.zip =  this.oldzip;
          };
          if (this.city==''){
            this.city =  this.oldcity;
          };
          if (this.DoB ==''){
            this.DoB =  this.oldDoB;

        };
        this.saveInfo();
        const user = firebase.auth().currentUser;

        user.updateEmail(this.email).then(()=>{
          docRef.set({
            Email : this.email
          }, { merge: true })
          .then(() =>{
            const self = this;
            store.currentUser = this.email;
          // self.$router.push({name: 'Login'});
          })
          .catch((error) =>{
            console.log("Error in saving new mail")
          });
          alert("Mail changed");
          
        })
        .catch((error)=> {
          console.log("Error in changing password");
        });

        alert(`Settings for ${this.email} have been updated!`)
      },
      deleteUser(){
        const user = firebase.auth().currentUser;
        const self = this;
        user.delete()
        .then(() => {
           console.log("Successfully deleted user")
           self.$router.push({name: 'Home'});
        })
        .catch(function(error){
          console.error('Došlo je do greške', error);
        })
      },
      saveNewPass(){
        // docRef.set({
        //   Pass : this.newpassword
        // }, { merge: true })
        // .then(() =>{
        //   const self = this;
        //   // alert("aaaaaaa")
        //   self.$router.push({name: 'Login'});
        // })
        // .catch((error) =>{
        //   console.log("Error in saving new pass")
        // })
        
      },
      changeUserPass(){
        const user = firebase.auth().currentUser;
       // alert(this.oldpassword);
        if(this.password == this.oldpassword){
           
          user.updatePassword(this.newpassword).then(()=>{
            docRef.set({
              Pass : this.newpassword
            }, { merge: true })
            .then(() =>{
              const self = this;
            // alert("aaaaaaa")
            self.$router.push({name: 'Login'});
            })
            .catch((error) =>{
              console.log("Error in saving new pass")
            });
            alert("Password changed");
            
          })
          .catch((error)=> {
            console.log("Error in changing password");
          });
        } 
        else{
          alert("Old Password incorrect");
        }
      },
      backToMain() {
             this.$router.push({name: "main-page"})
            // if (store.userType != 'Buyer'){
            //     this.$router.push({name: "main-page"})
            //     // this.$router.replace({name: "main-page-seller"}) 
            // } 
            // else if(store.userType != 'Seller'){
            //     this.$router.push({name: "main-page"})
            //     /*this.$router.replace({name: "main-page-buyer"}) */
            // };
        },

   },
   mounted() {
      this.gibOldUserInfo();
      this.gibCurrentUserInfo();
     
   }
};
</script>