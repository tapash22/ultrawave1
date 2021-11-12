<template>
  <div class="website">
    <div class="container">
      <h3>Our Works</h3>
      <div class="row">
        <div class="col-md-4" v-for="web in websites" :key="web.id">
          <div class="card">
            <a href="">
              <img :src="web.image" />
            </a>
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
      websites: [
        {
          id: 1,
          name: "name",
          image: require("../../assets/image/nova.jpg"),
          url: "",
        },
        {
          id: 2,
          name: "name",
          image: require("../../assets/image/bio.jpg"),
          url: "",
        },
        {
          id: 3,
          name: "name",
          image: require("../../assets/image/gvet.jpg"),
          url: "",
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
.website {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.website h3 {
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
.website .row {
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
.website .row .col-md-4 {
  width: 33%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: block;
}
.website .row .col-md-4 .card {
  width: 100%;
  height: 400px;
  padding: 5px;
  margin: 0;
  background-color: #fc9842;
  background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%);
}
.website .row .col-md-4 .card a {
  text-decoration: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.website .row .col-md-4 .card a img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-position: center;
  background-size: cover;
  transition: 0.5s all ease-out;
  transform: scale(0.9);
}
.website .row .col-md-4 .card a img:hover {
  cursor: pointer;
  transform: scale(1);
  transition: 0.5s transform ease-out;
}
</style>