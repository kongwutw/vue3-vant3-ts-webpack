import { App as VM, createApp } from "vue";
import { Button, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem } from "vant";
import "vant/lib/index.less";

import App from "@/App.vue";
import router from "@/router";
import vuex from "@/vuex";

const plugins = [Button, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem];

const vantPlugins = {
  install: function (vm: VM) {
    plugins.forEach((item) => {
      vm.component(item.name, item);
    });
  },
};

createApp(App).use(vuex).use(router).use(vantPlugins).mount("#app");
