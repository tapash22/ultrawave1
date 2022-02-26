<template>
  <div id="home" class="home">
    <div class="image">

      <div class="bouncing-text">
        <div class="b">U</div>
        <div class="o">L</div>
        <div class="u">T</div>
        <div class="n">R</div>
        <div class="c">A</div>
        <div class="e">w</div>
        <div class="f">A</div>
        <div class="g">V</div>
        <div class="h">E</div>
        <div class="shadow"></div>
        <div class="shadow-two"></div>
      </div>
    </div>
    <!-- <div class="image">
      <ul>
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
      </ul>
    </div> -->
    <div class="row product">
      <h2>We Provide</h2>
      <p
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-once="false"
      >
        We provide best service for you
      </p>
      <div
        class="col-md-8"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-3" v-for="work in works" :key="work.id">
              <a :href="work.url">
                <div class="card">
                  <div class="card-body">
                    <i :class="work.icon"></i>
                  </div>
                  <div class="card-footer">
                    <p>{{ work.name }}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-md-4"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <div class="box">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ad
            velit accusamus, autem amet similique odio tempora aliquam molestias
            asperiores at debitis molestiae sint voluptatibus corrupti enim.
            voluptatibus corrupti enim.
            
          </p>
        </div>
      </div>
    </div>

    <div class="row services">
      <h2>Services</h2>
      <p
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        What we do for you
      </p>
      <div class="col-md-8"         
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false">
        <div class="box">
          <ul>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Email Monitoring</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Bulk SMS</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Faccbook Boost</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Facebook page Maintain</a></li>
          </ul>
          <ul>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Template</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">E-commerce</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Blog/Agency</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Management System</a></li>
          </ul>
          <ul>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Logo Design</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Web Banner</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Illustrator/ Vectorshap</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Animation</a></li>
          </ul>
          <ul>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Indoor Photoshoot</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Outdoor Photoshoot</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Branding/Promotion</a></li>
            <li><i class="fa fa-eercast" aria-hidden="true"></i><a href="">Video/Editting</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-4">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aliquam quaerat alias cupiditate atque ipsam dolores fugiat quas natus dolore? Blanditiis odit ratione amet totam officiis asperiores impedit eum exercitationem.</p>
      </div>
    </div>

    <div class="row clients">
      <h2>Clients</h2>
      <p>Our honourable clients are</p>

      <div class="tech-slideshow">
        <div class="mover-1"></div>
        <div class="mover-2"></div>
      </div>

      <div class="col-md-4"></div>
      <div class="col-md-8"></div>
    </div>

    <div class="row about">
      <div
        class="col-md-4"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <div class="box">
          <!-- <h2>We are</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            ducimus, facilis impedit dolore, minima velit culpa nemo
            necessitatibus nisi et vero doloribus dolor eligendi magni pariatur
            quaerat earum amet unde?quaerat earum amet unde?quaerat earum amet unde?quaerat earum amet unde?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> -->
          <img src="../../assets/video/about.gif"/>
        </div>
      </div>
      <div class="col-md-8" 
      data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        data-aos-once="false">
        <Carousel />
        <p>Comment on us</p>
      </div>
    </div>

    <div class="row contact"
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false">
      <div class="col-md-4 message">
          <h2>Contact us</h2>
          <p>Feel free to contact us</p>
      </div>
      <div class="col-md-8 icons">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your email"
              />
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </div>
          </form>
        <ul>
          <li>
            <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href=""><i class="fa fa-linkedin" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="">+8801877136747</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../../services/Carousel.vue";

export default {
  data() {

    return {
      works: [
        {
          id: 1,
          name: "Digital Marketing",
          des: "SEO, SMS, Facebook boost, page maintain",
          icon: "fa fa-globe",
          url: "/dm",
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
          name: "Graphics",
          des: "Logo design, Banner, Vector shape, Animations",
          icon: "fa fa-flag-checkered",
          url: "/graphics",
        },
        {
          id: 4,
          name: "Photography",
          des: "Indor & Outdoor Photoshoot, video with editing",
          icon: "fa fa-camera-retro",
          url: "/photoraphy",
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
    };
  },
  components: {
    Carousel,
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import "../../assets/css/home.css";
</style>