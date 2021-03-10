<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
    <!-- <MainTabBar /> -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
import MainTabBar from "components/content/tabbar/MainTabBar";
</script>

<style>
@import "assets/css/base.css";
</style>
