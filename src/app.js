console.log("provaJS");

import Vue from "vue";

var app = new Vue({
  el: "#app",
  data: {
    isVisible: false,
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
    header: [
      {
        name: "SASS",
      },
    ],
    footer: [{}],
  },
  methods: {
    hoverHeader() {
      this.isVisible = !this.isVisible;
    },
  },
});
