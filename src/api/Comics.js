import Axios from "axios";

export default class Comics {
  constructor() {
    this.getComicsEndpoint = "https://xkcd.com/";
  }

  getComics(payload) {
    return Axios.get(`${this.getComicsEndpoint}/${payload}/info.0.json`);
  }
}
