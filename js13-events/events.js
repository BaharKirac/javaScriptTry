//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******");

document.querySelector("header h1").onmouseover = function () {
  document.querySelector("header h1").style.color = "red";
};

//? Alternative olarak
const heading1 = document.querySelector("header h1");

heading1.onmouseover = function () {
  heading1.style.color = "red";
};

heading1.onmouseout = function () {
  heading1.style.color = "black";
};
