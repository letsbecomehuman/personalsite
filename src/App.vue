<script>
import TheNavbar2 from "./components/layouts/TheNavbar2.vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  setup() {},
  components: { TheNavbar2 },
};
</script>

<template>
  <div class="w-full">
    <TheNavbar2 />
    <div
      class="max-w-screen-lg px-8 mx-auto pb-24 sm:px-16 slg:px-24"
    >
      <router-view v-slot="{ Component }">
        <transition name="fade"  mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>

.fade-enter-active,
.fade-leave-active
    {transition: opacity .18s}

.fade-enter,
.fade-leave-to
    {opacity: 0}

</style>

