//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir

//* ---------------------------------------------------------
//* 1- Object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

console.log("objects");

const car = {
  brand: "Mercedes",
  model: 2020,
  engine: 2000,
  speed: 5,
  color: ["pink", "black", "blue", "green"],
};
// console.log(car);

//? Objenin okunmasi (Read)

console.log(car.brand); //* 1) . notasyonu ile erişim.
console.log(car.color[0]);
console.log(car.color);
car.color.forEach((color) => console.log(color));

//? Objenin degerinin degisitirilmesi (write)
car.speed = 7;
car.color = "lacivert";
car.class = "E";
console.log(car);

//* 2) Square Bracket yontemi ile erisim
//! bu yontem key isimlerinin degiskenlerde saklanmasına izin verdigi icin dinamik olarak
// obje erisimlerinde kullanılabilir.

console.log("ENGINE:", car["engine"]);
// const myKey = prompt(
//   "Araba ile ilgili neyi ogrenmek istersiniz: speed,color,engine,"
// );
// alert(car[myKey]);

//* ---------------------------------------------------------
//* 2- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const myCar = new Object();
myCar.brand = "Mercedes";
myCar.model = 2022;
myCar.speed = 7;

console.log(myCar.speed);
console.log(myCar["model"]);

console.log(myCar);

//* 3- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

function Personel(id, name, age, salary) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.salary = salary;
}

const person1 = new Personel("1234567890", "Ahmet Can", 33, 15000);
const person2 = new Personel("1234567880", "Mehmet Ali", 23, 20000);
console.log(person1, person2);

//*              Object Metotlari
//* ======================================================

const personel = {
  name: "Ahmet",
  surname: "Canan",
  dob: 1990,
  salary: 30000,
  drivingLicense: true,
  calculateAge: function () {
    console.log(this); //? personel objesini refere eder.
    return new Date().getFullYear() - this.dob;
  },
  summary: () => {
    console.log(this); //? window objesini refere eder.
    return `${this.name} is ${this.calculateAge()} years old`;
  },
};

console.log(personel.name + " " + personel.surname);

console.log("AGE:", personel.calculateAge());

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.
// console.log(personel.summary())

//********************************************************
//* JSON => Javascript Object Notation
//********************************************************

const team = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
];

console.log(team);
console.log(team[1]);
console.log(team[1].name); //? Mary
console.log(team[2].age); //? 20

//* Ornek1: team dizisindeki job'lari tek tek yazdiriniz.
team.forEach((p) => console.log(p.job));

//* Ornek2: age'leri bir artirarak yeni bir diziye saklayiniz.
const personelAges = team.map((person) => person.age + 1);
console.log(personelAges);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu fullName key'i ile saklayan, ayni zamanda age degerlerini 5
//* arttirarak age key'ine saklayan ve olusan diziyi donduren kodu yazınız.

const teamFullName = team.map((p) => {
  return {
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5,
  };
});
//? Alternative way
const teamFullName1 = team.map((p) => ({
  fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
  age: p.age + 5,
}));

//* Ornek4: Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.
team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name));

//* Ornek5: 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.
const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);
console.log(teamUnder22);

//* Ornek6: ortalama yasi hesaplayiniz.
const avgAges = team.reduce((sum, person) => sum + person.age, 0) / team.length;
console.log("AVE AGE:", avgAges);
