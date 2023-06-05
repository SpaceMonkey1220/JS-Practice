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
  const input = document.getElementById("data")
  console.log(input.value)
})
