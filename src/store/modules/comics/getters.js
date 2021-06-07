import { typesComics } from "@/store/modules/comics/types";

export const getter = {
  [typesComics.getter.SEARCHER_COMICS](state) {
    return state.listComics.filter((comic) =>
      comic.title.toLowerCase().includes(state.searcherComic.toLowerCase())
    );
  },
};

export default {};
