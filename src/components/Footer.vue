<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >PINBLOGS</router-link
          >
          <ul>
            <li>
              <!-- <a href="#"><twitter class="svg-icon"/></a> -->
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/luis-martinez-307742bb/"
                ><fa :icon="['fab', 'linkedin']" class="svg-icon"
              /></a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Luismrtz"
                ><fa :icon="['fab', 'github']" class="svg-icon"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link
              @click="scrollToTop"
              class="link"
              :to="{ name: 'Home' }"
              >Home</router-link
            >
            <router-link
              @click="scrollToTop"
              class="link"
              :to="{ name: 'BlogPage' }"
              >Blogs</router-link
            >
            <router-link
              v-if="!user"
              @click="scrollToTop"
              class="link"
              :to="{ name: 'Login' }"
              >Login</router-link
            >
          </ul>
        </div>

        <div class="flex1"></div>
      </div>
    </div>
    <div class="right">
      <p>Copyright {{ new Date().getFullYear() }}. All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "footer-vue",
  components: {},
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
});
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 7rem 5rem 4rem 5rem;
  background-color: var(--dark-grey);

  .right {
    margin-top: 6rem;
    gap: 3.2rem;
    color: var(--secondary-color);
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    @media (min-width: 800px) {
      align-items: center;
      gap: 0;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }

    .left {
      gap: 3.2rem;
      color: var(--secondary-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        position: relative;
        justify-content: space-evenly;
        flex-direction: row;
        width: 100%;
        align-items: initial;
        gap: 0;

        .flex1 {
          flex: 1;
        }
      }
      .header {
        text-align: center;
        font-size: var(--xxl);
        color: var(--secondary-color);
        margin-bottom: 1.6rem;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 1.6rem;
        list-style: none;
        display: flex;
      }
      .col-1,
      .col-2 {
        gap: 3.2rem;
        display: flex;
        align-items: center;

        @media (min-width: 800px) {
          align-items: initial;
          gap: 0;
        }
      }
      .col-1 {
        flex: 1;
        flex-direction: column;
        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;
          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 2.4rem;
              height: auto;
              color: var(--secondary-color);
            }
          }
        }
      }
      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: nowrap;

          @media (min-width: 800px) {
            flex-direction: row;

            .link {
              margin: 0 2rem;
            }
          }
          .link {
            font-size: var(--lg);
            font-weight: 500;
            color: var(--secondary-color);
            text-decoration: none;
          }
        }
      }
    }

    p {
      margin-top: auto;
    }
  }
}
</style>