import Vue from "vue";
import Vuex from "vuex";
import { name as comicName, module as comicModule } from "./modules/comics";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [comicName]: comicModule
  }
});
