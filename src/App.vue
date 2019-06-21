<template>
  <div id="app">
    <Indicator></Indicator>
    <HeadBar projectHref="https://udn.com/upf/newmedia/2019_data/EVA_strike">
    </HeadBar>
    <Content>
      <Cover></Cover>
      <Anchor></Anchor>
    </Content>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import Anchor from './components/Anchor.vue';
import Cover from './components/Cover.vue';
import Content from './components/Content.vue';
import Foot from './components/Foot.vue';
import HeadBar from './components/HeadBar.vue';
import Indicator from './components/Indicator.vue';
export default {
  name: 'app',
  components: {
    Anchor,
    Content,
    Cover,
    Foot,
    HeadBar,
    Indicator,
  },
};
</script>

<style lang="scss">
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    outline: none !important;
  }
</style>
