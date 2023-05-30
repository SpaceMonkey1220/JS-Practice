const id = document.getElementById("head")
const uls = document.body.getElementsByClassName("special")
const lis = document.body.getElementsByTagName("li")
const olElements = document.querySelectorAll("ol li")
const olFirstLi = document.querySelectorAll("ol li:first-of-type")

id.style.backgroundColor = "green"

olFirstLi[0].style.color = "white"

for (const htmlElement of uls) {
  htmlElement.style.backgroundColor = "orange"
}

for (const htmlElement of lis) {
  htmlElement.style.backgroundColor = "red"
}

olElements.forEach(
  (htmlElement) => (htmlElement.style.backgroundColor = "yellow")
)

console.log(olElements)
