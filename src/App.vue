<template>
  <div id="app">
    <Indicator></Indicator>
    <HeadBar projectHref="https://udn.com/upf/newmedia/2019_data/EVA_strike">
    </HeadBar>
    <Content>
      <Cover></Cover>
      <Share href="https://udn.com/upf/newmedia/2019_data/EVA_strike"></Share>
    </Content>
    <Anchor></Anchor>
    <router-view/>
    <Content>
      <Editor>
        <Share href="https://udn.com/upf/newmedia/2019_data/EVA_strike"></Share>
        <Logo></Logo>
        <p><br></p>
        <div>製作人：林秀姿、蔡佩蓉、洪欣慈</div>
        <div>視覺設計：蘇士堯</div>
        <div>網頁製作：胡凈悟、楊若榆、謝化挺</div>
        <div>監製：林秀姿、潘如瑩、董谷音</div>
        <div>2019.06.21</div>
      </Editor>
      <p><br></p>
      <FBComment href="https://udn.com/upf/newmedia/2019_data/EVA_strike"></FBComment>
    </Content>
    <Foot></Foot>
  </div>
</template>

<script>
import Anchor from './components/Anchor.vue';
import Cover from './components/Cover.vue';
import Content from './components/Content.vue';
import Editor from './components/Editor.vue';
import FBComment from './components/FBComment.vue';
import Foot from './components/Foot.vue';
import HeadBar from './components/HeadBar.vue';
import Indicator from './components/Indicator.vue';
import Logo from './components/Logo.vue';
import Share from './components/Share.vue';
export default {
  name: 'app',
  components: {
    Anchor,
    Content,
    Cover,
    Editor,
    FBComment,
    Foot,
    HeadBar,
    Indicator,
    Logo,
    Share,
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
