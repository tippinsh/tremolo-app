<script>
import Card from "./Card.vue";
import AddCard from "./AddCard.vue";
import axios from "axios";
import { remove } from "@vue/shared";

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
      baseURL: "http://localhost/api",
      inputVisible: false,
      titleVisible: false,
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
    deleteList() {
      this.$emit("delete-list", this.id);
    },
    removeCard(cardId) {
      axios
        .delete(`${this.baseURL}/cards/${cardId}`)
        .then((response) => {
          for (let i = 0; i < this.list.cards.length; i++) {
            if (this.list.cards[i].id == cardId) {
              this.list.cards.splice(i, 1);
              break;
            }
          }
        })
        .catch((err) => {
          alert("Error deleting cards");
        });
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
        <button @click="deleteList" class="icon">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
    <the-card
      v-for="card in list.cards"
      :card="card"
      :key="card.id"
      @delete-card="removeCard(card.id)"
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

.icon {
  cursor: pointer;
  border: none;
  background: inherit;
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
  box-shadow: 1px 3px 3px rgb(0 0 0 / 0.2);
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
  font-size: 18px;
  height: 20px;
  border-radius: 5px;
  width: 100%;
  margin: 3px;
}
</style>
