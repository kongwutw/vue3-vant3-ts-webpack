<template>
  <div class="ai-ctn">
    <img
      class="img-wrap"
      :src="item.avatar"
    />
    <div class="right-wrap">{{ item.name }} {{ item.mobile }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.ai-ctn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 50px;
  padding: 10px 0;
  border-bottom: 1px solid #e0e6ed;

  .img-wrap {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  .right-wrap {
    display: flex;
    height: 50px;
    line-height: 50px;
  }
}
</style>
