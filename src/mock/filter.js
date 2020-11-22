const filmsToFilterMap = {
  Watchlist: (cards) => cards.filter((card) => card.isWatchList || (!card.isHistory && !card.isFavorite)).length,
  History:(cards) => cards.filter((card) => card.isHistory || (!card.isWatchList && !card.isFavorite)).length,
  Favorites: (cards) => cards.filter((card) => card.isFavorite || (!card.isHistory && !card.isWatchList)).length,
};


