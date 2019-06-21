<template>
  <div class="ig-hashtag-container">
    <h2>Instagram討論區</h2>
    <h3>#{{hashtag[0]}} #{{hashtag[1]}}</h3>
    <div class="ig-carousel-wrapper">
      <div v-if="!fetchCompleteFlag" class="loader-wrapper">
        <div class="loader"></div>
      </div>
      <Slick
        v-if="fetchCompleteFlag"
        ref="slick"
        :options="{
          dots: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '3vw',
          centerMode: true,
          arrows: false,
          initialSlide: 0,
        }"
      >
        <div
          v-for="(item, index) in postList" :key="index"
          class="post-wrapper"
        >
          <img width="100%" :src="item.display_url"/>
          <div class="caption">{{item.caption}}</div>
        </div>
      </Slick>
    </div>
  </div>
</template>
<script>
import Slick from 'vue-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

export default {
  name: 'IGHashtag',
  components: {
    Slick,
  },
  props: {
    hashtag: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      postList: {},
      hashtagToMediaList: [],
      fetchCompleteFlag: false,
    };
  },
  methods: {
    fetchPostListFisrt(target) {
      const fetchAmount = 5;
      const pageUrl =
        'https://www.instagram.com/explore/tags/' +
        target + '/?__a=1';

      fetch(pageUrl)
        .then(res => res.json())
        .then(res => {
          // console.log(res.graphql.hashtag.edge_hashtag_to_top_posts);
          // console.log(res.graphql.hashtag.edge_hashtag_to_media.edges);
          for (let i = 0; i < fetchAmount; i++) {
            this.hashtagToMediaList.push({
              'caption': res.graphql.hashtag.edge_hashtag_to_top_posts.edges[i].node.edge_media_to_caption.edges[0].node.text,
              'display_url': res.graphql.hashtag.edge_hashtag_to_top_posts.edges[i].node.display_url,
            });
          }
        })
        .then(() => {
          this.fetchPostListLast(this.hashtag[1])
        })
        .catch(err => console.log(err));
    },
    fetchPostListLast(target) {
      const fetchAmount = 5;
      const pageUrl =
        'https://www.instagram.com/explore/tags/' +
        target + '/?__a=1';
      let hashtagToMediaList = [];

      fetch(pageUrl)
        .then(res => res.json())
        .then(res => {
          // console.log(res.graphql.hashtag.edge_hashtag_to_top_posts);
          // console.log(res.graphql.hashtag.edge_hashtag_to_media.edges);
          for (let i = 0; i < fetchAmount; i++) {
            this.hashtagToMediaList.push({
              'caption': res.graphql.hashtag.edge_hashtag_to_top_posts.edges[i].node.edge_media_to_caption.edges[0].node.text,
              'display_url': res.graphql.hashtag.edge_hashtag_to_top_posts.edges[i].node.display_url,
            });
          }
        })
        .then(() => {
          this.postList = {...this.hashtagToMediaList}
          this.fetchCompleteFlag = true;
        })
        .catch(err => console.log(err));
    },
  },
  created() {
    this.fetchPostListFisrt(this.hashtag[0]);
  },
};
</script>

<style lang="scss" scoped>
  .ig-hashtag-container {
    width: 100%;
    text-align: center;
    .post-wrapper {
      padding: 10%;
      .caption {
        margin: 20px 0;
      }
    }
  }
  .loader-wrapper {
    height: 550px;
    margin: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 320px) and (max-width: 374px) {
      height: 365px;
    }
    @media only screen and (min-width: 374px) and (max-width: 410px) {
      height: 465px;
    }
    .loader {
      border: 8px solid #f3f3f3; /* Light grey */
      border-top: 8px solid #17d7f9; /* Blue */
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    }
  }
</style>
