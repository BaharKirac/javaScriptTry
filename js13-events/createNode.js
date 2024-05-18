console.log("**** CREATE NODE ****")

//* ------- YENI BIR ELEMENT OLUSTURMA ------

cons langInput = document.querySelector("#input")

const newP = document.createElement("p")

const text = document.createTextNode(langInput.value)

newP.appendChild(text)

console.log(newP);