import Axios from "axios";

export default class Comics {
  constructor() {
    this.getComicsEndpoint = "http://localhost:8080/";
  }

  getComics(payload) {
    return Axios.get(`${this.getComicsEndpoint}/${payload}/info.0.json`);
  }
}
