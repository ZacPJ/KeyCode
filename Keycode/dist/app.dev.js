"use strict";

var all = {
  buttonPress: document.getElementById('welcome'),
  introFlex: document.getElementById("introFlex"),
  mainFlex: document.getElementById("secondFlex"),
  keyNum: document.getElementById("keyNum"),
  key: document.getElementById("key"),
  location: document.getElementById("location"),
  code: document.getElementById("code"),
  keyNumSmall: document.getElementById("keyNumSmall")
};
all.mainFlex.style.display = "none";
all.buttonPress.addEventListener('click', function () {
  all.buttonPress.textContent = "test";
  all.introFlex.style.display = "none";
  all.mainFlex.style.display = "block";
});
window.addEventListener('keydown', function (event) {
  all.keyNum.textContent = event.keyCode;
  all.key.textContent = event.key;
  all.location.textContent = event.location;
  all.code.textContent = event.code;
  all.keyNumSmall.textContent = event.keyCode;
});