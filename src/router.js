import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    
    {
      path: "/8",
      name: "bkList",
      component: () => import("./components/bdadd8_List")
    }, 

    {
      path: "/",
      name: "bkList",
      component: () => import("./components/HelloWorld")
    }, 
     
  ]
});
