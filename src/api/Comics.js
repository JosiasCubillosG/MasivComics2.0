import Axios from "axios";

export default class Comics {
  constructor() {
    this.getComicsEndpoint = "https://proxy-masiv-comics.herokuapp.com/comic";
  }

  getComics(payload) {
    return Axios.get(`${this.getComicsEndpoint}/${payload}/info.0.json`);
  }
}
