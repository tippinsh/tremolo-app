<script></script>

<template>
  <div class="container">
    <div class="add-card">
      <p>+ Add a card</p>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  width: 260px;
  margin-left: 8px;
}

.add-card {
  display: flex;
  height: 20px;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  align-items: center;
  padding: 4px 8px;
  border: none;
  outline: inherit;
  background-color: #ffd7be;
}

.add-card:hover {
  opacity: 0.8;
}
</style>
