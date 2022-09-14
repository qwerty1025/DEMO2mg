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
      component: () => import("./components/qrcodeRDer_3")
    }, 

    {
      path: "/",
      name: "QRDer",
      component: () => import("./components/qrcodeRDer_3")
    }, 
    // {
    //   path: "/scUp_1",
    //   name: "QRDer",
    //   component: () => import("./components/scUp_1")
    // }, 
    {
      path: "/scUp_1",
      name: "scUp_1",
      component: () => import("./components/scUp/scUp_1")
    }, 
    {
      path: "/scUp_2",
      name: "scUp_2",
      component: () => import("./components/scUp/scUp_2")
    }, 
    {
      path: "/scUp_3",
      name: "scUp_3",
      component: () => import("./components/scUp/scUp_3")
    },
    
    {
      path: "/scUp_4",
      name: "scUp_4",
      component: () => import("./components/scUp/scUp_4")
    }, 
    {
      path: "/scUp_5",
      name: "scUp_5",
      component: () => import("./components/scUp/scUp_5")
    }, 
    {
      path: "/scUp_6",
      name: "scUp_6",
      component: () => import("./components/scUp/scUp_6")
    }, 

    {
      path: "/scUp_7",
      name: "scUp_7",
      component: () => import("./components/scUp/scUp_7")
    }, 
    {
      path: "/scUp_8",
      name: "scUp_8",
      component: () => import("./components/scUp/scUp_8")
    }, 
    {
      path: "/scUp_9",
      name: "scUp_9",
      component: () => import("./components/scUp/scUp_9")
    }, 

    {
      path: "/scUp_10",
      name: "scUp_10",
      component: () => import("./components/scUp/scUp_10")
    },


    
    // {
    //   path: "/",
    //   name: "bkList",
    //   component: () => import("./components/HelloWorld")
    // }, 
     
  ]
});
