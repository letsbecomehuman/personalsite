<template>
  <div class="flex flex-col gap-16 slg:gap-24 mt-20 sm:mt-20">
    <div class="flex flex-col gap-8">
      <h1
        class="text-2xl sm:text-3xl md:text-4xl slg:text-5xl font-theme_bold text-head_text"
      >
        Projects<span class="text-link_text_hover">.</span>
      </h1>
      <p class="text-xl leading-relaxed slg:text-lg lg:leading-loose ">
        Here are projects I've worked on in my past year of web development and project management.
      </p>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
  </div>
    <div class="flex flex-col items-center justify-center gap-28 w-full mx-auto">
      <MainProjectItem
        v-for="proj in projects"
        :key="proj.id"
        :name="proj.name"
        :image="proj.image"
        :description="proj.description"
        :link="proj.link"
      />
    </div>
  </div>
</template>

<script>
import MainProjectItem from "../components/ui/MainProjectItem.vue";
import { useProjectStore } from "../store/projectStore";

export default {
  components: { MainProjectItem },
  setup() {
    const projectStore = useProjectStore();
    const projects = projectStore.getAllProjects;
    const grave = projectStore.getGraveProjects;

    return { projects, grave };
  },
};
</script>

<style>
.bg-squigly {
  height: 10px;
}

</style>