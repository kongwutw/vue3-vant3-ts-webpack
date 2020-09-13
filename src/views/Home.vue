<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="2000">
      <van-swipe-item v-for="(item, index) in swiperArr" :key="index">
        <img :src="item.coverImg" class="img-wrap" />
      </van-swipe-item>
    </van-swipe>
    <div v-for="(item, index) in articleArr" :key="index">
      <ArticleItem :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import ArticleItem from "@/components/home/ArticleItem.vue";
import api from "@/api";

export default {
  components: {
    ArticleItem,
  },
  setup() {
    const swiperArr = ref([]);
    const articleArr = ref([]);
    let articleCount = 0;

    const getHomeData = () => {
      api.getHomeData({ offset: 0, limit: 6 }).then((res) => {
        if (res.data.code === 200) {
          const { articles, banners } = res.data.data;
          swiperArr.value = banners;
          const { count, rows } = articles;
          articleArr.value = rows;
          articleCount = count;
        }
      });
    };

    onMounted(() => getHomeData());

    return {
      swiperArr,
      articleArr,
    };
  },
};
</script>

<style lang="scss">
.home {
  flex-direction: column;
  width: 100%;
  height: calc(100% - 50px);

  .my-swipe {
    width: 100%;
    height: 200px;

    .van-swipe-item {
      width: 100%;
      height: 200px;

      .img-wrap {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
