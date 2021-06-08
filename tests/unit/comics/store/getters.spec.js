import { typesComics } from "@/store/modules/comics/types";
import { getter } from "@/store/modules/comics/getters.js";

describe("Getters comic module", () => {
  let state = {
    listComics: [
      {
        title: "Comic in the city",
        num: 7468,
      },
      {
        title: "Random comic number five",
        num: 9431,
      },
    ],
    searcherComic: "city",
  };
  it("Get searched comics", () => {
    expect(getter[typesComics.getter.SEARCHER_COMICS](state)).toStrictEqual([
      {
        title: "Comic in the city",
        num: 7468,
      },
    ]);
  });
});
