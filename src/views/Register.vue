<template>
  <div class="form-background">
      <div class="form-backdrop"></div>
        <img v-if="mobile1" src="../assets/scifi-640.jpg" alt="scifi Img">
        <img v-else src="../assets/scifi-1920.jpg" alt="syfy Img">  
      <div class="form-wrapper">
        <form class="login">
            <div class="back-home-wrapper">
                <router-link class="back-home" :to="{ name: 'Home' }"><fa :icon="['fas', 'arrow-left']"  class="icon" />&nbsp;&nbsp; Home</router-link> 
            </div>
            <h2>Register</h2>
            <div class="form-inputs">
                <div class="form-input">
                    <input v-model="firstName" type="text" placeholder="First Name" onfocus="this.placeholder=''" onblur="this.placeholder='First Name'">
                    <fa :icon="['fas', 'user']"  class="icon" />
                </div>
                <div class="form-input">
                    <input v-model="lastName" type="text" placeholder="Last Name" onfocus="this.placeholder=''" onblur="this.placeholder='Last Name'">
                    <fa :icon="['fas', 'user']"  class="icon" />
                </div>
                <div class="form-input">
                    <input v-model="username" type="text" placeholder="Username" onfocus="this.placeholder=''" onblur="this.placeholder='Username'">
                    <fa :icon="['fas', 'user']"  class="icon" />
                </div>
                <div class="form-input">
                    <input v-model="email" type="email" placeholder="Email" onfocus="this.placeholder=''" onblur="this.placeholder='Email'">
                    <fa :icon="['fas', 'envelope']"  class="icon" />
                </div>
                <div class="form-input">
                    <input v-model="password" type="password" placeholder="Password"  onfocus="this.placeholder=''" onblur="this.placeholder='Password'">
                    <fa :icon="['fas', 'lock']"  class="icon" />
                </div>
            </div>
                        <div v-show="error" class="error">{{ this.errorMsg }}</div>
            <div class="forgot-wrapper">
                <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"> Forgot password?</router-link>
            </div>
            <button @click.prevent="register" class="form-button">Register</button>

                  <p class="login-register">
                Already have an account?
            <router-link class="router-link"   :to="{ name: 'Login' }">Login</router-link>
            </p>
        </form>
      </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

export default {
    name: 'Register',
    data() {
    return {
        firstName: "",
        lastName: "",
        username: "",
        email:"",
        password: "",
        error: null,
        errorMsg: "",
        mobile1: null,
        windowWidth: null
    }
},
created() {
 window.addEventListener("resize", this.checkScreen);
this.checkScreen();
},

        methods: {
                checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile1 = true;
        return;
      }
      this.mobile1 = false;
      return;
    },
        async register() {
            try {
            if(
                this.email !== "" && this.password !== "" && this.firstName !== "" && this.lastName !== "" && this.username !== ""
            ) {
                this.error = false;
                this.errorMsg = "";
                const firebaseAuth = await firebase.auth();
                const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
                const result = await createUser;
                const dataBase = db.collection("users").doc(result.user.uid);
                await dataBase.set({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    username: this.username,
                    email: this.email
                });
                this.$router.push({name: "Home"});
                return;
            }
            }
            catch(err){

                this.error = true;
                this.errorMsg = err.message;
                return;
            }
           
        },
    },

}
</script>

<style>

</style>