import {createElement} from "../util.js";

const createNavigation = (filters) => {

 let links = filters.map(createNavigationLik).join('');

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
 ${links}
  </div>
  <a href="#stats" class="main-navigation__additional main-navigation__additional--active">Stats</a>
</nav>
<ul class="sort">
<li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
<li><a href="#" class="sort__button">Sort by date</a></li>
<li><a href="#" class="sort__button">Sort by rating</a></li></ul>`;
};

const createNavigationLik = (filters) => {
  let {name, count} = filters;
  return `<a href="#favorites" class="main-navigation__item">${name} <span class="main-navigation__item-count">${count}</span></a>`
}

export class Navigation {
  constructor (filter) {
    this._element = null;
    this._filter = filter;
  }

  getTemplate() {
    return createNavigation(this._filter);
  }

  getElement() {
    if(!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null
  }
}

