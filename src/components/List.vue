<script>
import Card from "./Card.vue";
import AddCard from "./AddCard.vue";
import axios from "axios";

export default {
  components: {
    "the-card": Card,
    "add-card": AddCard,
  },
  props: {
    list: Object,
  },
  data() {
    return {
      inputVisible: false,
      titleVisible: false,
      baseURL: "http://localhost/api",
      newMessage: "",
    };
  },
  methods: {
    selectInput() {
      this.inputVisible = !this.inputVisible;
      this.titleVisible = !this.titleVisible;
    },
    addNewCard() {
      axios
        .post(`${this.baseURL}/cards`, {
          content: "New Card",
          list_id: this.list.id,
        })
        .then((response) => {
          this.list.cards.push(response.data);
        });
    },
    removeCard(cardID) {
      const identifiedCard = this.cardItems.findIndex(
        (cards) => cards.id === cardID
      );
      this.cardItems.splice(identifiedCard, 1);
    },
  },
};
</script>

<template>
  <div class="list-box">
    <div class="title-contents">
      <div>
        <h2
          class="list-title"
          @click="selectInput"
          :class="{ disable: titleVisible }"
        >
          {{ list.name }}
        </h2>
        <input
          type="text"
          class="disable"
          :class="{ active: inputVisible }"
          @keydown.enter="selectInput"
          v-model="list.name"
        />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="menu-btn"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
    <the-card v-for="card in list.cards" :card="card" :key="card.id"></the-card>
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

.title-contents {
  display: flex;
  justify-content: space-between;
  width: 256px;
  padding: 5px 5px 5px 0;
  align-items: center;
  height: 30px;
  background-color: #f4f3ee;
  margin-left: 6px;
  margin-bottom: 3px;
  border-radius: 3px;
  box-shadow: 1px 3px 3px rgb(0 0 0 / 0.4);
}

.menu-btn {
  width: 20px;
  height: 20px;
  border-radius: 3px;
  padding: 4px;
  cursor: pointer;
  color: #6b778c;
  margin-top: 4px;
}

.list-title {
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
  height: 20px;
  border-radius: 5px;
  width: 150px;
}

.disable {
  display: none;
}

.active {
  display: inline;
  padding: 5px;
  border: none;
  font-size: 18px;
  height: 20px;
  box-shadow: none;
  border-radius: 5px;
  width: 150px;
  margin: 3px;
}
</style>
