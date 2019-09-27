'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var popupCharacter = document.querySelector('.setup');
var boxListWizard = document.querySelector('.setup-similar');
var WizardList = document.querySelector('.setup-similar-list');
var WizardsQuantity = 4;
var popupCharacterIcon = document.querySelector('.setup-open');
var popupCharacterClose = popupCharacter.querySelector('.setup-close');
var userNameInput = popupCharacter.querySelector('.setup-user-name');
var userWizardCoat = popupCharacter.querySelector('.wizard-coat');
var userWizardEyes = popupCharacter.querySelector('.wizard-eyes');
var userFireball = popupCharacter.querySelector('.setup-fireball-wrap');
var userWizardCoatInput = popupCharacter.querySelector('input[name=coat-color]');
var userWizardEyesInput = popupCharacter.querySelector('input[name=eyes-color]');
var userFireballInput = popupCharacter.querySelector('input[name=fireball-color]');

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

boxListWizard.classList.remove('hidden');

var popupEscPressHandler = function (evt, domElement) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup(domElement);
  }
};

var openPopup = function (domElement) {
  domElement.classList.remove('hidden');
  document.addEventListener('keydown', function (evt) {
    popupEscPressHandler(evt, domElement);
  });
};

var closePopup = function (domElement) {
  domElement.classList.add('hidden');
  document.removeEventListener('keydown', function (evt) {
    popupEscPressHandler(evt, domElement);
  });
};

popupCharacterIcon.addEventListener('click', function () {
  openPopup(popupCharacter);
});

popupCharacterIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup(popupCharacter);
  }
});

popupCharacterClose.addEventListener('click', function () {
  closePopup(popupCharacter);
});

popupCharacterClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup(popupCharacter);
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

userWizardCoat.addEventListener('click', function () {
  userWizardCoat.style.fill = getRndElmFromArr(COAT_COLORS);
  userWizardCoatInput.value = userWizardCoat.style.fill;
});

userWizardEyes.addEventListener('click', function () {
  userWizardEyes.style.fill = getRndElmFromArr(EYES_COLORS);
  userWizardEyesInput.value = userWizardEyes.style.fill;
});

userFireball.addEventListener('click', function () {
  userFireball.style.background = getRndElmFromArr(FIREBALL_COLORS);
  userFireballInput.value = userFireball.style.background;
});
