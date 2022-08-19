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
      path: "/QRDer",
      name: "QRDer",
      component: () => import("./components/qrcodeRDer_2")
    }, 

    {
      path: "/",
      name: "QRDer",
      component: () => import("./components/qrcodeRDer_2")
    }, 

    // {
    //   path: "/",
    //   name: "bkList",
    //   component: () => import("./components/HelloWorld")
    // }, 
     
  ]
});
