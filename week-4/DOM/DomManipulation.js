// ACEASTA INFORMATIE POATE O SA NE FOLOSESCA IN VIITOR ESTE EXTRA


// console.log(document.body.childNodes)
// console.log(document.body.childNodes[1].nodeType)
// console.log(document.body.childNodes[1].nodeName)
// console.log(document.body.childNodes[3].nodeName)

// 0 este document
// node type 1 este element
// 3 este text
 

// returneaza elementle sub forma de array 
// BODY ESTE FOLOSIT PENTRU A FI MAI EFICIENT IN VAUTARE
// DACA NU IL PUI VA CAUTA SI IN HEAD
// const li = document.body.getElementsByTagName("li")
// const elementByClass = document.body.getElementsByClassName("a")
// Daca am mai ulte elemente cu aceasi clasa imi va returna un array de elementele care au acea clasa

// const li1 = document.getElementById("li1") 
// const li2 = document.getElementById("li2") 

// console.log(li1);

// for(const value of elementByClass){
//    value.textContent = "altceva"

    //innerText     elimina tag-urile
    //innerHTML     afiseaza tag-rile
    //TextContent  text content ne afiseaza elementle care sunt invizibile care nu sunt afisate in dom sau pe pagina 

//     value.style.color = "green"
// }


// Html-ul intre lemente mai pune spatii imaginare

// console.log(p[0].childNodes)


// console.log(p)


//getElementById poate fi folosit deoar pe document si nu pe body
//getElementsByClass
//getElementsByTagName
//querySelectorAll
//querySelector()

// const lis = document.body.getElementsByClassName("b a")
// const query = document.body.querySelectorAll(".b:first-of-type")
// const query2 = document.body.querySelectorAll("ul.special li")
// Cu query selector putem selecta elemente mai complex dupa selectori de css
// PUTEM PUNE ORICE SELECTOR DE CSS


// query2[0].style.color="red"
// console.log(lis)
// console.log(query2)


                                // TRAVERSAREA DOM-ului

// console.log(window.document.body.parentNode.nodeName)

// children childNodes

//  const element = document.body.getElementsByClassName("hey");

//  console.log(element[0].parentNode.parentNode)

// const ul = document.body.getElementsByTagName("ul")

// console.log(ul)

// console.log(ul[0].children)
// console.log(ul[0].childNodes)


// ul[0].children[0].style.color = "red"          this is the way to go
// ul[0].childNodes[0].style.color = "red"

// ul[0].children[0].remove()

// first child     first element

// NOT USEFULL
// console.log(ul[0].firstChild)
// console.log(ul[0].firstElementChild)
// console.log(ul[0].childNodes)


// THE WAY TO GO
// console.log(ul[0].children)
// console.log(ul[0].firstElementChild)
// console.log(ul[0].lastElementChild)



            // SIBLINGS

// WAY TO GO
// console.log(ul[0].firstElementChild.nextElementSibling)
// console.log(ul[0].firstElementChild.previousElementSibling)

// practice


// ul[0].children[1].nextElementSibling.style.color = "red"
// ul[0].children[1].previousElementSibling.style.color = "blue"


// Daca un copil are copii acesta are aiurea semantic pus html-ul acesta nu va fi interpretat corect
// HTML=ul trebuie scris corect sau nu se va comporta corecct



// TREBUIE SA AVEM GRIJA LA HTML INHERITANCE, PE CE LINII ESTE CODUL DE HTML, CAND TOTUL ESTE PE O LINIE SUNT FRATI

                            // CHANGING DOM


const ul = document.body.querySelector("ul")

for (let index = 0; index < 10; index++) {
    const li = document.createElement("li")
    li.textContent = `Am adaugat prin js un li ${index}`
    li.style.color = "green"
    ul.appendChild(li)
    
}

console.log(document.querySelectorAll("li"))

document.querySelectorAll("li")[0].style.backgroundColor = "purple"

ul.children[3].remove()
console.log(ul)


























