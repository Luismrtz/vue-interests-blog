<template>
  <div class="blogsWrapper">
    <div class="max-width-wrapper">
 <!-- SCSS called from within GLOBAL css (App.vue) -->

 <select name="filt" v-model="myChoice" class="filtering">
   <option value="all">All</option>
   <option value="sortOld">Oldest</option>
   <option value="sortNew">Recent</option>
   <option value="pin">Pins</option>
   <option value="hat">Hats</option>
   <option value="jewelry">Jewelry</option>
 </select>
        <div class="blog-cards">
            <!-- temporary, will call as component -->
        <BlogCard :post="post" v-for="(post,index) in sampleBlog" :key="index"/>
        <!-- <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/> -->
        </div>
    </div>

  </div>
</template>

<script>

import BlogCard from './BlogCard.vue';
export default {
  name: "Blogs",
    data() {
    return {
      myChoice: 'all',
 
     
    };
  },
  components: {
    BlogCard
  },
  created() {

},
  computed : {
    sampleBlog() {
      if (this.myChoice === 'pin') {
        return this.$store.state.sampleBlogCards.filter(x => x.type === this.myChoice);
      }
      else if (this.myChoice === 'hat') {
      return this.$store.state.sampleBlogCards.filter(x => x.type === this.myChoice);
      }
      else if (this.myChoice === 'jewelry') {
      return this.$store.state.sampleBlogCards.filter(x => x.type === this.myChoice);
      }
      else if (this.myChoice === 'sortOld') {
      return [...this.$store.state.sampleBlogCards].sort((a, b) => (a.blogDate > b.blogDate) ? 1 : -1 );
      }
      else if (this.myChoice === 'sortNew') {
      return [...this.$store.state.sampleBlogCards].sort((a, b) => (b.blogDate > a.blogDate) ? 1 : -1 );
      }
      else {
         return this.$store.state.sampleBlogCards;
      }

    }
  }

}
</script>

<style lang="scss" scoped>
.blogsWrapper {
  background-color: var(--light-grey);
    padding: 5rem 2.5rem 10rem;

.max-width-wrapper {
    margin: 0 auto;
    max-width: 120rem;

    .filtering {
      margin-bottom: 2rem;
    }
}

}

</style>