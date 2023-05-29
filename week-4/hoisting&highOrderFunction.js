// a = 20

// b = 100
// var a;
// var b;

// c=b



// console.log(c)

// hoisting inseamna ca lucrurile urca la inceputul codului iar lucurile care urca sunt variabilele declarate vu var si functiile normale.

// Hoist nu se aplica la arrow functions sau functii declarate in variabile


// HIGH ORDER FUNCTIONS


function adunare(a, b){
    return a + b
}


function scadere(a,b){
    return a - b
}

function inmultire(a,b) {
  return a * b
}

function impartire(a,b) {
  return a / b
}


// in care ne repetam prea mult 
// function calculator(a, b, operatie){

//     if(operatie === "adunare"){
//         return adunare(a,b)
//     }
//     if (operatie === "scadere") {
//         return scadere(a, b)
//     }
//     if (operatie === "impartire") {
//         return impartire(a, b)
//     }
//     if (operatie === "inmultire") {
//         return inmultire(a, b)
//     }


// }

// versiune care ne foloseste functiile
// function calculator(a, b, functionTo) {

//     if(typeof a !== "number"){
//         return "Variabila a nu este numar"
//     }

//      if (typeof b !== "number") {
//        return "Variabila b nu este numar"
//      }

//   return functionTo(a,b)
// }


// function divideByTen(a, b){
//     return (a + b) / 10
// }

// console.log(calculator(10, 10, inmultire))


// Functia aici este trecuta ca parametru nu este apelata daca am apela-o ne-ar returna 

// estre treua si este apelata de functia main ca sa nu mai trebuiasca eu sa 


function loop(listToLoop, conditionFunction){
  const filterList=[]

  for(let el of listToLoop){
    if(conditionFunction(el)){
      filterList.push(el)
    }
  }

  return filterList
}

function greaterThanTen(value){
  if(value > 10){
    return true
  }

  return false
}

function isPar(value){

  if(value % 2 === 0){
    return true
  }

  return false

}
const list = [20,30,40,50]

const filterByTen = loop(list, greaterThanTen)


// console.log(filterByTen)
// const filterList = []
// const filterList2 = []

// for(let el of list){
//   if(el > 10){
//     filterList.push(el)
//   }
// }

// for (let el of list) {
//   if (el > 30) {
//     filterList2.push(el)
//   }
// }

// console.log(filterList)
// console.log(filterList2)



// const filterExample = list.filter(greaterThanTen)
// const filterExample2 = list.filter(isPar)

// console.log(filterExample)
// console.log(filterExample2)




// const goodFilter = list.filter(num => num > 10)

// console.log(goodFilter)

// MAP


function add2(value){
  return value + 2
}

function divideTwo(value){
  return value / 2
}

function transformToObj(value) {
  return{
    [value]: value
  }
}

const addedTwo = list.map(add2);

const dividebytwo = list.map(divideTwo);

const transformListToArray = list.map(transformToObj)

console.log(list);
console.log(addedTwo);
console.log(transformListToArray);