<script>
import TheHeader from "./components/Header.vue";
import TheList from "./components/List.vue";
import AddList from "./components/AddList.vue";

export default {
  components: {
    "the-header": TheHeader,
    "the-list": TheList,
    "add-list": AddList,
  },
  data() {
    return {
      listItems: [
        {
          ListId: 1,
          title: "To Do",
        },
      ],
      cardItems: [
        {
          cardId: 1,
          content: "",
        },
      ],
      nextListId: 2,
      newListTitle: "Enter your list title",
    };
  },
  methods: {
    addNewList() {
      this.listItems.push({
        id: this.nextListId++,
        title: this.newListTitle,
      });
    },
  },
};
</script>

<template>
  <the-header></the-header>
  <h1>Board title</h1>
  <div class="board-container">
    <div class="list-container">
      <the-list v-for="list in listItems" :title="list.title"></the-list>
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

h1 {
  font-size: 22px;
  color: #fff;
  padding-left: 25px;
}
</style>
