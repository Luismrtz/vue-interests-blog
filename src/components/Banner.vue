<template>
  <div class="banner">
    <div class="imgBackdrop"></div>
    <div class="contentWrapper">
      <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <div class="row">
          <div class="column">
            <h1 class="bannerText">
              Howdy! <span class="colorChange">Welcome</span> to my website!
            </h1>
            <router-link
              class="textDecorationNone"
              v-if="!user"
              :to="{ name: 'Login' }"
            >
              <button class="button">
                Sign up &nbsp;&nbsp;<fa :icon="['fas', 'arrow-right']" />
              </button>
            </router-link>
            <router-link
              class="textDecorationNone"
              v-else
              :to="{ name: 'ProfilePage' }"
            >
              <button class="button">
                Profile &nbsp;&nbsp;<fa :icon="['fas', 'arrow-right']" />
              </button>
            </router-link>
          </div>
        </div>
      </transition>
    </div>

    <div class="bannerImgWrapper">
      <!--//? crediting author -->
      <!-- Image by <a href="https://pixabay.com/users/computerizer-4588466/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3617337">Computerizer</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3617337">Pixabay</a> -->
      <img v-if="mobile" src="../assets/scifi-640.jpg" alt="scifi Img" />
      <img v-else src="../assets/scifi-1920.jpg" alt="syfy Img" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "banner",

  data() {
    return {
      mobile: null,
      windowWidth: null,
    };
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

    beforeEnter(el) {
    //*   console.log("beforeEnter");
      el.style.transform = "translateY(-10rem)";
      el.style.opacity = 0;
    },
    enter(el, done) {
    //*   console.log("starting to enter");
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,

        onComplete: done,
      });
    },
    //* to test life cycles
    // afterEnter() {
    //   console.log("after enter");
    // },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  .imgBackdrop {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    background: var(--img-back-drop);
    width: 100%;
    height: 84rem;
  }
  .bannerImgWrapper {
    display: flex;
    flex: 1;

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
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;

    .row {
      z-index: 50;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 40vh;
      max-width: 120rem;
      margin: 19rem auto 15rem auto;

      @media (max-width: 1200px) {
        margin: 21rem auto 15rem auto;
      }

      .column {
        display: flex;
        flex-direction: column;
        max-width: 35rem;
        gap: 3rem;
        .bannerText {
          text-transform: uppercase;
          font-size: var(--h1);
          color: var(--secondary-color);
          line-height: 4.5rem;
          font-weight: bold;
          /* flex: 1; */

          @media (max-width: 800px) {
            line-height: 4rem;
            font-size: var(--xxl);
          }

          .colorChange {
            color: var(--color-change);
          }
        }

        .button {
          border-color: var(--secondary-color);
          color: var(--secondary-color);
          max-width: 15rem;

          &:hover {
            border-color: var(--color-change);
            color: var(--color-change);
          }
        }
      }
    }
  }
}
</style>