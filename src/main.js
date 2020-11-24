import {createNickNameUser} from "./view/nickname-user.js";
import {createNavigation} from "./view/navigation.js";
import {createListFilms, createCardsFilms, createContainerList} from "./view/list-films.js";
import {createButtonShowMore} from "./view/showMore.js";
import {createTopRated, createMostCommented,createExtraCardsMostCommented, createExtraCardsTopRated} from "./view/extra-list";
import {createCountMovies} from "./view/countMovies";
import {createPopup} from "./view/popup.js";
import {createCard} from "./mock/createCard.js";

const CARDS_COUNT = 20;
const CARDS_COUNT_STEP = 5;
const CARDS_COUNT_CONTAINER = 2;
const cards = new Array(CARDS_COUNT).fill().map(createCard);
console.log(cards)

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);
const footerStatistic = siteFooterElement.querySelector(`.footer__statistics`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
}

render(siteHeaderElement, createNickNameUser(), `beforeend`);
render(siteMainElement, createNavigation(cards), `beforeend`);
render(siteMainElement, createContainerList(), `beforeend`);
const sectionListFilms = document.querySelector(`.films`);
render(sectionListFilms, createListFilms(), `beforeend`);
const listFilm = document.querySelector(`.films-list`);
const wrapperFilm = document.querySelector(`.films-list__container`);

for(let i = 0; i < Math.min(cards.length, CARDS_COUNT_STEP); i++) {
  render(wrapperFilm, createCardsFilms(cards[i]), `beforeend`);
};

if (cards.length > CARDS_COUNT_STEP) {
  let renderCardCount = CARDS_COUNT_STEP;
  render(listFilm, createButtonShowMore(), `beforeend`);
  const buttonShowMore = document.querySelector(`.films-list__show-more`);
  buttonShowMore.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    cards.slice(renderCardCount, renderCardCount + CARDS_COUNT_STEP)
    .forEach((card) =>   render(wrapperFilm, createCardsFilms(card), `beforeend`));
    renderCardCount += CARDS_COUNT_STEP;

    if (renderCardCount >= cards.length) {
      buttonShowMore.remove();
    }
  });
};

render(sectionListFilms, createTopRated(), `beforeend`);
render(sectionListFilms, createMostCommented(), `beforeend`);
const listFilmsExtra = document.querySelectorAll(`.films-list--extra`);

for (let i = 0; i < CARDS_COUNT_CONTAINER; i++) {
  const containerExtraFilms = listFilmsExtra[i].querySelector(`.films-list__container`);
  if (i < CARDS_COUNT_CONTAINER) {
    render(containerExtraFilms, createExtraCardsTopRated(cards[i]), `beforeend`);
    render(containerExtraFilms, createExtraCardsTopRated(cards[++i]), `beforeend`);
  };
};

for (let i = 1; i < CARDS_COUNT_CONTAINER; i++) {
  const containerExtraFilms = listFilmsExtra[i].querySelector(`.films-list__container`);
  if (i < CARDS_COUNT_CONTAINER) {
    render(containerExtraFilms, createExtraCardsMostCommented(cards[++i]), `beforeend`);
    render(containerExtraFilms, createExtraCardsMostCommented(cards[++i]), `beforeend`);
  };
};

render(footerStatistic, createCountMovies(cards), `beforeend`);
// render(siteFooterElement, createPopup(cards[0]), `afterend`);


