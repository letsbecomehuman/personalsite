<script>
import FeaturedProjects from "../components/layouts/FeaturedProjects.vue";
import TheHero from "../components/layouts/TheHero.vue";
import TheSocials from "../components/layouts/TheSocials.vue";
import troisjs from "../plugins/troisjs.vue";
import bg from "../components/bg.vue";
export default {
  setup() {},
  components: { TheHero, TheSocials, FeaturedProjects },
};
</script>

<template>
  <div class="flex flex-col gap-16 mb-16 tracking-wide">
    <TheHero />
    <FeaturedProjects />
  </div>
</template>
