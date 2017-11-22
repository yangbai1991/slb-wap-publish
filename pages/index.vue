<template>
  <section class="container">
    <van-card
      title="Title"
      desc="Description"
      num="2"
      price="2.00"
      :thumb="imageURL"
    >
      <div slot="footer">
        <van-button size="mini">Button</van-button>
        <van-button size="mini">Button</van-button>
      </div>
    </van-card>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  },
  data () {
    return {
      imageURL: '//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    };
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
