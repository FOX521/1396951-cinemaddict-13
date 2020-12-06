import  Abstract from "./abstract.js";

const createContainerList = () => {
  return `<section class="films"></section>`;
};

class ContainerList extends Abstract {

  getTemplate() {
    return createContainerList();
  }
};

const createListFilms = () => {
  return `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};

class ListFilm  extends Abstract {
  getTemplate() {
    return createListFilms();
  }
};


const createCardsFilms = (cards = {}) => {
  const {title, poster, description, genres, dateFilm, countCommit, duration, rating} = cards;
  const [genreFilms] = genres;
  const [,year] = dateFilm

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${year}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genreFilms}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments">${countCommit} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

class CardFilms extends Abstract {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createCardsFilms(this._card);
  }
}

export  {ListFilm, CardFilms, ContainerList};
