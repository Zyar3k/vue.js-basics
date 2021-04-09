const app = Vue.createApp({
  data() {
    return {
      title: "the Godfather",
      author: "Mario Puzo",
      age: 18,
    };
  },
  methods: {
    changeTitle(title) {
      // this.title = "Buh bub blur";
      this.title = "Mandana";
    },
  },
});

app.mount("#app");
