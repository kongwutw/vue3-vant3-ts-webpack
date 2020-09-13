<template>
  <van-tabbar v-model="curNav" @change="onChangeTab">
    <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item icon="setting">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const curNav = computed(() => store.state.curNav);

    const onChangeTab = (index) => {
      store.dispatch("setCurNav", index);
      const name = index ? "mine" : "home";
      router.replace({ name });
    };

    return {
      curNav,
      onChangeTab,
    };
  },
};
</script>
