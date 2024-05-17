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
console.log(h1.innerText); //? Deger okuma ayni degeri verir
console.log(h1.innerHTML); //? Deger okuma

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const myInputs = document.getElementsByTagName("input");
console.log(myInputs); //! HTML Collection (Array-Like) dondurur.

console.log("size:", myInputs.length);

console.log(myInputs[0]);
console.log(myInputs[1]);

console.log(document.getElementsByTagName("h3")[0]);

//? indisle erişime ek olarak item() metodu ile de erisim yapilabilir.

console.log(myInputs.item(1));

//? Array'e cevilebilir.

const myLists = document.getElementsByTagName("li");
const myListsArr = [...myLists]; //?Array'e cevirir
console.log(myListsArr);

myListsArr.forEach((li) => (li.style.color = "red"));

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const lists = document.getElementsByClassName("list");

const listsArr = [...lists];
listsArr.forEach((li) => console.log(li));

// lists[2].innerHTML = "Javascript language"
lists[2].innerHTML = `<h1>Javascript</h1>`;
lists[3].innerText = "React biblio";
lists[4].textContent = `<h1>VUE</h1>`;

//* ========================================
//*              QUERYSELECTOR()
//* ========================================
// ! QUery Selector ile id, tag, class seçilebilir.
//! bu secici akısta gördügü ilk elementi secer

//? id secildi (#)
const header = document.querySelector("#header");
console.log("header");

//? class secildi (.)
const itemLists = document.querySelector(".list");
console.log("itemLists");

//? h2 tag'ı secilmis oldu.
const h2 = document.querySelector("h2");
console.log("h2");

//? CSS deki selector mantigi kullanabilir
const otherH2 = document.querySelector("section h2");

const buton = document.querySelector("section.add-item #btn");
console.log(buton);

const react = document.querySelector("section.item-list ul li:nth-child(4)");
console.log(react);

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const listeler = document.querySelectorAll("ul li");
console.log(listeler); //? NodeList(5)

listeler.forEach((li) => console.log(li));

//? alternative olarak
for (const liste of listeler.values()) {
  console.log(liste);
}
