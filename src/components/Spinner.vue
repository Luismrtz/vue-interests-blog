<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script>
export default {
  name: "spinner",
};
</script>

<style lang="scss">
.loading {
  top: 0;
  z-index: 101;
  height: 100%;
  width: 100%;
  background-color: var(--back-drop);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
  span {
    display: block;
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    border: 0.3rem solid transparent;
    border-top-color: var(--secondary-color);
    border-bottom-color: var(--secondary-color);
    border-radius: 50%;
    animation: spin ease 1000ms infinite;
  }
}
</style>