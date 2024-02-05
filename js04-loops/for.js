// for (let i = 1; i <= 100; i++) {
//   console.log("FS14");
// }

// //? 1 den n kadar sayilari toplayan kodu yaziniz.
// const n = prompt("Enter your number");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
//   console.log(sum);
// }
// console.log("SUM: ${sum}");

//? 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..
//? Math.random() => 0 - 1 arasinda rasgele bir sayi üretir

const adet = prompt("kac adet sayi uretmek istersiniz:?")

for (let sayac = 1; sayac <= adet; sayac++) {
  const rasgeleSayi = Math.round(Math.random() * 100)
  //   rasgeleSayi++ //*!Uncaught TypeError: Assignment to constant variable.
  console.log(`${sayac}. sayiniz : ${rasgeleSayi}`)
}

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ODEV1: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

//* NOT:
//* 1 ve kendisinden başka böleni olmayan sayılar ASAL sayılardır.
//* Eğer girilen sayı, herhangi bir sayıya tam bölünüyorsa diğer sayıları kontrol etmeye gerek yoktur. ASAL DEĞİL diyebiliriz.
//* break deyimi ile dongu bir koşul gerçekleştiğinde kırılabilir.