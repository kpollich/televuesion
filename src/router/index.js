import Vue from "vue";
import Router from "vue-router";

import HomePage from "@/pages/HomePage";
import ShowDetailPage from "@/pages/ShowDetailPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage,
      name: "home"
    },
    {
      path: "/shows/:id",
      component: ShowDetailPage,
      name: "showDetail"
    }
  ]
});
