import { typesComics } from "@/store/modules/comics/types";

export const mutations = {
  [typesComics.mutations.SET_COMIC](state, payload) {
    state.randomComic = { ...payload, rating: 0 };
  },
  [typesComics.mutations.SET_RATED_COMIC](state, payload) {
    state.listComics.push(payload);
  },
  [typesComics.mutations.SET_SELECTED_COMIC](state, payload) {
    state.detailComic = payload;
  },
  [typesComics.mutations.SET_STATE_SHOW_LIGHTBOX](state, payload) {
    state.showLightbox = payload;
  },
  [typesComics.mutations.SET_STATE_SHOW_LOADING](state, payload) {
    state.showLoading = payload;
  },
  [typesComics.mutations.SET_STATE_SHOW_ERROR](state, payload) {
    state.showError = payload;
  },
  [typesComics.mutations.SET_SEARCHER_COMIC](state, payload) {
    state.searcherComic = payload;
  },
};

export default {};
