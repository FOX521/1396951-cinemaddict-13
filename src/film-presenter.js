const { CardFilms } = require("./view/list-films")
const { Popup } = require("./view/popup")

class FilmPresenter {
  constructor(film) {
    this._film = film
    this._card = new CardFilms(this._film)
    this._popup = new Popup(this._film)

    this._card.setClickHandler(this.renderPopup.)
    this._popup.setCloseHandler()
  }

  renderCard() {}

  renderPopup() {}

  closePopup() {}
}
