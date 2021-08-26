<template>
  <div class="form-background">
    <div class="form-backdrop"></div>
    <img v-if="mobile2" src="../assets/scifi-640.jpg" alt="scifi Img" />
    <img v-else src="../assets/scifi-1920.jpg" alt="syfy Img" />
    <div class="form-wrapper">
      <form class="login">
        <div class="back-home-wrapper">
          <router-link class="back-home" :to="{ name: 'Home' }"
            ><fa :icon="['fas', 'arrow-left']" class="icon" />&nbsp;&nbsp;
            Home</router-link
          >
        </div>
        <h2>Login</h2>
        <div class="form-inputs">
          <div class="form-input">
            <input
              v-model="email"
              type="email"
              placeholder="Email: testing@test.test"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='Email: testing@test.test'"
            />
            <fa :icon="['fas', 'envelope']" class="icon" />
          </div>
          <div class="form-input">
            <input
              v-model="password"
              type="password"
              placeholder="Password: testing"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='Password: testing'"
            />
            <fa :icon="['fas', 'lock']" class="icon" />
          </div>
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
        <div class="forgot-wrapper">
          <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }">
            Forgot password?</router-link
          >
        </div>
        <button @click.prevent="signIn" class="form-button">Sign In</button>

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
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
      mobile2: null,
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
        this.mobile2 = true;
        return;
      }
      this.mobile2 = false;
      return;
    },

    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
          this.error = false;
          this.errorMsg = "";
        //?   console.log(firebase.auth().currentUser.uid);
        })
        .catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
        });
    },
  },
};
</script>

<style lang="scss">
.form-background {
  overflow: hidden;

  height: 100%;

  width: 100%;

  .form-backdrop {
    z-index: 11;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    background: var(--img-back-drop);
    width: 100%;
    height: 100%;
  }

  img {
    z-index: 10;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .form-wrapper {
    position: relative;
    margin: 0 auto;
    max-width: 35rem;
    padding: 1.3rem;
    min-height: 100vh;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-content: center; */

    form {
      z-index: 12;
      border-radius: 1rem;
      border: 3px solid var(--boxShadow);
      background-color: var(--light-grey);

      padding: 2.5rem 2rem;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .back-home-wrapper {
        display: flex;
        width: 100%;
        margin-bottom: 1rem;
        .back-home {
          font-size: var(--sm);
          text-decoration: none;
          transition: all 0.3s ease;
          color: var(--primary-color);

          &:hover {
            color: var(--color-change);
          }
        }
      }

      .login-register {
        margin-top: 3rem;
        font-size: var(--sm);
        .router-link {
          text-decoration: none;
          border-bottom: 1px solid var(--primary-color);
          transition: all 0.3s ease;

          color: var(--primary-color);

          &:hover {
            border-bottom-color: var(--color-change);
            color: var(--color-change);
          }
        }
      }

      h2 {
        margin-bottom: 3rem;
        text-align: center;
        font-size: var(--xxl);
        color: var(--primary-color);
      }

      .form-inputs {
        width: 100%;

        .form-input {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0.8rem;

          input {
            width: 100%;
            border: none;
            background-color: var(--secondary-color);
            padding: 0.4rem 0.4rem 0.4rem 3rem;
            height: 5rem;
            border-bottom: 1px solid var(--primary-color);

            &:focus {
              transition: all 0.3s ease;
              outline: none;
              border-bottom-color: var(--color-change);
            }

            &:focus + .icon {
              transition: all 0.3s ease;
              color: var(--color-change);
            }
          }

          .icon {
            color: var(--primary-color);
            font-size: var(--sm);
            width: auto;
            position: absolute;
            left: 6px;
          }
        }
      }

      .forgot-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin: 0.5rem 0 2rem;
        .forgot-password {
          text-decoration: none;
          color: var(--primary-color);
          cursor: pointer;
          font-size: var(--sm);

          border-bottom: 1px solid transparent;
          transition: 0.5s ease all;
          &:hover {
            color: var(--color-change);
            border-color: var(--color-change);
          }
        }
      }
    }
  }
}
</style>