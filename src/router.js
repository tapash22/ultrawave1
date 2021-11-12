import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import GraphicsSolution from "./components/pages/GraphicsSolution.vue";
import WebSolution from "./components/pages/WebSolution.vue";
import PhotographySolution from './components/pages/PhotographySolution.vue';
import DigitalSolution from './components/pages/DigitalSolution.vue';

import Basic from './components/pages/Basic.vue';
import Silver from './components/pages/Silver.vue';
import Gold from './components/pages/Gold.vue';


const routes = [
  { path: "/", name: "Home", component: Home,children:[
   
  ] },
  { path:"/graphics", component:GraphicsSolution },
  { path:"/website", component: WebSolution },
  { path:"/photoraphy", component:PhotographySolution },
  { path:"/dm", component: DigitalSolution },
  { path:"/basic", component: Basic },
  { path:"/silver", component: Silver },
  { path:"/gold", component: Gold },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
