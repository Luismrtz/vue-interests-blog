<template>
  <header>
      <div class="container">
        <div class="title">
           <router-link   class="link" :to="{ name: 'Home' }"><h2>PinBlogs</h2></router-link>    
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
            <router-link @click="toggleMobileNav"  class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link  @click="toggleMobileNav" class="link" :to="{ name: 'BlogPage' }">Blogs</router-link>
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
  background-color: var(--primary-color);
  z-index: 100;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    margin: auto;
    padding: 3rem 0;
  
    
    .title {
      font-size: 2rem;
    }

    .navLinks {
      display: flex;
     
        gap: 4rem;
      /* > h3 {
        
      } */
    }
  }


    .menu-icon {
    cursor: pointer;

    /* position: absolute; */
    /* top: 32px;
    right: 25px; */
    height: 25px;
    width: auto;
  }

  .backdrop {
    top: 0;
    right:0;
    bottom:0;
    left:0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}

    .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    .link {
      padding: 15px 0;
      color: #fff;
    }
  }

//vue based entering/leaving  "-active && -leave-active" are built in vue properties
     .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: all 1s ease;
    }

        // when transition starts, its starts at -250px
    .mobile-nav-enter-from {
        transform: translateX(-250px) ;
    }
    // then it transforms/translates to 0  ("enter to") is a vue property
    .mobile-nav-enter-to {
        transform: translateX(0);
    }
    // translates to -250 on leave ("-leave-to") is also a vue property
    .mobile-nav-leave-to {

        transform: translateX(-250px);
    }
}
</style>