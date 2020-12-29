<template>
    <div class="bg">
    <Header />


    <Footer />
    </div>
</template>

<style scoped>

</style>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
   name: 'login',
   components: {
       Footer,
       Header
   }
};
</script>
