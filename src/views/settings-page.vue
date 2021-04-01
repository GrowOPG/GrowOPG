<template>
 <div class=bg> 
    <div class="container-fluid">
      <MainHeader />
      <div class="row gutters-sm">
        <div class="col-md-1"/>
        <div class="col-md-3 d-none d-md-block">
          <div class="card">
            <div class="card-body">
              <nav class="nav flex-column nav-pills nav-gap-y-1">
                <a href="#profile" data-toggle="tab" class="nav-item nav-link has-icon nav-link-faded active">
                  Profile Information
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
                <h6>YOUR PROFILE INFORMATION</h6>
                <hr>
                <form>
                  <div class="form-group">
                    <label for="fullName">Full Name</label>
                      <div class="form-group small text-muted">Current: {{oldname}}
                        </div>
                    <input type="text" class="form-control" id="fullName" aria-describedby="fullNameHelp" required placeholder="eg. John Doe">
                  </div>
                  <div class="form-group">
                    <label for="location">Adress</label>
                      <div class="form-group small text-muted">Current: {{oldadress}}</div>
                    <input type="text" class="form-control" id="adress" required placeholder="eg. Jeretova 46">
                  </div>
                  <div class="form-group">
                    <label for="location">City</label>
                      <div class="form-group small text-muted">Current: {{oldcity}}</div>
                    <input type="text" class="form-control" id="city" required placeholder="eg. Pula">
                  </div>
                  <div class="form-group">
                    <label for="location">Zip Code</label>
                      <div class="form-group small text-muted">Current: {{oldzip}}</div>
                    <input type="text" class="form-control" id="zip" required placeholder="eg. 52100">
                  </div>
                  <div class="form-group">
                   <label for="DoB" class="input">Date of birth</label>
                    <div class="form-group small text-muted">Current: {{oldDoB}}</div>
                   <input type="date" v-model="DoB" class="form-control" placeholder="mm-dd-yyyy" id="DoB" />
                  </div>
                  <div class="form-group small text-muted">
                    All of the fields on this page are optional and can be deleted at any time, and by filling them out, you're giving us consent to share this data wherever your user profile appears.
                  </div>
                  <button type="button" class="btn btn-primary">Update Profile</button>
                  <button type="reset" class="btn btn-light">Reset Changes</button>
                </form>
              </div>
              <div class="tab-pane" id="account">
                <h6>DELETE ACCOUNT</h6>
                <form>
                  <hr>
                  <div class="form-group">
                    <label class="d-block text-danger">Delete Account</label>
                    <p class="text-muted font-size-sm">Once you delete your account, there is no going back. Please be certain.</p>
                  </div>
                  <button class="btn btn-danger" type="button">Delete Account</button>
                </form>
              </div>
              <div class="tab-pane" id="security">
                <h6>CHANGE PASSWORD</h6>
                <hr>
                <form>
                  <div class="form-group">
                    <!-- <label class="d-block text-danger">Change Password</label> -->
                    <input type="password" class="form-control" required placeholder="Enter your old password">
                    <br> 
                    <input type="password" v-model="password" class="form-control mt-1" id="password" required placeholder="New password" />
                    <div v-if="password.length < 6" class="text-danger">Your password must be at least 6 characters long.</div>
                    <br>
                    <input type="password" v-model="passwordrepeat" class="form-control mt-1" id="repeatpassword" required placeholder="Confirm new password">
                    <div v-if="password != passwordrepeat" class="text-danger">Passwords don't match!</div>
                  </div>
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
}
</style>

<script>
import MainHeader from '../components/Main-Header';
import Footer from '../components/Footer';
import store from '@/store';
import firebase from '@/firebase';

var userUID = firebase.auth().currentUser.uid;
var docRef = firebase.firestore().collection('USERS').doc(userUID)

// class User{
//   constructor(fullname,email,address,city,zip,DoB){
//     this.fullname = fullname;
//     this.email = email;
//     this.address = address;
//     this.city = city;
//     this.zip = zip;
//     this.DoB = DoB;
//     }
// };
// let punoime ;

var getOptions = {
    source: 'default'
};
//fcija koja vraca current user info
// function gibCurrentUserInfo(){
//   docRef.get(getOptions).then((doc) => { //fcija za citanje iz dokumenta iz db
      
//       //console.log(doc.data().FullName) //ovako citamo data iz FS doc-a
//       punoime = doc.data().FullName;
//       return alert(punoime); //ovdje dobro vraca
//   }).catch((error) => {
//       console.log("Error getting cached document:", error);
//   });
// }

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
           DoB: '',
           adress: '',
           oldname: '',
           oldadress: '',
           oldcity: '',
           oldzip: '',
           oldDoB: '',
       }
   },
   methods: {
     gibCurrentUserInfo(){
        
      docRef.get(getOptions).then((doc) => { //fcija za citanje iz dokumenta iz db
        //console.log(doc.data().FullName) //ovako citamo data iz FS doc-a
          this.oldname = doc.data().FullName;
          this.oldadress = doc.data().Address;
          this.oldcity = doc.data().City;
          this.oldzip = doc.data().ZipCode;
          this.oldDoB = doc.data().DateOfBirth;
      }).catch((error) => {
          console.log("Error getting cached document:", error);
      });
      }

   },
   mounted() {
      this.gibCurrentUserInfo();
     
   }
};
</script>