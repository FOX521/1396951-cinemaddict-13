import {createElement} from "../util.js";
const createTopRated = () => {
  return `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container">
      </div>
    </section>`;
};

class TopRated {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTopRated();
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

const createMostCommented = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container">
  </div>
  </section>`;
};

class TopCommented {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMostCommented();
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


const createExtraCardsMostCommented = (card = {}) => {
  let {title, poster, description, genres, dateFilm, rating, countCommit, duration} = card;
  let [,randomDateFilm] = dateFilm;

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${randomDateFilm}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genres}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments">${countCommit} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
  </div>
</article>`;
};

class CardsCommented {
  constructor(card) {
    this._element = null;
    this._card = card;
  }

  getTemplate() {
    return createExtraCardsMostCommented(this._card);
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

const createExtraCardsTopRated = (card = {}) => {
  let {title, poster, description, genres, dateFilm, rating, countCommit, duration} = card;
  let [,randomDateFilm] = dateFilm;

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${randomDateFilm}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genres}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}…</p>
  <a class="film-card__comments">${countCommit} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

class CardsTopRated {
  constructor(card) {
    this._element = null;
    this._card = card;
  }

  getTemplate() {
    return createExtraCardsTopRated(this._card);
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


export {TopRated, TopCommented, CardsCommented, CardsTopRated};
