<script>
import Card from "./Card.vue";

export default {
  components: {
    "the-card": Card,
  },
  props: ["title"],
  data() {
    return {
      inputVisible: false,
      titleVisible: false,
    };
  },
  methods: {
    selectInput() {
      this.inputVisible = !this.inputVisible;
      this.titleVisible = !this.titleVisible;
    },
  },
};
</script>

<template>
  <div class="list-box">
    <h2 @click="selectInput" :class="{ disable: titleVisible }">{{ title }}</h2>
    <input
      type="text"
      class="disable"
      :class="{ active: inputVisible }"
      @keydown.enter="selectInput"
      v-model="title"
    />
    <the-card></the-card>
  </div>
</template>

<style>
.list-box {
  min-height: 118px;
  width: 272px;
  background-color: #f9f9f9;
  border-radius: 5px;
  line-height: 20px;
  position: relative;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 18px;
  padding-left: 14px;
  cursor: pointer;
}

.disable {
  display: none;
}

.active {
  display: inline;
  padding: 5px;
  margin: 10px;
  border: none;
  font-size: 18px;
}
</style>
