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

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.prepend(node);
  };

  window.util = {
    ESC_KEYCOD: ESC_KEYCODE,
    getRndElmFromArr: getRndElmFromArr,
    getRndName: getRndName,
    openPopup: openPopup,
    closePopup: closePopup,
    errorHandler: errorHandler
  };
})();
