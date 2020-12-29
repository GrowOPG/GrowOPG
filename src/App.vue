<template>
    <router-view/>
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
