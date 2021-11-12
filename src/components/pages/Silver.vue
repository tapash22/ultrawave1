<template>
  <div class="basic">
    <div class="container">
      <h3>Silver Plan</h3>
      <div class="row">
        <div class="col-md-12">
          <div class="info">
            <h4>You can trust us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              dolor velit nemo eos pariatur earum necessitatibus est
              consequuntur, nostrum asperiores! Facilis illo cum nulla minima
              eius quisquam omnis quaerat! Laborum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sunt,
              ut saepe voluptate odio veritatis. Eius magnam nulla tempora
              maxime omnis fuga quibusdam debitis asperiores quod doloribus
              eligendi, voluptate quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis, earum. Illum recusandae accusamus quam fugiat quae
              repellendus id eveniet expedita placeat blanditiis, molestiae
              laborum quo at porro mollitia nulla. Excepturi?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              illo ea culpa! Ducimus rem accusantium laboriosam dolorum
              consectetur. Illo, officia accusantium quibusdam distinctio minus
              esse dolore cupiditate modi voluptate consequatur.
            </p>
          </div>
          <form>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" type="text" v-model="email" />
            </div>
            <div class="form-group">
              <label>Mobile</label>
              <input class="form-control" type="number" v-model="mobile" />
            </div>
            <div class="form-group">
              <label>Details</label>
              <textarea class="form-control" v-model="msg"></textarea>
            </div>
            <div class="my-3">
              <button class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.basic {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.basic h3 {
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
.basic .row {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  background: #ff440038;
  box-shadow: 2px 2px 10px #ff4400;
}
.basic .row ul {
  position: absolute;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  top: 150px;
}
ul li {
  list-style: none;
  background: none;
  animation: square 8s infinite;
  /* transition-timing-function: linear; */

  padding: 30px;
  margin: 30px;
}
ul li:nth-child(1) {
  top: 10%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 5px solid silver;
  animation-delay: 8s;
  animation-direction: 20s;
}
ul li:nth-child(2) {
  width: 10px;
  height: 10px;
  border-radius: 40%;
  border: 5px solid silver;
  animation-delay: 7s;
  animation-direction: 18s;
}
ul li:nth-child(3) {
  width: 10px;
  height: 10px;
  border-radius: 30%;
  border: 5px solid silver;
  animation-delay: 6s;
  animation-direction: 16s;
}
ul li:nth-child(4) {
  width: 10px;
  height: 10px;
  border-radius: 20%;
  border: 5px solid silver;
  animation-delay: 5s;
  animation-direction: 14s;
}
ul li:nth-child(5) {
  width: 10px;
  height: 10px;
  border-radius: 10%;
  border: 5px solid silver;
  animation-delay: 4s;
  animation-direction: 12s;
}
ul li:nth-child(6) {
  width: 10px;
  height: 10px;
  border-radius: 20%;
  border: 5px solid silver;
  animation-delay: 5s;
  animation-direction: 10s;
}
ul li:nth-child(7) {
  width: 10px;
  height: 10px;
  border-radius: 30%;
  border: 5px solid silver;
  animation-delay: 6s;
  animation-direction: 8s;
}
ul li:nth-child(8) {
  width: 10px;
  height: 10px;
  border-radius: 40%;
  border: 5px solid silver;
  animation-delay: 7s;
  animation-direction: 6s;
}
.row .col-md-12 {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  z-index: 1;
}
.row .col-md-12 .info{
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  justify-content: center;
}
.col-md-12 .info h4{
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  padding: 10px;
  margin: 0;
  color: #000;
}
.col-md-12 .info p{
  font-size: 1rem;
  font-weight: 500;
  text-align: justify;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
 box-shadow: 2px 2px 5px #ff4400;
 border-left: 6px solid #fff;
}
.row .col-md-12 form {
  padding: 10px;
  margin: 10px;
  width: 100%;
}
.row .col-md-12 form label {
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px;
}


@keyframes square {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(1000px) rotate(600deg);
    opacity: 0;
  }
}
</style>