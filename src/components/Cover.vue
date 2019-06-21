<template>
  <div class="cover-container">
    <div class="title-wrapper">
      <div class="title-top">長榮罷工</div>
      <div class="title-bottom">你該知道的事</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cover",
}
</script>

<style lang="scss" scoped>
  .cover-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: lightblue;
  }

  .title-wrapper {
    position: relative;
    font-size: 50px;
    font-weight: bold;
    @media only screen and (min-width: 769px) {
      display: flex;
    }
  }
</style>
