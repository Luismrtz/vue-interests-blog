<template>
<div class="carouselWrapper">

 <!-- SCSS called from within GLOBAL css (App.vue) -->
        <div class="blog-cards">
            <!-- temporary, will call as component -->
            <div class="blog"></div>
            <div class="blog"></div>
            <div class="blog"></div>
            <div class="blog"></div>
        </div>
     
  </div>
</template>

<script>
export default {
    name: 'carousel',


}
</script>

<style lang="scss" scoped>

.carouselWrapper {
    padding: 10rem 2.5rem;
    /* height: 40rem; */
   
    /* display: flex; */
    /* flex-direction: column; */
    background-color: rgb(148, 148, 148);
    /* align-items: center;
    justify-content: center; */
    @media (max-width: 800px) {
      //! flex left to right when ABOVE 799px
      /* padding: 125px 25px; */
      /* flex-direction: row;
      justify-content: center; */
    }
        //temporary

    
}

</style>


