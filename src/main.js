import {createNickNameUser} from "./view/nickname-user.js";
import {createNavigation} from "./view/navigation.js";
import {createListFilms, createCardsFilms, createContainerList} from "./view/list-films.js";
import {createButtonShowMore} from "./view/showMore.js";
import {createTopRated, createMostCommented,createExtraCardsMostCommented, createExtraCardsTopRated} from "./view/extra-list";
import {createCountMovies} from "./view/countMovies";
import {createPopup} from "./view/popup.js";
const CARDS_COUNT_CONTAINER = 2;
const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);
const footerStatistic = siteFooterElement.querySelector(`.footer__statistics`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
}

render(siteHeaderElement, createNickNameUser(), `beforeend`);
render(siteMainElement, createNavigation(), `beforeend`);
render(siteMainElement, createContainerList(), `beforeend`);
const sectionListFilms = document.querySelector(`.films`);
render(sectionListFilms, createListFilms(), `beforeend`);
const listFilm = document.querySelector(`.films-list`);
const wrapperFilm = document.querySelector(`.films-list__container`);
render(wrapperFilm, createCardsFilms(), `beforeend`);
render(listFilm, createButtonShowMore(), `beforeend`);

render(sectionListFilms, createTopRated(), `beforeend`);
render(sectionListFilms, createMostCommented(), `beforeend`);
const listFilmsExtra = document.querySelectorAll(`.films-list--extra`);
for (let i = 0; i < CARDS_COUNT_CONTAINER; i++) {
  const containerExtraFilms = listFilmsExtra[i].querySelector(`.films-list__container`);
  if (i < 1) {
    render(containerExtraFilms, createExtraCardsTopRated(), `beforeend`);
  } else
  render(containerExtraFilms, createExtraCardsMostCommented(), `beforeend`);
};
render(footerStatistic, createCountMovies(), `beforeend`);
render(siteFooterElement, createPopup(), `afterend`);


