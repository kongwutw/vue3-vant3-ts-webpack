<template>
  <div class="mine">
    <UserInfoItem :item="userInfo" />
    <van-button
      @click="logout"
      style="width: 90%; margin-top: 120px"
      plain
      type="primary"
    >
      退出登录
    </van-button>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import UserInfoItem from "@/components/mine/UserInfoItem.vue";

export default {
  components: {
    UserInfoItem,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const userInfo = computed(() => store.state.userInfo);
    const logout = () => {
      store.dispatch("setSignOut");
      router.push({ name: "login" });
    };

    return {
      logout,
      userInfo,
    };
  },
};
</script>

<style lang="scss">
.mine {
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100% - 50px);
}
</style>
