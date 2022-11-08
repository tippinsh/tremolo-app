<script>
export default {
  props: ["id"],
  data() {
    return {
      message: "",
      id: 1,
      inputVisible: false,
      textVisible: false,
    };
  },
  methods: {
    selectInput() {
      this.inputVisible = !this.inputVisible;
      this.textVisible = !this.textVisible;
    },
  },
};
</script>

<template>
  <div class="card-container">
    <p
      class="card-content"
      @click="selectInput"
      :class="{ disable: textVisible }"
    >
      {{ message }}
    </p>
    <textarea
      class="disable"
      type="text"
      maxlength="255"
      v-model="message"
      @keydown.enter="selectInput"
      :class="{ active: inputVisible }"
    ></textarea>
  </div>
</template>

<style scoped>
.card-container {
  min-height: 30px;
  width: 252px;
  margin: 4px 6px 4px 6px;
  border-radius: 3px;
  padding: 5px;
  background-color: #eeeeee;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 2px 2px rgb(0 0 0 / 0.2);
  cursor: pointer;
  /* margin-bottom: 8px; */
}

.card-content {
  width: 252px;
  height: 54px;
  font-size: 16px;
  margin: 0;
}

textarea {
  border: none;
  background: inherit;
  cursor: pointer;
  outline: none;
  width: 252px;
  overflow: auto;
  resize: none;
  font-family: "Roboto", sans-serif;
  margin: 0;
}

.active {
  display: inline;
  border: none;
  font-size: 16px;
  height: 50px;
  box-shadow: none;
  border-radius: 5px;
  width: 252px;
}
</style>
