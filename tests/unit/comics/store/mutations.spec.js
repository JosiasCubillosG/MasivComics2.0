import { typesComics } from "@/store/modules/comics/types";
import { mutations } from "@/store/modules/comics/mutations.js";

describe("Mutations comic module", () => {
  let state = {
    randomComic: {},
    listComics: [],
    detailComic: {},
    showLightbox: false,
    showLoading: false,
    showError: false,
    searcherComic: "",
  };
  it("Set random comic", () => {
    let payload = {
      name: "Comic random",
      num: 3249,
    };
    mutations[typesComics.mutations.SET_COMIC](state, payload);
    expect(state.randomComic).toStrictEqual({
      name: "Comic random",
      num: 3249,
      rating: 0,
    });
  });
  it("Set rated comic", () => {
    let payload = {
      name: "Comic random 2",
      num: 4749,
    };
    mutations[typesComics.mutations.SET_RATED_COMIC](state, payload);
    expect(state.listComics).toStrictEqual([
      {
        name: "Comic random 2",
        num: 4749,
      },
    ]);
  });
  it("Set selected comic", () => {
    let payload = {
      name: "Comic random 3",
      num: 4749,
    };
    mutations[typesComics.mutations.SET_SELECTED_COMIC](state, payload);
    expect(state.detailComic).toStrictEqual({
      name: "Comic random 3",
      num: 4749,
    });
  });
  it("Set state lightbox", () => {
    let payload = true;
    mutations[typesComics.mutations.SET_STATE_SHOW_LIGHTBOX](state, payload);
    expect(state.showLightbox).toStrictEqual(true);
  });
  it("Set state loading", () => {
    let payload = true;
    mutations[typesComics.mutations.SET_STATE_SHOW_LOADING](state, payload);
    expect(state.showLightbox).toStrictEqual(true);
  });
  it("Set state error", () => {
    let payload = true;
    mutations[typesComics.mutations.SET_STATE_SHOW_ERROR](state, payload);
    expect(state.showError).toStrictEqual(true);
  });
  it("Set searched commic", () => {
    let payload = "Comic in the city";
    mutations[typesComics.mutations.SET_SEARCHER_COMIC](state, payload);
    expect(state.searcherComic).toStrictEqual("Comic in the city");
  });
});
