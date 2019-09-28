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
var commentList = [];
var photoUsers = [];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
// возвращает случайное число для различных нужд в коде.

var generateComments = function () {
  for (var i = 0; i < COMMENTS.length; i++) {
    commentList[i] = COMMENTS[getRandomNumber(0, COMMENTS.length - 1)];
  }
  return commentList;
};
generateComments(); // возвращает список случайных комментариев.

var generatePhotoList = function () {
  for (var i = 0; i < PHOTOS_MAX; i++) {
    photoUsers[i] = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'А для тех, кто не согласен, уже закуплен полицейский вертолетоносец Мистраль.',
      likes: getRandomNumber(15, 200),
      comments: commentList.length,
      name: NAMES[getRandomNumber(0, NAMES.length - 1)]
    };
  }
  return photoUsers;
};

generatePhotoList(); // возвращает список фотографий

var userPictures = document.querySelector('.pictures');
var template = document.querySelector('#picture').content.querySelector('.picture');
var fragment = document.createDocumentFragment();

for (var j = 0; j < photoUsers.length; j++) {
  var pictureImg = document.querySelector('#picture').content.querySelector('.picture__img');
  pictureImg.src = photoUsers[j].url;
  var photoElement = template.cloneNode(true);

  photoElement.querySelector('.picture__comments').textContent = photoUsers[j].comments;
  photoElement.querySelector('.picture__likes').textContent = photoUsers[j].likes;

  fragment.appendChild(photoElement);
}

userPictures.appendChild(fragment);
