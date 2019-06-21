<template>
  <div class="content-c-container">
    <h1>空服人生</h1>
    <p>空服員光鮮亮麗，成千上萬人擠破頭考進去，為何如今上街頭揮汗抗議？從2019年初春節期間華航罷工，5月遠東航空無預警罷工，到今日的長榮罷工，半年三起，飛航公司的員工都走上街頭，你的旅客權益，他的勞動權益，資方的盤算又是什麼？精選近年相關分析討論，看看國內外的空服員罷工人生。</p>

    <div class="news-link-card-container">
      <div class="news-link-card">
        <div class="image-wrapper">
          <img src="images/photo.jpg" alt="空服員照片">
        </div>
        <div class="card-body">
          <div class="card-title">
            <h3>飛安要顧，屁股也要擦？我才不稀罕當空姐！</h3>
          </div>
          <div class="card-text">以在上位者姿態頤指氣使的機長、予取予求的乘客，空服員必須以完美的笑容面對一切，燦爛的笑容底下，身心早已斑駁不已。<span style="color: #ff6f00;"><a title="閱讀全文" href="https://ubrand.udn.com/ubrand/story/11815/3783393">閱讀全文</a></span></div>
        </div>
      </div>
      <div class="news-link-card">
        <div class="image-wrapper">
          <img src="images/photo2.jpg" alt="空服員照片">
        </div>
        <div class="card-body">
          <div class="card-title">
            <h3>罷工怒火為何再起？未能從勞資爭議成長的長榮公司</h3>
          </div>
          <div class="card-text">長榮在罷工投票前夕，開始言詞恫嚇，警告若因工會罷工導致獲利下滑，將暫停年終獎金與年度調薪，資方煽動勞資對立，無助解決勞資爭議。<span style="color: #ff6f00;"><a title="閱讀全文" href="https://opinion.udn.com/opinion/story/10124/3808112">閱讀全文</a></span></div>
        </div>
      </div>
      <div class="news-link-card">
        <div class="image-wrapper">
          <img src="images/photo3.jpg" alt="空服員照片">
        </div>
        <div class="card-body">
          <div class="card-title">
            <h3>黑色天空企業：日本航空業的「過勞機師」實態</h3>
          </div>
          <div class="card-text">近30年來航空技術的進步，讓民航機越飛越久、越飛越遠，動輒可飛行16小時以上。雖然方便旅客無須轉機，但卻也苦了飛行員。<span style="color: #ff6f00;"><a title="閱讀全文" href="https://global.udn.com/global_vision/story/8664/3646003">閱讀全文</a></span></div>
        </div>
      </div>
      <div class="news-link-card">
        <div class="image-wrapper">
          <img src="images/photo4.jpg" alt="空服員照片">
        </div>
        <div class="card-body">
          <div class="card-title">
            <h3>聽廣播／法國航空罷工：魚死網破的勞資惡鬥？</h3>
          </div>
          <div class="card-text">要求加薪的勞工們始終無法與資方達成協議，航班停擺、股價暴跌之下，竟演變成魚死網破的局面......<span style="color: #ff6f00;"><a title="閱讀全文" href="https://global.udn.com/global_vision/story/8663/3151861">閱讀全文</a></span></div>
        </div>
      </div>
      <div class="news-link-card">
        <div class="image-wrapper">
          <img src="images/photo5.jpg" alt="空服員照片">
        </div>
        <div class="card-body">
          <div class="card-title">
            <h3>華航機師罷工：工會欠人民一個預告嗎？</h3>
          </div>
          <div class="card-text">高薪亮眼機師、工時這麼少啊到底累什麼？理由很簡單：你們罷工真的礙到我了！回顧一下華航在春節期間的罷工爭議......<span style="color: #ff6f00;"><a title="閱讀全文" href="https://opinion.udn.com/opinion/story/12705/3638918">閱讀全文</a></span></div>
        </div>
      </div>
      <div class="news-link-card">
        <div class="image-wrapper">
          <img src="images/photo5.jpg" alt="空服員照片">
        </div>
        <div class="card-body">
          <div class="card-title">
            <h3>低工時的幸福人生從哪來？「瑞典模式」的勞資協議文化</h3>
          </div>
          <div class="card-text">瑞典的低工時幸福人生，並非上天掉下來的禮物。而是經歷了勞資雙方劍拔弩張、社會動盪的不安歲月......<span style="color: #ff6f00;"><a title="閱讀全文" href="https://global.udn.com/global_vision/story/8663/2943423">閱讀全文</a></span></div>
        </div>
      </div>
    </div>
    <div class="ig-comment-wrapper">
      <h2>Instagram討論區</h2>
      <IGHashtag :hashtag="['長榮', '長榮罷工']"></IGHashtag>
    </div>
  </div>
</template>

<script>
import IGHashtag from './IGHashtag.vue';
export default {
  name: 'ContentC',
  components: {
    IGHashtag,
  },
};
</script>

<style lang="scss" scoped>
  .news-link-card-container {
    position: relative;
    width: 100%;
    .news-link-card {
      position: relative;
      width: 100%;
      padding: 30px;
      margin: 20px 0;
      box-shadow: 3px 8px 6px 0 rgba(0, 0, 0, 0.16);
      border: solid 1px #707070;
      @media only screen and (min-width: 769px) {
        display: flex;
        flex-direction: row-reverse;
      }
      .image-wrapper {
        padding: 0 20px;
        text-align: center;
        @media only screen and (min-width: 769px) {
          padding: 0 0 0 20px;
        }
        img {
          width: 80%;
          @media only screen and (min-width: 769px) {
            width: auto;
            height: 100%;
          }
        }
      }

      .card-body {
        @media only screen and (min-width: 769px) {
          width: 100%;
        }
        .card-title {
          margin: 15px 0;
          h3 {
            font-size: 21px;
            margin: 0;
          }
        }
        .card-text {
          line-height: 1.78;
          a {
            text-decoration:none;
            color: inherit;
          }
        }
      }
    }
  }

  .ig-comment-wrapper {

  }
</style>

