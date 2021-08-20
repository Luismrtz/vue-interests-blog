<template>
  <div class="resetPassword">
      <!-- <Loading v-if="laoding" />  -->
      <div class="formWrapper">
          <form class="reset">
              <p>
                  Back to
                   <router-link  :to="{ name: 'Login' }">Login</router-link>
              </p>
              <h2>Reset Password</h2>
              <p>Forgot your password? Enter your email to rest it</p>
              <div class="inputs">
                  <div class="input">
                      <input type="email" placeholder="Email" />
                  </div>
              </div>
              <button>Reset</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    name: "ForgotPassword"

}
</script>

<style>

</style>