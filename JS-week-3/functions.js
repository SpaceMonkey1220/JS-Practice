// function sum(a, b) {
// console.log("apelez aceasta functie")
// const rezultat = a + b
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// return rezultat
// }

// const rez = sum(10, 20)
// const rez1 = sum(100, 100)

// console.log(rez, rez1)
// codul functiei se intampla unde apelam functia

// Daca intr- fucntie avem o conditie care contine return, daca se intra in if atunci nu se mai ruleaza docul de dedesupt

/*
function sum(a, b) {
  const rezultat = a + b
  return rezultat
}

function prod(a, b) {
  const rezultat = a * b
  return rezultat
}

function greet(name) {
  return `Hello ${name}`
}

const hello = greet("partarule")
console.log(hello)



console.log(sum)

function checkIfNumbeer(list) {
  rez = 0
  if (typeof list === "object") {
    for (let j = 0; j < list.length; j++) {
      rez = sum(rez, insideList[j])
    }
  }

  return rez
}


const numberList = [1, 2, 3, "ceva", [20, 30], 4, 5, 6]

let suma = 0

for (let i = 0; i <= numberList.length; i++) {
  if (typeof numberList[i] === "number") {
    suma = sum(suma, numberList[i])
  }
}
*/




function impartire(a,b){
    const rezultat = a / b
    return rezultat
}

const rezImpartire = function(a,b){
    const rezultat = a / b
    return rezultat
}

const impartire = (a, b) => {
     const rezultat = a / b
    return rezultat
}

// TREBUIE SA AVEM GRIJA CA la mai mult de atat trebuie sa punem paranteze
const division = (a, b) => a / b



