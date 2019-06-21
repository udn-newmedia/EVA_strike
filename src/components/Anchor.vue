<template>
  <div id="anchor-container" class="anchor-container">
    <div class="anchor-sup-wrapper"></div>
    <div
      :class="{
        'anchor-wrapper': true,
        'sticky': enterFlag,
      }"
    >
      <div class="anchor" @click="handleAnchorButtonClick('tourists')">旅客權益</div>
      <div class="anchor" @click="handleAnchorButtonClick('QA')">為何罷工</div>
      <div class="anchor" @click="handleAnchorButtonClick('flightattendants')">空服人生</div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'

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
    };
  },
  methods: {
    handleAnchorButtonClick(target) {
      this.$router.push({ path: `/${target}/` });
      this.sendGA(target);
    },
    sendGA(target) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "headBar",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + target + "] [page click]"
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
  .anchor-sup-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .anchor-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    .anchor {
      cursor: pointer;
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
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
