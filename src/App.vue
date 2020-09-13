<template>
  <div id="app">
    <ComHeader :isShowLeft="!isTab" :leftText="leftText" />
    <router-view class="route-ctn" />
    <AppBottomTabs v-if="isTab" />
  </div>
</template>

<script>
import { watchEffect, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ComHeader from "@/components/ComHeader.vue";
import AppBottomTabs from "@/components/AppBottomTabs.vue";

export default {
  components: {
    ComHeader,
    AppBottomTabs,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const isTab = ref(false);
    const leftText = ref("");

    const tabs = ["home", "mine"];

    watchEffect(() => {
      const nameIndex = tabs.indexOf(route.name);
      if (nameIndex !== -1) {
        isTab.value = true;
        leftText.value = "";
        store.dispatch("setCurNav", nameIndex);
      } else {
        isTab.value = false;
        leftText.value = "返回";
      }
      store.dispatch("setHeaderTitle", route.meta.title);
    });

    return {
      isTab,
      leftText,
    };
  },
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
}

#app {
  width: 100%;
  height: 100%;

  .route-ctn {
    display: flex;
  }
}
</style>
