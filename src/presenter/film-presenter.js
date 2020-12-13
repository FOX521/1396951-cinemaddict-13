import {ListFilm, CardFilms, ContainerList} from "../view/list-films.js";
import { ShowMore } from "../view/showMore.js";
import {Popup} from "../view/popup.js";
import {renderElement, RenderPosition} from "../util.js";
import {TopRated, TopCommented, CardsCommented, CardsTopRated,createExtraCardsMostCommented} from "../view/extra-list";

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);
const footerStatistic = siteFooterElement.querySelector(`.footer__statistics`);
const mainListFilm = document.querySelector(`.films-list`);
const CARDS_COUNT_STEP = 5;
const CARDS_COUNT_CONTAINER = 2;










export class FilmPresenter {
  constructor(film) {
    this._film = film;
    this._containerList =  new ContainerList();
    this._listFilms = new ListFilm();
    this._card = new CardFilms(this._film);
    this._popup = new Popup(this._film);
    this._button = new ShowMore().getElement();
  };

  init(cards) {
    renderElement(siteMainElement,  this._containerList.getElement(), RenderPosition.BEFOREEND);
    const sectionListFilms = document.querySelector(`.films`);
    renderElement(sectionListFilms, this._listFilms.getElement(), RenderPosition.BEFOREEND);
    this._renderCards(cards);
  };

  _renderCards (cards) {
    const wrapperFilm = document.querySelector(`.films-list__container`);
    for(let i = 0; i < Math.min(cards.length, CARDS_COUNT_STEP); i++) {
      renderElement(wrapperFilm, new CardFilms(cards[i]).getElement(), RenderPosition.BEFOREEND);
    };
    this._renderExtraList(cards);
    this._renderButton(cards);
  };

  _renderButton(cards) {
    const mainListFilm = document.querySelector(`.films-list`);
      let renderCardCount = CARDS_COUNT_STEP;
      renderElement(mainListFilm, this._button, RenderPosition.BEFOREEND);

      const buttonShowMore = document.querySelector(`.films-list__show-more`);
      buttonShowMore.addEventListener(`click`, function (evt) {
        evt.preventDefault();
        const wrapperFilm = document.querySelector(`.films-list__container`);
        cards
        .slice(renderCardCount, renderCardCount + CARDS_COUNT_STEP)
        .forEach((card) => renderElement(wrapperFilm, new CardFilms(card).getElement(), RenderPosition.BEFOREEND));
        renderCardCount += CARDS_COUNT_STEP;

        if (renderCardCount >= cards.length) {
          buttonShowMore.remove();
        }
      });
  };

  _renderExtraList(cards) {
    const sectionListFilms = document.querySelector(`.films`);
    renderElement(sectionListFilms, new TopRated().getElement(),  RenderPosition.BEFOREEND);
    renderElement(sectionListFilms, new TopCommented().getElement(), RenderPosition.BEFOREEND);
    this._renderExtraCards(cards);
  };

  _renderExtraCards(cards) {
    const listFilmsExtra = document.querySelectorAll(`.films-list--extra`);
    for (let i = 0; i < CARDS_COUNT_CONTAINER; i++) {
      const containerExtraFilms = listFilmsExtra[i].querySelector(`.films-list__container`);
      if (i < CARDS_COUNT_CONTAINER) {
        renderElement(containerExtraFilms, new CardsTopRated(cards[i]).getElement(), RenderPosition.BEFOREEND);
        renderElement(containerExtraFilms, new CardsTopRated(cards[++i]).getElement(), RenderPosition.BEFOREEND);
      };
    };

    for (let i = 1; i < CARDS_COUNT_CONTAINER; i++) {
      const containerExtraFilms = listFilmsExtra[i].querySelector(`.films-list__container`);
      if (i < CARDS_COUNT_CONTAINER) {
        renderElement(containerExtraFilms, new CardsCommented(cards[++i]).getElement(), RenderPosition.BEFOREEND);
        renderElement(containerExtraFilms, new CardsCommented(cards[++i]).getElement(), RenderPosition.BEFOREEND);
      };
    };
  }
}
