<template>

<div class="category-filter">
    <img class="resize" :src="image">
    <span class="caption">Cheese</span>
</div>
    
</template>

<script>

export default {
  name: 'Category-Filter',
  props: ['image']
}
</script>

<style scoped lang="scss">

.category-filter {
    vertical-align: top;
    display: inline-block;
    text-align: center;
    margin-right: 3%;
}

.caption {
    display: block;
    margin-top: 2px;
    font-weight: bold;
}

</style>