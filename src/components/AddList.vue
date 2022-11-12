<script></script>

<template>
  <!-- <div class="add-list-container"> -->
  <button class="btn">
    <span id="add-a-list"> + Add another list</span>
  </button>
  <!-- </div> -->
</template>

<style scoped>
.add-list-container {
  width: 262px;
  height: 30px;
  background-color: rgba(214, 214, 214, 0.8);
  border-radius: 3px;
}

.btn:hover {
  opacity: 0.8;
}

.add-list-container span {
  font-size: 14px;
}

.btn {
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 262px;
  height: 30px;
  padding: 6px;
  margin-left: 6px;
  background-color: rgba(214, 214, 214, 0.8);
  border: none;
  border-radius: 3px;
}
</style>
