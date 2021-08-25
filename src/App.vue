<template>
  <div class="app">
    <Navigation v-if="!navi" />
    <router-view />
    <Footer v-if="!navi" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "app",
  components: { Navigation, Footer },
  data() {
    return {
      navi: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
        // console.log(this.$store.state.profileEmail);
      }
      this.alreadyLoggedIn(user);
    });
    this.checkRoute();
  },
  mounted() {},
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "Register" ||
        this.$route.name === "ForgotPassword"
      ) {
        this.navi = true;
        return;
      }
      this.navi = false;
    },

    alreadyLoggedIn(user) {
      if (
        user &&
        (this.$route.name === "Login" ||
          this.$route.name === "Register" ||
          this.$route.name === "ForgotPassword")
      ) {
        this.$router.push({ name: "Home" });
        // return;
      }
    },
  },
  watch: {
    $route() {
      this.checkRoute();
      this.alreadyLoggedIn();
    },
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
  --secondary-color: #fff;
  --black-color: rgb(17, 17, 17);
  --light-grey: rgb(224, 224, 224);
  --color-change: #d96767;

  --dark-grey: #303030;

  --boxShadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  --back-drop: rgba(0, 0, 0, 0.5);
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

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}

.textDecorationNone {
  text-decoration: none;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease all;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;

  padding: 1.6rem 1.8rem;

  background-color: transparent;
  border: 3px solid;

  text-transform: uppercase;
  &:focus {
    outline: none;
  }
}

.link {
  transition: all 0.2s ease;
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
  transition: 0.3s ease all;
  cursor: pointer;
  color: var(--primary-color);
  background-color: var(--secondary-color);
  font-size: var(--md);
  font-weight: bold;

  padding: 1rem 1.7rem;

  border-radius: 1.5rem;
  border: 2px solid var(--primary-color);

  text-transform: uppercase;
  &:focus {
    outline: none;
  }

  &:hover {
    border: 2px solid var(--color-change);
    color: var(--color-change);

    transform: translateY(-3px);
    box-shadow: var(--boxShadow);
  }

  &:active {
    transform: translateY(-1px);
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
}
</style>
