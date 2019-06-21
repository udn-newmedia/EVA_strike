<template>
  <div id="app">
    <Indicator></Indicator>
    <HeadBar projectHref="https://udn.com/upf/newmedia/2019_data/EVA_strike">
    </HeadBar>
    <div class="content-wrapper">
      <Content>
        <Cover></Cover>
      </Content>
    </div> 
    <Anchor></Anchor>
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
import srcRWD from './mixin/srcRWD.js';

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
  mixins: [srcRWD]
};
</script>

<style lang="scss">
  .content-wrapper  {
    background-image: url("../public/images/cover-mob.jpg");
    background-size: cover;
    @media screen and (min-width: 321px) {

    }
    @media screen and (min-width: 521px) {   
      background-image: url("../public/images/cover-web.jpg");
    }
    @media screen and (min-width: 769px) {
      
    }
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    outline: none !important;
  }
</style>
