<template>

<div class="app">
    <Navigation v-if="!navi"/>
  <router-view/>
  <Footer v-if="!navi"/>
</div>

</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
  name: "app",
  components: { Navigation, Footer},
  data() {
    return {
      navi: null
    }
  },
  created() {
    this.checkRoute();
  },
    // mounted() {},
  methods: {

    checkRoute() {
      if (this.$route.name ==='Login' || this.$route.name === "Register" || this.$route.name === "ForgotPassword") {
        this.navi = true;
        return;
  
      }
      this.navi = false;
    },

    






  },
    watch: {
    $route() {
      this.checkRoute();
    }
  },
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
  //?colors
--primary-color: #365077;
/* --primary-color: #5774a1; */
--secondary-color: #fff;
--black-color:rgb(17, 17, 17);
--light-grey: rgb(224, 224, 224);
--color-change: #D96767;

--dark-grey: #303030;

--boxShadow:  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);


--back-drop: rgba(0,0,0,0.5);
--img-back-drop: rgba(9, 9, 10, 0.37);


//? font sizes
 --xsm: 1rem;
 --sm: 1.2rem;
 --md: 1.5rem;
 --lg: 1.7rem;
 --xl: 2rem;
 --xxl: 2.8rem;

--h1: 3.5rem; 
--h2: 1.8rem;
--h3: 1.2rem;
--h4: 1.1rem;
--h5: 1rem;
--h6: 1rem;
//? 
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
   transition: .2s ease all;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  /* margin-top: 10; */
  /* padding: 1.5rem 2.5rem; */
  /* width: 11rem;
  height: 5rem; */
  padding: 1.6rem 1.8rem;
  /* background-colo; */
  
  /* border-radius: 20px; */
  background-color: transparent;
  border: 3px solid;

  text-transform: uppercase;
  &:focus {
    outline: none;
  }



}


.link {
  transition: all .2s ease;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--black-color);

  &:hover {
    color: var(--primary-color);
  }
}

.form-button {
    display: flex;
  align-items: center;
  justify-content: center;
   transition: .3s ease all;
  cursor: pointer;
  color: var(--primary-color);
  background-color: var(--secondary-color);
  font-size: var(--md);
  font-weight: bold;
  /* margin-top: 10; */
  /* padding: 1.5rem 2.5rem; */
  /* width: 11rem;
  height: 5rem; */
  padding:1rem 1.7rem;
  /* background-colo; */
  
  border-radius: 1.5rem;
  border: 2px solid var(--primary-color);

  text-transform: uppercase;
  &:focus {
    outline: none;

  }



  &:hover {
  border: 2px solid var(--color-change);
  color: var(--color-change);
 
    transform:translateY(-3px);
    box-shadow: var(--boxShadow);
  }

    &:active {
    transform:translateY(-1px);
  }
}




  .blog-cards {
    display: grid;

   
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

         /* .blog {
            width: 100%;
            height: 40rem;
            background-color: #fff;
            border: 2px rgb(23, 55, 85) solid;
  
        } */

 
  }



</style>
