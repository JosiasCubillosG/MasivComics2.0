<template>
  <div class="qualifiers-comics">
    <Searcher />
    <div class="list columns is-multiline is-flex m-0 px-5">
      <template v-if="filterComics.length">
        <div
          class="list-comic column is-4-desktop is-12-mobile is-6-tablet"
          v-for="(comic, index) in filterComics"
          :key="index"
        >
          <Comic :comic="comic" />
        </div>
      </template>
      <div v-else class="list-no-comics">
        <NoComics />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { typesComics } from "@/store/modules/comics/types";
import Comic from "@/components/list/Comic.vue";
import Searcher from "@/components/list/Searcher.vue";
import NoComics from "@/components/list/NoComics.vue";

export default {
  name: "ListComics",
  components: { Comic, Searcher, NoComics },
  computed: {
    ...mapState(typesComics.PATH, ["listComics"]),
    ...mapGetters(typesComics.PATH, {
      filterComics: typesComics.getter.SEARCHER_COMICS,
    }),
  },
};
</script>
