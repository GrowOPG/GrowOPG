<template>
<body>
    <div class="bg">
    <div class="signup">
        <div class="container">
            <div class="row">
                    <form id="form">
                        <div class="sgp-form">
                            <label for="fullname">Full name</label>
                            <input type="text" v-model="fullname" class="form-control" id="fullname" placeholder="eg. Tommy Lee" />
                        </div>

                        <hr class="solid">

                        <div class="sgp-form">
                            <label for="mail"> Email address</label>
                            <input type="email" v-model="mail" class="form-control" id="mail" placeholder="eg. tommylee@gmail.com" />
                        </div>

                        <hr class="solid" style="width: 250px;">

                        <div class="sgp-form">
                            <label for="pass">Password</label>
                            <input type="password" v-model="password" class="form-control" id="pass" placeholder="Enter your password" />
                        </div>

                        <hr class="solid">

                        <div class="sgp-form">
                            <label for="rpass">Repeat password</label>
                            <input type="password" v-model="passwordrepeat" class="form-control" id="repeatPass" placeholder="Retype your password" />
                        </div>

                        <button type="button" @click="register" class="btn btn-primary" id="submit_btn">Submit</button>
                    </form>
            </div>
        </div>
    </div>
    </div>
</body>
</template>

<script>
import firebase from '@/firebase';

export default {
    name: "Register",
    data() {
        return{
            fullname: '',
            mail: '',
            password: '',
            passwordrepeat: '',
        }
    },
    methods: {
        register() {
            firebase.auth()
            .createUserWithEmailAndPassword(this.mail, this.password)
            .then(function() {
                console.log('Uspješna Registracija');
                })
            .catch(function(error) {
                console.error('Došlo je do greške', error);
            })
        }
    }
}
</script>

<style scoped>
    .bg{
        /* background-image: url('@/assets/bckgrnd_image.jpg'); */
        align-content: center;
    }
    #form {
        position: sticky;
        width: 200px;
    }
    label {
        text-align: left;
        margin-top: 10px;
        margin-bottom: 2px;
    }
    hr.solid {
        border-top: 3px solid #2d2d2d;
    }
    #fullname {
        border-radius: 10px;
    }
    #mail {
        width: 250px;
        border-radius: 10px;
    }
    #pass {
        border-radius: 10px;
    }
    #rpass {
        border-radius: 10px;
    }
    #submit_btn {
        margin-top: 20px;
        border-radius: 10px;
        width: 200px;
        background-color: olivedrab;
        color: white;
    }
</style>
