console.log("provaJS");

import Vue from "vue";

var app = new Vue({
  el: "#app",
  data: {
    navbar: [
      {
        name: "Home",
      },

      {
        name: "About",
      },

      {
        name: "Contact",
      },
    ],
  },
});
