<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-x-1">
      <SocialIcon
        title="Github"
        link="https://github.com/letsbecomehuman"
        icon="ant-design:github-filled"
      />
      <SocialIcon
        title="Twitter"
        link="https://twitter.com/0x_forest"
        icon="ant-design:twitter-outlined"
      />
      <SocialIcon
        title="LinkedIn"
        link="https://www.linkedin.com/in/hellomichaelsynan/"
        icon="ant-design:linkedin-filled"
      />
    </div>
    <ActionButton link="mailto:mikesynan@gmail.com">Email Me</ActionButton>
  </div>
</template>

<script>
import SocialIcon from "../ui/SocialIcon.vue";
import ActionButton from "../ui/ActionButton.vue";

export default {
  components: { SocialIcon, ActionButton },
};
</script>
