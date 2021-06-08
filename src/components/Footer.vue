<template>
  <!-- found this footer on Bootstrap -->
  <div class="mt-5 pt-5 pb-2 footer">
    <div class="container-fluid">
      <div class="row">
        <div class="about-company col-lg-5 col-xs-12 text-left">
          <h2>GrowOPG</h2>

          <table class="smlinks m-0 p-0">
            <tr>
              <td>
                <a href="#"
                  ><img alt="tw_logo" src="@/assets/SML/twitter-logo.png"
                /></a>
              </td>
              <td>
                <a href="#"
                  ><img alt="tw_logo" src="@/assets/SML/instagram-logo.png"
                /></a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#"
                  ><img alt="tw_logo" src="@/assets/SML/facebook-logo.png"
                /></a>
              </td>
              <td>
                <a href="https://github.com/GrowOPG/GrowOPG"
                  ><img alt="tw_logo" src="@/assets/SML/gh-logo.png"
                /></a>
              </td>
            </tr>
          </table>
        </div>

        <div class="links col-lg-3 col-xs-12 text-center">
          <!-- <h4 class="mt-lg-0 mt-sm-3">Links</h4>
          <ul class="m-0 p-0">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/signup">Signup</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
            <li>
              <router-link to="/create-new-password"
                >Create New Password</router-link
              >
            </li>
            <li>
              <router-link to="/forgot-password">Forgot Password</router-link>
            </li>
            <li>
              <router-link to="/successful-registration"
                >Successful Registration</router-link
              >
            </li>
            <li>
              <router-link to="/successfuly-signed-out"
                >Successfuly Signed Out</router-link
              >
            </li>
            <li><router-link to="/main-page">Main Page</router-link></li>
            <li><router-link to="/seller-page">Seller Page</router-link></li>
            <li><router-link to="/cart">Cart</router-link></li>
            <li>
              <router-link to="/settings-page">Settings Page</router-link>
            </li>
          </ul> -->
        </div>

        <div class="contact col-lg-4 col-xs-12 text-right">
          <h4 class="mt-lg-0 mt-sm-4">Contact</h4>
          <p><i class="fa fa-phone mr-0">(052) 431-growopg</i></p>
          <p><i class="fa fa-envelope-o mr-0">growopg@gmail.com</i></p>
          <p class="copyright">
            <small class="text-white-50">© 2021. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
li a {
  color: white;
  text-decoration: underline;
}
.footer {
  background: #2d2d2d;
  color: white;
  padding-left: 50px;
  padding-right: 50px;
}
.links {
  ul {
    list-style-type: none;
  }
  li {
    color: white;
    text-decoration: none;
    transition: color 0.2s;
    :hover {
      text-decoration: none;
      color: olivedrab;
    }
  }
}
.about-company {
  i {
    font-size: 25px;
  }
  a {
    color: white;
    transition: color 0.2s;
    &:hover {
      color: white;
    }
  }
}
.contact {
  h4 {
    margin-bottom: 30px;
    margin-top: 0.45rem !important;
  }
  p {
    margin-top: 20px;
    font-size: 20px;
  }
}
p.copyright {
  border-top: 2px solid rgba(255, 255, 255, 0.1);
}
table {
  width: 150px;
  height: 100px;
}
.smlinks {
  td {
    margin-top: 10px;
    margin-left: 5px;
  }
}
</style>

<script>
export default {
  name: "Footer",
};
</script>
