'use strict';

(function () {
  var WIZARDS_QUANTITY = 4;

  var coatColor;
  var eyesColor;
  var wizardData = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.addWizards(wizardData.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }), WIZARDS_QUANTITY);
  };

  var onCoatChange = window.util.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var onEyesChange = window.util.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  var successHandler = function (wizards) {
    wizardData = wizards;
    updateWizards();
  };

  window.backend.load(successHandler, window.util.errorHandler);

  window.similarCharacters = {
    onCoatChange: onCoatChange,
    onEyesChange: onEyesChange,
  };
})();
