console.log("***SELECTORS***");
document.title = "DOM DOM";
//*===========================================
//*            GETELEMENTBYID()
//*===========================================

document.getElementById("header").style.border = "1px solid black";

const myHeader = document.getElementById("header");
console.log(myHeader);

myHeader.style.backgroundColor = "red";
myHeader.style.color = "white";

//* Add Buton

const addButton = document.getElementById("btn");
console.log(addButton);

//? button degisikligi

addButton.style.backgroundColor = "green";
addButton.style.border = "none";
addButton.style.borderRadius = "10px";
addButton.style.padding = "0.6rem";
addButton.style.color = "white";

//? Deger atama

addButton.value = "SAVE";

//* h2

const h1 = document.getElementById("heading1");
console.log(h1); //? sectigimiz elementi gorme

h1.textContent = "DOM Introduction"; //? Deger atama, baslik degisti

console.log(h1.textContent); //? Deger okuma
console.log(h1.innerText);   //? Deger okuma ayni degeri verir
console.log(h1.innerHTML);   //? Deger okuma

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

