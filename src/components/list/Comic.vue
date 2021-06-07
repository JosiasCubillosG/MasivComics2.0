<template>
  <div class="comic-container columns m-0 is-multiline my-5" @click="detailComic(comic)">
    <div class="comic-title column is-12">
      {{ comic.title }}
    </div>
    <div
      class="comic-img my-5 column is-12 is-flex is-align-items-center is-justify-content-center"
    >
      <img class="image-comic" :src="comic.img" />
    </div>
    <div class="comic-rating column is-12">
      <span class="rating-container" v-for="(star, index) in 5" :key="index">
        <i v-if="index < comic.rating" class="fas fa-star fa-lg m-2" style="color: yellow"></i>
        <i v-else class="fas fa-star fa-lg m-2" style="color: black"></i>
      </span>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { typesComics } from "@/store/modules/comics/types";

export default {
  name: "Comic",
  props: {
    comic: { type: Object, default: () => {} },
  },
  methods: {
    ...mapActions(typesComics.PATH, {
      selectedComic: typesComics.actions.SELECT_DETAIL_COMIC,
    }),
    detailComic(comic) {
      this.selectedComic(comic);
      this.$router.push(`/detail-comic/${window.btoa(comic.num)}`);
    },
  },
};
</script>
