<template>
  <div id="app">
    <Indicator></Indicator>
    <HeadBar projectHref="https://udn.com/upf/newmedia/2019_data/EVA_strike">
    </HeadBar>
    <Cover></Cover>
    <Anchor></Anchor>
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import Anchor from './components/Anchor.vue';
import Cover from './components/Cover.vue';
import Foot from './components/Foot.vue';
import HeadBar from './components/HeadBar.vue';
import Indicator from './components/Indicator.vue';
export default {
  name: 'app',
  components: {
    Anchor,
    Cover,
    Foot,
    HeadBar,
    Indicator,
  },
};
</script>

<style>

</style>
