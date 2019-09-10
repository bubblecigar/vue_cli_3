import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from '@/firebaseConfig.js'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD335CxxSSB7H6yXZdMJ6JTS9OXL8vQcY",
  authDomain: "vue-cli-3-4295f.firebaseapp.com",
  databaseURL: "https://vue-cli-3-4295f.firebaseio.com",
  projectId: "vue-cli-3-4295f",
  storageBucket: "vue-cli-3-4295f.appspot.com",
  messagingSenderId: "950038836578",
  appId: "1:950038836578:web:a79bd367f7f5b88dd1e83b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
