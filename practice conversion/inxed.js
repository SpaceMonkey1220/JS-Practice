fetch(`https://api.exchangerate-api.com/v4/latest/EUR`).then((response)=>{

  if(response.ok && response.status === 200){
    return response.json()
  }


  return Promise.reject()

}).then(sucResponse => {

  const keyList = Object.keys(sucResponse.rates)

  console.log(sucResponse)

const fromCurrency = document.getElementById("from_currency")
const toCurrency = document.getElementById("to_currency")    

keyList.forEach((key) => {
  const optionFrom = document.createElement("option")
  const optionTo = document.createElement("option")

  optionTo.value = key
  optionTo.textContent.key

  optionFrom.value = key
  optionFrom.textContent.key

fromCurrency.appendChild(optionFrom)
toCurrency.appendChild(optionTo)
  
})

}).catch(() =>{
  alert("eroare")
})
