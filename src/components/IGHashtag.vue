<template>
  <div class="ig-hashtag-container">
    <h2>Instagram討論區</h2>
    <h3>#{{hashtag}}</h3>
    <div class="ig-carousel-wrapper">
      <Slick
        v-if="fetchCompleteFlag"
        ref="slick"
        :options="{
          dots: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
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
      fetchCompleteFlag: false,
    };
  },
  methods: {
    fetchPostList() {
      const fetchAmount = 9;
      const pageUrl =
        'https://www.instagram.com/explore/tags/' +
        this.hashtag[0] + '/?__a=1';
      let hashtagToMediaList = [];

      fetch(pageUrl)
        .then(res => res.json())
        .then(res => {
          // console.log(res.graphql.hashtag.edge_hashtag_to_top_posts);
          // console.log(res.graphql.hashtag.edge_hashtag_to_media.edges);
          for (let i = 0; i < fetchAmount; i++) {
            hashtagToMediaList.push({
              'caption': res.graphql.hashtag.edge_hashtag_to_top_posts.edges[i].node.edge_media_to_caption.edges[0].node.text,
              'display_url': res.graphql.hashtag.edge_hashtag_to_top_posts.edges[i].node.display_url,
            });
          }
        })
        .then(() => {
          this.postList = {...hashtagToMediaList}
          this.fetchCompleteFlag = true;
        })
        .catch(err => console.log(err));
    },
  },
  created() {
    this.fetchPostList();
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
</style>
