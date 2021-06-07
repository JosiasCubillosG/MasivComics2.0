<template>
  <div class="comic-stars">
    <span
      :ref="`star${index + 1}`"
      class="comic-stars__container icon m-2"
      v-for="(star, index) in 5"
      :key="index"
      @click="selectComic(5 - index)"
      @mouseover="hoverRate(index)"
      @mouseleave="leaveRate(index)"
    >
      <i class="icon-star fas fa-star fa-lg"></i>
    </span>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { typesComics } from "@/store/modules/comics/types";

export default {
  name: "Stars",
  computed: {
    ...mapState(typesComics.PATH, ["randomComic", "listComics"]),
  },
  watch: {
    listComics: {
      handler(value) {
        console.log(value);
        for (let i = Object.keys(this.$refs).length; i > 0; i -= 1) {
          if (i <= value - 1) {
            this.$refs[`star${i + 1}`][0].style.color = "yellow";
          } else {
            this.$refs[`star${i + 1}`][0].style.color = "black";
          }
        }
      },
    },
  },
  methods: {
    ...mapActions(typesComics.PATH, {
      rateComic: typesComics.actions.RATE_COMIC,
    }),
    hoverRate(value) {
      for (let i = Object.keys(this.$refs).length; i > 0; i -= 1) {
        if (i > value) {
          this.$refs[`star${i}`][0].style.color = "yellow";
        } else {
          this.$refs[`star${i}`][0].style.color = "#2c3e50";
        }
      }
    },
    leaveRate(value) {
      for (let i = Object.keys(this.$refs).length; i > 0; i -= 1) {
        if (i > value) {
          this.$refs[`star${i}`][0].style.color = "#2c3e50";
        }
      }
    },
    selectComic(index) {
      if (window.screen.width < 1024) {
        for (let i = Object.keys(this.$refs).length; i > 0; i -= 1) {
          if (i > 5 - index) {
            this.$refs[`star${i}`][0].style.color = "yellow";
          }
        }
        setTimeout(() => this.rateComic(index), 700);
      } else {
        this.rateComic(index);
      }
    },
  },
};
</script>
