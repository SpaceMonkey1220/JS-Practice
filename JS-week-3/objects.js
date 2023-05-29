// console.log({caca: "maca"})

// Problema

// const proprietate = prompt("CE vrei sa afli")

// let nume = "nume"
// let copyNume = nume
// nume = "alt nume"

// console.log(nume)
// console.log(copyNume);

// const persoana = {
//   nume: "nume",
//   prenume: "prenume",
//   varsta: 28,
//   copii: [
//     {
//       nume: "popescu",
//       prenume: "ioana",
//       varsta: 2,
//     },
//     {
//       nume: "popescu",
//       prenume: "camelia",
//       varsta: 10,
//     },
//   ],
//   case:{
//     localitate: "Marasesti" // IAR TREBUIE SA FACEM UN NOU OBJECT ASIGN SI PENTRU OBIECTUL ASTA
//   },
//   note: [10,10,10,10,10,10]

// }

// const copyPerson = persoana
// // const c = {...persoana}
// const copieEficienta = Object.assign({}, persoana); // ASA FACI O COPIE LA OBIECT

// console.log(persoana)
// console.log("copie", c)

// copyPerson.nume = "popescu"
// persoana.case.localitate = "Iasi"
// persoana.note[0] = 5

// console.log(persoana.proprietate) // Da undefined deoarece crede ca accesezi cceva
// console.log(persoana[proprietate]) // aici se returneaza variabila care se retine

// const { nume, prenume, varsta, copii } = persoana

// console.log(nume, persoana, varsta, copii)
// console.log(persoana)

// Iterarea prin keye cu valoare aray

// const copiiPers = persoana.copii

// for(let i = 0; i  < copiiPers.length; i++){
//     console.log(copiiPers[i].nume, copiiPers[i].prenume, copiiPers[i].varsta)
// }

// MODIFICAREA VALORII UNUI OBIECT

// persoana.nume = "camelia"

// persoana["nume"] = "nume?"

// console.log(persoana)

// DOT notation => Persoana.proprietate

// console.log(persoana["nume"])

// ADAUGAREA KHEILOR

// pur si simplu accesezi o prorietate care nu exista caruia ii dai o valoare
// persoana.casatorit = "NU"

// const arr = [1,2,3,4,5,6]

// persoana.array = arr

// console.log(persoana)

// Pentru a accesa proprietati dinamic trebuie sa ne folosim de object["cheie"]

// OBIECTELE NU LE PUTEM COPIA CA PE VARIABILE

//REFRENCE vs VALUE

// La primite va face o cipie

// La non-primitive ne face o referinta

// immutable vs muttable

// tot ce este simplu este imutabil, acel lucur care daca facem o copie si modificam copia originanul nu o sa se schimbe
// mutable este obiectul si adauga mutatie/ schimba si copiei si originalei

// const carti = [
//   {
//     titlu: "Discipline Equals Freedom",
//     autor: "Jocko Willink",
//     citita: false,
//   },
//   {
//     titlu: "Never Finished",
//     autor: "David Goggins",
//     citita: true,
//   },
//   {
//     titlu: "Can't Hurt ME",
//     autor: "David Goggins",
//     citita: true,
//   },
// ]

// for (let i = 0; i < carti.length; i++) {
//   console.log(
//     `${carti[i].titlu} de ${carti[i].autor} ${
//       carti[i].citita ? "-> Ai citit aceasta carte" : "-> Nu ai citit aceasta carte"
//     }`
//   )
// }
