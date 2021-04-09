const app = Vue.createApp({
  data() {
    return {
      url: "https://zyar3k.github.io/portfolio/",
      showContent: true,
      movies: [
        {
          title: "Godfather",
          author: "Francis Ford Coppola",
          premiere: 1972,
          img: "assets/g1.jpg",
        },
        {
          title: "Godfather 2",
          author: "Francis Ford Coppola",
          premiere: 1974,
          img: "assets/g2.jpg",
        },
        {
          title: "Godfather 3",
          author: "Francis Ford Coppola",
          premiere: 1990,
          img: "assets/g3.jpg",
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
