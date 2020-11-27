import {createElement} from "../util.js";
const createCountMovies = (cards) => {
  return `<p>${cards.length} movies inside</p>`;
};

export class CountMovies {
  constructor(card) {
    this._element = null;
    this._card = card;
  }

  getTemplate() {
    return createCountMovies(this._card);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate())
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
