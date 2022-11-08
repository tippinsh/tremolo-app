<script>
import TheHeader from "./components/Header.vue";
import TheList from "./components/List.vue";
import AddList from "./components/AddList.vue";
import Card from "./components/Card.vue";
import SettingsModal from "./components/SettingsModal.vue";

export default {
  components: {
    "the-header": TheHeader,
    "the-list": TheList,
    "add-list": AddList,
    "the-card": Card,
    "settings-modal": SettingsModal,
  },
  data() {
    return {
      listItems: [
        {
          ListId: 1,
          title: "To Do",
        },
      ],
      nextListId: 2,
      newListTitle: "Enter your list title",
      boardTitle: "Board Title",
      inputVisible: false,
      titleVisible: false,
    };
  },
  methods: {
    addNewList() {
      this.listItems.push({
        id: this.nextListId++,
        title: this.newListTitle,
      });
    },
    selectInput() {
      this.inputVisible = !this.inputVisible;
      this.titleVisible = !this.titleVisible;
    },
  },
};
</script>

<template>
  <the-header></the-header>
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
        v-for="list in listItems"
        :title="list.title"
        :key="list.id"
      ></the-list>
      <add-list @click="addNewList"></add-list>
    </div>
  </div>
</template>

<style>
.board-container {
  display: flex;
  margin-left: 20px;
}

.list-container {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
}

.board-title {
  font-size: 22px;
  color: #eeeeee;
  padding-left: 30px;
  width: 150px;
  cursor: pointer;
}

.disable {
  display: none;
}

.title {
  display: inline;
  padding: 5px;
  margin: 10px 10px 10px 25px;
  border: none;
  font-size: 22px;
  height: 20px;
  background: none;
  color: #eeeeee;
  border: none;
  box-shadow: none;
}
</style>
