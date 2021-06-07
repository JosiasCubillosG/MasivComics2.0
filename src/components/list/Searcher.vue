<template>
  <div class="searcher-comic columns is-mobile m-0 pt-5 is-flex is-justify-content-center">
    <input
      type="text"
      class="column is-6"
      placeholder="Search your comic."
      v-model="setSearcherComic"
    />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { typesComics } from "@/store/modules/comics/types";

export default {
  name: "Searcher",
  computed: {
    ...mapState(typesComics.PATH, ["searcherComic"]),
    setSearcherComic: {
      get() {
        return this.searcherComic;
      },
      set(value) {
        this.searchComic(value);
      },
    },
  },
  methods: {
    ...mapActions(typesComics.PATH, {
      searchComic: typesComics.actions.SEARCH_COMIC,
    }),
  },
};
</script>
