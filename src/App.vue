<template>
  <div class="app">
    <Navigation />

    <div class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./services/Navigation.vue";
import Footer from "./services/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style>
.content {
  padding: 0;
  margin: 0;
}
</style>
