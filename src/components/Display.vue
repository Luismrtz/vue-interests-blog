
<template>
  <div class="displayWrapper">
      <div class="displayContentWrapper">

        <div class="displayText">
          <h2>Message</h2>
           <p>The words hadn't flowed from his fingers for the past few weeks. He never imagined he'd find himself with writer's block, but here he sat with a blank screen.</p>
          <p> in front of him. That blank screen taunting him day after day had started to play with his mind. He didn't understand why he couldn't even type a single word, just one to begin the process and build from there.</p>
          <p>And yet, he already knew that the eight hours he was prepared to sit in front of his computer today would end with the screen remaining blank.</p>
        </div>
        <div class="displayImg">
          <!-- Image by <a href="https://pixabay.com/users/iggypi-14924480/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4768101">Iggy Pi</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4768101">Pixabay</a> -->
            <img v-if="mobile" src="../assets/star-citizen-640.jpg" alt="star citizen">
            <img v-else src="../assets/star-citizen-1920.jpg" alt="star citizen">
        </div>
      </div>
      <div class="buttonWrapper">
        <div class="button">
            Click Here &nbsp;&nbsp;<fa :icon="['fas','arrow-right']"  />
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'display',

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
}

}
</script>

<style lang="scss" scoped>
    .displayWrapper {
        /* width: 100%; */
          padding: 0 2.5rem;
      
        max-width: 120rem;
        margin: 10rem auto;

        display: flex;
        flex-direction: column;
  gap: 5rem;
    .displayContentWrapper {

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 2rem;
            height: 60vh;

           @media (max-width: 800px) {
            height: auto;
          }

            .displayText {
              font-size: var(--lg);
                flex: 1;

                h2 {
                  text-transform: uppercase;
                  /* margin-bottom: 5rem; */
                }

                p{
                  margin-top: 3rem;
                }

            @media (max-width: 800px) {
             font-size: var(--md);
            }
            }

            .displayImg {
                flex: 1;
                img {
                    display: block;
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }


        @media (max-width: 800px) {
         flex-direction: column;
         justify-content: center;
        }
    }
    .buttonWrapper {
        /* margin-top: 5rem; */
        width: 100%;
        display: flex;
        justify-content: center;

        .button {
            border-color: var(--primary-color);
            color: var(--primary-color);

              &:hover {
                 background-color: transparent;
                 color: var(--color-change);
                 border-color: var(--color-change);
                }
        }
        
    }
    }
</style>