<template>
  <div class="comic-content columns m-0 p-5">
    <Cargando class="mt-5" v-if="showLoading" />
    <div class="column is-12" v-else>
      <div class="columns is-multiline m-0">
        <stars class="column is-12 mb-2" />
        <label class="content-title column is-12">{{ randomComic.title }}</label>
        <div class="content-img column is-12 mt-2 is-flex is-justify-content-center">
          <div
            class="content-img__container is-flex is-justify-content-center is-align-items-center"
          >
            <img :src="randomComic.img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { typesComics } from "@/store/modules/comics/types";
import Cargando from "@/components/common/Loading.vue";
import Stars from "./Stars.vue";

export default {
  components: { Stars, Cargando },
  name: "Content",
  computed: {
    ...mapState(typesComics.PATH, ["randomComic", "showLoading"]),
  },
  methods: {
    ...mapActions(typesComics.PATH, {
      getComic: typesComics.actions.GET_COMIC,
    }),
  },
  created() {
    this.getComic();
  },
};
</script>
