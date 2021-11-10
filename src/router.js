import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Services from "./components/pages/Services.vue";
import Contactus from "./components/pages/Contactus.vue";

const routes = [
  { path: "/", name: "Home", component: Home,children:[
    { path: "about", name: "About", component: About },
    { path: "services", name: "Services", component: Services },
    { path: "contactus", name: "Contactus", component: Contactus },
  ]
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
