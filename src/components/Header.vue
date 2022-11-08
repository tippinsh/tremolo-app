<script>
import { Cog8ToothIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    "settings-icon": Cog8ToothIcon,
  },
};
</script>

<template>
  <header>
    <div id="logo">
      <img class="img-logo" src="@/assets/logo_transparent.png" />
    </div>
    <settings-icon class="settings-icon"></settings-icon>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: var(--color-header);
  height: 50px;
  display: flex;
  justify-content: space-between;
}

.settings-icon {
  fill: white;
  height: 20px;
  padding: 15px;
  cursor: pointer;
}

.img-logo {
  width: 90%;
  height: 90%;
  object-fit: contain;
}

#logo {
  width: 70px;
  height: 40px;
  margin-left: 25px;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
}

#logo:hover {
  background-color: hsla(0, 0%, 100%, 0.3);
}
</style>
