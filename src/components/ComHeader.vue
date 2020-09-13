<template>
  <van-nav-bar
    :title="headerTitle"
    :left-arrow="isShowLeft"
    :left-text="leftText"
    @click-left="onClickLeft"
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  props: {
    isShowLeft: Boolean,
    leftText: String,
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();
    const headerTitle = computed(() => store.state.headerTitle);
    const onClickLeft = () => router.go(-1);

    return {
      headerTitle,
      onClickLeft,
    };
  },
};
</script>

<style lang="scss" scoped></style>
