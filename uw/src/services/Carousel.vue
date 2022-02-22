<template>
  <div class="row">
    <div class="col-md-12 car">
      <Carousel :items-to-show="3" :autoplay="1000" :wrap-around="true">
        <Slide v-for="slide in products" :key="slide.id">
          <!-- <router-link :to="slide.url"> -->
            <div class="card">
              <img :src="slide.image" />

              <!-- <p>{{ slide.name }}</p> -->
            </div>
          <!-- </router-link> -->
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "BioGreen",
          image: require("../assets/image/biogreen.jpg"),
        },
        {
          id: 2,
          name: "AgroTech Global ",
          image: require("../assets/image/agro.jpg"),
        },
        {
          id: 3,
          name: "Green Vet Pherma",
          image: require("../assets/image/greenvet.jpg"),
        },
        {
          id: 4,
          name: "Novatech",
          image: require("../assets/image/novatech.jpg"),
        },
        {
          id: 5,
          name: "Remidies & care",
          image: require("../assets/image/remi.jpg"),
        },
        {
          id: 6,
          name: "ACE Pharmacutical",
          image: require("../assets/image/ace.jpg"),
        },
      ],
    };
  },

  components: {
    Carousel,
    Slide,
    // Navigation,
  },
};
</script>
<style scoped>
.row {
  width: 100%;
  height: auto;
  padding: 0;
  margin-top: 130px;
}
.row .car {
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 200px;
}
.row .car .carousel{
  padding: -20px;
  margin:0;
  background: none;
}

.carousel .card {
  width: 250px;
  height: 200px;
  padding: 0;
  margin: 0;
  background: #fff;
}
.card img {
  width: 250px;
  height:100%;
  background-position: center;
  padding: 0;
  margin: 0;
}
.card p {
  height: 40px;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #000;
  text-align: center;
  z-index: 1;
  text-transform: uppercase;
  padding: 10px;
}


</style>