<template>
  <div class="home p-0">
    <Error v-if="showError" />
    <Content data-testId="home__comics" v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import { typesComics } from "@/store/modules/comics/types";
import Content from "@/components/home/Content.vue";
import Error from "@/components/common/Error.vue";

export default {
  name: "Home",
  components: {
    Content,
    Error,
  },
  computed: {
    ...mapState(typesComics.PATH, ["showError"]),
  },
};
</script>
