<template>
  <header>
      <div class="container">
        <div class="title">
           <router-link   class="linkTitle" :to="{ name: 'Home' }"><h2>PinBlogs</h2></router-link>    
        </div>
        <div class="navLinks" v-show="!mobile">
         
            <router-link   class="link" :to="{ name: 'Home' }"><h3>Home</h3></router-link>    
           <router-link   class="link" :to="{ name: 'BlogPage' }"><h3>Blogs</h3></router-link>
    
           <router-link   class="link" :to="{ name: 'Login' }"><h3>Login/Register</h3></router-link>
        </div>
         <fa @click="toggleMobileNav" :icon="['fas','bars']" class="menu-icon"  v-show="mobile"/>
      </div>
      
        <div  @wheel.prevent @touchmove.prevent @scroll.prevent @click.self="toggleMobileNav" v-show="mobileNav" class="backdrop"></div>
        <transition name="mobile-nav"  @wheel.prevent @touchmove.prevent @scroll.prevent>
          <ul  class="mobile-nav" v-show="mobileNav">
            <router-link @click="toggleMobileNav"  class="link mobileLink" :to="{ name: 'Home' }">Home</router-link>
            <router-link  @click="toggleMobileNav" class="link mobileLink" :to="{ name: 'BlogPage' }">Blogs</router-link>
            <router-link  @click="toggleMobileNav" class="link mobileLink" :to="{ name: 'Login' }">Login/Register</router-link>
          <!-- <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link> -->
          </ul>
        </transition>
  </header>
</template>

<script>
export default {
  name: "navigations",
  data() {
    return {
      profileMenu: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
    created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  watch: {

  },


  methods: {

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 0 2.5rem;
  background-color: var(--secondary-color);
  box-shadow: var(--boxShadow);
  z-index: 100;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    margin: auto;
    padding: 3rem 0;




    
    .title {

      font-size: var(--h2);

      
        .linkTitle {
          transition: all .2s ease; cursor: pointer;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--black-color);

        }
    }

    .navLinks {
      display: flex;
     font-size: var(--h3);
        gap: 3.5rem;
      /* > h3 {
        
      } */
    }
  }


    .menu-icon {
    cursor: pointer;

    /* position: absolute; */
    /* top: 32px;
    right: 25px; */
    height: 2.5rem;
    width: auto;
  }

  .backdrop {
    top: 0;
    right:0;
    bottom:0;
    left:0;
    position: fixed;
    background: var(--back-drop);
    width: 100%;
    height: 100%;
}

    .mobile-nav {
    padding: 2rem;
    width: 70%;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: var(--dark-grey);
    top: 0;
    left: 0;

    font-size: var(--sm);
    .link {
      padding: 1.5rem 0;
      color: var(--secondary-color);
    }
    .mobileLink {
      
    }
  }

//vue based entering/leaving  "-active && -leave-active" are built in vue properties
     .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: all 1s ease;
    }

        // when transition starts, its starts at -250px
    .mobile-nav-enter-from {
        transform: translateX(-25rem) ;
    }
    // then it transforms/translates to 0  ("enter to") is a vue property
    .mobile-nav-enter-to {
        transform: translateX(0);
    }
    // translates to -250 on leave ("-leave-to") is also a vue property
    .mobile-nav-leave-to {
        transform: translateX(-25rem);
    }
}
</style>