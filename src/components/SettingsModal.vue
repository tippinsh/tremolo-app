<script>
export default {
  props: ["lb", "orange", "purple"],
  emits: ["toggle-theme"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    base() {
      this.$emit("base");
    },
    lightBlueTheme() {
      this.$emit("light-blue-theme");
    },
    orangeTheme() {
      this.$emit("orange-theme");
    },
    purpleTheme() {
      this.$emit("purple-theme");
    },
  },
};
</script>

<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <h2>Change board theme</h2>
      <div class="container">
        <div class="board-box" @click="$emit('base')">
          <div class="header-base"></div>
          <div class="body-base"></div>
        </div>
        <div class="board-box" @click="$emit('light-blue-theme')">
          <div class="header-1"></div>
          <div class="body-1"></div>
        </div>
        <div class="board-box" @click="$emit('orange-theme')">
          <div class="header-2"></div>
          <div class="body-2"></div>
        </div>
        <div class="board-box" @click="$emit('purple-theme')">
          <div class="header-3"></div>
          <div class="body-3"></div>
        </div>
      </div>
    </div>
    <div class="close" @click="$emit('close-modal')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="close-btn"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-btn {
  color: white;
  height: 30px;
  width: 30px;
}

.modal {
  text-align: center;
  background-color: white;
  height: 300px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.board-box {
  width: 150px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
}

.header-1 {
  width: 100%;
  height: 20%;
  background-color: var(--color-lb-header);
}
.body-1 {
  width: 100%;
  height: 80%;
  background-color: var(--color-lb-body);
}
.header-2 {
  width: 100%;
  height: 20%;
  background-color: var(--color-orange-header);
}
.body-2 {
  width: 100%;
  height: 80%;
  background-color: var(--color-orange-body);
}
.header-3 {
  width: 100%;
  height: 20%;
  background-color: var(--color-purple-header);
}
.body-3 {
  width: 100%;
  height: 80%;
  background-color: var(--color-purple-body);
}
.header-base {
  width: 100%;
  height: 20%;
  background-color: var(--color-header);
}
.body-base {
  width: 100%;
  height: 80%;
  background-color: var(--color-base);
}
</style>
