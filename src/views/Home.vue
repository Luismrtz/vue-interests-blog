<template>
  <Banner />
  <Display />
  <Carousel />
</template>

<script>
import Banner from "../components/Banner.vue";
import Display from "../components/Display.vue";
import Carousel from "../components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Display,
    Carousel,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.home {
  height: 200rem;
}
</style>