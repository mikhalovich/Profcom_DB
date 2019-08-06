import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import messagePlugin from "./utils/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);

firebase.initializeApp({
  apiKey: "AIzaSyDGXP5Q1A1LqPk4Bg-5EjxQkapLGRaxAog",
  authDomain: "profcomdb-6eeb5.firebaseapp.com",
  databaseURL: "https://profcomdb-6eeb5.firebaseio.com",
  projectId: "profcomdb-6eeb5",
  storageBucket: "",
  messagingSenderId: "378541887594",
  appId: "1:378541887594:web:d48b324eabb5c9f8"
});
let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
