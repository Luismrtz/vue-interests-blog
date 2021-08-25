<template>
  <div class="profile-container">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <div class="profile-wrapper">
      <h2>Profile</h2>
      <div class="profile-inputs">
        <div class="profile-input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
          <fa :icon="['fas', 'user']" class="icon" />
        </div>
        <div class="profile-input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
          <fa :icon="['fas', 'user']" class="icon" />
        </div>
        <div class="profile-input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
          <fa :icon="['fas', 'user']" class="icon" />
        </div>
        <div class="profile-input">
          <label for="email">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
          <fa :icon="['fas', 'envelope']" class="icon" />
        </div>
        <button class="form-button" @click="updateProfile">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  name: "ProfilePage",
  components: {
    Modal,
    // adminIcon
  },
  data() {
    return {
      modalMessage: "Changes were saved!",
      modalActive: null,
    };
  },
  methods: {
    updateProfile() {
      //dispatch to STORE to update the settings via (button FORM)
      this.$store.dispatch("updateUserSettings");
      this.modalActive = !this.modalActive;
    },
    closeModal() {
      this.modalActive = !this.modalActive;
    },
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.profileFirstName;
      },
      // whatever the user is typing in the Form for firstName
      set(payload) {
        this.$store.commit("changeFirstName", payload);
      },
    },
    lastName: {
      get() {
        return this.$store.state.profileLastName;
      },
      // whatever the user is typing in the Form for lastName
      set(payload) {
        this.$store.commit("changeLastName", payload);
      },
    },
    username: {
      get() {
        return this.$store.state.profileUsername;
      },
      // whatever the user is typing in the Form for username
      set(payload) {
        this.$store.commit("changeUsername", payload);
      },
    },
    email() {
      return this.$store.state.profileEmail;
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  height: auto;

  width: 100%;

  .profile-wrapper {
    max-width: 70rem;
    padding: 6rem 1rem 12rem;
    margin: 0 auto;
    h2 {
      text-align: center;

      font-weight: 300;
      font-size: var(--xxl);
    }
    .profile-inputs {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 3rem;
      background-color: var(--light-grey);
      display: flex;
      flex-direction: column;

      margin-top: 4rem;

      .profile-input {
        position: relative;

        margin: 16px 0;
        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }
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
          left: 1rem;
          bottom: 2rem;
        }
      }
      button {
        align-self: center;
      }
    }
  }
}
</style>