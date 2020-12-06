<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <!-- <img src="@/assets/logo.png" height="40" class="d-inline-block align-top" alt="" loading="lazy" /> -->
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link> 
          </li>

          <li class="nav-item">
            <router-link to="/Login" class="nav-link">Login</router-link> 
          </li>

          <li class="nav-item">
            <router-link to="/Signup" class="nav-link">Signup</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/Register" class="nav-link">Register</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/Main_page" class="nav-link">Main Page</router-link>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form>
        
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d2d2d;
}

#nav {
  padding: 20px;
  background-color: #2d2d2d;
  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: olivedrab;
    }
  }
}
</style>
