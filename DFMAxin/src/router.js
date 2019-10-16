import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import HomeEn from "./views/HomeEn.vue";
import New from "./views/New.vue";
import NewEn from "./views/NewEn.vue";
import About from "./views/About.vue";
import AboutEn from "./views/AboutEn.vue";
import IndexMobile from "./views/indexMobile.vue";
import IndexMobileEn from "./views/indexMobileEn.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "homeEn",
      component: HomeEn
    },
    {
      path: "/cn",
      name: "home",
      component: Home
    },
    {
      path: "/new",
      name: "new",
      component: New
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/newEn",
      name: "newEn",
      component: NewEn
    },
    {
      path: "/aboutEn",
      name: "aboutEn",
      component: AboutEn
    },
    {
      path: "/indexMobile",
      name: "indexMobile",
      component: IndexMobile
    },
    {
      path: "/indexMobileEn",
      name: "indexMobileEn",
      component: IndexMobileEn
    }
  ]
});

