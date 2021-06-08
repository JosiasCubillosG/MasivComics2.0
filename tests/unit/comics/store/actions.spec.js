import { typesComics } from "@/store/modules/comics/types";
import { actions } from "@/store/modules/comics/actions.js";
import FlushPromises from "flush-promises";

describe("Actions comic module", () => {
  it("Get comic random", async () => {
    let commit = jest.fn();
    let dispatch = jest.fn();
    actions[typesComics.actions.GET_COMIC]({ commit, dispatch });
    expect(commit).toHaveBeenCalledWith(typesComics.mutations.SET_STATE_SHOW_LOADING, true);
    await FlushPromises();
    expect(commit).toHaveBeenCalledWith(typesComics.mutations.SET_STATE_SHOW_LOADING, false);
    expect(commit).toHaveBeenCalledWith(typesComics.mutations.SET_COMIC, { numComic: 1 });
  });
  it("Rate comic", async () => {
    let commit = jest.fn();
    let dispatch = jest.fn();
    let state = {
      randomComic: {
        name: "ComicRandom",
        Num: 7786,
      },
    };
    actions[typesComics.actions.RATE_COMIC]({ commit, state, dispatch }, 3);
    await FlushPromises();
    expect(commit).toHaveBeenCalledWith(typesComics.mutations.SET_RATED_COMIC, {
      name: "ComicRandom",
      Num: 7786,
      rating: 3,
    });
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
  it("Select details comic", () => {
    let commit = jest.fn();
    let payload = 3;
    actions[typesComics.actions.SELECT_DETAIL_COMIC]({ commit }, payload);
    expect(commit).toHaveBeenCalledWith(typesComics.mutations.SET_SELECTED_COMIC, 3);
  });
  it("State show lightbox", () => {
    let commit = jest.fn();
    let payload = true;
    actions[typesComics.actions.STATE_SHOW_LIGHTBOX]({ commit }, payload);
    expect(commit).toHaveBeenCalledWith(typesComics.mutations.SET_STATE_SHOW_LIGHTBOX, true);
  });
  it("State show loading", () => {
    let commit = jest.fn();
    let payload = true;
    actions[typesComics.actions.STATE_SHOW_LOADING]({ commit }, payload);
    expect(commit).toHaveBeenCalledWith(typesComics.mutations.SET_STATE_SHOW_LOADING, true);
  });
  it("State show error", () => {
    let commit = jest.fn();
    let payload = true;
    actions[typesComics.actions.STATE_SHOW_ERROR]({ commit }, payload);
    expect(commit).toHaveBeenCalledWith(typesComics.mutations.SET_STATE_SHOW_ERROR, true);
  });
  it("Search comic", () => {
    let commit = jest.fn();
    let payload = "City";
    actions[typesComics.actions.SEARCH_COMIC]({ commit }, payload);
    expect(commit).toHaveBeenCalledWith(typesComics.mutations.SET_SEARCHER_COMIC, "City");
  });
});
