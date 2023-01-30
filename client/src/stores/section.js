import { defineStore } from "pinia";

export const useActiveSectionStore = defineStore({
  id: "section",
  state: () => ({
    section: null,
  }),
});
