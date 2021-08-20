<template>
  <div class="formWrap">
      <form>
          <p>
              Dont have an account?
        <router-link  :to="{ name: 'Register' }">Register</router-link>
          </p>
          <h2>Login to pinBlogs</h2>
          <div class="inputs">
              <div class="input">
                  <input type="email" placeholder="Email">
              </div>
              <div class="input">
                  <input type="password" placeholder="Password">
              </div>
          </div>
          <router-link :to="{ name: 'ForgotPassword' }"> Forgot your password?</router-link>
          <button class="buttonForm">Sign In</button>
      </form>
  </div>
</template>

<script>
export default {
    name: 'Login',

}
</script>

<style>

</style>