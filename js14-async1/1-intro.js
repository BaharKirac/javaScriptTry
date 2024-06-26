//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// const delay = (waitingTime) => {
//   const startTime = new Date().getTime()
//   while (new Date().getTime() < startTime + waitingTime) {}
// }

// console.log("Hello")
// // alert("Blocked") //? Blocking
// console.time("gecikme")
// // delay(4000) //? blocking code - senkron
// console.timeEnd("gecikme")
// console.log("hi")

//* Asenkron (setTimeout())
//* ------------------------------------------------

// setTimeout(() => {
//   console.log("I am fine")
//   // console.timeEnd("timer")
// }, 1000)

// setTimeout(() => {
//   console.log("Whats up?")
//   // console.timeEnd("timer")
// }, 1000)

// console.log("start")
// // console.time("timer")

//* Asenkron (setInterval, clearInterval)
//*------------------------------------------------

//? setInterval periyodik zaman araligi oluşturmak icin kullanilabilir.
//? clearInterval yardımıyla surekli devam interval pasif hale getirilir.
// let count = 0
// const sec1 = setInterval(() => {
//   console.log(++count)
//   if (count > 9) {
//     clearInterval(sec1)
//   }
// }, 1000)

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
    console.log("john:Hi")
    setTimeout(() => {
      console.log("Sarah: Hello")
      setTimeout(() => {
        console.log("John: How Are you?")
        setTimeout(() => {
          console.log("Sarah:Fine and you?")
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)