const suma = 30

//Scopul global
let global = 10;

// Scopul local al if-ului
if(suma > 40){
    const rez = suma + global
    console.log(rez)
}



// Ca sa ne ajutam in blcururi cu scope am putea crea  aceleasi variabile constante deoarece aceste nu ar fi fost posibil sa fie cafute

// var sum = 1000

function show(){
    let sum = 0

    function loop(i){
        sum += i
    }

    for(let i = 0; i < 10; i++){
       loop(i)
    }

    return sum
}


//Var este accesibil si inafara
// console.log(show())

//var sta inchis doar in interiorul unuei functiii iar asa lumea facea prea multe functii ca sa stea intr-un loc


//Privatizarea functiilor inseamna a face functii doar intr-o functie deoarece numa iacolo este nevoie de ea



//EXecutie locala


// Cand o variabila este facuta intr-o functie este trata intr-un mod diferit ea va fi facuta de mai mutle ori si in functie de cate or ia fost apelata fuctia pe un loc diferit in memorie



// EXEMPLU DE CONFUZIE

// var x = 32

//  function a(){
//     console.log(x)
//  }

//  function b(){
//     var x = 100
//     a();
//     console.log("x local", x)
// }


// b()



function diff(num){
    var i = num;

    for(var i = 0; i < 10; i++){

    }

    console.log(i)
}

diff(42)


















