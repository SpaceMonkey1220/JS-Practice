// i++ este un operator unar
// i++ inseamna i = i + 1
// i+=2 inseamna i = i + 2

// for(let i = 0; i < 10; i+=2){
//     console.log("Intrebare" + i);
// }

// Afisam Elementele pare de la o la 20

// for (let i = 0; i < 20; i++) {
//   if(i % 2 === 0){
//     console.log("Numarul este par: ", i)
//   }
// }

// CUM FACEM UN COUNTER
// const numberList = [1, 2, 3, 4, 5, 6]

// let suma = 0

// for (let i = 0; i < numberList.length; i++){
//     suma += numberList[i]
// }

// console.log(suma)

//  GUARD CONDITION

// const numberList = [1, 2, 3, "ceva" ,4, 5, 6]

// let suma = 0

// for (let i = 0; i < numberList.length; i++) {
//   if(typeof numberList[i] === "number"){
//       suma += numberList[i]
//   }
// }

// console.log(suma)

//Practice

// for(let i = 0; i <= 100; i++){
//     if(i !== 0){
//         if(i % 2 === 1){
//             console.log("Numar impar: ", i)
//         } else {
//             console.log("Numar par adunat: ", i + 2);
//         }
//     }
//     }

// for in for

// const numberList = [1, 2, 3, "ceva", [20, 30] ,4, 5, 6]

// let sum = 0

// for(let i = 0; i <= 100; i++){
//     if(typeof numberList[i] === "number"){
//             sum += numberList[i]
//     }
//     if(typeof numberList[i] === "object"){
//         const insideList = numberList[i];
//         for (let j = 0; j < insideList.length; j++) {
//           sum = sum + numberList[i][j]
//         }
//     }
// }

// console.log(sum)

//WHILE Loop

// let i = 0
// let stop = false

// while(i < 100 && stop === false){
//     if(i !== 0){
//         if(i % 2 === 0){
//             console.log("Numar impar: ", i)
//         } else {
//             console.log("Numar par adunat: ", i + 2);
//         }
//     }

//     if(i === 50){
//         stop = true;
//     }

//     i++;
// }

// let stop = false

// for (let i = 0; i <= 100 && stop === false; i++) {
//   if (i !== 0) {
//     if (i % 2 === 1) {
//       console.log("Numar impar: ", i)
//     } else {
//       console.log("Numar par adunat: ", i + 2)
//     }
//   }

//   if (i === 50) {
//     stop = true
//   }
// }

// DO WHILE ESTE MAI DIFERITA

// care este diferenta?

// Mai intai se executa codul apoi intalneste conditia
// La acesta ne putem asigura ca cel putin o data se va executa conditia

// let i = 0

// do {
//   if (i !== 0) {
//     if (i % 2 === 0) {
//       console.log("Numar impar: ", i)
//     } else {
//       console.log("Numar par adunat: ", i + 2)
//     }
//   }
//   i++
// } while (i < 100)
