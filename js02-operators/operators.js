console.log("js dosyasi baglandi");
// degisken tanimlama

var deneme = 5;
varDeneme = 6;

let myVar = 5;

const myVar1 = 6;

// Aritmetikk Operators
// +,-,*,/,&
// + operator

const num1 = 10;
const num2 = 69;

const toplam = num1 + num2;

// num1 ve num2 operand (islenen), + ise operator(isleyen) olarak andlandiirlir.

console.log(toplam);

const msg1 = "Hello";
const msg2 = "World";

const mesaj = msg1 + msg2;
console.log(mesaj);

const firstName = "Koray";
const lastName = "Koksal";
console.log(firstName, lastName); // consoleda virgül ile değişkenleri yazdırırken virgül boşluk karakateri gibi davranır.

const fullName = firstName + " " + lastName;
// +operatoru String Concatenation islemini de yapar.

console.log(fullName);

// //! Template Literals (Es6 ile gelen bir özellik)
// // `merhaba``${değişken} ${değişken2}`;
// // `merhaba` hem string tanımlaması yapabiliriz hem de string içinde değişkenlerimizi `${değişken}` şeklinde yazabiliriz. + yerine daha dinamik bir şekilde stringlerimizi concatenate edebiliriz.

const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

const num3 = "6";
const num4 = "7";
console.log(num3 + num4); // 67
console.log(num3 + 7); // 67. js otomatik tip dönüşümü yaparak buradaki ifadeyi de concatenat etti.
// console.log(7 + num3); // + operatorunde string değişken üstün gelir ve dönmüşümü stringe yapar. 76 çıktısını verdi.
console.log(typeof (7 + num3)); // string

//! - operatörü
const x = 55;
const y = 44;
console.log(x - y);

const myNum = "1";
console.log(x - myNum); // 54. - operatöründe string değişkeni numbera çevirir.

// const yourNum = "one";
// console.log(x - yourNum); // NaN (Not a Number)
// //? String ifadeyi number a dönüştürmeye çalışıyor ama bu mümkün olmadığı için dönüştüremiyor ve bu nedenle işlemin sonucunu NaN döndürüyor.matematiksel olarak belirsiz veya tanımsız bir değeri temsil eder.
// console.log(x - "a"); // NaN

//! * operatörü
let carp1 = 7;
let carp2 = 9;
console.log(carp1 * carp2);

console.log("a" * "b"); // NaN
console.log("a" * 3); // NaN

console.log("5" * "9"); // 45. karakterler numeric ise numebr gibi davranarak işlemi gerçekleştiriyor.
console.log(typeof ("5" * "9")); // number

//del operatoru

const del1 = 81;
const del2 = 9;

console.log(del1 / del2);
console.log(del1 / "9");
console.log(del1 / "dokuz"); //NaN

console.log(del2 / 0); //infinity-sonsuzluk  ifadesi verir
console.log(-61 / 0); //-infinity
console.log(0 / 5); //0
console.log(0 / -5);

//modulus

console.log(57 / 9);

const mod1 = 57;
const mod2 = 9;

console.log(mod1 % mod2); //bølmedeki kalan degeerini dondurur
console.log(27 / 2);

const benimSayim = 967;
const birlerBas = benimSayim % 10;
console.log(birlerBas);

const onlarBas = (benimSayim % 100) / 10;
console.log(onlarBas);

const yüzlerBas = benimSayim / 100; // 9.67
console.log(yüzlerBas);

//?Bazi hazır fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tam sayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam sayiya yuvarlar
// Math.trunc(); //* sayinin tam kismini alir.
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.
// toFixed(basamakSayısı): // . dan sonra parantezin içine verdiğimiz sayı kadar basamak alır. Eğer noktadan sonraki basamak sayısı içine verdiğimiz sayıdan büyükse sondaki rakamı bir artırır.

console.log(
  `YüzlerBas: ${Math.trunc(yüzlerBas)}, OnlarBas: ${Math.trunc(
    onlarBas
  )}, birlerbas : ${birlerBas}`
);

const hazirSayi = 56.788888;

console.log(`hazirSayi of Circle: ${hazirSayi.toFixed(3)} `); // 56.789
console.log(`hazirSayi of Circle: ${Math.floor(hazirSayi)} `);
console.log(`hazirSayi of Circle: ${Math.ceil(hazirSayi)} `);
console.log(`hazirSayi of Circle: ${Math.trunc(hazirSayi)} `);
console.log(`hazirSayi of Circle: ${Math.round(hazirSayi)} `);

const randomNum = Math.random();
console.log(randomNum);

const randomNum2 = Math.random() * 10;
console.log(randomNum2);
console.log(Math.round(Math.random() * 10));

//ATAMA OPERATORLERI

let nums1 = 14;
let nums2 = 17;
//! += ekle ve sonucu ata
//nums2 += nums1; ayni islem bu da kisa kod
nums2 = nums2 + nums1;
console.log(nums2); //31

// -= cikar ve sonucu ata
let num14 = 6;
let num15 = 2;
num14 -= num15;
console.log(num14);

// //! *= Çarp ve Sonucu Ata
//num14 = num14 * num15;
num14 *= num15
console.log(num14) //18
// //! /= Böl ve Sonucu Ata
//num14 = num14 / num15;
num14 /= num15;
console.log(num14);
// //! /= Bölümden Kalanı Bul ve Ata
//num14 = num14 % num15;
num14 %= num15;
console.log(num14);
// //! **= Üs Al ve Sonucu Ata
// // num14 = num14 ** num15;
num14 **= num15;
console.log(num14);

//Karsilastirma operatorleri 
const num16 = 27;
console.log(num16 == 27);
// //? == (eşitlik operatörü), iki değeri karşılaştırırken tip dönüşümü yapar. Eğer karşılaştırılan değerler farklı tiplerde ise, JavaScript otomatik olarak bu değerleri aynı tipe dönüştürerek karşılaştırma yapar. Bu işlem sırasında, değerler eşitlenebilir bir forma getirilir ve ardından karşılaştırılır.

console.log(num16 === 27); // true
console.log(num16 === "27"); // false
// // //? === operatörü otomatik tip dönüşümü yapmadığından dolayı, farklı tiplerdeki değerleri eşit olarak kabul etmez.tip ve değer aynı mı diye sorgular.

const user1 = prompt("Lütfen bir sayı griniz: ");
const user2 = prompt("Lütfen bir sayı griniz: ");
console.log(user1);
console.log(user2);
const isSame = user1 == user2;
console.log(isSame);

console.log(true == 1); //true
console.log(null == undefined); // true
true boolean değeri 1 sayısı ile eşit kabul edilir, null ve undefined ise birbirine eşit kabul edilir.
console.log(true === 1); // false
console.log(null === undefined); // false

// //? !=, !==

console.log(15 != "15"); // false. çünkü değerleri eşit
console.log(15 !== "15"); // true. çünkü typeları eşit değil

// // //? >, < (Büyük mü?, Küçük mü?)
console.log(15 > 5); // true
console.log(15 < 5); // false

console.log("15" > 5); // true

console.log("a" > "b"); // false.String ifadelerde ASCII'ye gore kiyaslama yapilir.
console.log("a".charCodeAt()); // 97
console.log("b".charCodeAt()); // 98
// // //. .charCodeAt() metodu string karakterin ASCII karşılığını verir.
console.log("a" > "A");// true

// //? >=, <= (Büyük veya eşit mi?, Küçük veya eşit mi?)

console.log(15 >= 15); //true
console.log(15 <= 15); // true
console.log(15 >= 16); // false
console.log(15 >== "15");// error verir. Çünkü bu şekilde karşılaştırma operatörü bulunmuyor.
console.log(15 >= "15"); // true
console.log("14" <= "15"); // true

// //! 🔥🔥🔥              Mantıksal Operatörler

// // && and
console.log(true && true) // true
console.log(" " && true) // true

console.log(5 && "Merhaba") // "Merhaba"
console.log(0 && "Dünya") // 0
// // && operatoru ilk gördüğü falsy veya false değerini döner.
console.log(5 && 0) // 0
console.log(true && false) // false

// //! || or
console.log(true || false) //true
console.log(5 || 15) // 5
console.log(5 || 0) // 5
console.log("" || "Merhaba") // "Merhaba"
console.log("" || 0) // 0
// // || operatoru true ve truthy değer arar. ilk gördüğü true veya truthy döner.Bulamazsa son gördüğü false veya falsy değeri döner.

// // ! not
console.log(!true) // false
console.log(!false) // true
console.log(!0) // true
console.log(!5) // false

// // falsy
console.log(Boolean(false)) // false
console.log(Boolean(0)) // false
console.log(Boolean(-0)) // false
console.log(Boolean(0n)) // false
console.log(Boolean("")) // false (boş string)
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(NaN)) // false

// // truthy
console.log(Boolean(true)) // true
console.log(Boolean({})) // true (boş object)
console.log(Boolean([])) // true (boş array)
console.log(Boolean(5)) // true
console.log(Boolean("0")) // true (dolu string)
console.log(Boolean("false")) // true (dolu string)
console.log(Boolean(Infinity)) // true
console.log(Boolean(new Date())) // true (tarih methodları)
console.log(Boolean(function () {})) // true (boş fonksiyon)
console.log(Boolean(function () {
console.log("Hello World!")
})) // true (boş fonksiyon)

// //! İşlem Önceliği sıralaması
//1. ! (not)
//2. && (and)
//3. || (or)
const karşilaştırma = ("merhaba" && "dünya") || false || (28 && 67 && !0)
console.log(karşilaştırma) // dünya
