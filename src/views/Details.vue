<template>
  <div class="detail-container" v-if="currentBlog">
      <div class="detail-wrapper">
          <h4>Date posted: {{this.currentBlog[0].blogDate}}</h4>
          <div class="img-wrapper">
            <img :src="require(`../assets/blogPhotos/${this.currentBlog[0].blogCoverPhoto}.jpg`)" alt="midnightfrog">
          </div>
          <h2>{{this.currentBlog[0].blogTitle}}</h2>
          <div class="detail-description">
                <p class="description-text">
                    {{this.currentBlog[0].bio}}
                </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Details",
  data() {
    return {
      currentBlog: null,
    };
  },

  async mounted() {
    this.currentBlog = await this.$store.state.sampleBlogCards.filter((post) => {
      return post.id === this.$route.params.id;
    });

  },

}
</script>

<style lang="scss" scoped>
  .detail-container {
      background-color: var(--light-grey);
      min-height: 100%;
    /* padding:0  2rem; */
           /* padding: 2rem; */

      .detail-wrapper {
       /* display: flex;
       flex: 1; */
          background-color: var(--secondary-color);
     margin: auto;
     padding:  10rem 2rem 15.5rem;
      max-width: 120rem;

    
       h2{
    margin-bottom: 3rem;
    /* font-weight: 300; */
    font-size: var(--xl);
       }
       
       h4{
    font-weight: 400;
    font-size: var(--md);
    margin-bottom: 2rem;
        }
        .img-wrapper {
            max-width: 70rem;
            height: auto;
            margin-bottom: 2rem;
            img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            
            }
        }


      .detail-description {
              /* padding: 0; */
              .description-text {
                  font-size: var(--lg);
              }
      }
       
      }

      

      
  }


</style>