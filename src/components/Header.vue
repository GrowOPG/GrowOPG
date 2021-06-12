<template>
    <span class="header col-12">
        <div class="header-n-logo">
            <img
              class="logo"
              alt="logo"
              src="@/assets/grow-opg-logo-reworked.png"
            >
        </div>
        <div class="dropdown-divider"></div>
    </span>
</template>

<style lang='scss'>
.header{
    text-align: center;    
    font-size: 50px;
    color:black;
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
  color: black;
}
img.logo {
  max-width: 60%;
  max-height: 40px;
}
</style>

<script>
export default {
  name: 'Header',
}
</script>