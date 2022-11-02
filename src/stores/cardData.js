import { defineStore } from "pinia";

export const useCardStore = defineStore("cardData", {
  state: () => ({
    cardContent: [],
    id: 0,
  }),
  actions: {
    addCard(item) {
      this.cardContent.push({ item, id: this.id++ });
    },
  },
});
