import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from "element-ui";
import vuetify   from './plugins/vuetify'
// import store     from './plugins/store'
import Print from 'vue-print-nb' 
// import vdnd from 'vue-smooth-dnd'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import PrettyCheckbox from 'pretty-checkbox-vue';
Vue.use(PrettyCheckbox);

import JsonCSV from 'vue-json-csv'
// Vue.use(JsonCSV) 

import axios from 'axios'

// import draggable from 'vuedraggable'
// Vue.use(draggable)
// import vueDragAndDropList from 'vue-drag-and-drop-list'; 
// Vue.use(vueDragAndDropList);

// import vue-easy-dnd from 'vue-easy-dnd'; 
// Vue.use(vue-easy-dnd);


// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

// import vuedraggable from 'vuedraggable'
Vue.use(Print); //註冊 
// Vue.use(vdnd); //註冊 
// Vue.use(vuedraggable); //註冊 
Vue.config.productionTip = false  


import dayjs from 'dayjs';
Vue.prototype.dayjs = dayjs;

import * as PIXI from 'pixi.js'
Vue.use(PIXI); //註冊 

import Swal from 'sweetalert2';
window.Swal = Swal;

new Vue({
  // store,
  axios,
  router,
  JsonCSV,
  // draggable,
  // vueDragAndDropList,
  vuetify, 
  print,
  render: h => h(App)
}).$mount('#app')