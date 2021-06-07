import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getter } from "./getters";
import { MODULE_COMICS } from "./types";

export const module = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters: getter
};

export const name = MODULE_COMICS;
