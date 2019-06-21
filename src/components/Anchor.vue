<template>
  <div id="anchor-container" class="anchor-container">
    <div v-if="enterFlag" class="anchor-sup-wrapper"></div>
    <div
      :class="{
        'anchor-wrapper': true,
        'sticky': enterFlag,
      }"
    >
      <div v-scroll-to="'#anchor-container'" :class="{'anchor': true, 'active': hrefPathName === '/tourists/' || hrefPathName === '/'}" @click="handleAnchorButtonClick('tourists')">旅客權益</div>
      <div v-scroll-to="'#anchor-container'" :class="{'anchor': true, 'active': hrefPathName === '/QA/'}" @click="handleAnchorButtonClick('QA')">為何罷工</div>
      <div v-scroll-to="'#anchor-container'" :class="{'anchor': true, 'active': hrefPathName === '/flightattendants/'}" @click="handleAnchorButtonClick('flightattendants')">空服人生</div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils';

export default {
  name: 'Anchor',
  props: {
    title: {
      type: String,
      default: ''
    },
    jsonProps: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      enterFlag: false,
      hrefPathName: '',
    };
  },
  methods: {
    handleAnchorButtonClick(target) {
      this.$router.push({ path: `/${target}/` });
      this.hrefPathName = window.location.href.split('#')[1];
      this.sendGA(target);
    },
    sendGA(target) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "Anchor point",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [point_" + target + "]"
      });
    },
    handleScroll() {
      if (
        window.pageYOffset > document.getElementById('anchor-container').offsetTop
      ) {
        if (!this.enterFlag) {
          this.enterFlag = true;
        }
      } else {
        this.enterFlag = false;
      }
    },
  },
  mounted() {
    this.hrefPathName = window.location.href.split('#')[1];
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss" scoped>
.anchor-container{
  position: relative;
  width: 100%;
  height: 58px;
  @media only screen and (min-width: 769px) {
    height: 100px;
  }
  .anchor-sup-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .anchor-wrapper {
    z-index: 9998;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    @media only screen and (min-width: 769px) {
      height: 58px;
    }
    .anchor {
      margin: 0 15px;
      font-size: 18px;
      color: #707070;
      border-bottom: 1px solid #ff6f0000;
      transition: .333s ease-in-out;
      cursor: pointer;
      @media only screen and (min-width: 769px) {
        margin: 0 10%;
        font-size: 21px;
      }
    }
    .anchor:hover {
      color: #ff6f0099;
    }
    .active {
      font-weight: bold;
      color: #ff6f00;
      border-bottom: 1px solid #ff6f00ff;
    }
  }

  .sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    animation-name: stickyAnimation;
    animation-duration: .333s;
    animation-timing-function: ease-in-out;
  }

  @keyframes stickyAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
