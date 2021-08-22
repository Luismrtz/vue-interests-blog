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
                    <input type="text" placeholder="First Name" onfocus="this.placeholder=''" onblur="this.placeholder='First Name'">
                    <fa :icon="['fas', 'user']"  class="icon" />
                </div>
                <div class="form-input">
                    <input type="text" placeholder="Last Name" onfocus="this.placeholder=''" onblur="this.placeholder='Last Name'">
                    <fa :icon="['fas', 'user']"  class="icon" />
                </div>
                <div class="form-input">
                    <input type="text" placeholder="Username" onfocus="this.placeholder=''" onblur="this.placeholder='Username'">
                    <fa :icon="['fas', 'user']"  class="icon" />
                </div>
                <div class="form-input">
                    <input type="email" placeholder="Email" onfocus="this.placeholder=''" onblur="this.placeholder='Email'">
                    <fa :icon="['fas', 'envelope']"  class="icon" />
                </div>
                <div class="form-input">
                    <input type="password" placeholder="Password"  onfocus="this.placeholder=''" onblur="this.placeholder='Password'">
                    <fa :icon="['fas', 'lock']"  class="icon" />
                </div>
            </div>
            <div class="forgot-wrapper">
                <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"> Forgot password?</router-link>
            </div>
            <button @click.prevent="registerIt" class="form-button">Register</button>

                  <p class="login-register">
                Already have an account?
            <router-link class="router-link"   :to="{ name: 'Login' }">Login</router-link>
            </p>
        </form>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
    return {
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
        registerIt() {
            console.log('poop');
        }
    }

}
</script>

<style>

</style>