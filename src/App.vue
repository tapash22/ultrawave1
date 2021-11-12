<template>
  <div class="app">
    <Navigation />

    <div class="content">
      <!-- <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> -->
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
.app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.content {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.content .bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
 .bg-bubbles li {
  position: absolute;
  width: 40px;
  height: 40px;
  list-style: none;
  border-radius: 50%;
  background: #ff4500;
  bottom: -100%;

  -webkit-animation: square 20s infinite;
  animation: square 20s infinite;

  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
 .bg-bubbles li:nth-child(1) {
  left: 5%;
    animation-delay: 2s;
  animation-duration: 17s;
}

 .bg-bubbles li:nth-child(2) {
  left: 5%;
  width: 30px;
  height: 30px;
  animation-delay: 4s;
  animation-duration: 21s;
}

 .bg-bubbles li:nth-child(3) {
  left: 5%;
  animation-delay: 6s;
  animation-duration: 25s;
}

 .bg-bubbles li:nth-child(4) {
  left: 5%;
  width: 20px;
  height: 20px;
    animation-delay: 5s;
  animation-duration: 29s;
}

 .bg-bubbles li:nth-child(5) {
  left: 5%;
    animation-delay: 7s;
  animation-duration: 15s;
}

 .bg-bubbles li:nth-child(6) {
  left: 85%;
  width: 20px;
  height: 20px;
  animation-delay: 3s;
  background-color: fade(white, 20%);
}

 .bg-bubbles li:nth-child(7) {
  left: 85%;
  width: 20px;
  height: 20px;
  animation-delay: 7s;
}

 .bg-bubbles li:nth-child(8) {
  left: 85%;
  width: 10px;
  height: 10px;
  animation-delay: 9s;
  animation-duration: 40s;
}

 .bg-bubbles li:nth-child(9) {
  left: 85%;
  width: 5px;
  height: 5px;
  border-radius: 0%;
  animation-delay: 6s;
  animation-duration: 30s;
  background-color: fade(white, 30%);
}

 .bg-bubbles li:nth-child(10) {
  left: 85%;
  width: 30px;
  height: 30px;
  animation-delay: 11s;
}


@-webkit-keyframes square {
  0% {
    transform: translateY(2800px);
  }
  100% {
    transform: translateY(-600px) rotate(600deg);
  }
}
@keyframes square {
  0% {
    transform: translateY(2800px);
  }
  100% {
    transform: translateY(-600px) rotate(600deg);
  }
}
</style>
