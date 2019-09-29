'use strict';

(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_QUANTITY = 4;

  var wizardList = document.querySelector('.setup-similar-list');
  var boxListWizard = document.querySelector('.setup-similar');

  var getRndCharacter = function (name, coatColor, eyesColor) {
    var character = {
      name: name,
      coatColor: coatColor,
      eyesColor: eyesColor
    };
    return character;
  };

  var characters = [];
  var getCharacters = function (WizardsAmount) {
    for (var i = 0; i < WizardsAmount; i++) {
      characters[i] = getRndCharacter(window.util.getRndName(NAMES, SURNAMES), window.util.getRndElmFromArr(window.popapCharacter.COAT_COLORS), window.util.getRndElmFromArr(window.popapCharacter.EYES_COLORS));
    }
    return characters;
  };
  characters = getCharacters(WIZARDS_QUANTITY);

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
    wizardList.append(WizardFragment);
  };

  addWizards(WIZARDS_QUANTITY);

  boxListWizard.classList.remove('hidden');
})();
