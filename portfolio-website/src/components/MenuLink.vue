<template>
  <div class="before:transition-all before:content=[''] before:bg-white before:absolute before:top-[-2px] before:h-px before:w-0 hover:before:w-full" :class="{ 'before:w-full': isActive }">
      <h4 class="menu-heading">{{ heading }}</h4>
      <i class="gg-arrow-top-right"></i>
    <p class="text-xs tracking-wide">{{ subHeading }}</p>
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

