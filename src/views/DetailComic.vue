<template>
  <div class="detail-comic">
    <div class="detail-comic__container columns is-multiline m-0 p-5">
      <div class="detail-title column is-12-mobile is-12-tablet">
        {{ detailComic.title }}
      </div>
      <div class="detail-information column is-12-mobile is-12-tablet">
        <div class="detail-information__container columns is-mobile is-multiline">
          <label class="information-number column is-12-mobile is-12-tablet is-flex pb-0"
            ><b>Comic:</b> <span class="ml-2">#{{ detailComic.num }}</span></label
          >
          <label class="information-date column is-12-mobile is-12-tablet is-flex py-0"
            ><b>Release Date:</b>
            <span class="ml-2">{{
              `${detailComic.day}/${detailComic.month}/${detailComic.year}`
            }}</span></label
          >
          <label class="information-alt column is-12-mobile is-12-tablet pt-0">
            <b>Description: </b> {{ detailComic.alt.toLowerCase() }}
          </label>
        </div>
      </div>
      <RatedStars
        :conditionRatedStar="detailComic.rating"
        class="detail-stars column is-12-mobile is-12-tablet"
      />
      <div class="detail-img column is-12-mobile is-12-tablet">
        <img :src="detailComic.img" @click="openImage" />
      </div>
      <light-box :imgBox="detailComic.img" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { typesComics } from "@/store/modules/comics/types";
import RatedStars from "@/components/common/RatedStars.vue";
import LightBox from "@/components/common/LightBox.vue";

export default {
  name: "DetailComic",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    RatedStars,
    LightBox,
  },
  computed: {
    ...mapState(typesComics.PATH, ["detailComic"]),
  },
  methods: {
    ...mapActions(typesComics.PATH, {
      showLightbox: typesComics.actions.STATE_SHOW_LIGHTBOX,
    }),
    openImage() {
      this.showLightbox(true);
    },
  },
};
</script>
