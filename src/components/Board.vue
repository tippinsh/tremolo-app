<script>
import TheHeader from "./Header.vue";
import TheList from "./List.vue";
import AddList from "./AddList.vue";
import SettingsModal from "./SettingsModal.vue";
import axios from "axios";

export default {
  components: {
    "the-header": TheHeader,
    "the-list": TheList,
    "add-list": AddList,
    "settings-modal": SettingsModal,
  },
  mounted() {
    this.loadListsFromApi();
  },
  data() {
    return {
      baseURL: "http://localhost/api",
      lists: [],
      boardTitle: "Board title",
      inputVisible: false,
      titleVisible: false,
      showModal: false,
      themes: ["theme1", "theme2", "theme3"],
      themeIndex: -1,
    };
  },
  methods: {
    addNewList() {
      axios
        .post(`${this.baseURL}/todolists`, {
          name: "New List",
        })
        .then((response) => {
          this.lists.push(response.data);
        });
    },
    selectInput() {
      this.inputVisible = !this.inputVisible;
      this.titleVisible = !this.titleVisible;
    },
    triggerModal() {
      showModal = true;
    },
    checkColour(colour) {
      this.themeIndex = colour < 4 ? colour - 1 : -1;
    },
    loadListsFromApi() {
      axios.get(`${this.baseURL}/todolists`).then((response) => {
        const data = response.data;
        this.lists = data;
      });
    },
    removeList(listID) {
      axios.delete(`${this.baseURL}/todolists/${listID}`).then((response) => {
        let index = this.lists.indexOf(listID);
        this.lists.splice(index, 1);
      });
    },
  },
};
</script>

<template>
  <the-header @open-modal="showModal = true"></the-header>
  <section class="board" :class="themeIndex != -1 ? themes[themeIndex] : ''">
    <h1
      class="board-title"
      @click="selectInput"
      :class="{ disable: titleVisible }"
    >
      {{ boardTitle }}
    </h1>
    <input
      type="text"
      class="disable"
      :class="{ title: inputVisible }"
      @keydown.enter="selectInput"
      v-model="boardTitle"
    />

    <div class="board-container">
      <div class="list-container">
        <the-list
          v-for="list in lists"
          :list="list"
          :key="list.id"
          @delete-list="removeList(list.id)"
        ></the-list>
        <add-list @click="addNewList"></add-list>
      </div>
    </div>
  </section>
  <settings-modal
    v-show="showModal"
    @close-modal="showModal = false"
    @toggle-theme="checkColour($event)"
  ></settings-modal>
</template>

<style>
body {
  min-height: 100vh;
  width: 100%;
}

.board {
  background-color: var(--color-base);
  position: absolute;
  min-height: 100%;
  width: 100%;
}

.theme1 {
  background-color: var(--color-themeOne-body);
}

.theme2 {
  background-color: var(--color-themeThree-body);
}

.theme3 {
  background-color: var(--color-themeTwo-body);
}

.board-container {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  max-width: 100%;
}

.list-container {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-items: center;
}

.board-title {
  font-size: 30px;
  color: #e26d5c;
  padding-left: 30px;
  margin-bottom: 30px;
  width: 256px;
  height: 25px;
  cursor: pointer;
  background-color: inherit;
  font-family: "Abril Fatface", cursive;
}

.disable {
  display: none;
}

.title {
  display: inline;
  padding: 8px;
  margin: 25px 10px 15px 25px;
  border-radius: 3px;
  border: none;
  font-size: 30px;
  height: 20px;
  color: #e26d5c;
  box-shadow: none;
  font-family: "Abril Fatface", cursive;
}

input:focus {
  outline: none;
}
</style>
