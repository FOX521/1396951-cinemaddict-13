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

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _view_nickname_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/nickname-user.js */ "./src/view/nickname-user.js");
/* harmony import */ var _view_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/navigation.js */ "./src/view/navigation.js");
/* harmony import */ var _view_list_films_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/list-films.js */ "./src/view/list-films.js");
/* harmony import */ var _view_showMore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/showMore.js */ "./src/view/showMore.js");
/* harmony import */ var _view_extra_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/extra-list */ "./src/view/extra-list.js");
/* harmony import */ var _view_countMovies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/countMovies */ "./src/view/countMovies.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/popup.js */ "./src/view/popup.js");
/* harmony import */ var _mock_createCard_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/createCard.js */ "./src/mock/createCard.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util.js */ "./src/util.js");











const CARDS_COUNT = 20;
const CARDS_COUNT_STEP = 5;
const CARDS_COUNT_CONTAINER = 2;
const cards = new Array(CARDS_COUNT).fill().map(_mock_createCard_js__WEBPACK_IMPORTED_MODULE_7__["createCard"]);
let filters = Object(_mock_filter_js__WEBPACK_IMPORTED_MODULE_8__["generateFilter"])(cards);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteFooterElement = document.querySelector(`.footer`);
const footerStatistic = siteFooterElement.querySelector(`.footer__statistics`);

Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(siteHeaderElement, new _view_nickname_user_js__WEBPACK_IMPORTED_MODULE_0__["NickNameUser"]().getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(siteMainElement, new _view_navigation_js__WEBPACK_IMPORTED_MODULE_1__["Navigation"](filters).getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
const containerList =  new _view_list_films_js__WEBPACK_IMPORTED_MODULE_2__["ContainerList"]();
Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(siteMainElement,  containerList.getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
const sectionListFilms = document.querySelector(`.films`);
const listFilms = new _view_list_films_js__WEBPACK_IMPORTED_MODULE_2__["ListFilm"]();
Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(sectionListFilms, listFilms.getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
const mainListFilm = document.querySelector(`.films-list`);
const wrapperFilm = document.querySelector(`.films-list__container`);

for(let i = 0; i < Math.min(cards.length, CARDS_COUNT_STEP); i++) {
  Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(wrapperFilm, new _view_list_films_js__WEBPACK_IMPORTED_MODULE_2__["CardFilms"](cards[i]).getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
};

if (cards.length > CARDS_COUNT_STEP) {
  let renderCardCount = CARDS_COUNT_STEP;
  Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(mainListFilm, new _view_showMore_js__WEBPACK_IMPORTED_MODULE_3__["ShowMore"]().getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
  const buttonShowMore = document.querySelector(`.films-list__show-more`);
  buttonShowMore.addEventListener(`click`, function (evt) {
    evt.preventDefault();
    cards.slice(renderCardCount, renderCardCount + CARDS_COUNT_STEP)
    .forEach((card) => Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(wrapperFilm, new _view_list_films_js__WEBPACK_IMPORTED_MODULE_2__["CardFilms"](card).getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND));
    renderCardCount += CARDS_COUNT_STEP;

    if (renderCardCount >= cards.length) {
      buttonShowMore.remove();
    }
  });
};

Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(sectionListFilms, new _view_extra_list__WEBPACK_IMPORTED_MODULE_4__["TopRated"]().getElement(),  _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(sectionListFilms, new _view_extra_list__WEBPACK_IMPORTED_MODULE_4__["TopCommented"]().getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
const listFilmsExtra = document.querySelectorAll(`.films-list--extra`);

for (let i = 0; i < CARDS_COUNT_CONTAINER; i++) {
  const containerExtraFilms = listFilmsExtra[i].querySelector(`.films-list__container`);
  if (i < CARDS_COUNT_CONTAINER) {
    Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(containerExtraFilms, new _view_extra_list__WEBPACK_IMPORTED_MODULE_4__["CardsTopRated"](cards[i]).getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
    Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(containerExtraFilms, new _view_extra_list__WEBPACK_IMPORTED_MODULE_4__["CardsTopRated"](cards[++i]).getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
  };
};

for (let i = 1; i < CARDS_COUNT_CONTAINER; i++) {
  const containerExtraFilms = listFilmsExtra[i].querySelector(`.films-list__container`);
  if (i < CARDS_COUNT_CONTAINER) {
    Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(containerExtraFilms, new _view_extra_list__WEBPACK_IMPORTED_MODULE_4__["CardsCommented"](cards[++i]).getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
    Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(containerExtraFilms, new _view_extra_list__WEBPACK_IMPORTED_MODULE_4__["CardsCommented"](cards[++i]).getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);
  };
};

Object(_util_js__WEBPACK_IMPORTED_MODULE_9__["renderElement"])(footerStatistic, new _view_countMovies__WEBPACK_IMPORTED_MODULE_5__["CountMovies"](cards).getElement(), _util_js__WEBPACK_IMPORTED_MODULE_9__["RenderPosition"].BEFOREEND);

const popupComponent = new _view_popup_js__WEBPACK_IMPORTED_MODULE_6__["Popup"](cards[0]).getElement();
console.log(popupComponent);

const showPopup = () => {
  siteFooterElement.append(popupComponent);
  let posterFilm = document.getElementsByClassName(`.film-card__poster`);
  let titleFilm = document.getElementsByClassName(`.film-card__title`);
  let closePopup = document.getElementsByClassName(`.film-details__close-btn`);
  let countCommits = document.getElementsByClassName(`.film-card__comments`);
  console.log(countCommits)
}

showPopup();


/***/ }),

/***/ "./src/mock/createCard.js":
/*!********************************!*\
  !*** ./src/mock/createCard.js ***!
  \********************************/
/*! exports provided: createCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCard", function() { return createCard; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);


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

  return titlesFims[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, titlesFims.length -1)];
};

const getPoster = () => {
  const posterFilms = [
    './images/posters/made-for-each-other.png',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/the-dance-of-life.jpg'
  ];

  return posterFilms[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, posterFilms.length -1)];
};

const createDescription = () => {
  const descriptionsFilms = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'
  ];

  return descriptionsFilms[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, descriptionsFilms.length -1)];
};

const createNameAphtor = () => {
  const nameAphtors = [
    'Veider',
    'Luk Skawoker',
    'Palpatine',
    'Pete',
    'Valmond'
  ];

  return nameAphtors[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0,nameAphtors.length -1)];
};

const getEmotion = () => {
  const emotions = [
    'angry',
    'puke',
    'sleeping',
    'smile'
  ];

  return emotions[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, emotions.length -1)];
};

const generateYearFim = () => {
  let randomDateFilmYear = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format('DD MMM YYYY')
  let randomDateFilm = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY');
  const data =[];
  data.push(randomDateFilmYear);
  data.push(randomDateFilm);
  return data;
};

const generateDateCommit = () => {
  return dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY/MM/DD HH:mm');
};

const createComment = () => {
  commentsFilms = [];
  for(let i = 0; i <= Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, COUNT_COMMIT); i++) {
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
  return (Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, MAX_RATING));
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

  for(let i = 0; i < Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1,3); i++) {
    randomGenre.add(genreFilms[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, genreFilms.length -1)]);
  };
  const genres = Array.from(randomGenre);

  return genres;
};

const createDuration = () => {
  const hour = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1,2);
  const minute = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0,59);
  return `${hour}h ${minute}m`;
};

const createRatingAge = () => {
  const randomRaiting = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_AGE_RATING, MAX_AGE_RATING);
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

  return countries[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, countries.length -1)];
};

const createDirector = () => {
  const directors = [
    'Anthony Mann',
    'Timur Becmambetow',
    'Kristopher Nolan',
    'Bondarchuck'
  ];

  return directors[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, directors.length -1)];
};

const createWriters = () => {
  const randomWriters = new Set();
  const writersFilm = [
    'Anne Wigton',
    'Heinz Herald',
    'Richard Weil',
  ];
  for(let i = 0; i < writersFilm.length -1; i++) {
    randomWriters.add(writersFilm[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, writersFilm.length -1)]);
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
  for(let i =0; i < Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, actorsFilm.length -1); i++) {
    randomActors.add(actorsFilm[Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, actorsFilm.length -1)])
  };
  let actors = Array.from(randomActors).join(', ');
  return actors;
};

const getRandomId = () => {
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 20);
};

const createCard = () => {
    return {
    id: getRandomId(),
    isFavorite: Boolean(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0,1)),
    isWatchList: Boolean(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0,1)),
    isHistory: Boolean(Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0,1)),
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


/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
const filmsToFilterMap = {
  All: (cards) => cards.length,
  Watchlist: (cards) => cards.filter((card) => card.isWatchList).length,
  History:(cards) => cards.filter((card) => card.isHistory).length,
  Favorites: (cards) => cards.filter((card) => card.isFavorite).length,
};

const generateFilter = (cards) => {
  return Object.entries(filmsToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(cards),
    };
  });
};



/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: getRandomInteger, RenderPosition, renderElement, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderElement", function() { return renderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
}

const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const createElement =(template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Abstract; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "./src/util.js");


class Abstract {
  constructor () {
    if (new.target === Abstract) {
      throw new Error (`Can't instantiate Abstract, only concrete one.`);
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate())
    }
    return this._elementel
  }

  removeElement() {
    this._elemtnt = null;
  }
}


/***/ }),

/***/ "./src/view/countMovies.js":
/*!*********************************!*\
  !*** ./src/view/countMovies.js ***!
  \*********************************/
/*! exports provided: CountMovies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountMovies", function() { return CountMovies; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createCountMovies = (cards) => {
  return `<p>${cards.length} movies inside</p>`;
};

class CountMovies extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createCountMovies(this._card);
  }
}


/***/ }),

/***/ "./src/view/extra-list.js":
/*!********************************!*\
  !*** ./src/view/extra-list.js ***!
  \********************************/
/*! exports provided: TopRated, TopCommented, CardsCommented, CardsTopRated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRated", function() { return TopRated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopCommented", function() { return TopCommented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsCommented", function() { return CardsCommented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsTopRated", function() { return CardsTopRated; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");

const createTopRated = () => {
  return `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container">
      </div>
    </section>`;
};

class TopRated extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return createTopRated();
  }
}

const createMostCommented = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container">
  </div>
  </section>`;
};

class TopCommented  extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return createMostCommented();
  }
}


const createExtraCardsMostCommented = (card = {}) => {
  let {title, poster, description, genres, dateFilm, rating, countCommit, duration} = card;
  let [,randomDateFilm] = dateFilm;

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${randomDateFilm}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genres}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments">${countCommit} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
  </div>
</article>`;
};

class CardsCommented  extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createExtraCardsMostCommented(this._card);
  }
}

const createExtraCardsTopRated = (card = {}) => {
  let {title, poster, description, genres, dateFilm, rating, countCommit, duration} = card;
  let [,randomDateFilm] = dateFilm;

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${randomDateFilm}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genres}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}…</p>
  <a class="film-card__comments">${countCommit} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

class CardsTopRated  extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createExtraCardsTopRated(this._card);
  }
}





/***/ }),

/***/ "./src/view/list-films.js":
/*!********************************!*\
  !*** ./src/view/list-films.js ***!
  \********************************/
/*! exports provided: ListFilm, CardFilms, ContainerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilm", function() { return ListFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFilms", function() { return CardFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerList", function() { return ContainerList; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createContainerList = () => {
  return `<section class="films"></section>`;
};

class ContainerList  extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return createContainerList();
  }
};

const createListFilms = () => {
  return `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};

class ListFilm  extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createListFilms();
  }
};

const createCardsFilms = (cards = {}) => {
  const {title, poster, description, genres, dateFilm, countCommit, duration, rating} = cards;
  const [genreFilms] = genres;
  const [,year] = dateFilm

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${year}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genreFilms}</span>
  </p>
  <img src="${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments">${countCommit} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

class CardFilms extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createCardsFilms(this._card);
  }
}




/***/ }),

/***/ "./src/view/navigation.js":
/*!********************************!*\
  !*** ./src/view/navigation.js ***!
  \********************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


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

class Navigation  extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (filters) {
    super();
    this._filter = filters;
  }

  getTemplate() {
    return createNavigation(this._filter);
  }
}



/***/ }),

/***/ "./src/view/nickname-user.js":
/*!***********************************!*\
  !*** ./src/view/nickname-user.js ***!
  \***********************************/
/*! exports provided: NickNameUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NickNameUser", function() { return NickNameUser; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



const createNickNameUser = () => {
  return `<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};

class NickNameUser extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {

  getTemplate() {
    return createNickNameUser();
  }
}




/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createPopup = (card = {}) => {
  const {title, poster, description, genres,  comment, countCommit, duration, rating, ratingAge, country, directors, writers, actor, dateFilm} = card;
  const [date] = dateFilm;
  let comments = '';
  let genre;

  comment.forEach(element => {
    let {date: dataComment, emotions, name, text} = element;
    comments += `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emotions}.png" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${text}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${name}</span>
        <span class="film-details__comment-day">${dataComment}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`
  });


  const createGenre = (genreArray) => {
    if (genreArray.length  > 1) {
      return `<tr class="film-details__row">
      <td class="film-details__term">Genres</td>
      <td class="film-details__cell">
       ${genres}
    </tr>`
    } else
    return `<tr class="film-details__row">
    <td class="film-details__term">Genre</td>
    <td class="film-details__cell">
     ${genres}
  </tr>`
  };

  return `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="${poster}" alt="">

            <p class="film-details__age">${ratingAge}</p>
          </div>

          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${title}</h3>
                <p class="film-details__title-original">Original: The Great Flamarion</p>
              </div>

              <div class="film-details__rating">
                <p class="film-details__total-rating">${rating}</p>
              </div>
            </div>

            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">${directors}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">${writers}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">${actor}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">${date}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">${duration}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">${country}</td>
              </tr>
            ${genre = createGenre(genres)}
            </table>

            <p class="film-details__film-description">
            ${description}
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
          <h3 class="film-details__comments-title">Comments<span class="film-details__comments-count"> ${countCommit}</span></h3>

          <ul class="film-details__comments-list">
            ${comments}
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

class Popup extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(card) {
    super();
    this._card = card;
  }
  getTemplate() {
    return createPopup(this._card);
  }
}


/***/ }),

/***/ "./src/view/showMore.js":
/*!******************************!*\
  !*** ./src/view/showMore.js ***!
  \******************************/
/*! exports provided: ShowMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMore", function() { return ShowMore; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createButtonShowMore = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

class ShowMore extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createButtonShowMore();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bungle.js.map