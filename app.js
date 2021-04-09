const app = Vue.createApp({
  data() {
    return {
      showContent: true,
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
    toggleShowContent() {
      this.showContent = !this.showContent;
    },
  },
});

app.mount("#app");
