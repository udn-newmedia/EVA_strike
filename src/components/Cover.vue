<template>
  <div class="cover-container">
    <div class="title-wrapper">
      <div class="title-top">長榮罷工&nbsp</div>
      <div class="title-bottom">你該知道的事</div>
    </div>
    <AirlineInfo></AirlineInfo>
    <div class="continued-button-wrapper">
      <a href="#" v-scroll-to="'#anchor-container'">
        <div class="continued-button">
          <div>點按看旅客權益&空服員為何罷工</div>
            <div class="toggle-wrapper">
                <i class="toggle-bottom"></i>
            </div>
        </div>
      </a> 
    </div>
  </div>
</template>

<script>
import AirlineInfo from './AirlineInfo.vue';

export default {
  name: "Cover",
  components: {
    AirlineInfo,
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
  .cover-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    @media screen and (min-width: 321px) {

    }
    @media screen and (min-width: 521px) {   
      left: 20%;
    }
    @media screen and (min-width: 769px) {
      left: 30%;
    }
  }

  .title-wrapper {
    position: relative;
    width: 100%;
    font-size: 38px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    font-size: 30px;
    @media screen and (min-width: 321px) {

    }
    @media screen and (min-width: 521px) {   

    }
    @media only screen and (min-width: 769px) {
      font-size: 36px;
    }
  }

  .continued-button-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 321px) {

    }
    @media screen and (min-width: 521px) {   
      
    }
    @media screen and (min-width: 769px) {
      padding-top: 75px;
    }
    a{
      text-decoration: none;
    }
    .continued-button {
      width: 100%;
      padding: 10px 15px;
      border-radius: 5px;
      text-align: center;
      font-size: 20px;
      color: #ffffff;
      background-color: #535353;
      cursor: pointer;
      @media only screen and (min-width: 769px) {
        width: 325px;
      }
      i {
        border: solid #ffffff;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 5px;
      }
      .toggle-wrapper {
        animation: bounce 2s infinite linear;
      }
      .toggle-bottom {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
      @keyframes bounce {
        0% {transform: translateY(-3px);}
        50% {transform: translateY(3px);}
        100% {transform: translateY(-3px);}
      }
    }
  }
</style>
