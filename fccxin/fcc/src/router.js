import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import HomeEn from "./views/HomeEn.vue";
import New from "./views/New.vue";
import NewEn from "./views/NewEn.vue";
import About from "./views/About.vue";
import AboutEn from "./views/AboutEn.vue";
import IndeMobile from "./views/HomeMobie.vue";
import IndeMobileEn from "./components/Index/indexMobileEn.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/en",
      name: "homeEn",
      component: HomeEn
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
      path: "/indeMobile",
      name: "indeMobile",
      component: IndeMobile
    },
    {
      path: "/indeMobileEn",
      name: "indeMobileEn",
      component: IndeMobileEn
    }
  ]
});
