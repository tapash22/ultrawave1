<template>
  <div id="home" class="home">
    <div class="image">
      <ul>
        <li><p>U</p></li>
        <li><p>L</p></li>
        <li><p>T</p></li>
        <li><p>R</p></li>
        <li><p>A</p></li>
        <li><p>W</p></li>
        <li><p>A</p></li>
        <li><p>V</p></li>
        <li><p>E</p></li>
        <li><p>:)</p></li>
      </ul>
      <!-- <img src="../../assets/image/home1.jpg"/> -->
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h5>our core values</h5>
          <h3>We are ready to give you what you want</h3>
          <div class="products">
            <div class="card" v-for="work in works" :key="work.id">
              <div class="card-header">
                <i :class="work.icon"></i>
              </div>
              <div class="card-body">
                <h4>{{ work.name }}</h4>
                <p>{{ work.des }}</p>
                <router-link :to="work.url">view</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- about us -->
    <section id="about">
      <div class="row">
        <div class="col-md-12">
          <h5>about us</h5>
          <h3>what we bring to the table</h3>
          <div class="about">
            <div class="col-md-4">
              <img src="../../assets/logo.png" />
            </div>
            <div class="col-md-8">
              <ul>
                <li>
                  <strong>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Our
                    exparts
                  </strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Non, natus molestiae! Exercitationem iure sapiente, fuga eos
                    explicabo qui nostrum sunt. Culpa eaque autem placeat? Rerum
                    eius labore sequi ducimus ullam!
                  </p>
                </li>
                <li>
                  <strong>
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    Business-oriented application
                  </strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Non, natus molestiae! Exercitationem iure sapiente, fuga eos
                    explicabo qui nostrum sunt. Culpa eaque autem placeat? Rerum
                    eius labore sequi ducimus ullam!
                  </p>
                </li>
                <li>
                  <strong>
                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                    Excellent price-quality ratio
                  </strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Non, natus molestiae! Exercitationem iure sapiente, fuga eos
                    explicabo qui nostrum sunt. Culpa eaque autem placeat? Rerum
                    eius labore sequi ducimus ullam!
                  </p>
                </li>
                <li>
                  <strong>
                    <i class="fa fa-check-circle" aria-hidden="true"></i> Full
                    commitment
                  </strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Non, natus molestiae! Exercitationem iure sapiente, fuga eos
                    explicabo qui nostrum sunt. Culpa eaque autem placeat? Rerum
                    eius labore sequi ducimus ullam!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- services -->
    <section id="services">
      <div class="row">
        <div class="col-md-12">
          <h5>what we do</h5>
          <h3>Our Services</h3>
          <div class="services">
            <div class="col-md-6">
              <p class="wrap">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam harum sequi cum suscipit. Nam voluptas obcaecati
                laboriosam fugiat, vel aut beatae sit ad ipsum, temporibus
                libero mollitia veniam exercitationem! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Maxime repudiandae fuga
                voluptas praesentium dicta maiores, suscipit impedit, ducimus
                numquam velit possimus, quae aliquam inventore aperiam earum
                nobis voluptate enim sit.
              </p>
            </div>
            <div class="col-md-3">
              <ul>
                <li>
                  <i class="fa fa-eercast" aria-hidden="true"></i>Custom web
                  application
                </li>
                <li>
                  <i class="fa fa-eercast" aria-hidden="true"></i>e-Commerce
                </li>
                <li>
                  <i class="fa fa-eercast" aria-hidden="true"></i>Static/Dynamic
                  Web site
                </li>
                <li>
                  <i class="fa fa-eercast" aria-hidden="true"></i>Graphics
                  solution
                </li>
                <li>
                  <i class="fa fa-eercast" aria-hidden="true"></i>Make Animation
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <ul>
                <li><i class="fa fa-eercast" aria-hidden="true"></i>SEO</li>
                <li>
                  <i class="fa fa-eercast" aria-hidden="true"></i>Bulk sms
                </li>
                <li>
                  <i class="fa fa-eercast" aria-hidden="true"></i>Photoshoot
                </li>
                <li>
                  <i class="fa fa-eercast" aria-hidden="true"></i>Make video
                </li>
                <li>
                  <i class="fa fa-eercast" aria-hidden="true"></i>Branding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- plan list -->
    <section id="plans">
      <div class="row">
        <div class="col-md-12">
          <h5>our plans</h5>
          <h3>choose a plan tailored to you need</h3>
          <div class="product-list">
            <div class="card" v-for="pdl in product_list" :key="pdl.id">
              <div class="card-header">
                <p>{{ pdl.name }}</p>
              </div>
              <div class="card-body">
                <ul>
                  <li>{{ pdl.tx }}</li>
                  <li>{{ pdl.tx1 }}</li>
                  <li>{{ pdl.tx2 }}</li>
                  <li>{{ pdl.tx3 }}</li>
                  <li>{{ pdl.tx4 }}</li>
                  <li>{{ pdl.tx5 }}</li>
                </ul>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary">
                  <router-link :to="pdl.url">Details</router-link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- testimonial -->
    <section id="testimonial">
      <div class="row">
        <div class="col-md-12">
          <h5>testimonials</h5>
          <h3>What clients love in working with ULTRAWAVE COMMUNICATIONS.</h3>
          <div class="testemonials">
            <div
              class="card"
              v-for="testimonial in testimoniels"
              :key="testimonial.id"
            >
              <h4>{{ testimonial.name }}</h4>
              <p class="wrap">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                eaque sequi repellat quibusdam nihil corporis exercitationem
                animi provident, similique enim numquam ipsam aliquid
                repellendus veritatis alias beatae vel optio dolorum.
                {{ testimonial.des }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- client -->
    <section id="client">
      <div class="row">
        <div class="col-md-12">
          <h5>our clients</h5>
          <h3>We have worked together on inspiring projects</h3>
          <div class="client">
            <div class="card" v-for="client in clients" :key="client.id">
              <div class="card-body">
                <img :src="client.image" />
              </div>
              <div class="card-footer">
                <p>{{ client.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          id: 1,
          name: "Graphics",
          des: "Logo design, Banner, Vector shape, Animations",
          icon: "fa fa-flag-checkered",
          url: "/graphics",
        },
        {
          id: 2,
          name: "Website",
          des: "using php, MySql, vue.js, Bootstrap, JavaScript",
          icon: "fa fa-cogs",
          url: "/website",
        },
        {
          id: 3,
          name: "Photography",
          des: "Indor & Outdoor Photoshoot, video with editing",
          icon: "fa fa-camera-retro",
          url: "/photoraphy",
        },
        {
          id: 4,
          name: "Digital Marketing",
          des: "SEO, SMS, Facebook boost, page maintain",
          icon: "fa fa-globe",
          url: "/dm",
        },
      ],

      product_list: [
        {
          id: 1,
          name: "Basic",
          tx: "Static website",
          tx1: "Graphics support",
          tx2: "Facebook boosting(3 time)",
          tx3: "Facebook page maintain(1 month)",
          tx4: "Provide hosting",
          tx5: "Maintain Support",
          url: "/basic",
        },
        {
          id: 2,
          name: "Silver",
          tx: "Dynamic website",
          tx1: "Graphics support",
          tx2: "Facebook boosting(5 time)",
          tx3: "Facebook page maintain(3 month)",
          tx4: "Prodive hosting",
          tx5: "Maintain Support",
          url: "/silver",
        },
        {
          id: 3,
          name: "Gold",
          tx: "Dynamic website",
          tx1: "Graphics support",
          tx2: "Facebook boosting(5 time)",
          tx3: "Facebook page maintain(6 month)",
          tx4: "Prodive hosting",
          tx5: "Maintain Support",
          url: "/gold",
        },
      ],

      testimoniels: [
        {
          id: 1,
          name: "BioGreen International Ltd",
          des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          id: 2,
          name: "AgroTech Global BD Nutrition",
          des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          id: 3,
          name: "Green Vet Pherma",
          des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
          id: 4,
          name: "Novatech",
          des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
      ],
      clients: [
        {
          id: 1,
          name: "BioGreen",
          image: require("../../assets/image/biogreen.jpg"),
        },
        {
          id: 2,
          name: "AgroTech Global ",
          image: require("../../assets/image/agrotech.jpg"),
        },
        {
          id: 3,
          name: "Green Vet Pherma",
          image: require("../../assets/image/greenvet.jpg"),
        },
        {
          id: 4,
          name: "Novatech",
          image: require("../../assets/image/novatech.jpg"),
        },
        {
          id: 5,
          name: "company name",
          image: require("../../assets/logo.png"),
        },
        {
          id: 6,
          name: "company name",
          image: require("../../assets/logo.png"),
        },
      ],
    };
  },
  components: {},

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Lobster&family=Poppins:wght@100&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Ubuntu:wght@300&display=swap");

.home {
  width: 100%;
  height: auto;
  padding-top: 105px;
  margin: 0;
}
.home .image {
  width: 100%;
  height: 450px;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.116);
  display: flex;
}
.image ul {
  top: 100px;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
}
.image ul li {
  width: 10%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: block;
  animation: square 8s infinite;
}
.image ul li p {
  font-size: 2.5rem;
  font-weight: 900;
  color: #000;
  text-align: center;
  margin-top: 200px;
  transform: scale(-1, 1);
}
.image ul li:nth-child(1) {
  animation-delay: 1s;
  animation-direction: 5s;
  background: violet;
}
.image ul li:nth-child(2) {
  animation-delay: 1s;
  animation-direction: 5s;
  background: blue;
}
.image ul li:nth-child(3) {
  animation-delay: 1s;
  animation-direction: 5s;
  background: skyblue;
}
.image ul li:nth-child(4) {
  animation-delay: 1s;
  animation-direction: 5s;
  background: green;
}
.image ul li:nth-child(5) {
  animation-delay: 1s;
  animation-direction: 5s;
  background: yellow;
}
.image ul li:nth-child(6) {
  animation-delay: 1s;
  animation-direction: 5s;
  background: rgb(158, 173, 104);
}
.image ul li:nth-child(7) {
  animation-delay: 1s;
  animation-direction: 5s;
  background: rgb(173, 30, 161);
}
.image ul li:nth-child(8) {
  animation-delay: 1s;
  animation-direction: 5s;
  background: rgb(136, 165, 30);
}
.image ul li:nth-child(9) {
  animation-delay: 1s;
  animation-direction: 5s;
  background: rgb(17, 74, 160);
}
.image ul li:nth-child(10) {
  animation-delay: 1s;
  animation-direction: 5s;
  background: rgb(116, 20, 76);
}
.home section {
  padding-top: 100px;
  background: #ff440080;
  background-attachment: fixed;
}
.home .row {
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 0;
  background: rgb(241, 238, 238);
  position: relative;
}

.home .row .col-md-12 {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 10px;
  justify-content: center;
}
.row .col-md-12 h5 {
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  color: #ff4500;
  padding: 5px;
  margin: 0;
  text-transform: uppercase;
}
/* products */
.row .col-md-12 h3 {
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  padding: 0;
  margin: 0;
  color: #000;
}
.row .col-md-12 .products {
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 50px;
  display: flex;
}
.row .col-md-12 .products .card {
  width: 25%;
  height: 100%;
  padding: 10px;
  margin: 5px;
  background: #fff;
  border-radius: 10px;
  transition: 0.5s all ease-out;
  cursor: pointer;
}
.row .col-md-12 .products .card:hover {
  transform: translateY(-15%);
  transition: 0.5s transform ease-out;
}
.row .col-md-12 .products .card .card-header {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  background: #fff;
  display: flex;
  justify-content: center;
}
.row .col-md-12 .products .card .card-header i {
  font-size: 3rem;
  font-weight: 700;
  color: #ff4500;
  padding: 5px;
  margin: 5px;
}
.row .col-md-12 .products .card .card-body {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: #fff;
}
.row .col-md-12 .products .card .card-body h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #000;

  text-align: center;
  padding: 5px;
}
.row .col-md-12 .products .card .card-body p {
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  font-family: "Lato", sans-serif;
}
.row .col-md-12 .products .card .card-body a {
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
}
/* about */
.row .col-md-12 .about {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 5px;
  display: flex;
}
.row .col-md-12 .about .col-md-4 {
  width: 33%;
  height: 100%;
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: center;
}
.row .col-md-12 .about .col-md-4 img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-position: center;
  background-size: cover;
}
.row .col-md-12 .about .col-md-8 {
  width: 65%;
  height: 100%;
  padding: 5px;
  margin: 5px;
  display: flex;
}
.row .col-md-12 .about .col-md-8 ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.row .col-md-12 .about .col-md-8 ul li {
  padding: 5px;
  margin: 5px;
  width: 100%;
  height: auto;
  list-style: none;
}
.row .col-md-12 .about .col-md-8 ul li strong {
  font-size: 1.4rem;
  font-weight: 500;
  color: #000;
  padding: 0;
  margin: 0;
}
.row .col-md-12 .about .col-md-8 ul li strong i {
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
  color: #ff4500;
}
.row .col-md-12 .about .col-md-4 ul li p {
  text-align: justify;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  font-family: "Lato", sans-serif;
}
/* services */
.row .col-md-12 .services {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 5px;
  display: flex;
}
.row .col-md-12 .services .col-md-6 {
  width: 50%;
  height: 100%;
  padding: 5px;
  margin: 5px;
}
.row .col-md-12 .services .col-md-6 .wrap {
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  text-align: justify;
}
.row .col-md-12 .services .col-md-3 {
  width: 25%;
  height: 100%;
  padding: 5px;
  margin: 5px;
}
.row .col-md-12 .services .col-md-3 ul {
  padding: 5px;
  margin: 0;
}
.row .col-md-12 .services .col-md-3 ul li {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
}
.row .col-md-12 .services .col-md-3 ul li p {
  font-size: 1rem;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  padding: 0;
  margin: 0;
}
.row .col-md-12 .services .col-md-3 ul li i {
  font-size: 1.2rem;
  font-weight: 500;
  color: #ff4500;
  padding: 5px;
  margin: 0;
}
/* plans */
.row .col-md-12 .product-list {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 50px;
  display: flex;

  justify-content: center;
}
.row .col-md-12 .product-list .card {
  width: 30%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  background: #fff;
  border-radius: 10px;
  transition: 0.5s all ease-out;
  box-shadow: 2px 2px 20px #000;
}
.row .col-md-12 .product-list .card:hover {
  transform: scale(1.1);
  filter: brightness(90%);
  transition: 0.5s all ease-out;
}
.row .col-md-12 .product-list .card:first-child,
.row .col-md-12 .product-list .card:last-child {
  margin-top: 30px;
}
.row .col-md-12 .product-list .card .card-header {
  width: 100%;
  height: auto;
  padding: 5px;
  margin: 0;
  border: none;
  background: #fff;
}
.row .col-md-12 .product-list .card .card-header p {
  font-size: 2rem;
  font-weight: 900;
  color: #000;
  text-align: center;
}
.row .col-md-12 .product-list .card .card-body {
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0;
  background: #fff;
}
.row .col-md-12 .product-list .card .card-body ul {
  padding: 0;
  margin: 0;
}
.row .col-md-12 .product-list .card .card-body ul li {
  width: 100%;
  padding: 5px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  list-style: none;
}
.row .col-md-12 .product-list .card .card-footer {
  width: 100%;
  height: auto;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  border: none;
  background: #fff;
}
.row .col-md-12 .product-list .card .card-footer .btn {
  margin: 20px;
}
.row .col-md-12 .product-list .card .card-footer .btn a {
  text-decoration: none;
  padding: 0;
  margin: 0;
  color: #fff;
}
/* testimonials */
.row .col-md-12 .testemonials {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;

  justify-content: center;
}
.row .col-md-12 .testemonials .card {
  height: 100%;
  padding: 10px;
  margin: 10px;
  background: #fff;
  box-shadow: 2px 2px 10px #ff4500;
}
.row .col-md-12 .testemonials .card h4 {
  font-size: 1.3rem;
  font-weight: 500;
  padding: 10px;
  margin: 0;
  text-align: center;
  color: #ff4500;
}
.row .col-md-12 .testemonials .card .wrap {
  font-size: 1rem;
  font-weight: 400;
  padding: 5px;
  text-align: justify;
}
/* client */
.row .col-md-12 .client {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
.row .col-md-12 .client .card {
  height: 100%;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
}
.row .col-md-12 .client .card .card-body {
  width: 100%;
  height: 80%;
  padding: 5px;
  margin: 0;
  border: none;
}
.row .col-md-12 .client .card .card-body img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-position: center;
}
.row .col-md-12 .client .card .card-footer {
  width: 100%;
  height: 15%;
  padding: 5px;
  margin: 0;
  border: none;
  background: #fff;
}
.row .col-md-12 .client .card .card-footer p {
  font-size: 1rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
  text-align: center;
}

@keyframes square {
  0% {
    transform: rotateY(0deg);
    opacity: 1;
  }
  40% {
    transform: rotateY(180deg);
    opacity: 1;
  }
  50% {
    transform: rotateY(-10deg);
    opacity: 1;
  }
  /* 20% {
      transform: rotateY(40deg);
    opacity: 1;
  }
    30% {
      transform: rotateY(60deg);
    opacity: 1;
  }
    40% {
      transform: rotateY(80deg);
    opacity: 1;
  }
    50% {
    transform: rotateY(100deg);
    opacity: 1;
  }
    60% {
    transform: rotateY(120deg);
    opacity: 1;
  }
    70% {
    transform: rotateY(140deg);
    opacity: 1;
  } */
  90% {
    transform: rotateY(-90deg);
    opacity: 1;
  }
  100% {
    transform: rotateY(-180deg);
    opacity: 1;
  }
}
</style>