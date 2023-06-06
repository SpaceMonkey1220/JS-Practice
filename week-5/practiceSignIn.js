const form = document.getElementById("signUp")
const inputList = document.querySelectorAll("input")

// Reintroducerea elementelor din form prin local storage

for(let i = 0; i < inputList.length; i++){
    const inputName = inputList[i].getAttribute("name")
    const localStorageValue = localStorage.getItem(inputName)
    inputList[i].value = localStorageValue
}

// const objFromLocalStorage = localStorage.getItem("obj")
// const convertObj = JSON.parse(objFromLocalStorage)
// console.log(convertObj)


function greaterThenFour(value) {
  return value.length < 4
}

function emptyString(value) {
  return value === ""
}


function getSpanElement(element){
   return  element.parentNode.querySelector("span.hide")
}

function hideShowError(input, errorMessage, func) {
    const span = getSpanElement(input)
    console.log(span)
    console.log(func)
   if (func(input.value)) {
     span.classList.replace("hide", "show")
   } else {
     span.classList.replace("show", "hide")
   }

   span.textContent = errorMessage
}

// function fourCharacters(input){
//      const span = getSpanElement(input)
//     if(input.value.length >= 4){
//         span.classList.replace("hide", "show")
//     } else {
//          span.classList.replace("show", "hide")
//     }
// }


for(let i = 0; i < inputList.length; i++){
    inputList[i].addEventListener("blur", (e) => {
        if(e.target.name === "userName"){
            hideShowError(e.target, "trebuie sa contina minim 4 caractere" , greaterThenFour)
        } else {
            hideShowError(e.target, "trebuie sa fie completat", emptyString)
        }
    })
}


form.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log(e.target.userName)
    console.log(e.target.password)
    console.log(e.target.confirmPassword)
    
    hideShowError(e.target.confirmPassword)
    hideShowError(e.target.password)
    hideShowError(e.target.userName)
 
})


localStorage.setItem("nume", "Ciprian")
console.log(localStorage.getItem("nume"))

const buttonAdd = document.getElementById("butt")
const buttonShow = document.getElementById("butt2")

buttonAdd.addEventListener("click", () =>{
    const nume = prompt("introdu numele")
    localStorage.setItem(nume, nume)
})

buttonShow.addEventListener("click", () => {
  const nume = localStorage.getItem("numele_meu")

    const p = document.createElement("p") 
    p.textContent = nume

    document.body.appendChild(p)
})


// DACA VREI SA PUI UN OBIECT IN LOCAL SOTRAGE TREBUE SA II FACI JSON.stringify

// const pers = {
//     name: "da"
// }

// localStorage.setItem("obj", JSON.stringify(pers))










// PRACTICE LOCAL STORAGE


const produse = [
    {   
        titlu: "masini",
        cantitate: 200
    },
     {   
        titlu: "telefoane",
        cantitate: 4
    },
     {   
        titlu: "flori",
        cantitate: 10
    }
]



localStorage.setItem("products", JSON.stringify(produse))

const storageString = localStorage.getItem("products")
const localStorageParse = JSON.parse(storageString)

console.log(localStorage.getItem("products"))
localStorageParse.push({
    titlu: "calculatoare",
    cantitate: 1
})


localStorage.setItem("products", JSON.stringify(localStorageParse))









