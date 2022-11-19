<template>
  <div class="flex flex-col gap-2 lg:gap-4">
    <h2 class="text-head_text sm:text-xl md:text-3xl md:leading-normal sm:w-5/6 slg:text-4xl slg:leading-relaxed font-theme_bold text-head_
    text font-theme_bold text-2xl">Featured Projects</h2>
    <p>Here are some of the projects that I'm proud of.</p>
    <div
      class="grid grid-cols-1 slg:grid-cols-2 gap-7 sm:gap-6 sm:gap-x-0 pt-8 sm:w-full slg:w-full"
    >
      <ProjectItem
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :image="project.image"
        :description="project.description"
        :tech="project.tech"
        :link="project.link"
      />
    </div>
  </div>
</template>
<script>
import { useProjectStore } from "../../store/projectStore";
import ProjectItem from "../ui/ProjectItem.vue";

export default {
  setup() {
    const projectStore = useProjectStore();
    const projects = projectStore.getFeaturedProjects;

    return { projects };
  },
  components: { ProjectItem },
};
</script>
