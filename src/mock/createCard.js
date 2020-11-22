import {getRandomInteger} from '../util.js';
import dayjs from 'dayjs';
const COUNT_COMMIT = 5;
const MAX_RATING = 10;
const MIN_AGE_RATING = 6;
const MAX_AGE_RATING = 18;
const COUNT_EMOTION = 4;
let commentsFilms = [];

const generateTtitleFilms = () => {
  const titlesFims = [
    'the Dance of Life',
    'Sagebrush trail',
    'Santa Claus Conquers the Martians',
    'Popeye the Sailor Meets Sindbad the Sailor',
    'The Man with the Golden Arm',
    'The Great Flamarion',
    'Made for Each Other'
  ];

  return titlesFims[getRandomInteger(0, titlesFims.length -1)];
};

const getPoster = () => {
  const posterFilms = [
    './images/posters/made-for-each-other.png',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/the-dance-of-life.jpg'
  ];

  return posterFilms[getRandomInteger(0, posterFilms.length -1)];
};

const createDescription = () => {
  const descriptionsFilms = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'
  ];

  return descriptionsFilms[getRandomInteger(0, descriptionsFilms.length -1)];
};

const createNameAphtor = () => {
  const nameAphtors = [
    'Veider',
    'Luk Skawoker',
    'Palpatine',
    'Pete',
    'Valmond'
  ];

  return nameAphtors[getRandomInteger(0,nameAphtors.length -1)];
};

const getEmotion = () => {
  const emotions = [
    'angry',
    'puke',
    'sleeping',
    'smile'
  ];

  return emotions[getRandomInteger(0, emotions.length -1)];
};

const generateYearFim = () => {
  let randomDateFilmYear = dayjs().format('DD MMM YYYY')
  let randomDateFilm = dayjs().format('YYYY');
  const data =[];
  data.push(randomDateFilmYear);
  data.push(randomDateFilm);
  return data;
};

const generateDateCommit = () => {
  return dayjs().format('YYYY/MM/DD HH:mm');
};

const createComment = () => {
  commentsFilms = [];
  for(let i = 0; i <= getRandomInteger(0, COUNT_COMMIT); i++) {
    const comment = {
      id: i,
      text: createDescription(0, COUNT_COMMIT),
      name: createNameAphtor(0, COUNT_COMMIT),
      emotions: getEmotion(0, COUNT_EMOTION),
      date: generateDateCommit()
    };
    commentsFilms.push(comment);
  }
  return commentsFilms;
};

const createRating = () => {
  return (getRandomInteger(1, MAX_RATING));
};

const createGenre = () => {
  let randomGenre = new Set();
  const genreFilms = [
    'Comedy',
    'Cartoon',
    'Drama',
    'Western',
    'Musical',
    'Mystery'
  ];

  for(let i = 0; i < getRandomInteger(1,3); i++) {
    randomGenre.add(genreFilms[getRandomInteger(0, genreFilms.length -1)]);
  };
  const genres = Array.from(randomGenre);

  return genres;
};

const createDuration = () => {
  const hour = getRandomInteger(1,2);
  const minute = getRandomInteger(0,59);
  return `${hour}h ${minute}m`;
};

const createRatingAge = () => {
  const randomRaiting = getRandomInteger(MIN_AGE_RATING, MAX_AGE_RATING);
  if (randomRaiting === MAX_AGE_RATING) {
    randomRaiting.toString;
    return randomRaiting + '+';
  } else
   return randomRaiting;
};

const createCountry = () => {
  const countries = [
    'USA',
    'Russia',
    'Germany',
    'France'
  ];

  return countries[getRandomInteger(0, countries.length -1)];
};

const createDirector = () => {
  const directors = [
    'Anthony Mann',
    'Timur Becmambetow',
    'Kristopher Nolan',
    'Bondarchuck'
  ];

  return directors[getRandomInteger(0, directors.length -1)];
};

const createWriters = () => {
  const randomWriters = new Set();
  const writersFilm = [
    'Anne Wigton',
    'Heinz Herald',
    'Richard Weil',
  ];
  for(let i = 0; i < writersFilm.length -1; i++) {
    randomWriters.add(writersFilm[getRandomInteger(0, writersFilm.length -1)]);
  };
  const writers = Array.from(randomWriters).join(', ');
  return writers;
};

const createActors = () => {
  const randomActors = new Set();
  const actorsFilm = [
    'Nicola Tesla',
    'Leonardo Dicaprio',
    'Uill Smit',
    'Djonni Depp',
    'Vasya'
  ];
  for(let i =0; i < getRandomInteger(1, actorsFilm.length -1); i++) {
    randomActors.add(actorsFilm[getRandomInteger(0, actorsFilm.length -1)])
  };
  let actors = Array.from(randomActors).join(', ');
  return actors;
};

const getRandomId = () => {
  return getRandomInteger(0, 20);
};

export const createCard = () => {
    return {
    id: getRandomId(),
    isFavorite: Boolean(getRandomInteger(0,1)),
    isWatchList: Boolean(getRandomInteger(0,1)),
    isHistory: Boolean(getRandomInteger(0,1)),
    title: generateTtitleFilms(),
    poster: getPoster(),
    description: createDescription(),
    genres: createGenre(),
    dateFilm: generateYearFim(),
    comment: createComment(),
    countCommit: Number(commentsFilms.length),
    duration: createDuration(),
    rating: createRating(),
    ratingAge: createRatingAge(),
    country: createCountry(),
    directors: createDirector(),
    writers: createWriters(),
    actor: createActors()
  }
};
