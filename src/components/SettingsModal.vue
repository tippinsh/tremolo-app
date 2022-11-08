<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <h2>Change background colour</h2>
      <div>Insert colours here</div>
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
</style>
