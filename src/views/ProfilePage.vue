<template>
  <div class="profile-container">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <div class="profile-wrapper">
      <h2>Profile</h2>
      <div class="profile-inputs">
        <!-- <div class="initials">{{ $store.state.profileInitials }}</div> -->
        <!-- <div class="admin-badge"> -->
          <!-- <adminIcon class="icon" /> -->
          <!-- <span>admin</span> -->
        <!-- </div> -->
        <div class="profile-input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
               <fa :icon="['fas', 'user']"  class="icon" />
        </div>
        <div class="profile-input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
               <fa :icon="['fas', 'user']"  class="icon" />
        </div>
        <div class="profile-input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
               <fa :icon="['fas', 'user']"  class="icon" />
        </div>
        <div class="profile-input">
          <label for="email">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
          <fa :icon="['fas', 'envelope']"  class="icon" />
        </div>
        <button class="form-button" @click="updateProfile">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
// import adminIcon from '../assets/Icons/user-crown-light.svg';

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
    }
  },
  methods: {
    updateProfile() {
      //dispatch to STORE to update the settings via (button FORM)
      this.$store.dispatch("updateUserSettings");
      this.modalActive = !this.modalActive;
    },
    closeModal () {
      this.modalActive = !this.modalActive
    }
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.profileFirstName;
      },
      // whatever the user is typing in the Form for firstName
      set(payload) {
        this.$store.commit("changeFirstName", payload);
      }
    },
    lastName: {
      get() {
        return this.$store.state.profileLastName;
      },
      // whatever the user is typing in the Form for lastName
      set(payload) {
        this.$store.commit("changeLastName", payload);
      }
    },
    username: {
      get() {
        return this.$store.state.profileUsername;
      },
      // whatever the user is typing in the Form for username
      set(payload) {
        this.$store.commit("changeUsername", payload);
      }
    },
    email() {
      return this.$store.state.profileEmail
    }
  }


}
</script>

<style lang="scss" scoped>
.profile-container {
    height: auto;
    /* margin: 0 auto; */
    /* max-width: 120rem; */
    width: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center; */
  .profile-wrapper {
    max-width: 70rem;
    padding: 6rem 1rem 12rem;
    margin: 0 auto;
    h2 {
      text-align: center;
      /* margin-bottom: 16px; */
      font-weight: 300;
      font-size: var(--xxl);
    }
    .profile-inputs {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 3rem;
      background-color: var(--light-grey);
      display: flex;
      flex-direction: column;
      /* max-width: 600px; */
      margin-top: 4rem;
      /* .initials {
        position: initial;
        width: 80px;
        height: 80px;
        font-size: 32px;
        background-color: #303030;
        color: #fff;
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      } */
      /* .admin-badge {
        display: flex;
        align-self: center;
        color: #fff;
        font-size: 14px;
        padding: 8px 24px;
        border-radius: 8px;
        background-color: #303030;
        margin: 16px 0;
        text-align: center;
        text-transform: capitalize;
        .icon {
          width: 14px;
          height: auto;
          margin-right: 8px;
        }
      } */
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
                    padding: .4rem .4rem .4rem 3rem;
                    height: 5rem;
                    border-bottom: 1px solid var(--primary-color);
               
                    &:focus {
                        transition: all .3s ease;
                        outline: none;
                        border-bottom-color: var(--color-change);

                    }
               
                    &:focus + .icon {
                         transition: all .3s ease;
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