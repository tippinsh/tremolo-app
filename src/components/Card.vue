<script>
export default {
  props: {
    card: Object,
  },
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
        {{ card.content }}
      </p>
      <textarea
        class="disable"
        rows="4"
        cols="33"
        v-model="card.content"
        @keydown.enter="selectInput"
        :class="{ active: inputVisible }"
      >
      </textarea>
    </div>
    <div class="delete-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="btn"
        @click="deleteCard"
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
  min-height: 10px;
  width: 252px;
  margin: 4px 6px 4px 6px;
  border-radius: 3px;
  padding: 5px 5px 2px 5px;
  background-color: #f4f3ee;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  box-shadow: 1px 3px 3px rgb(0 0 0 / 0.2);
}

.inner-card {
  cursor: pointer;
}

.delete-btn {
  width: 245px;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  border-radius: 3px;
}

.btn {
  height: 15px;
  width: 15px;
  border-radius: 3px;
  cursor: pointer;
  color: #6b778c;
}

.card-content {
  width: 252px;
  height: 82px;
  font-size: 16px;
  margin: 0;
}

textarea {
  background: inherit;
  cursor: pointer;
  width: 252px;
  height: auto;
  resize: none;
  font-family: "Roboto", sans-serif;
}

.active {
  display: inline;
  border: none;
  font-size: 16px;
  box-shadow: none;
  border-radius: 5px;
  width: 248px;
}
</style>
