<script>
import { Cog8ToothIcon } from "@heroicons/vue/24/solid";
import SettingsModal from "./SettingsModal.vue";

export default {
  components: {
    "settings-icon": Cog8ToothIcon,
    "settings-modal": SettingsModal,
  },
  data() {
    return {
      modal: false,
      lightBlue: false,
      purple: false,
      orange: false,
      base: false,
    };
  },
  methods: {
    openModal() {
      this.$emit("open-modal");
    },
  },
};
</script>

<template>
  <header class="base">
    <settings-modal v-show="modal"></settings-modal>
    <div id="logo">
      <img class="img-logo" src="@/assets/logo_transparent.png" />
    </div>
    <settings-icon class="settings-icon" @click="openModal()"></settings-icon>
  </header>
</template>

<style>
.base {
  width: 100%;
  background-color: var(--color-header);
  height: 5%;
  display: flex;
  justify-content: space-between;
}

.lb {
  background-color: var(--color-lb-header);
}

.orange {
  background-color: var(--color-orange-header);
}

.purple {
  background-color: var(--color-purple-header);
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
