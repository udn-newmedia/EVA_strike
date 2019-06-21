<template>
  <Article class="article_container" :style="{backgroundColor: backgroundColor}">
    <div class="article">
      <slot></slot>
    </div>
  </Article>
</template>

<script>
export default {
  name: 'ContentContainer',
  props: {
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
  },
}
</script>

<style lang="scss" scoped>
.article_container{
  position: relative;
  z-index: 50;
  width: 100%;
  padding: 0 15px 64px 15px;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 100px 64px 100px;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 0 84px 0;
  }
}
.article{
  position: relative;
  z-index: 30;
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 880px;
    margin: 0 auto;
  }
}
</style>
