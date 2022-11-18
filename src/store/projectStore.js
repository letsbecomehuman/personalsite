import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Brew Factory",
        image: new URL("../assets/featured/brewfactory.png", import.meta.url)
          .href,
        description:
          "Brew Factory is an online coffee store I helped build from the ground up, from business plan to website.",
        tech: ["Shopify"],
        link: "https://brewfactory.io/",
        featured: true,
      },
      {
        id: 2,
        name: "Big City Dog Walkers",
        image: new URL("../assets/featured/bigcitydogwalkers.png", import.meta.url)
          .href,
        description:
          "This is a small side-business that I helped build for Dog Walking in NYC.",
        tech: ["Vue.js", "Nuxt", "Bootstrap.js"],
        link: "https://bigcitydogwalkers.com/",
      },
      {
        id: 3,
        name: "Kawakami",
        image: new URL("../assets/featured/kawakami.png", import.meta.url).href,
        description:
          "Kawakami is a web3 company that I am a Project Manager for, making decisions accross many areas of the company.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://kawakami.io/",
        featured: true,
      },
      {
        id: 4,
        name: "Discord Price Bot",
        image: new URL("../assets/featured/github.jpeg", import.meta.url).href,
        description:
          "I built a cool discord price bot that uses the CoinGecko price feed.",
        tech: ["Python"],
        link: "https://github.com",
      },

    ],
    grave: [
      {
      },
    ],
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state) =>
      state.projects.filter((project) => project.featured),
    getGraveProjects: (state) => state.grave,
  },
});
