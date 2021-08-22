<template>
  <div class="form-background">
      <div class="form-backdrop"></div>
        <img v-if="mobile" src="../assets/scifi-640.jpg" alt="scifi Img">
        <img v-else src="../assets/scifi-1920.jpg" alt="syfy Img">  
      <div class="form-wrapper">
        <form class="login">
            <div class="back-home-wrapper">
                <router-link class="back-home" :to="{ name: 'Home' }"><fa :icon="['fas', 'arrow-left']"  class="icon" />&nbsp;&nbsp; Home</router-link> 
            </div>
            <h2>Forgot Password</h2>
            <div class="form-inputs">
                <div class="form-input">
                    <input type="email" placeholder="Email" onfocus="this.placeholder=''" onblur="this.placeholder='Email'">
                    <fa :icon="['fas', 'envelope']"  class="icon" />
                </div>

            </div>
            <div class="forgot-wrapper">
                <!-- <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"> Forgot password?</router-link> -->
            </div>
            <button @click.prevent="forgPass" class="form-button">Reset</button>

                  <p class="login-register">
                Dont have an account?
            <router-link class="router-link"   :to="{ name: 'Register' }">Register</router-link>
            </p>
        </form>
      </div>
  </div>
</template>

<script>
export default {
    name: "ForgotPassword",
    data() {
    return {
        mobile: null,
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
        this.mobile = true;
        return;
      }
      this.mobile = false;
      return;
    },
        forgPass() {
            console.log('poop');
        }
    }

}
</script>

<style>

</style>