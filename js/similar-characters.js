'use strict';

(function () {
  var WIZARDS_QUANTITY = 4;

  var wizardList = document.querySelector('.setup-similar-list');
  var boxListWizard = document.querySelector('.setup-similar');

  var addWizards = function (wizards, WizardsAmount) {
    var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var WizardFragment = document.createDocumentFragment();
    for (var i = 0; i < WizardsAmount; i++) {
      var SimilarWizard = template.cloneNode(true);
      SimilarWizard.querySelector('.setup-similar-label').textContent = wizards[i].name;
      SimilarWizard.querySelector('.wizard-coat').style.fill = wizards[i].colorCoat;
      SimilarWizard.querySelector('.wizard-eyes').style.fill = wizards[i].colorEyes;

      WizardFragment.append(SimilarWizard);
    }
    wizardList.append(WizardFragment);
    boxListWizard.classList.remove('hidden');
  };

  var successHandler = function (wizards) {
    addWizards(wizards, WIZARDS_QUANTITY);
  };

  window.backend.load(successHandler, window.util.errorHandler);
})();
