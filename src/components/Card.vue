<script>
export default {
  props: ["message", "id"],
  data() {
    return {
      inputVisible: false,
      textVisible: false,
    };
  },
  methods: {
    selectInput() {
      this.inputVisible = !this.inputVisible;
      this.textVisible = !this.textVisible;
    },
    deleteCard() {
      this.$emit("delete-card", this.id);
    },
  },
};
</script>

<template>
  <div class="card-container">
    <div class="inner-card">
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
    <div class="delete-btn" @click="deleteCard()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="btn"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  min-height: 30px;
  width: 252px;
  margin: 4px 6px 4px 6px;
  border-radius: 3px;
  padding: 5px 5px 2px 5px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  box-shadow: 0 2px 2px rgb(0 0 0 / 0.2);
}

.inner-card {
  cursor: pointer;
}

.delete-btn {
  padding: 3px;
  width: 245px;
  height: 30px;
  display: flex;
  justify-content: flex-end;
}

.btn {
  height: 20px;
  width: 20px;
  border-radius: 3px;
  cursor: pointer;
  padding: 4px;
}

.btn:hover {
  background-color: rgba(214, 214, 214, 0.8);
}

.card-content {
  width: 252px;
  height: 40px;
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
  height: 31px;
  box-shadow: none;
  border-radius: 5px;
  width: 252px;
}
</style>
