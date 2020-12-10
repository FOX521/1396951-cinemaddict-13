import  Abstract from "./abstract.js";

const createButtonShowMore = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export class ShowMore extends Abstract {
  getTemplate() {
    return createButtonShowMore();
  }
}
