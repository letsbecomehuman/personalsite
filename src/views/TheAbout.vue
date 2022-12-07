<template>
  <div class="flex flex-col gap-8 tracking-wide pt-40 sm:pt-20">
    <h1
        class="text-2xl sm:text-3xl md:text-4xl slg:text-5xl font-theme_bold text-head_text"
      >
        About<span class="text-link_text_hover">.</span>
      </h1>

<div class="grid grid-cols-5 gap-x-6">
  <div class="lg:col-span-2 sm:col-span-5">
    <img src="../assets/imgs/michael_synan.jpg" />
  </div>
  <div class="lg:col-span-3 sm:col-span-5">
    <p class="leading-relaxed text-xl lg:leading-loose ">
      I'm Michael Synan, Project Manager at Kawakami. I'm a long time linux user,
      philosophy nerd, and opensource advocate. I've done data analysis work in Python and R, 
      as well as frontend work with various javascript frameworks. I'm passionate about
      crypto, decentralization and community. 
    </p>
    <p class="leading-relaxed lg:leading-loose text-xl pt-4">
      You can find some of my work on my
      <LinkBtn link="https://github.com/letsbecomehuman">Github</LinkBtn> or on my
      <LinkBtn link="/">Portfolio</LinkBtn> page.
    </p>
  </div>
</div>









    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 mt-6" />
    <div class="flex flex-col gap-1">
<TheSocials />
    </div>
  </div>
</template>
<script>
import { useWorkStore } from "../store/workStore";
import TheSocials from "../components/layouts/TheSocials.vue";

export default {
  setup() {
    const workStore = useWorkStore();
    const works = workStore.getAllWorks;

    return { works };
  },
  components: { TheSocials }
};
</script>
