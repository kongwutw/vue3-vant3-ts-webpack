<template>
  <div class="ai-ctn">
    <img class="img-wrap" :src="item.coverImg" />
    <div class="right-wrap">
      <div>
        {{ item.title }}
      </div>
      <div>
        {{ item.author }}
      </div>
    </div>
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
  height: 80px;
  padding: 10px 0;
  margin: 0 15px;
  border-bottom: 1px solid #e0e6ed;

  .img-wrap {
    width: 120px;
    height: 80px;
    border-radius: 6px;
  }

  .right-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
  }
}
</style>
