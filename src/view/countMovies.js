import Abstract from "./abstract.js";

const createCountMovies = (cards) => {
  return `<p>${cards.length} movies inside</p>`;
};

export class CountMovies extends Abstract {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createCountMovies(this._card);
  }
}
