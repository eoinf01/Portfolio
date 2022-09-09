<template>
  <div class="before:transition-all before:content=[''] before:bg-black dark:before:bg-white before:absolute before:top-[-2px] before:h-px before:w-0 hover:before:w-full" :class="{ 'before:w-full': isActive }">
      <h4 class="menu-heading text-black dark:text-white font-bold">{{ heading }}</h4>
  </div>
</template>
<script>
import { mapStores } from "pinia";
import { useActiveSectionStore } from "../stores/section";
export default {
  name: "menu-link",
  props: {
    heading: String,
    subHeading: String,
    to: String,
  },
  computed: {
    ...mapStores(useActiveSectionStore),
    isActive() {
     return this.sectionStore.section === this.to;
    },
  },
};
</script>

