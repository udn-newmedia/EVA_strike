<template>
  <div class="ig-hashtag-container">
    <h1>Hashtag:{{hashtag}}</h1>
    <br>
    <br>
    <br>
    <br>
    <div
      v-for="(item, index) in postList" :key="index"
      class="post-wrapper"
    >
      <img :src="item.display_url"/>
      <div class="caption">{{item.caption}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IGHashtag',
  props: {
    hashtag: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      postList: {},
    };
  },
  methods: {
    fetchPostList() {
      const fetchAmount = 9;
      const pageUrl =
        'https://www.instagram.com/explore/tags/' +
        this.hashtag + '/?__a=1';
      let hashtagToMediaList = [];

      fetch(pageUrl)
        .then(res => res.json())
        .then(res => {
          console.log(res.graphql.hashtag.edge_hashtag_to_top_posts);
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
    overflow: hidden;
  }
</style>
