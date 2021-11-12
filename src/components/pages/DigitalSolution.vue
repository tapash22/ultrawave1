<template>
  <div class="marketing">
    <div class="container">
      <h3>Our Works</h3>
      <div class="row">
        <div class="col-md-12">
          <div class="card card-1">
            <h4>SEO</h4>
            <p>
              A curated set of ES5/ES6/TypeScript wrappers for plugins to easily
              add any native functionality to your Ionic apps.
            </p>
          </div>

          <div class="card card-2">
            <h4>Email Marketing</h4>
            <p>
              A curated set of ES5/ES6/TypeScript wrappers for plugins to easily
              add any native functionality to your Ionic apps.
            </p>
          </div>

          <div class="card card-3">
            <h4>Bulk SMS</h4>
            <p>
              A curated set of ES5/ES6/TypeScript wrappers for plugins to easily
              add any native functionality to your Ionic apps.
            </p>
          </div>
          <div class="card card-2">
            <h4>Boosting</h4>
            <p>
              A curated set of ES5/ES6/TypeScript wrappers for plugins to easily
              add any native functionality to your Ionic apps.
            </p>
          </div>

          <div class="card card-1">
            <h4>Facebook Page Maintain</h4>
            <p>
              A curated set of ES5/ES6/TypeScript wrappers for plugins to easily
              add any native functionality to your Ionic apps.
            </p>
          </div>
          <div class="card card-3">
            <h4>Brand Promotion</h4>
            <p>
              A curated set of ES5/ES6/TypeScript wrappers for plugins to easily
              add any native functionality to your Ionic apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
          

<style scoped>
.marketing {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
}
.marketing h3 {
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
.marketing .row {
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
}
.marketing .row .col-md-12 {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 5px;
}
.marketing .row .col-md-12 .card {
  width: 100%;
  height: 150px;
  padding: 5px;
  margin: 5px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  padding: 14px 80px 18px 36px;
}
.marketing .row .col-md-12 .card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  cursor: pointer;
}
.marketing .row .col-md-12 .card h4 {
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  padding: 5px;
  margin: 0;
  text-transform: uppercase;
}
.marketing .row .col-md-12 .card p {
  font-size: 1rem;
  font-weight: 500;
  padding: 5px;
  margin-left: 10%;
  margin-right: 10%;
  text-align: justify;
}
.card-1 {
  background-image: url(https://ionicframework.com/img/getting-started/ionic-native-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 100px;
}

.card-2 {
  background-image: url(https://ionicframework.com/img/getting-started/components-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 100px;
}

.card-3 {
  background-image: url(https://ionicframework.com/img/getting-started/theming-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 100px;
}
</style>