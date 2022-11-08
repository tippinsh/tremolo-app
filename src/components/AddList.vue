<script></script>

<template>
  <div class="add-list-container">
    <button class="btn">
      <span id="add-a-list"> + Add another list</span>
    </button>
  </div>
</template>

<style scoped>
.add-list-container {
  width: 271px;
  height: 30px;
  background-color: rgba(214, 214, 214, 0.8);
  border-radius: 5px;
  margin-top: 6px;
}

.add-list-container:hover {
  opacity: 0.8;
}

.add-list-container span {
  font-size: 16px;
}

.btn {
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  width: 271px;
  height: 30px;
  padding: 6px;
  background-color: #ffffff3d;
  border: none;
  border-radius: 5px;
}
</style>
