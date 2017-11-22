<template>
  <section class="container">
    <UserCenter />
  </section>
</template>

<script>
  import UserCenter from '~/components/UserCenter';

  export default {
    name: 'UserPage',
    data () {
      return {};
    },
    components: { UserCenter }
  };
</script>

<style scoped>

</style>
