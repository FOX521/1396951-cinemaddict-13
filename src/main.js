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
const containerList =  new ContainerList();
renderElement(siteMainElement,  containerList.getElement(), RenderPosition.BEFOREEND);
const sectionListFilms = document.querySelector(`.films`);
const listFilms = new ListFilm();
renderElement(sectionListFilms, listFilms.getElement(), RenderPosition.BEFOREEND);
const mainListFilm = document.querySelector(`.films-list`);
const wrapperFilm = document.querySelector(`.films-list__container`);

for(let i = 0; i < Math.min(cards.length, CARDS_COUNT_STEP); i++) {
  renderElement(wrapperFilm, new CardFilms(cards[i]).getElement(), RenderPosition.BEFOREEND);
};

if (cards.length > CARDS_COUNT_STEP) {
  let renderCardCount = CARDS_COUNT_STEP;
  renderElement(mainListFilm, new ShowMore().getElement(), RenderPosition.BEFOREEND);
  const buttonShowMore = document.querySelector(`.films-list__show-more`);
  buttonShowMore.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    cards.slice(renderCardCount, renderCardCount + CARDS_COUNT_STEP)
    .forEach((card) => renderElement(wrapperFilm, new CardFilms(card).getElement(), RenderPosition.BEFOREEND));
    renderCardCount += CARDS_COUNT_STEP;

    if (renderCardCount >= cards.length) {
      buttonShowMore.remove();
    }
  });
};

renderElement(sectionListFilms, new TopRated().getElement(),  RenderPosition.BEFOREEND);
renderElement(sectionListFilms, new TopCommented().getElement(), RenderPosition.BEFOREEND);
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

renderElement(footerStatistic, new CountMovies(cards).getElement(), RenderPosition.BEFOREEND);

const popupComponent = new Popup(cards[0]).getElement();
console.log(popupComponent);

const showPopup = () => {
  siteFooterElement.append(popupComponent);
  let posterFilm = document.getElementsByClassName(`.film-card__poster`);
  let titleFilm = document.getElementsByClassName(`.film-card__title`);
  let closePopup = document.getElementsByClassName(`.film-details__close-btn`);
  let countCommits = document.getElementsByClassName(`.film-card__comments`);
  console.log(countCommits)
}

showPopup();
