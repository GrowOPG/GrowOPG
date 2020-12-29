<template>
    <span class="header col-12">
        <strong>GrowOPG</strong>
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
</style>

<script>
export default {
  name: 'Header',
}
</script>