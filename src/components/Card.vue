<script>
export default {
  props: ["content"],
  data() {
    return {};
  },
};
</script>

<template>
  <div class="card-container">
    {{ content }}
  </div>
</template>

<style>
.card-container {
  min-height: 20px;
  width: 240px;
  margin-left: 7px;
  margin-right: 10px;
  border-radius: 3px;
  padding: 7px 10px 2px;
  position: relative;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  cursor: pointer;
  margin-bottom: 10px;
}
</style>
