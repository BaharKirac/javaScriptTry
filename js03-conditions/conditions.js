console.log("conditions");
//iki kosullu
// const calismaSuresi = prompt("Calisma suresi:")
// let maas = prompt("Maasinizi giriniz:")

// if (calismaSuresi >= 10) {
//     maas = maas * 1.1
//     //maas = Math.trunc( maas* 1.1 ) ondalikli sayiyi tam sayi olarak aliyoruz.
//     console.log("Zamli maasiniz:", maas);
// } else {
//     console.log("Uzgunuz maasiniza zam yapamiyoruz", maas);
// }

//tek kosullu
// if (calismaSuresi >= 10) {
//     //maas = maas * 1.1
//     maas = Math.trunc( maas* 1.1 ) ondalikli sayiyi tam sayi olarak aliyoruz.
//     console.log('Zamli maasiniz: ${maas}');
//     console.log("by by");

//multi coklu kosullu

const grade = prompt("please enter your grade:");
let result = "";
if (grade < 40) {
  result = "FF";
} else if (grade <= 50) {
  result = "DD";
} else if (grade <= 65) {
  result = "CC";
} else if (grade <= 89) {
  result = "BB";
} else {
  result = "AA";
}
if (result != "") {
  console.log(`Your score:${result}`);
}

// //? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
// //? yazdiriniz.

const n1 = +prompt("Num1:");
const n2 = +prompt("Num2:");
const n3 = +prompt("Num3:");

// //* 1.YONTEM
// //? nested if
if (n1 > n2) {
  if (n1 > n3) {
    console.log("Biggest:", n1);
  }
}

// //? kosullarin logical operatorler yardimiyla birleştirilmesi

if (n1 > n2 && n1 > n3) {
  console.log("biggest:", n1);
} else if (n2 > n1 && n2 > n3) {
  console.log("biggest:", n2);
} else if (n3 > n1 && n3 > n2) {
  console.log("biggest:", n3);
}
//2.yontem
let biggest = n1;
if (n2 >= biggest) {
  biggest = n2;
}
if (n3 >= biggest) {
  biggest = n3;
}
console.log("${biggest} is biggest");

//****TERNARY tek satirlik karar islemleri yazmamizi saglar

const grade1 = prompt("Please enter your grade1");
grade1 >= 50 ? console.log("Succeed") : console.log("FAILED");

// //? tek durumlu kosullandirmada da mecburen else yapisi (: ve sonrasi) kullanilmak zorundadir.
// const score1 = grade1 >= 50 ? "SUCCEED" : ""
// console.log(score1)
