
setTimeout(() => {
    console.log("after one second")
}, 1000)

const buttonStop = document.getElementById("stop")

/// CEAS
let counter2 = 0
const idInterval = setInterval(()=> {
    const seconds = document.getElementById("seconds")
    counter2 = counter2 + 1

    if(counter2 !== 60){
        if(counter2 < 10){
            seconds.textContent= "0" + counter2
        } else {
            seconds.textContent = counter2
        }
    } else {
        counter2 = 0
    }
}, 1000)

buttonStop.addEventListener("click", (e)=> {
    clearInterval(idInterval)
})


/// FETCH / promise


// aici totul este asincron

const promise = fetch("../users.json")

let counter = 1
// const promise = new Promise((fulfilled, rejected)=> {
//     console.log("promise getting data")
//    const id = setInterval(() => {
//         console.log("calculating")
//     }, 500)

//     setTimeout(() => {
//         clearInterval(id)
//         fulfilled({nume:"daAMNume"})
//         rejected({status: "404",
//     message: "ERROR 404"})
//     }, 3000)

// });


promise.then(response => {
    // console.log("I got the data")
    // console.log(response)

    // const returnObj = {
    //     message: `here is your data ${response.nu}`
    // }

    // return returnObj
    console.log(response)
    if(response.ok && response.status === 200){
        return response.json()
    }

    return Promise.reject("There is an error")
}).then((response)=> {


})

promise.catch(error => {
    console.log(error)
})


// counter = counter + 2
// promise.then((response) => {

//     console.log(response)
// })

// promise.catch((error) => {
//     console.log(error)
// })

// counter = counter + 3

// console.log(counter)










