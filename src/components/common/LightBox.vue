<template>
  <div
    ref="lightboxComic"
    class="lightbox is-flex is-justify-content-center is-align-items-center"
    @click="closeModal"
  >
    <div class="box-img">
      <img :src="imgBox" id="boxImg" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { typesComics } from "@/store/modules/comics/types";

export default {
  name: "LightBox",
  props: {
    imgBox: { type: String, default: () => {} },
  },
  computed: {
    ...mapState(typesComics.PATH, ["showLightbox"]),
  },
  watch: {
    showLightbox(value) {
      if (value) this.$refs.lightboxComic.style.visibility = "visible";
    },
  },
  methods: {
    ...mapActions(typesComics.PATH, {
      showBox: typesComics.actions.STATE_SHOW_LIGHTBOX,
    }),
    closeModal(e) {
      if (e.target.id !== "boxImg") {
        this.showBox(false);
        this.$refs.lightboxComic.style.visibility = "hidden";
      }
    },
  },
};
</script>
