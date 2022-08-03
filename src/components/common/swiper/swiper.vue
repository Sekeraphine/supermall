<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in cbanners" :key="item.index"
      ><a :href="item.link">
        <img :src="item.image" alt=""/> </a></van-swipe-item
  ></van-swipe>
</template>

<script>
// console.log(banner);
export default {
  data() {
    return {
      banners: [],
    };
  },
  props: ["cbanners"],
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 200px;
  height: 200px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>