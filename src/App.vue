<script>
import TheNavbar from "./components/layouts/TheNavbar.vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  setup() {},
  components: { TheNavbar },
};
</script>

<template>
  <div class="w-full">
    <TheNavbar />
    <div
      class="max-w-screen-lg px-8 mx-auto pb-24 sm:px-16 slg:px-24"
    >
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>



