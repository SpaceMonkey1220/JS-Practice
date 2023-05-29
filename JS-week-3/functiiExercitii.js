// EXERCITII

//1
const salut = (a, b) => `${a} ${b}`
//const salut = (mesaj) => `${mesaj}`

// console.log(salut("hello", "world "))

//2

const mediaAritmetica = (a, b) => {
  return (a + b) / 2
}

const mediaA = mediaAritmetica(20, 5)

//4-1

const laPutere = (baza, exponent) => {
  let rez = baza
  for (let i = 1; i < exponent; i++) {
    rez *= baza
  }
  return rez
}

// O ALTA OPTIUNE
// cost laPutere = (num) => num ** num

const laP2 = laPutere(10, 4)

console.log(laP2)

//4-2

// IMPORTANT PENTRU A AFISA CEVA INFARA UUNUI LOOP AM NEVOIE DE UN CONTOR

const estePrim = (num) => {
  let isPrime = true
  if (num <= 1) return `${num} nu este prim`

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false
    }

    if (isPrime) {
      return `${num} este prim`

    } else {
      return `${num} nu este prim`

    }
  }
}

console.log(estePrim(100))


//5-1 

// TEMA POTI SA FACI PT CASE PROOF adica sa extragi un fuctie de litera daca e mare sau mic
const string = "Idk ceva ce exista undeva"

const letterCount = (par1, par2) => {
    let count = 0
    for(let i = 0; i < par1.length; i++){
        if (par1[i] === par2) {
          count ++
        }
    }
    return count
}


const count = letterCount(string, "e")

// EXEMPLU PT FAPTUL CA JS ESTE OBIECT IN OBIECT IN OBIECT
const pow = (a, b) => a ** b


const help = {
    pow: function (a, b){
        return a ** b
    }
}

const rezPow = help.pow(2, 10)

console.log(rezPow);























