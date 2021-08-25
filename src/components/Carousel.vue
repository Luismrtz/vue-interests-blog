<template>
  <div class="carouselWrapper">
    <div class="max-width-wrapper">
      <h2>View More Blogs</h2>
      <!-- SCSS called from within GLOBAL css (App.vue) -->
      <div class="blog-cards">
        <BlogCard
          :post="post"
          v-for="(post, index) in sampleBlog2"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "./BlogCard.vue";
export default {
  name: "carousel",
  components: {
    BlogCard,
  },
  computed: {
    sampleBlog2() {
      return this.$store.getters.blogPostHome;
    },
  },
};
</script>

<style lang="scss" scoped>
.carouselWrapper {
  padding: 10rem 2.5rem;
  background-color: var(--light-grey);

  .max-width-wrapper {
    margin: 0 auto;
    max-width: 120rem;

    h2 {
      font-size: var(--xxl);
      margin-bottom: 3rem;
    }
  }
}
</style>


