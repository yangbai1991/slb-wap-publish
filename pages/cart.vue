<template>
  <section class="container">
    <ShoppingCart />
  </section>
</template>

<script>
  import ShoppingCart from '~/components/ShoppingCart';

  export default {
    name: 'CartPage',
    data () {
      return {};
    },
    components: { ShoppingCart }
  };
</script>

<style scoped>

</style>
