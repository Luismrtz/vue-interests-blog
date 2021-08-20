<template>
  <div class="banner">

<div class="imgBackdrop"></div>
<div class="contentWrapper">
    <div class="grid">
        <h1 class="bannerText">
            poop poop poop poop
        </h1>
        <!-- <h1 class="emptySpace"> pooop pooop opo poopop</h1> -->
        
    </div>

    <!-- <h1 class="button">
        POOP
    </h1> -->
</div>


    <div class="bannerImgWrapper">
        <!--//? crediting author -->
    <!-- Image by <a href="https://pixabay.com/users/computerizer-4588466/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3617337">Computerizer</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3617337">Pixabay</a> -->
        <img v-if="mobile" src="../assets/scifi-640.jpg" alt="scifi Img">
        <img v-else src="../assets/scifi-1920.jpg" alt="syfy Img">  
    </div>




  </div>
</template>

<script>
export default {
name: "banner",

data() {
    return {
        mobile: null,
        windowWidth: null
    }
},

created() {
 window.addEventListener("resize", this.checkScreen);
this.checkScreen();
},

methods: {
    
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      return;
    },
}

}
</script>

<style lang="scss" scoped>
.banner {


    .imgBackdrop {
    top: 0;
    right:0;
    bottom:0;
    left:0;
    position: absolute;
    background: rgba(9, 9, 10, 0.205);
    width: 100%;
    height: 84rem;
    }
    .bannerImgWrapper {
        /* position: absolute; */
        display: flex;
        flex: 1;
        /* margin-top: 8rem; */
        height: 75rem;
        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

.contentWrapper {
      padding: 0 2.5rem;
    /* overflow: hidden; */
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;

    
   .grid {
        /* position: absolute; */
        z-index: 50;
        display: flex;
        flex-direction: row;
        /* justify-content: flex-start; */
        width: 100%;
        height: 40vh;
    max-width: 120rem;
     margin: 15rem auto;
        
        .bannerText {
            flex: 1;
     
        }
        .emptySpace {
            /* text-align: end;
            justify-items: flex-end;
            align-items: flex-end;
            align-content: flex-end; */
            flex: 1;
        }
    }

    /* .button {
        
        text-align: center;
  

    } */
}
 
}
    
</style>