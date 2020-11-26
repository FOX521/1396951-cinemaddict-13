const filmsToFilterMap = {
  All: (cards) => cards.length,
  Watchlist: (cards) => cards.filter((card) => card.isWatchList).length,
  History:(cards) => cards.filter((card) => card.isHistory).length,
  Favorites: (cards) => cards.filter((card) => card.isFavorite).length,
};

export const generateFilter = (cards) => {
  return Object.entries(filmsToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(cards),
    };
  });
};

