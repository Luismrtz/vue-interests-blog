<template>
  <div class="formWrap">
      <form>
          <p>
              Already have an account?
         <router-link  :to="{ name: 'Login' }">Login</router-link>
          </p>
          <h2>Login to pinBlogs</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="First Name">
              </div>
              <div class="input">
                  <input type="text" placeholder="Last Name">
              </div>
              <div class="input">
                  <input type="text" placeholder="Username">
              </div>
              <div class="input">
                  <input type="email" placeholder="Email">
              </div>
              <div class="input">
                  <input type="password" placeholder="Password">
              </div>
          </div>
          <router-link to="#"> Forgot your password?</router-link>
          <button class="buttonForm">Sign In</button>
      </form>
  </div>
</template>

<script>
export default {
    name: 'Register',

}
</script>

<style>

</style>