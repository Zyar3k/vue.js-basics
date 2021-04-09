const app = Vue.createApp({
  data() {
    return {
      showContent: true,
      title: "the Godfather",
      author: "Mario Puzo",
      age: 18,
      x: 0,
      y: 0,
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
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
