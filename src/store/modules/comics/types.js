export const MODULE_COMICS = "@module/comics";

export const typesComics = {
  PATH: `${MODULE_COMICS}`,
  getter: {
    SEARCHER_COMICS: "getters/searcherComics",
  },
  mutations: {
    SET_COMIC: "@mutations/setComic",
    SET_RATED_COMIC: "@mutations/setRatedComic",
    SET_SELECTED_COMIC: "@mutations/setSelectedComic",
    SET_STATE_SHOW_LIGHTBOX: "@mutations/setStateShowLightbox",
    SET_STATE_SHOW_LOADING: "@mutations/setStateShowLoading",
    SET_STATE_SHOW_ERROR: "@mutations/setStateShowError",
    SET_SEARCHER_COMIC: "@mutations/setSearcherComic",
  },
  actions: {
    GET_COMIC: "@actions/getComic",
    RATE_COMIC: "@actions/rateComic",
    SELECT_DETAIL_COMIC: "@actions/selectDetailComic",
    STATE_SHOW_LIGHTBOX: "@actions/stateShowLightbox",
    STATE_SHOW_LOADING: "@actions/stateShowLoading",
    STATE_SHOW_ERROR: "@actions/stateShowError",
    SEARCH_COMIC: "@actions/searchComic",
  },
};
