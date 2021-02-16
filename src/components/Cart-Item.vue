<template>
    <div class="CartItem">
        <div class="Image">
        PIC
        </div>

        <img class="resize" :src="prod.img">
        <span class="caption">{{ prod.caption }}</span>
    </div>
</template>

<style>
.CartItem {
    height: 100px;
    margin-top: 20px;
    border: 3px solid #2d2d2d;
    border-left: 0;
}
.caption {
    display: inline-block;
    margin-top: 2px;
    font-weight: bold;
}
</style>

<script>
export default {
    name: "CartItem",
    props: ['CartItem'],
    components: {
    }
}
</script>