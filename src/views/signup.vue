<template>
<body>
    <div class="signup">
        <div class="container">
            <div class="row">
                    

                    <form id="form">

                        <div class="sgp-form">
                            <label for="fullname">Full name</label>
                            <input type="text" class="form-control" id="fullname" placeholder="eg. Tommy Lee" />
                        </div>

                        <hr class="solid">

                        <div class="sgp-form">
                            <label for="mail"> Email address</label>
                            <input type="email" class="form-control" id="mail" placeholder="eg. tommylee@gmail.com" />
                        </div>

                        <hr class="solid" style="width: 250px;">

                        <div class="sgp-form">
                            <label for="pass">Password</label>
                            <input type="password" class="form-control" id="pass" placeholder="Enter your password" />
                        </div>

                        <hr class="solid">

                        <div class="sgp-form">
                            <label for="rpass">Repeat password</label>
                            <input type="password" class="form-control" id="rpass" placeholder="Retype your password" />
                        </div>

                        <button type="submit" id="submit">Submit</button>
                    </form>
                
            </div>
        </div>
    </div>
</body>
</template>

<style scoped>
    #form {
        width: 200px;
    }
    label {
        float: left;
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
    #submit {
        margin-top: 20px;
        border-radius: 10px;
        width: 200px;
        background-color: olivedrab;
        color: white;
    }
</style>

<script>
export default {
    
}
</script>