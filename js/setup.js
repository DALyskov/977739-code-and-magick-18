'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var windowCharacter = document.querySelector('.setup');
var windowListWizard = document.querySelector('.setup-similar');
var WizardList = document.querySelector('.setup-similar-list');
var WizardsQuantity = 4;

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

var characters = [];
var getcharacters = function (WizardsAmount) {
  for (var i = 0; i < WizardsAmount; i++) {
    characters[i] = getRndCharacter(getRndName(NAMES, SURNAMES), getRndElmFromArr(COAT_COLORS), getRndElmFromArr(EYES_COLORS));
  }
  return characters;
};
characters = getcharacters(WizardsQuantity);

var addWizards = function (WizardsAmount) {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var WizardFragment = document.createDocumentFragment();
  for (var i = 0; i < WizardsAmount; i++) {
    var SimilarWizard = template.cloneNode(true);
    SimilarWizard.querySelector('.setup-similar-label').textContent = characters[i].name;
    SimilarWizard.querySelector('.wizard-coat').style.fill = characters[i].coatColor;
    SimilarWizard.querySelector('.wizard-eyes').style.fill = characters[i].eyesColor;

    WizardFragment.append(SimilarWizard);
  }
  WizardList.append(WizardFragment);
};

addWizards(WizardsQuantity);

windowCharacter.classList.remove('hidden');
windowListWizard.classList.remove('hidden');
