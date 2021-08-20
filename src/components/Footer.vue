<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }">PinsBlogs</router-link>
          <ul>
            <li>
              <!-- <a href="#"><youTube class="svg-icon"/></a> -->
              <fa icon="coffee" class="svg-icon"/>
            </li>
            <li>
              <!-- <a href="#"><twitter class="svg-icon"/></a> -->
              <a href="#"><fa :icon="['fab', 'linkedin']"  class="svg-icon" /></a>
            </li>
            <li>
          <a href="#"><fa :icon="['fab', 'github']"  class="svg-icon" /></a>
            </li>
            <li>
               <a href="#"><fa :icon="['far','arrow-alt-circle-down']"  class="svg-icon" /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" to="#">Blogs</router-link>
            <router-link class="link" to="#">Blogs</router-link>
            <router-link class="link" to="#">Blogs</router-link>
            <!-- <router-link v-if="!user" class="link" :to="{ name: 'Login' }">Login In / Register</router-link> -->
          </ul>
        </div>

        <div class="flex1"> </div>
      </div>

 

    </div>
          <div class="right">
        <p>Copyright 2021 All Rights Reserved</p>
      </div>
  </footer>
</template>

<script>

import { defineComponent} from 'vue';
export default  defineComponent({
  name: "footer-vue",
  components: {

  },
  computed: {
    user() {
      return this.$store.state.user;
    },
//     admin() {
//       return this.$store.state.profileAdmin;
//     },
  },
});
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 10rem 5rem 4rem 5rem;
  background-color: #303030;


    .right {
        margin-top: 6rem;
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      @media (min-width: 800px) {
        align-items: center;
        gap: 0;
      }
    }

  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
 
      flex-direction: row;
      gap: 0px;

      /* .flex1 {
          flex: 1;
      } */
    }
    
    .left {

      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
                  position: relative;
          justify-content: space-evenly;
          /* align-content: space-between; */
        flex-direction: row;
        width: 100%;
        align-items: initial;
        gap: 0;

        .flex1 {
            flex: 1;
        }
      }
      .header {
        text-align: center;
        font-size: 24px;
        color: #fff;
        margin-bottom: 16px;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }
      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
     
        @media (min-width: 800px) {
          gap: 0;
        }
      }
      .col-1 {
             flex: 1;
        flex-direction: column;
        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;
          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
              /* color: #fff; */
            /* fill: blue; */
            color: blue;
            }
          }
        }
      }
      .col-2 {
          
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: nowrap;
          
          @media (min-width: 800px) {
            flex-direction: row;
            

            .link {
            margin: 0 2rem;
            }
          }
          .link {
        
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }

    p {
      margin-top: auto;
    }
  }
}
</style>