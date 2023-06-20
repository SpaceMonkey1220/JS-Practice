const container = document.getElementById("container")

const h1 = document.createElement("h1")
h1.textContent = "Loading ..."
container.appendChild(h1)





const createTile = (photo) => {
    const tile = document.createElement("div")
    const img = document.createElement("img")
    const title = document.createElement("h2")
    
    
    img.setAttribute("src", photo.url)
    img.setAttribute("alt", photo.title)
    
    // title.textContent = photo.title
 
    
    tile.classList.add("tile")
    tile.appendChild(img)
    tile.appendChild(title)
   
    
    return tile
}



function firstResponse(response){
  if (response.ok && response.status === 200) {
    return response.json()
  }
  console.log(response)
  return Promise.reject("ERROR")
}

function error(error){
 alert(error)
}


fetch("https://jsonplaceholder.typicode.com/photos")
  .then(firstResponse)
  .then((response) => {
    container.innerHTML = ""
    if(response.length <= 0){
        h1.textContent = "The list is empty"
        container.appendChild(h1)
    } else {

        // normalizarea datelor

        // id-ul albumului ca cheie intr-un nou obiect

        const photoObject = response.reduce((acc, el) => {
            const albumId = "album-"+ el.albumId
            let arr = acc[albumId]

            if(arr !== undefined){
                arr.push(el)
            } else{
                arr = [el]
            }

            return Object.assign(acc, {
                [albumId]:arr
            })
        }, {})



       
        const photos = photoObject["album-50"]

        console.log(photos)
        photos.forEach((photo) => {
           
            const tilePhoto = createTile(photo)
            container.appendChild(tilePhoto)
        })

    }
})
.catch((error))























