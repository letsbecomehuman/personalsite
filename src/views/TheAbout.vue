<template>
  <div class="flex flex-col gap-8 tracking-wide pt-40">
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose "
    >
      I'm Michael Synan, Project Manager at Kawakami. I'm a long time linux user,
      philosophy nerd, and opensource advocate. I've done data analysis work in Python and R, 
      as well as frontend work with various javascript frameworks. I'm passionate about
      crypto, decentralization and community. 
    </p>
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      I'm currently working on the
      <LinkBtn link="https://nft.kawakami.io">Kawakami Generation Zero</LinkBtn
      > NFT collection, where I work as the Project Manager. We have a play to earn game in development, as well as several other
      NFT-based utilities.
    </p>
    <p
      class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      You can find some of my work on my
      <LinkBtn link="https://github.com/letsbecomehuman">Github</LinkBtn> or on my
      <LinkBtn link="/">Portfolio</LinkBtn> page.
    </p>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
    <div class="flex flex-col gap-5">
      <h3 class="font-theme_bold text-head_text text-3xl">Work</h3>
      <div class="flex flex-col gap-8 py-4">
        <a
          class="flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6"
          v-for="work in works"
          :key="work.id"
          :href="work.link"
        >
          <span class="font-theme_bold text-head_text">{{ work.name }}</span>
          <span class="flex-[1_1_auto]"></span>
          <span class="sm:text-right text-sm sm:text-base">{{
            work.position
          }}</span>
          <span class="text-sm sm:text-base"
            >{{ work.from }} - {{ work.to }}</span
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { useWorkStore } from "../store/workStore";

export default {
  setup() {
    const workStore = useWorkStore();
    const works = workStore.getAllWorks;

    return { works };
  },
};
</script>
