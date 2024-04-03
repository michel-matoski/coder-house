// var numero1 = prompt("Insira o primeiro número")
// var numero2 = prompt("Insira o segundo número")

/*
function VerficaMultiplo(n1,n2){
    if ((n1 % n2 == 0) || (n2 % n1 == 0))
        return window.alert("São multiplos")
    else{
        return window.alert("Não são multiplos")
    }
}
*/
function LerNumeros(){
    numero1 = prompt("Insira o primeiro número")
    numero2 = prompt("Insira o segundo número")

}
function VerficaMultiplo(n1,n2){
    if ((n1 % n2 == 0) || (n2 % n1 == 0))
        return true
    else{
        return false
    }
}

function ExibeResposta(){
    if(VerficaMultiplo(numero1,numero2)){
        return window.alert("São multiplos")
    }
    else{
        return window.alert("Não são multiplos")
    }
}
LerNumeros()
ExibeResposta()

//VerficaMultiplo(numero1,numero2)