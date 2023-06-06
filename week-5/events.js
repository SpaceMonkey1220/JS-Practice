// const div = document.body.getElementsByTagName("div")

// console.log(
//   (div[0].children[0].innerHTML = "scriu un text <strong> ceva</strong>")
// )

// const button1 = document.getElementById("btn1")

// const clickButton = () => {
//  const p = document.createElement("p")
//  p.textContent = "am fost creat la click"
//  p.addEventListener("mouseover", () => {
//   p.style.backgroundColor = "red"
//  })
//   p.addEventListener("mouseout", () => {
//     p.style.backgroundColor = "initial"
//   })
//  document.body.appendChild(p)

// }

// button1.addEventListener("click", clickButton) 

// button1.addEventListener("mouseover", () => {
//   console.log("am apasat button-ul twice")
// }) 

// DACA STERGEM UN ELEMENT CARE ARE EVENTLISTENER TREBUIE INLATURAT SI EVENIMENTUL

// const remove = document.getElementById("remove")

// remove.addEventListener("click", ()=> {
//   button1.removeEventListener("click", clickButton)
//   button1.remove()
// })

// const buttons = document.body.getElementsByClassName("button-style")



// PUTEM PUNE FUNCtIA SI AFARA SI SA AVEM ACCES LA TARGET
// const onClick = (e) => {
//   e.stopPropagation();
//  e.currentTarget.textContent = "change"
// }


// for(const el of buttons){
//   el.addEventListener("click", onClick)
// }
// button1[0].addEventListener("click", () => {
//   button1.textContent = "change"
// })


// document.body.addEventListener("mousemove", (e) => {
//   console.log("X:", e.clientX, "Y:", e.clientY)
// })

// const listLi = document.body.getElementsByTagName("li")
// const ul = document.body.getElementsByTagName("ul")
// const button = document.getElementById("btn")

// ul[0].addEventListener("click", ()=> {
//   e.stopPropagation()
//   console.log("ai dat click pe body")
// })

// button.addEventListener("click", () => {
//   e.stopPropagation()
//   alert("I have been clicked")
// })

// for (const el of listLi) {
//   el.addEventListener("click", onClick)
// }

// const link  = document.body.getElementsByTagName("a")


// Schimbarea link-ului sa ne pacaleasca
// link[0].addEventListener("click", (e) => {
//   e.preventDefault();
  // window.location = "http//facebook.com"
// })


const button = document.getElementById("getData")

button.addEventListener("click", () => {
  const nume = document.getElementById("nume")
  const prenume = document.getElementById("prenume")
  const password = document.getElementById("password")
  if(nume.value !== "" && prenume.value !== "" && password.value !== ""){
    console.log(nume.value, "", prenume.value, "", password.value)
  } else {
    alert("Nu ai introdus toate datele")
  }
 
})


// const inputss = {
//   nume: "",
//   prenume: "",
//   password: ""
// }

// INPOTANT
const ian = ["name", "password", "prenume", "age"]

const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
  e.preventDefault()



  const inputs = e.target
  console.log(inputs)

  //INPORTANT
  // aici a filtrat cheile din ian apoi am returnat un array care contine
   const emptyInput = ian.filter((key) => {
     return inputs[key].value === ""
   })

   if (emptyInput.length > 0) {
     alert("nu ai introdus tot")
     return
   }

  // for(let i = 0; i < in.length)


  console.log(e.target.nume.value)
  console.log(e.target.prenume.value)
  console.log(e.target.password.value)
  // console.log(Object.values(e.target))
 

})

const showHideBtn = document.getElementById('show-hide')

showHideBtn.addEventListener("click", (e) => {
  const inputPassword = document.getElementById("password")
  if(inputPassword.getAttribute("type") === "password"){
    inputPassword.setAttribute("type", "text")
    e.target.textContent = "hide"
  } else {
    inputPassword.setAttribute("type", "password")
    e.target.textContent = "show"
  }

})


// AICI IN LOC SA FACEM O FUNCTIE PT FICARE NE FOLOSIM ASA
// const listUl = document.getElementById("list")

// listUl.addEventListener("click", (e) => {
//   console.log(e.target.textContent)
//   console.log(e.currentTarget)
// })