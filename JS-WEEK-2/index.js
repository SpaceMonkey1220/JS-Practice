// console.log(+1)

// let something

// console.log(something)

// Well nu am facut ceva nou so acest fisier va fi cam gol :)))

// const array = [
//   "bad jokes",
//   "u mad bruh",
//   "umm da?",
//   NaN,
//   undefined,
//   29,
//   true,
//   [NaN, 2],
// ]

// console.log(array[array.length - 1])
// console.log(array.unshift())

// const nume = prompt("Introdu ceva")

// array.push(nume)

// console.log(array)

// !IMPORTANT

/*
Putem lua data dintr-un prompt cu push. EXEMPLU

const array = [1,2,3,4]

const promptInput = prompt("write something")

array.push(promptInput) va face push la ce introducem in prompt

si daca vrem sa fie pe o anumita pozitie

array[index] = value;

// POP SCOATE DE TOT O VARIIABILA DIN ARRAY

const arrayLastValue = array.pop()

scoate ultimul element din array dar in acelasi timp putam si sa o stocam

*/

// const array2 = ["nume", "num2", "num3"]

// array2.push(1,2,3)
// console.log(array2)

// Pop va inlatura un element din array
// const value = array[index] asa facem o copie 

















const array = [null, undefined, "string", 1, true]

console.log(
  typeof array[0],
  typeof array[1],
  typeof array[2],
  typeof array[3],
  typeof array[4]
)

const arrayEl0 = array[0]
const arrayEl1 = array[1]
const arrayEl2 = array[2]
const arrayEl3 = array[3]
const arrayEl4 = array[4]


let newArray =[]
newArray = [arrayEl0, arrayEl1, arrayEl2, arrayEl3, arrayEl4]
console.log(newArray)


const newArray2 = []
newArray2.push(array[0], array[1], array[2], array[3], array[4])
console.log(newArray2)


let newArray3 = []
newArray3 = [...array]

console.log(newArray3)

















// Alte variante mai avansate

const copie = [...array]










