<template>
  <div class="blog-wrapper">
    <img
      :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
      alt="midnightfrog"
    />
    <div class="info">
      <div class="text-wrap">
        <h3>{{ post.blogTitle }}</h3>
        <h5>Posted on: {{ post.blogDate }}</h5>
      </div>

      <router-link
        @click="scrollToTop"
        :to="{ name: 'Details', params: { id: this.post.id } }"
        class="link"
      >
        View more &nbsp;&nbsp;
        <fa :icon="['fas', 'arrow-right']" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogCard",
  props: ["post"],

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: var(--secondary-color);
  min-height: 40rem;
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--boxShadow);
  }

  img {
    display: block;
    border-radius: 1rem 1rem 0 0;
    overflow: hidden;
    z-index: 1;
    width: 100%;
    min-height: 20rem;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    padding: 3rem 1.5rem;
    color: var(--black-color);

    h3 {
      padding-bottom: 0.8rem;
      font-size: var(--lg);
      font-weight: bold;
    }

    h5 {
      font-weight: 400;
      font-size: var(--h5);
    }

    .link {
      text-decoration: none;
      display: inline-flex;
      align-items: flex-start;
      font-size: var(--md);
      transition: all 0.4s ease;
      color: var(--black-color);

      &:hover {
        color: var(--color-change);
      }
    }
  }
}
</style>