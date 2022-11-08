<script>
import Card from "./Card.vue";
import AddCard from "./AddCard.vue";

export default {
  components: {
    "the-card": Card,
    "add-card": AddCard,
  },
  props: {
    title: String,
  },
  data() {
    return {
      inputVisible: false,
      titleVisible: false,
      cardItems: [
        {
          id: 1,
          message: "",
        },
      ],
      nextCardId: 2,
      newMessage: "",
    };
  },
  methods: {
    selectInput() {
      this.inputVisible = !this.inputVisible;
      this.titleVisible = !this.titleVisible;
    },
    addNewCard() {
      this.cardItems.push({
        id: this.nextCardId++,
        message: this.newMessage,
      });
    },
    removeCard(cardID) {
      const identifiedCard = this.cardItems.findIndex(
        (cards) => cards.id === cardID
      );
      this.cardItems.splice(identifiedCard, 1);
      console.log(identifiedCard);
    },
  },
};
</script>

<template>
  <div class="list-box">
    <h2
      class="list-title"
      @click="selectInput"
      :class="{ disable: titleVisible }"
    >
      {{ title }}
    </h2>
    <input
      type="text"
      class="disable"
      :class="{ active: inputVisible }"
      @keydown.enter="selectInput"
      v-model="title"
    />
    <the-card
      v-for="cards in cardItems"
      :key="cards.id"
      :message="cards.message"
      :id="cards.id"
      @delete-card="removeCard"
    ></the-card>
    <add-card @click="addNewCard"></add-card>
  </div>
</template>

<style scoped>
.list-box {
  min-height: 135px;
  width: 272px;
  border-radius: 5px;
  line-height: 20px;
  position: relative;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}

.list-title {
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
  height: 20px;
  background-color: #eeeeee;
  margin: 6px;
  border-radius: 5px;
  width: 252px;
}

.disable {
  display: none;
}

.active {
  display: inline;
  padding: 5px;
  margin: 6px;
  border: none;
  font-size: 18px;
  height: 20px;
  box-shadow: none;
  border-radius: 5px;
  width: 252px;
}
</style>
