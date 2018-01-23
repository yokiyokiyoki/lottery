import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/main";
import Login from "@/components/login";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/main/:count",
      name: "Main",
      component: Main
    }
  ]
});
