'use strict';

var messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var commentCount = 25;

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var shuffleArray = function () {
  var j;
  var x;
  var i;
  for (i = numberArray.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = numberArray[i];
    numberArray[i] = numberArray[j];
    numberArray[j] = x;
  }
  return numberArray;
};

var uniqueRandomNumber = shuffleArray();

var getRandomItems = function () {
  var comment = [];
  for (var i = 0; i < commentCount; i++) {
    var imgUrl = 'photos/' + uniqueRandomNumber[i] + '.jpg';
    var imageDescription = imgUrl.toString();
    var randomLikes = getRandomNumber(15, 500);
    var randomComment = messages[getRandomNumber(0, messages.length - 1)];
    var randomName = names[getRandomNumber(0, names.length - 1)];
    comment[i] = {
      url: imgUrl,
      description: imageDescription,
      likes: randomLikes,
      message: randomComment,
      name: randomName
    };
  }
  return comment;
};

getRandomItems();
