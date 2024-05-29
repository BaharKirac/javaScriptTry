/*syntax
const topla = (a,b) => a+b;
alert(topla(1,2)); 3


//* ORNEK: Doğum tarihini parametre olarak alan ve ana
//* programa yaşı hesaplayıp döndüren fonksiyonu yazınız.
//******************************************************/

const calculateAge = (year) => new Date().getFullYear() - year

console.log(`AGE:${calculateAge(1989)}`);

//* ORNEK: Silindir Hacmi
//******************************************/
//? hacim = Pi x r x r x h

const h = Number(prompt("h:"))
const r = Number(prompt("r:"))
// const pi = 3.14

const volume = (r, h) => Math.PI * r * r * h
console.log("VOLUME:", volume(r, h).toFixed(2))
console.log("VOLUME:", volume(r, h).toPrecision(5))

//? toPrecision(5) aldigi parametreye gore bir sayinin tam ve kesir
//? kisimlarinin ne kadarini gosterilecegini belirlemek icin
//? kullanilabilir. 5 degeri tam ve kesir icin toplam 5 basamak kullan demektir.
console.log("VOLUME:", volume(r, h).toExponential(5))
//? toExponential() ise bir sayinin bilimsel (10 uzeri) olarak

//* ORNEK: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir (Hesap Makinası)
//**************************************************/
