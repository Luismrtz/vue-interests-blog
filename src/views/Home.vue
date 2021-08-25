<template>
  <Banner/>
  <Display/>
  <Carousel/>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/Banner.vue';
import Display from '../components/Display.vue';
import Carousel from '../components/Carousel.vue';

export default {
  name: 'Home',
  components: {
    Banner, Display, Carousel
  },
      computed: {
      user() {
            return this.$store.state.user;
      }
    }
}
</script>

<style scoped>
  .home {
    height: 200rem;
  }
</style>