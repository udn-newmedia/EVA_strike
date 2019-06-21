<template>
  <div class="head-bar-container">
    <div class="logo-container">
      <div class="logo-wrapper" @click="sendGA_Logo('聯logo')">
        <a title="udn-logo" :href="projectHref">
          <i class="udn-icon udn-icon-logo"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'

export default {
  name: 'HeadBar',
  props: {
    projectHref: {
      type: String,
      required: true,
    },
  },
  methods: {
    sendGA_Logo(target) {
      window.ga("newmedia.send", {
        "hitType": "event",
        "eventCategory": "headBar",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + target + "] [logo click]"
      })
    },
  },
};
</script>

<style lang="scss" scoped>
  .head-bar-container {
    position: absolute;
    z-index: 5000;
    top: 0;
    left: 0;
    width: 100%;
    height: 58px;
    transition: transform .333s ease-in-out;
    a {
      text-decoration: none;
    }
  }

  .logo-container {
    position: relative;
    height: 100%;
    width: 58px;
    .logo-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      i {
        color: #000000;
        transform: rotate(0deg);
        &:hover {
          transition: transform 288ms ease-in;
          transform: rotate(16deg);
        }
      }
    }
  }
</style>
