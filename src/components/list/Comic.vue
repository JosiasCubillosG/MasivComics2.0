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
    <RatedStars class="comic-rating column is-12" :conditionRatedStar="comic.rating" />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { typesComics } from "@/store/modules/comics/types";
import RatedStars from "@/components/common/RatedStars.vue";

export default {
  name: "Comic",
  props: {
    comic: { type: Object, default: () => {} },
  },
  components: {
    RatedStars,
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
