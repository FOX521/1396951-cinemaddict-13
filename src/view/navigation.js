export const createNavigation = (filters) => {

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

const createNavigationLik = (filter) => {
  let {name, count} = filter;
  return `<a href="#favorites" class="main-navigation__item">${name} <span class="main-navigation__item-count">${count}</span></a>`

}
