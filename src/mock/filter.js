const filmsToFilterMap = {
  All: (cards) => cards,
  Watchlist: (cards) => cards.filter((card) => card.isWatchList).length,
  History:(cards) => cards.filter((card) => card.isHistory).length,
  Favorites: (cards) => cards.filter((card) => card.isFavorite).length,
};



