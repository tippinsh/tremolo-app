<script>
export default {
  props: ["id"],
  data() {
    return {
      message: "",
      id: 1,
    };
  },
};
</script>

<template>
  <div class="card-container">
    <p>{{ message }}</p>
    <textarea type="text" maxlength="255" rows="2" :value="message"></textarea>
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
  box-shadow: 0 2px 2px rgb(0 0 0 / 0.2);
  cursor: pointer;
  margin-bottom: 8px;
}

textarea {
  border: none;
  background: inherit;
  cursor: pointer;
  outline: none;
  width: 100%;
  overflow: auto;
  resize: none;
  height: 100%;
  font-family: "Roboto", sans-serif;
}
</style>
