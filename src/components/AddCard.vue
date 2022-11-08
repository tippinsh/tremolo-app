<script></script>

<template>
  <div class="container">
    <div class="add-card">
      <p class="add-card-text">+ Add a card</p>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  width: 262px;
  padding: 5px;
}

.add-card-text {
  font-size: 14px;
}

.add-card {
  display: flex;
  height: 20px;
  width: 252px;
  border-radius: 3px;
  cursor: pointer;
  align-items: center;
  padding: 6px;
  border: none;
  outline: inherit;
  background-color: #eeeeee;
}

.add-card:hover {
  opacity: 0.8;
}
</style>
