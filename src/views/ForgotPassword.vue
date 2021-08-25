<template>
  <div class="form-background">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <Spinner v-if="loading" />
    <div class="form-backdrop"></div>
    <img v-if="mobile" src="../assets/scifi-640.jpg" alt="scifi Img" />
    <img v-else src="../assets/scifi-1920.jpg" alt="syfy Img" />
    <div class="form-wrapper">
      <form class="login">
        <div class="back-home-wrapper">
          <router-link class="back-home" :to="{ name: 'Home' }"
            ><fa :icon="['fas', 'arrow-left']" class="icon" />&nbsp;&nbsp;
            Home</router-link
          >
        </div>
        <h2>Forgot Password</h2>
        <div class="form-inputs">
          <div class="form-input">
            <input
              type="email"
              placeholder="Email"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='Email'"
            />
            <fa :icon="['fas', 'envelope']" class="icon" />
          </div>
        </div>
        <div class="forgot-wrapper"></div>
        <button @click.prevent="resetPassword" class="form-button">
          Reset
        </button>

        <p class="login-register">
          Dont have an account?
          <router-link class="router-link" :to="{ name: 'Register' }"
            >Register</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import Spinner from "../components/Spinner.vue";
// import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      mobile: null,
      windowWidth: null,
      loading: null,
    };
  },
  components: {
    Modal,
    Spinner,
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
    //? Turned off in the meantime
    resetPassword() {
      // this.loading = true;
      // firebase.auth().sendPasswordResetEmail(this.email).then(() => {
      this.modalMessage = "Temporarily turned off";
      this.loading = false;
      this.modalActive = true;
      // }).catch((err) => {
      //     this.modalMessage = err.message;
      //     this.loading = false;
      //     this.modalActive = true;
      // });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style>
</style>