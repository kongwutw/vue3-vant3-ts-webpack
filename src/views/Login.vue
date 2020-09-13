<template>
  <div class="login">
    <div class="input-wrap">
      <div class="label-wrap">手机</div>
      <input
        type="text"
        class="input-text"
        placeholder="请输入手机"
        v-model="mobile"
      />
    </div>
    <div class="input-wrap">
      <div class="label-wrap">密码</div>
      <input
        type="password"
        class="input-text"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <van-button
      @click="submit"
      style="width: 80%; margin-top: 50px"
      plain
      type="primary"
    >
      登录
    </van-button>
  </div>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import api from "@/api";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const mobile = ref(""),
      password = ref("");
    const submit = () => {
      api
        .postLogin({ mobile: mobile.value, password: password.value })
        .then((res) => {
          if (res.data.code === 200) {
            const { token, userInfo } = res.data.data;
            const fomatToken = `Bearer ${token}`;
            store.dispatch("setToken", fomatToken);
            store.dispatch("setUserInfo", userInfo);
            router.go(-1);
          }
        });
    };

    return {
      mobile,
      password,
      submit,
    };
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  width: 100%;
  height: 100%;

  .input-wrap {
    display: flex;
    width: 80%;
    border-bottom: 1px solid #e0e6ed;
    font-size: 16px;
    justify-content: center;
    padding: 5px;
    margin-top: 20px;

    .input-text {
      margin-left: 40px;
      width: 100%;
      font-size: 16px;
      color: #000;
      border: none;
      outline: none;
      text-align: right;
      padding: 6px;
      -webkit-text-fill-color: #000 !important;
    }
    .label-wrap {
      width: 50px;
    }
  }
}
</style>
