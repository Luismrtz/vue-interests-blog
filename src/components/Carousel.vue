<template>
<div class="carouselWrapper">

<div class="max-width-wrapper">

  <h2>View More Blogs</h2>
  <!-- SCSS called from within GLOBAL css (App.vue) -->
      <div class="blog-cards">
              <!-- temporary, will call as component -->
       <BlogCard :post="post" v-for="(post,index) in sampleBlog" :key="index"/>
        
          </div>
</div>
     
  </div>
</template>

<script>
import BlogCard from './BlogCard.vue'
export default {
    name: 'carousel',
    components: {
      BlogCard
    },
      computed : {
    sampleBlog() {
      return this.$store.state.sampleBlogCards.slice(0, 4);
    }
  }


}
</script>

<style lang="scss" scoped>

.carouselWrapper {
    padding: 10rem 2.5rem;
    /* height: 40rem; */
     background-color: var(--light-grey);
   
   .max-width-wrapper {
     margin: 0 auto;
     max-width: 120rem;

     h2 {
       font-size: var(--xxl);
       margin-bottom: 3rem;
     }

    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center;
    justify-content: center; */
    @media (max-width: 800px) {
 
      /* padding: 125px 25px; */
      /* flex-direction: row;
      justify-content: center; */
    }
        //temporary


   }












    
}

</style>


