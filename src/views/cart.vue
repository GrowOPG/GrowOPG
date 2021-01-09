<template>
    <div class="bg">
        <MainHeader />


        <Footer />
    </div>
</template>

<style scoped>

</style>

<script>
import MainHeader from '@/components/Main-Header.vue';
import Footer from '@/components/Footer.vue';

export default {
   name: 'cart',
   components: {
        MainHeader,
        Footer
   }
};
</script>
