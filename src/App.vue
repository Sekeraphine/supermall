<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
  