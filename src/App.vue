<template>

<div class="app">
  <Navigation/>
  <router-view/>
  <Footer/>
</div>

</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  name: "app",
  components: { Navigation, Footer}
};

</script>



<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}


:root {
--primary-color: #5774a1;
}

.app {
    display: flex;
  flex-direction: column;
  min-height: 100vh;
}


.button {
  display: flex;
  align-items: center;
  justify-content: center;
   transition: 500ms ease all;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  /* margin-top: 10; */
  /* padding: 1.5rem 2.5rem; */
  /* width: 11rem;
  height: 5rem; */
  padding: 2rem 2rem;
  /* background-colo; */
  
  /* border-radius: 20px; */
  border: 3px solid;

  text-transform: uppercase;
  &:focus {
    outline: none;
  }

}

.buttonForm {
    display: flex;
  align-items: center;
  justify-content: center;
   transition: 500ms ease all;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  /* margin-top: 10; */
  /* padding: 1.5rem 2.5rem; */
  /* width: 11rem;
  height: 5rem; */
  padding: 2rem 2rem;
  /* background-colo; */
  
  /* border-radius: 20px; */
  border: 3px solid;

  text-transform: uppercase;
  &:focus {
    outline: none;
  }
}




  .blog-cards {
    display: grid;

    margin: 0 auto;
    max-width: 120rem;
    gap: 4rem;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
      @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }



            .blog {
          
            width: 100%;
            height: 40rem;
            background-color: #fff;
            border: 2px rgb(23, 55, 85) solid;


   
        }
  }



</style>
