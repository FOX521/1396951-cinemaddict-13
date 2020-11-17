/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_nickname_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/nickname-user.js */ "./src/view/nickname-user.js");
/* harmony import */ var _view_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/navigation.js */ "./src/view/navigation.js");
/* harmony import */ var _view_list_films_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/list-films.js */ "./src/view/list-films.js");
/* harmony import */ var _view_showMore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/showMore.js */ "./src/view/showMore.js");
/* harmony import */ var _view_extra_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/extra-list */ "./src/view/extra-list.js");
/* harmony import */ var _view_countMovies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/countMovies */ "./src/view/countMovies.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/popup.js */ "./src/view/popup.js");







const CARDS_COUNT_CONTAINER = 2;
const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
}

render(siteHeaderElement, Object(_view_nickname_user_js__WEBPACK_IMPORTED_MODULE_0__["createNickNameUser"])(), `beforeend`);
render(siteMainElement, Object(_view_navigation_js__WEBPACK_IMPORTED_MODULE_1__["createNavigation"])(), `beforeend`);
render(siteMainElement, Object(_view_list_films_js__WEBPACK_IMPORTED_MODULE_2__["createContainerList"])(), `beforeend`);
const sectionListFilms = document.querySelector(`.films`);
render(sectionListFilms, Object(_view_list_films_js__WEBPACK_IMPORTED_MODULE_2__["createListFilms"])(), `beforeend`);
const listFilm = document.querySelector(`.films-list`);
const wrapperFilm = document.querySelector(`.films-list__container`);
render(wrapperFilm, Object(_view_list_films_js__WEBPACK_IMPORTED_MODULE_2__["createCardsFilms"])(), `beforeend`);
render(listFilm, Object(_view_showMore_js__WEBPACK_IMPORTED_MODULE_3__["createButtonShowMore"])(), `beforeend`);

render(sectionListFilms, Object(_view_extra_list__WEBPACK_IMPORTED_MODULE_4__["createTopRated"])(), `beforeend`);
render(sectionListFilms, Object(_view_extra_list__WEBPACK_IMPORTED_MODULE_4__["createMostCommented"])(), `beforeend`);
const listFilmsExtra = document.querySelectorAll(`.films-list--extra`);
for (let i = 0; i < CARDS_COUNT_CONTAINER; i++) {
  const containerExtraFilms = listFilmsExtra[i].querySelector(`.films-list__container`);
  if (i < 1) {
    render(containerExtraFilms, Object(_view_extra_list__WEBPACK_IMPORTED_MODULE_4__["createExtraCardsTopRated"])(), `beforeend`);
  } else
  render(containerExtraFilms, Object(_view_extra_list__WEBPACK_IMPORTED_MODULE_4__["createExtraCardsMostCommented"])(), `beforeend`);
};
render(siteFooterElement, Object(_view_countMovies__WEBPACK_IMPORTED_MODULE_5__["createCountMovies"])(), `beforeend`);
render(siteFooterElement, Object(_view_popup_js__WEBPACK_IMPORTED_MODULE_6__["createPopup"])(), `beforeend`);




/***/ }),

/***/ "./src/view/countMovies.js":
/*!*********************************!*\
  !*** ./src/view/countMovies.js ***!
  \*********************************/
/*! exports provided: createCountMovies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCountMovies", function() { return createCountMovies; });
const createCountMovies = () => {
  return `<section class="footer__statistics">
  <p>130 291 movies inside</p>
  </section>`;
};


/***/ }),

/***/ "./src/view/extra-list.js":
/*!********************************!*\
  !*** ./src/view/extra-list.js ***!
  \********************************/
/*! exports provided: createTopRated, createMostCommented, createExtraCardsMostCommented, createExtraCardsTopRated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopRated", function() { return createTopRated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMostCommented", function() { return createMostCommented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExtraCardsMostCommented", function() { return createExtraCardsMostCommented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExtraCardsTopRated", function() { return createExtraCardsTopRated; });
const createTopRated = () => {
  return `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container">
      </div>
    </section>`;
};

const createMostCommented = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container">
  </div>
  </section>`;
};

const createExtraCardsMostCommented = () => {
  return `<article class="film-card">
  <h3 class="film-card__title">Santa Claus Conquers the Martians</h3>
  <p class="film-card__rating">2.3</p>
  <p class="film-card__info">
    <span class="film-card__year">1964</span>
    <span class="film-card__duration">1h 21m</span>
    <span class="film-card__genre">Comedy</span>
  </p>
  <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…</p>
  <a class="film-card__comments">465 comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
  </div>
</article>

<article class="film-card">
  <h3 class="film-card__title">Made for Each Other</h3>
  <p class="film-card__rating">5.8</p>
  <p class="film-card__info">
    <span class="film-card__year">1939</span>
    <span class="film-card__duration">1h 32m</span>
    <span class="film-card__genre">Comedy</span>
  </p>
  <img src="./images/posters/made-for-each-other.png" alt="" class="film-card__poster">
  <p class="film-card__description">John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…</p>
  <a class="film-card__comments">56 comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

const createExtraCardsTopRated = () => {
  return `<article class="film-card">
  <h3 class="film-card__title">The Man with the Golden Arm</h3>
  <p class="film-card__rating">9.0</p>
  <p class="film-card__info">
    <span class="film-card__year">1955</span>
    <span class="film-card__duration">1h 59m</span>
    <span class="film-card__genre">Drama</span>
  </p>
  <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
  <a class="film-card__comments">18 comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>
<article class="film-card">
          <h3 class="film-card__title">The Great Flamarion</h3>
          <p class="film-card__rating">8.9</p>
          <p class="film-card__info">
            <span class="film-card__year">1945</span>
            <span class="film-card__duration">1h 18m</span>
            <span class="film-card__genre">Mystery</span>
          </p>
          <img src="./images/posters/the-great-flamarion.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…</p>
          <a class="film-card__comments">12 comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
          </div>
        </article>
      </div>
    </section>`;
};




/***/ }),

/***/ "./src/view/list-films.js":
/*!********************************!*\
  !*** ./src/view/list-films.js ***!
  \********************************/
/*! exports provided: createListFilms, createCardsFilms, createContainerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListFilms", function() { return createListFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardsFilms", function() { return createCardsFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContainerList", function() { return createContainerList; });
const createContainerList = () => {
  return `<section class="films"></section>`;
};

const createListFilms = () => {
  return `
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};

const createCardsFilms = () => {
  return `    <article class="film-card">
  <h3 class="film-card__title">The Dance of Life</h3>
  <p class="film-card__rating">8.3</p>
  <p class="film-card__info">
    <span class="film-card__year">1929</span>
    <span class="film-card__duration">1h 55m</span>
    <span class="film-card__genre">Musical</span>
  </p>
  <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
  <a class="film-card__comments">5 comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>

<article class="film-card">
  <h3 class="film-card__title">Sagebrush Trail</h3>
  <p class="film-card__rating">3.2</p>
  <p class="film-card__info">
    <span class="film-card__year">1933</span>
    <span class="film-card__duration">54m</span>
    <span class="film-card__genre">Western</span>
  </p>
  <img src="./images/posters/sagebrush-trail.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…</p>
  <a class="film-card__comments">89 comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>

<article class="film-card">
  <h3 class="film-card__title">The Man with the Golden Arm</h3>
  <p class="film-card__rating">9.0</p>
  <p class="film-card__info">
    <span class="film-card__year">1955</span>
    <span class="film-card__duration">1h 59m</span>
    <span class="film-card__genre">Drama</span>
  </p>
  <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
  <a class="film-card__comments">18 comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>

<article class="film-card">
  <h3 class="film-card__title">Santa Claus Conquers the Martians</h3>
  <p class="film-card__rating">2.3</p>
  <p class="film-card__info">
    <span class="film-card__year">1964</span>
    <span class="film-card__duration">1h 21m</span>
    <span class="film-card__genre">Comedy</span>
  </p>
  <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…</p>
  <a class="film-card__comments">465 comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
  </div>
</article>

<article class="film-card">
  <h3 class="film-card__title">Popeye the Sailor Meets Sindbad the Sailor</h3>
  <p class="film-card__rating">6.3</p>
  <p class="film-card__info">
    <span class="film-card__year">1936</span>
    <span class="film-card__duration">16m</span>
    <span class="film-card__genre">Cartoon</span>
  </p>
  <img src="./images/posters/popeye-meets-sinbad.png" alt="" class="film-card__poster">
  <p class="film-card__description">In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…</p>
  <a class="film-card__comments">0 comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
  </div>
</article>`;
};




/***/ }),

/***/ "./src/view/navigation.js":
/*!********************************!*\
  !*** ./src/view/navigation.js ***!
  \********************************/
/*! exports provided: createNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNavigation", function() { return createNavigation; });
const createNavigation = () => {
  return ` <nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional main-navigation__additional--active">Stats</a>
</nav>
<ul class="sort">
<li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
<li><a href="#" class="sort__button">Sort by date</a></li>
<li><a href="#" class="sort__button">Sort by rating</a></li></ul>`;
};


/***/ }),

/***/ "./src/view/nickname-user.js":
/*!***********************************!*\
  !*** ./src/view/nickname-user.js ***!
  \***********************************/
/*! exports provided: createNickNameUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNickNameUser", function() { return createNickNameUser; });
const createNickNameUser = () => {
  return `<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section> `;
};



/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/*! exports provided: createPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopup", function() { return createPopup; });
const createPopup = () => {
  return `
  <section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt="">

            <p class="film-details__age">18+</p>
          </div>

          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">The Great Flamarion</h3>
                <p class="film-details__title-original">Original: The Great Flamarion</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">8.9</p>
              </div>
            </div>

            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">Anthony Mann</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">30 March 1945</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">1h 18m</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">USA</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Genres</td>
                <td class="film-details__cell">
                  <span class="film-details__genre">Drama</span>
                  <span class="film-details__genre">Film-Noir</span>
                  <span class="film-details__genre">Mystery</span></td>
              </tr>
            </table>

            <p class="film-details__film-description">
              The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.
            </p>
          </div>
        </div>

        <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
          <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
        </section>
      </div>

      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>

          <ul class="film-details__comments-list">
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
              </span>
              <div>
                <p class="film-details__comment-text">Interesting setting and a good cast</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">Tim Macoveev</span>
                  <span class="film-details__comment-day">2019/12/31 23:59</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
              </span>
              <div>
                <p class="film-details__comment-text">Booooooooooring</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">2 days ago</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
              </span>
              <div>
                <p class="film-details__comment-text">Very very old. Meh</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">2 days ago</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">
                <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
              </span>
              <div>
                <p class="film-details__comment-text">Almost two hours? Seriously?</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">John Doe</span>
                  <span class="film-details__comment-day">Today</span>
                  <button class="film-details__comment-delete">Delete</button>
                </p>
              </div>
            </li>
          </ul>

          <div class="film-details__new-comment">
            <div class="film-details__add-emoji-label"></div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
              <label class="film-details__emoji-label" for="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
              <label class="film-details__emoji-label" for="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
              <label class="film-details__emoji-label" for="emoji-puke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
              <label class="film-details__emoji-label" for="emoji-angry">
                <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
              </label>
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`;
};


/***/ }),

/***/ "./src/view/showMore.js":
/*!******************************!*\
  !*** ./src/view/showMore.js ***!
  \******************************/
/*! exports provided: createButtonShowMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonShowMore", function() { return createButtonShowMore; });
const createButtonShowMore = () => {
  return ` <button class="films-list__show-more">Show more</button>`;
};


/***/ })

/******/ });
//# sourceMappingURL=bungle.js.map