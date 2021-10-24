import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta:{
      requiresVisitor: true
    }

  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      meta:{
        requiresAuth: true
      }
  },
  {
    path: '/entradas',
    name: 'Entrada',
    component: () => import(/* webpackChunkName: "entradas" */ "../views/Entradas.vue"),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/saidas',
    name: 'Saida',
    component: () => import(/* webpackChunkName: "entradas" */ "../views/Saidas.vue"),
    meta:{
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
