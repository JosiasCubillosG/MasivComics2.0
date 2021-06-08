<template>
  <div class="rated-stars is-flex is-justify-content-center">
    <span class="rated-stars__container m-2" v-for="(star, index) in 5" :key="index">
      <i v-if="index < conditionRatedStar" class="star-rated fas fa-star fa-2x"></i>
      <i v-else class="star-no-rated fas fa-star fa-2x"></i>
    </span>
  </div>
</template>
<script>
export default {
  name: "RatedStars",
  props: {
    conditionRatedStar: { type: Number, default: () => {} },
  },
};
</script>
