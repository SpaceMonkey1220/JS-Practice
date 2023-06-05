const container = document.body.querySelector(".container")



const insertElement = (tag, id, text) => {

  const element = document.createElement(tag)
  element.setAttribute("id", id)
  element.innerText = text

  return element

}

const titlu = insertElement("h2", "titlu", "sunt un titlu")

container.appendChild(titlu)



const linkInsert = (text, link) => {
  
  const element = document.createElement("a")
  element.innerText = text
  element.setAttribute('href', link)

  return element

}

const link1 = linkInsert("link catre google", "https://www.google.com/")
const link2 = linkInsert("link catre google", "https://www.google.com/")
const link3 = linkInsert("link catre google", "https://www.google.com/")

container.appendChild(link1)
container.appendChild(link2)
container.appendChild(link3)

// const displayLinks = () => {
//   const links = document.body.getElementsByTagName("a")

//   return `This page has ${links.length} links`
// }

// console.log(displayLinks())


// AICI SI VERIFICI DACA ARE SAU NU UN LINK
const displayLinks = () => {
  const links = document.body.querySelectorAll("a[href]")

  return `This page has ${links.length} links`
}

console.log(displayLinks())