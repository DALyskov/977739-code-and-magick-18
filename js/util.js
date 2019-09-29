'use strict';

(function () {
  var ESC_KEYCODE = 27;

  var getRndElmFromArr = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var getRndName = function (names, surnames) {
    return getRndElmFromArr(names) + ' ' + getRndElmFromArr(surnames);
  };

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
    domElement.style.left = window.popapCharacter.popupCharacterLeft;
    domElement.style.top = window.popapCharacter.popupCharacterTop;
    domElement.classList.add('hidden');
    document.removeEventListener('keydown', function (evt) {
      popupEscPressHandler(evt, domElement);
    });
  };

  window.util = {
    ESC_KEYCOD: ESC_KEYCODE,
    getRndElmFromArr: getRndElmFromArr,
    getRndName: getRndName,
    openPopup: openPopup,
    closePopup: closePopup
  };
})();
