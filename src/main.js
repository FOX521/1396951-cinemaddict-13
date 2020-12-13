import {NickNameUser} from "./view/nickname-user.js";
import {Navigation} from "./view/navigation.js";
import {ListFilm, CardFilms, ContainerList} from "./view/list-films.js";
import {ShowMore} from "./view/showMore.js";
import {TopRated, TopCommented, CardsCommented, CardsTopRated,createExtraCardsMostCommented} from "./view/extra-list";
import {CountMovies} from "./view/countMovies";
import {Popup} from "./view/popup.js";
import {createCard} from "./mock/createCard.js";
import {generateFilter} from "./mock/filter.js";
import {RenderPosition, renderElement} from "./util.js";
import {FilmPresenter} from "./presenter/film-presenter.js";

const CARDS_COUNT = 20;
const CARDS_COUNT_STEP = 5;
const CARDS_COUNT_CONTAINER = 2;
const cards = new Array(CARDS_COUNT).fill().map(createCard);
let filters = generateFilter(cards);

export const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);
const footerStatistic = siteFooterElement.querySelector(`.footer__statistics`);

renderElement(siteHeaderElement, new NickNameUser().getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new Navigation(filters).getElement(), RenderPosition.BEFOREEND);
renderElement(footerStatistic, new CountMovies(cards).getElement(), RenderPosition.BEFOREEND);

let pres = new FilmPresenter();
pres.init(cards)
