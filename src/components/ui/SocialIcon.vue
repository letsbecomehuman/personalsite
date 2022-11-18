<template>
  <a :href="link" :title="title">
    <Icon
      :icon="icon"
      width="35"
      class="text-p_text rounded-sm hover:bg-border_sm p-1 transition-all"
    />
  </a>
</template>
<script>
export default {
  setup() {},
  props: ["link", "icon", "title"],
};
</script>
