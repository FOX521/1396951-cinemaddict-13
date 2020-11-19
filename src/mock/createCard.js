import {getRandomInteger} from '../util.js';
import dayjs from 'dayjs';
const commentsFilms = [];
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

  return titlesFims[getRandomInteger(0, titlesFims.length)];
};

const getPoster = () => {
  const posterFilms = [
    './images/made-for-each-other.png',
    './images/popeye-meets-sinbad.png',
    './images/sagebrush-trail.jpg',
    './images/santa-claus-conquers-the-martians.jpg',
    './images/the-dance-of-life.jpg'
  ];

  return posterFilms[getRandomInteger(0, posterFilms.length)];
};

const createDescription = () => {
  const descriptionsFilms = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'
  ];

  return descriptionsFilms[getRandomInteger(0, descriptionsFilms.length)];
};

const createNameAphtor = () => {
  const nameAphtors = [
    'Veider',
    'Luk Skawoker',
    'Palpatine',
    'Pete',
    'Valmond'
  ];

  return nameAphtors[getRandomInteger(0,nameAphtors.length)];
};

const getEmotion = () => {
  const emotions = [
    'angry',
    'puke',
    'sleeping',
    'smile'
  ];

  return emotions[getRandomInteger(0, emotions.length)];
};

const generateYearFim = () => {
  return getRandomInteger(1920,1970);
};

const generateDate = () => {
  return dayjs().format('YYYY/MM/DDTHH:mm');
};

const createComment = () => {
  const commentsFilms = [];
  for(let i = 0; i < getRandomInteger(0, 5); i++) {
    const comment = {
      text: createDescription(0, 5),
      name: createNameAphtor(0, 5),
      emotions: getEmotion(0, 4),
      date: generateDate()
    };
    commentsFilms.push(comment);
  }
  return commentsFilms;
};

const createRating = () => {
  return getRandomInteger(1,10);
};

const createGenre = () => {
  const genreFilms = [
    'Comedy',
    'Cartoon',
    'Drama',
    'Western',
    'Musical',
    'Mystery'
  ];

  return genreFilms[getRandomInteger(0, genreFilms.length)];
};

const createDuration = () => {
  const hour = getRandomInteger(1,2);
  const minute = getRandomInteger(0,59);
  return `${hour}h ${minute}m`;
};


export const createCard = () => {
  return {
    title: generateTtitleFilms(),
    poster: getPoster(),
    description: createDescription(),
    genre: createGenre(),
    year: generateYearFim(),
    countCommit: Number(commentsFilms.length),
    duration: createDuration(),
    rating: createRating(),
    comment: createComment(),
  };
};
