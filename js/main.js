'use strict';

var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var PHOTOS_MAX = 25;

// возвращает случайное число для различных нужд в коде.
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// возвращает список случайных комментариев.
var generateComments = function () {
  var commentList = [];
  for (var i = 0; i < COMMENTS.length; i++) {
    commentList[i] = COMMENTS[getRandomNumber(0, COMMENTS.length - 1)];
  }
  return commentList;
};

// возвращает список фотографий
var generatePhotoList = function () {
  var photoUsers = [];
  for (var i = 0; i < PHOTOS_MAX; i++) {
    photoUsers[i] = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'А для тех, кто не согласен, уже закуплен полицейский вертолетоносец Мистраль.',
      likes: getRandomNumber(15, 200),
      comments: generateComments(), // если прямо тут вызывать generateComments, то на сайте получается странная джигурда из комментариев.
      name: NAMES[getRandomNumber(0, NAMES.length - 1)]
    };
  }
  return photoUsers;
};

// Создает один элемент в списке
var getPhotoBlock = function (photo) {
  var template = document.querySelector('#picture').content.querySelector('.picture');
  var photoElement = template.cloneNode(true);
  photoElement.querySelector('.picture__comments').textContent = photo.comments;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__img').src = photo.url;

  return photoElement;
};

// Создает нужное количество элементов в списке
var renderPhotos = function (photos) {
  var userPictures = document.querySelector('.pictures');
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < photos.length; i++) {
    fragment.appendChild(getPhotoBlock(photos[i]));
  }

  userPictures.appendChild(fragment);
};

renderPhotos(generatePhotoList());

