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
          isFav: true,
        },
        {
          title: "Godfather 2",
          author: "Francis Ford Coppola",
          premiere: 1974,
          img: "assets/g2.jpg",
          isFav: false,
        },
        {
          title: "Godfather 3",
          author: "Francis Ford Coppola",
          premiere: 1990,
          img: "assets/g3.jpg",
          isFav: false,
        },
      ],
    };
  },
  methods: {
    toggleShowContent() {
      this.showContent = !this.showContent;
    },
    toggleFav(data) {
      data.isFav = !data.isFav;
    },
  },
  computed: {
    filteredMovies() {
      return this.movies.filter((movie) => movie.isFav);
    },
  },
});

app.mount("#app");
