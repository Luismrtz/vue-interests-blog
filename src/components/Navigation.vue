<template>

    <header>
          <div class="container">
            <div class="title">
              <router-link   class="linkTitle" :to="{ name: 'Home' }"><h2>PinBlogs</h2></router-link>    
            </div>
            <div class="navLinks" v-show="!mobile">
            
              <router-link   class="link" :to="{ name: 'Home' }"><h3>Home</h3></router-link>    
              <router-link   class="link" :to="{ name: 'BlogPage' }"><h3>Blogs</h3></router-link>
        
              <router-link  v-if="!user"  class="link" :to="{ name: 'Login' }"><h3>Login/Register</h3></router-link>
                <div v-if="user"  class=" hover-box">
                  <h3 class="link">Sign Out &nbsp;<fa :icon="['fas','arrow-down']"  /></h3>
                  <div class="hover-box-container">
                    <div class="hover-box-wrapper">
                      <router-link class="link" :to="{ name: 'ProfilePage' }">
                      <h3 >Profile</h3>

                      </router-link>
                      <h3  @click="signOutFunc" class="link">Sign Out</h3>
                      <!-- <h3 class="link">AHHHHH 123123123</h3> -->
                      <!-- <h3 class="link">AHHHHH 123123123</h3>
                      <h3 class="link">AHHHHH 123123123</h3> -->

                    </div>
                  </div>
            

                </div>
         
        
            </div>




            <fa @click="toggleMobileNav" :icon="['fas','bars']" class="menu-icon"  v-show="mobile"/>
          </div>

        
          <div  @wheel.prevent @touchmove.prevent @scroll.prevent @click.self="toggleMobileNav" v-show="mobileNav" class="backdrop"></div>
          <transition name="mobile-nav"  @wheel.prevent @touchmove.prevent @scroll.prevent>
            <ul  class="mobile-nav" v-show="mobileNav">
              <router-link @click="toggleMobileNav"  class="link mobileLink" :to="{ name: 'Home' }">Home</router-link>
              <router-link  @click="toggleMobileNav" class="link mobileLink" :to="{ name: 'BlogPage' }">Blogs</router-link>
              <router-link v-if="!user"  @click="toggleMobileNav" class="link mobileLink" :to="{ name: 'Login' }">Login/Register</router-link>
              <router-link v-if="user"  @click="toggleMobileNav" class="link mobileLink" :to="{ name: 'ProfilePage' }">Profile</router-link>
              <router-link v-if="user"  @click="[signOutFunc, toggleMobileNav]" class="link mobileLink sign-out" to="#">Sign Out</router-link>
            <!-- <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link> -->
            </ul>
          </transition>
    </header>
</template>

<script>

import firebase from "firebase/app";
import "firebase/auth";

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

    // this.scrollAnimation();
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

        signOutFunc() {
      firebase.auth().signOut();
      window.location.reload();
    },

  },
    computed: {
        user() {
            return this.$store.state.user;
        }
    }
}
</script>

<style lang="scss" scoped>
header {
  /* position: fixed;
  width: 100%; */
  padding: 0 2.5rem;
  background-color: var(--secondary-color);
  box-shadow: var(--boxShadow);
  z-index: 100;

  .container {
    /* position: fixed; */
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

    .hover-box {
      transition: all .3s ease;
      &:hover > .hover-box-container {
        /* opacity: 1; */
        display: inline-block;


        /* & > h3 {
        border-bottom: 1px solid var(--light-grey);
        } */
      }



      .hover-box-container {
        display: none;
        /* opacity: 0; */
        /* background-color: rgba(94, 182, 68, 0.993); */
        min-width: 8rem;
        height: auto;
        padding-top: 3.7rem;
        position: absolute;
        /* top: 0; */
        .hover-box-wrapper {
          white-space: nowrap;
        
          /* padding: .5rem; */
          background-color: white;
          transition: all .3s ease;
        position: relative;
        /* top: 9rem; */
        min-width: 8rem;
        height: auto;
        border: 1px solid var(--light-grey);
        box-shadow: var(--boxShadow);

        h3 {
          padding: .8rem .9rem;
          &:hover {
            background-color: var(--light-grey);
            color: var(--primary-color);
          }
        }
        
      }
      }
    }


















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


    .sign-out {
      border-top: 1px var(--secondary-color) solid;
    }
    .mobileLink {
            padding: 1.5rem 0;
      color: var(--secondary-color);
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