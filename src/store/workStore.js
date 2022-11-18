import { defineStore } from "pinia";

export const useWorkStore = defineStore("workStore", {
  state: () => ({
    works: [
      {
        id: 1,
        name: "Kawakami",
        position: "Project Manager",
        from: "2021",
        to: "Cur.",
        link: "https://kawakami.io/",
      },
    ],
  }),
  getters: {
    getAllWorks: (state) => state.works,
  },
});
