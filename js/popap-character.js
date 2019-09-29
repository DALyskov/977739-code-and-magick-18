'use strict';

(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var ENTER_KEYCODE = 13;


  var popupCharacter = document.querySelector('.setup');
  var popupCharacterIcon = document.querySelector('.setup-open');
  var popupCharacterClose = popupCharacter.querySelector('.setup-close');
  var userNameInput = popupCharacter.querySelector('.setup-user-name');
  var userWizardCoat = popupCharacter.querySelector('.wizard-coat');
  var userWizardEyes = popupCharacter.querySelector('.wizard-eyes');
  var userFireball = popupCharacter.querySelector('.setup-fireball-wrap');
  var userWizardCoatInput = popupCharacter.querySelector('input[name=coat-color]');
  var userWizardEyesInput = popupCharacter.querySelector('input[name=eyes-color]');
  var userFireballInput = popupCharacter.querySelector('input[name=fireball-color]');
  var popupCharacterLeft = getComputedStyle(popupCharacter).left;
  var popupCharacterTop = getComputedStyle(popupCharacter).top;

  window.popapCharacter = {
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    popupCharacterLeft: popupCharacterLeft,
    popupCharacterTop: popupCharacterTop
  };

  popupCharacterIcon.addEventListener('click', function () {
    window.util.openPopup(popupCharacter);
  });

  popupCharacterIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      window.util.openPopup(popupCharacter);
    }
  });

  popupCharacterClose.addEventListener('click', function () {
    window.util.closePopup(popupCharacter);

  });

  popupCharacterClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      window.util.closePopup(popupCharacter);

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
    userWizardCoat.style.fill = window.util.getRndElmFromArr(COAT_COLORS);
    userWizardCoatInput.value = userWizardCoat.style.fill;
  });

  userWizardEyes.addEventListener('click', function () {
    userWizardEyes.style.fill = window.util.getRndElmFromArr(EYES_COLORS);
    userWizardEyesInput.value = userWizardEyes.style.fill;
  });

  userFireball.addEventListener('click', function () {
    userFireball.style.background = window.util.getRndElmFromArr(FIREBALL_COLORS);
    userFireballInput.value = userFireball.style.background;
  });

  var popapCharacterHandler = popupCharacter.querySelector('.upload');

  popapCharacterHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var draggedMarker = false;

    var mouseMoveHendler = function (moveEvt) {
      moveEvt.preventDefault();
      draggedMarker = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      popupCharacter.style.left = (popupCharacter.offsetLeft - shift.x) + 'px';
      popupCharacter.style.top = (popupCharacter.offsetTop - shift.y) + 'px';
    };

    var mouseUpHendler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHendler);
      document.removeEventListener('mouseup', mouseUpHendler);

      if (draggedMarker) {
        var clickPreventDefaultHandler = function (evt) {
          evt.preventDefault();
          popupCharacter.removeEventListener('click', clickPreventDefaultHandler);
        };
        popupCharacter.addEventListener('click', clickPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', mouseMoveHendler);
    document.addEventListener('mouseup', mouseUpHendler);
  });
})();
