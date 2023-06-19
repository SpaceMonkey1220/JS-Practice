/// This function acepta un user care are forma

/*
{
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "george.bluth@reqres.in",
    first_name: "George",
    id: 1,
    last_name: "Bluth"
}
*/

const createTile = (user) => {
    const tile = document.createElement("div")
    const img = document.createElement("img")
    const title = document.createElement("h2")
    const email = document.createElement("p")

    img.setAttribute("src", user.avatar)
    img.setAttribute("alt", "avatar")

    title.textContent = `${user.first_name} ${user.last_name}`
    email.textContent = user.email

    tile.appendChild(img)
    tile.appendChild(title)
    tile.appendChild(email)

    return tile
}


const createPagination = (total_pages) => {
    const ul = document.createElement("ul")
    ul.classList.add("pagination")

    for(let i = 0; i < total_pages; i++){
        const li = document.createElement("li")
        li.textContent = i + 1
        li.addEventListener("click", (e) => {
            const clickPage = e.target.textContent;
            fetchUsers(clickPage)
        })
        ul.appendChild(li)

    }

    return ul

}

const container = document.querySelector(".container")


const fetchUsers = (page) => {
     fetch(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        if (response.ok && response.status === 200) {
          return response.json()
        }
        console.log(response)
        return Promise.reject("ERROR")
      })
      .then((successResponse) => {
        container.innerHtml = ""
        successResponse.data.forEach(user => {
            const tile = createTile(user)
             container[0].appendChild(tile)
            
        })
    
        const pagination = createPagination(successResponse.total_pages)
        container[0].appendChild(pagination)
      })
      .catch((error) => {
        console.log(error)
      })
}

const createUsers = (user) => {
    fetch(`https://reqres.in/api/users?page=${page}`,
    {
        method: "POST",
        body: JSON.stringify(user)
    }).then((response) => {
        if (response.ok && response.status === 201) {
          return response.json()
        }
        console.log(response)
        return Promise.reject("ERROR")
      }) .catch((error) => {
        console.log(error)
      })
}


fetchUsers(1)