<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRouter } from "vue-router";
import store from "@/store";
import accessEnum from "@/access/accessEnum";
import { onMounted } from "vue";

/**
 * 全局初始化函数，有全局首次调用的代码都可以写到这里
 */
const doInit = () => {
  console.log("我还没想要要加什么，后面加个佛祖吧");
};

onMounted(() => {
  doInit();
});

const router = useRouter();
router.beforeEach((to, from, next) => {
  //仅管理员可见，判断当前用户是否有权限
  if (to.meta?.access === accessEnum.ADMIN) {
    if (store.state.user.loginUser?.userRole !== accessEnum.ADMIN) {
      next("/noAuth");
      return;
    }
  }
  next();
});
</script>
