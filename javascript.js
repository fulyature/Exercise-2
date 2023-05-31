//?bir den n kadar sayıları toplayan kod
// let n = 10;
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//   toplam += i;
// }
// console.log(toplam);

// const n = prompt("enter number");
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

//?0 ile 100 arasında n adet rasgele sayı üreten kod

// const adet = +prompt("Kaç adet rasgele sayı istiyorsunuz?");
// for (let i = 1; i <= adet; i++) {
//   console.log(Math.round(Math.random() * 100));
// }

//?Girilen bir sayının asal olup olmadığını hesaplayan kod

// ?1.yol

// let sayi = prompt("Enter a number");

// if (sayi == 2) {
//   console.log(`${sayi} asaldir`);
// } else if (sayi == 1) {
//   console.log(`${sayi} asal degildir`);
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//       console.log(`${sayi} asal degildir`);
//       break;
//     } else {
//       console.log(`${sayi} asaldir`);
//       break;
//     }
//   }
// }

// ?2.yol
// let sayi = +prompt("Enter a number");
// let sayac = 0;

// if (sayi == 1) {
//   sayac += 1;
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//       sayac += 1;
//     } else {
//       sayac = sayac;
//     }
//   }
// }

// console.log(sayac ? "Asal degil" : "Asal");

// ?3.yol

const sayi = +prompt("Pozitif Bir Sayiyi Giriniz: ");
let flag = true;

if (sayi == 1) {
  flag = false;
} else {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      flag = false;
      break;
    }
  }
}

console.log(flag ? "Asal" : "Asal degil");

// ?4.yol
let isPrime = +prompt("Please enter the number");
// let count = 0;
// for (let i = 2; i < isPrime; i++) {
//   if (isPrime % i == 0) {
//     count += 1;
//     break;
//   }
// }
// console.log(
//   isPrime <= 1 ? "Hic Asal değil" : count > 0 ? "Asal degil" : "Asal"
// );
// //? artık yıl hesapla
// let year = prompt("Yıl giriniz");
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log(`${year} yılı artık yıldır`);
// } else {
//   console.log(`${year} yılı artık yıl değildir`);
// }
