'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRndElmFromArr = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getRndName = function (names, surnames) {
  return getRndElmFromArr(names) + ' ' + getRndElmFromArr(surnames);
};

var getRndCharacter = function (name, coatColor, eyesColor) {
  var character = {
    name: name,
    coatColor: coatColor,
    eyesColor: eyesColor
  };
  return character;
};

var characters = [
  getRndCharacter(getRndName(NAMES, SURNAMES), getRndElmFromArr(COAT_COLOR), getRndElmFromArr(EYES_COLOR)),
  getRndCharacter(getRndName(NAMES, SURNAMES), getRndElmFromArr(COAT_COLOR), getRndElmFromArr(EYES_COLOR)),
  getRndCharacter(getRndName(NAMES, SURNAMES), getRndElmFromArr(COAT_COLOR), getRndElmFromArr(EYES_COLOR)),
  getRndCharacter(getRndName(NAMES, SURNAMES), getRndElmFromArr(COAT_COLOR), getRndElmFromArr(EYES_COLOR))
];

var windowCharacter = document.querySelector('.setup');
windowCharacter.classList.remove('hidden');

var WizardList = document.querySelector('.setup-similar-list');
var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var WizardFragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  var SimilarWizard = template.cloneNode(true);
  SimilarWizard.querySelector('.setup-similar-label').textContent = characters[i].name;
  SimilarWizard.querySelector('.wizard-coat').style.fill = characters[i].coatColor;
  SimilarWizard.querySelector('.wizard-eyes').style.fill = characters[i].eyesColor;

  WizardFragment.append(SimilarWizard);
}

WizardList.append(WizardFragment);

var windowListWizard = document.querySelector('.setup-similar');
windowListWizard.classList.remove('hidden');
