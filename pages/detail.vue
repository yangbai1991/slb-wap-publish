<template>
  <section class="container">
    <GoodsDetail />
  </section>
</template>

<script>
  import GoodsDetail from '~/components/GoodsDetail';

  export default {
    name: 'DetailPage',
    data () {
      return {};
    },
    components: { GoodsDetail }
  };
</script>

<style scoped>

</style>
