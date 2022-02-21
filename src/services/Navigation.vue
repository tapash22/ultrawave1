<template>
  <div class="navigation">
    <nav>
      <a class="brand" href="/">
        <img src="../assets/image/log.png" />
      </a>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#client">Clients</a></li>
        <li><button @click="onClick()">Contact</button></li>
      </ul>
    </nav>
    <div
      class="modal"
      id="edit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
      v-if="showModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Contact Form</h5>
          </div>
          <div class="modal-body">
            <div class="left">
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
                  <label>Subject</label>
                  <input class="form-control" type="text" v-model="subject" />
                </div>
                <div class="form-group">
                  <label>Message</label>
                  <textarea class="form-control" v-model="msg"></textarea>
                </div>
                <div class="my-3">
                  <button class="btn btn-primary">Send</button>
                </div>
              </form>
            </div>
            <div class="right">
              <h3>ULTRAWAVE COMMUNICATIONS</h3>
              <address>House No:66,Road No:11,<br> DIT Merul-Budda,Dhaka.</address>
              <h3>Give us a call</h3>
              <address>+8801674345763</address>
              <h3>Send us a Email</h3>
              <address>ultrawave084@gmail.com</address>
              <h3>Follow us</h3>
              <ul>
                <li>
                  <a href=""><i class="fa fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa fa-twitter-square"></i></a>
                </li>
                <li>
                  <a href=""><i class="fa fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="inClose()">
              Close
            </button>
           
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
      showModal: false,
    };
  },
  methods: {
    onClick() {
      this.showModal = true;
    },
    inClose() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.navigation {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  position: fixed;
  z-index: 999;
}
.navigation nav {
  width: 100%;
  height: 100px;
  padding: 0;
  margin: 0;
  display: flex;
  background: #EFF0D1;
  box-shadow: 0 0 10px #FF834F;
}
.navigation nav .brand {
  width: 30%;
  height: 100%;
  padding:0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.navigation nav .brand img {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 5px;
  filter: brightness(110%);
}
.navigation nav ul {
  padding: 5px;
  margin-top: 30px;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.navigation nav ul li {
  padding: 10px;
  margin: 5px;
  list-style: none;
  align-items: center;
}
.navigation nav ul li a {
  padding: 5px;
  margin: 0;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
}

.navigation nav ul li button {
  width: 100px;
  height: 40px;
  padding: 5px;
  display: flex;
  justify-content: center;
  background: #B7C3F3;
  margin-top: -5px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
}
.modal {
  display: block;
  margin-top:10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.modal .modal-content{
  width: 800px;
  height: 480px;
  padding: 0;
  margin-left: -30%;
}
.modal .modal-content .modal-header{
  width: 100%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
  border: none;
  background: #fff;
}
.modal .modal-content .modal-header h5{
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: #ff4500;
  text-transform: uppercase;
}
.modal .modal-content .modal-body{
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  display: flex;
}
.modal .modal-content .modal-body .left{
  width: 50%;
  height: 100%;
  padding: 5px;
  margin: 0;
  border-right: 1px solid #ff4500;
}
.modal .modal-content .modal-body .left form{
  padding:10px;
  margin: 5px;
}
.modal .modal-content .modal-body .left form label{
  font-size: 1.2rem;
  font-weight: 500;
}
.modal .modal-content .modal-body .right{
  padding: 10px;
  margin: 15px;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0.13);
}
.modal .modal-content .modal-body .right h3{
  padding: 5px;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  color: #ff4500;
}
.modal .modal-content .modal-body .right address{
  padding: 10px;
  margin: 0;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
}
.modal .modal-content .modal-body .right ul{
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.modal .modal-content .modal-body .right ul li{
  padding: 0;
  margin:0;
  list-style: none;
}
.modal .modal-content .modal-body .right ul li a{
  padding: 0;
  margin: 0;
}
.modal .modal-content .modal-body .right ul li a i{
  font-size: 1.4rem;
  font-weight: 500;
  padding: 5px;
  margin: 5px;
  color: #000;
}
.modal .modal-content .modal-footer{
  border: none;
  background: #fff;
}

</style>