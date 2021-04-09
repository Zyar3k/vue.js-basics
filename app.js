const app = Vue.createApp({
  data() {
    return {
      showContent: true,
      movies: [
        {
          title: "the Godfather",
          author: "Francis Ford Coppola",
          premiere: 1972,
        },
        {
          title: "the Godfather 2",
          author: "Francis Ford Coppola",
          premiere: 1974,
        },
        {
          title: "the Godfather 3",
          author: "Francis Ford Coppola",
          premiere: 1990,
        },
      ],
    };
  },
  methods: {
    toggleShowContent() {
      this.showContent = !this.showContent;
    },
  },
});

app.mount("#app");
