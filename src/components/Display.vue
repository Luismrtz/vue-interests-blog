
<template>
  <div class="displayWrapper">
      <div class="displayContentWrapper">

        <div class="displayText">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet corrupti similique alias quaerat esse labore.
        </div>
        <div class="displayImg">
            <img src="../assets/star-citizen.jpg" alt="star citizen">
        </div>
      </div>
    <div class="buttonWrapper">
      <div class="button">
          Click Here ---->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'display',


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

    .displayContentWrapper {

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 2rem;
            height: 60vh;
            .displayText {
                flex: 1;
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
    }
    .buttonWrapper {
        margin-top: 5rem;
        width: 100%;
        display: flex;
        justify-content: center;

        .button {
            border-color: var(--primary-color);
            color: var(--primary-color);

              &:hover {
                 background-color: rgba(48, 48, 48, 0.7);
                 color: #fff;
                 border-color: rgba(48, 48, 48, 0.7);
                }
        }
        
    }
    }
</style>