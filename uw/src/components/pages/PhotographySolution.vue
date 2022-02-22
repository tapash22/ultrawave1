<template>
  <div class="photography">
    <div class="container">
      <h3>Our Works</h3>
      <div class="row">
        <div class="col-md-6" v-for="photo in photography" :key="photo.id">
          <div class="card">
            <img :src="photo.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photography: [
        {
          id: 1,
          name: "name",
          image: require("../../assets/image/1.png"),
        },
        {
          id: 2,
          name: "name",
          image: require("../../assets/image/2.png"),
        },
        {
          id: 3,
          name: "name",
          image: require("../../assets/image/3.png"),
        },
        {
          id: 4,
          name: "name",
          image: require("../../assets/image/4.png"),
        },
        {
          id: 5,
          name: "name",
          image: require("../../assets/image/5.png"),
        },
        {
          id: 6,
          name: "name",
          image: require("../../assets/image/6.png"),
        },
        {
          id: 7,
          name: "name",
          image: require("../../assets/image/7.png"),
        },
        {
          id: 8,
          name: "name",
          image: require("../../assets/image/8.png"),
        },

      ],
    };
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
          

<style scoped>
.photography {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.photography h3 {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #12023f;
  background: rgba(0, 0, 0, 0.534);
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  margin-top: 110px;
  border-radius: 10px;
}
.photography .row {
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
.photography .row .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: block;
}
.photography .row .col-md-6 .card {
  width: 100%;
  height: 300px;
  padding: 5px;
  margin: 0;
  background-color: #fc9842;
  background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%);
}
.photography .row .col-md-6 .card img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-position: center;
  background-size: cover;
  transition: 0.5s all ease-out;
}
.photography .row .col-md-6 img:hover {
  cursor: pointer;
  transform: scale(0.9);
  transition: 0.5s transform ease-out;
}
</style>