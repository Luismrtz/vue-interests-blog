<template>
  <div class="blogsWrapper">
    <div class="max-width-wrapper">
      <select name="filt" v-model="myChoice" class="filtering">
        <option value="all">All</option>
        <option value="sortOld">Oldest</option>
        <option value="sortNew">Recent</option>
        <option value="surreal">Surreal</option>
        <option value="nature">Nature</option>
        <option value="cafe">Cafe</option>
      </select>
      <div class="blog-cards">
        <transition-group appear @before-enter="beforeEnter" @enter="enter">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlog"
            :data-index="index"
            :key="index"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "./BlogCard.vue";

import gsap from "gsap";

export default {
  name: "Blogs",
  data() {
    return {
      myChoice: "all",
    };
  },
  components: {
    BlogCard,
  },
  created() {},
  computed: {
    sampleBlog() {
      if (this.myChoice === "surreal") {
        return this.$store.state.sampleBlogCards.filter(
          (x) => x.type === this.myChoice
        );
      } else if (this.myChoice === "nature") {
        return this.$store.state.sampleBlogCards.filter(
          (x) => x.type === this.myChoice
        );
      } else if (this.myChoice === "cafe") {
        return this.$store.state.sampleBlogCards.filter(
          (x) => x.type === this.myChoice
        );
      } else if (this.myChoice === "sortOld") {
        return [...this.$store.state.sampleBlogCards].sort((a, b) =>
          a.blogDate > b.blogDate ? 1 : -1
        );
      } else if (this.myChoice === "sortNew") {
        return [...this.$store.state.sampleBlogCards].sort((a, b) =>
          b.blogDate > a.blogDate ? 1 : -1
        );
      } else {
        return this.$store.state.sampleBlogCards;
      }
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "trnaslateY(60px)";
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: el.dataset.index * 0.1,
        onComplete: done,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.blogsWrapper {
  background-color: var(--light-grey);
  padding: 5rem 2.5rem 15rem;

  .max-width-wrapper {
    margin: 0 auto;
    max-width: 120rem;

    .filtering {
      margin-bottom: 2rem;
    }
  }
}
</style>