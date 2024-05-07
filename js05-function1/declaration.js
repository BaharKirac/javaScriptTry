//!Declaration(Fonksiyonun tanimlanmasi)

//* ORNEK1:
//*****************************************/
function printHei(){
  alert("Hei folkens")
}
printHei()    //invoke, call
printHei()

//* ORNEK2:
//*****************************************/

function printHello() {
  alert("Hello World");
}
printHello();

//* ORNEK3:
//*****************************************/

function printParametre(message, name = "Cohort 14") {
  console.log(message, name);
}
printParametre("Hello", "FS14");
printParametre("salut", "FS15");
printParametre("Hallo");
printParametre("Hi");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki name
//! parametresi icin default değer olarak 'Cohort14' atanmistir.

//* ORNEK2:
//*****************************************/
console.log(new Date()) //? Sistem tarihi ve saatini verir.

function calculate(name, yob) {
  // const age = 2024 - yob
  const age = new Date().getFullYear() - yob;
  console.log("${name} is ${age} years old");
}
console.log(new Date().getFullYear());

calculate("Ali", 1989);
calculate("Ismet", 1995);
calculate("Mehmet", 2010);

//* ORNEK4:
//******************************************/
function add(num1, num2) {
  const sum = num1 + num2
  return sum
}

function addShort(num1, num2) {
  return (num1 + num2) / (num1 * num2)
}

const result1 = add(3, 5)
const result2 = add(5, 9)
const result3 = addShort(5, 9)

console.log(result1, result2)
console.log(result3)