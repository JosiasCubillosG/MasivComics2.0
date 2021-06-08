import { typesComics } from "@/store/modules/comics/types";
import ComicsApi from "@/api/Comics";
import { randomNumber } from "@/helpers/numberRandom";

const comicsApi = new ComicsApi();

export const actions = {
  [typesComics.actions.GET_COMIC]({ commit, dispatch }) {
    commit(typesComics.mutations.SET_STATE_SHOW_LOADING, true);
    comicsApi
      .getComics(randomNumber())
      .then((res) => {
        commit(typesComics.mutations.SET_STATE_SHOW_LOADING, false);
        commit(typesComics.mutations.SET_COMIC, res.data);
      })
      .catch((err) => {
        dispatch(typesComics.actions.STATE_SHOW_ERROR, true);
        console.log(err);
      });
  },
  [typesComics.actions.RATE_COMIC]({ commit, state, dispatch }, payload) {
    commit(typesComics.mutations.SET_RATED_COMIC, { ...state.randomComic, rating: payload });
    dispatch(typesComics.actions.GET_COMIC);
  },
  [typesComics.actions.SELECT_DETAIL_COMIC]({ commit }, payload) {
    commit(typesComics.mutations.SET_SELECTED_COMIC, payload);
  },
  [typesComics.actions.STATE_SHOW_LIGHTBOX]({ commit }, payload) {
    commit(typesComics.mutations.SET_STATE_SHOW_LIGHTBOX, payload);
  },
  [typesComics.actions.STATE_SHOW_LOADING]({ commit }, payload) {
    commit(typesComics.mutations.SET_STATE_SHOW_LOADING, payload);
  },
  [typesComics.actions.STATE_SHOW_ERROR]({ commit }, payload) {
    commit(typesComics.mutations.SET_STATE_SHOW_ERROR, payload);
  },
  [typesComics.actions.SEARCH_COMIC]({ commit }, payload) {
    commit(typesComics.mutations.SET_SEARCHER_COMIC, payload);
  },
};

export default {};
