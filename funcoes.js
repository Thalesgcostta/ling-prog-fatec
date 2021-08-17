function exe1(){
let nro1 = Number(document.getElementById("nro1").value)
let nro2 = Number(document.getElementById("nro2").value)

let resultado = nro1 - nro2

document.getElementById("resultado").innerHTML = "Resultado: " + resultado

}

function exe2(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    
    let resultado = nro1 * nro2 * nro3
    
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado
}

function exe3(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)

    if (nro2 == 0){
        document.getElementById("resultado").innerHTML = "Impossível dividir por zero"
    }
    else{
       let resultado = nro1 / nro2
       document.getElementById("resultado").innerHTML = "Resultado: " + resultado
    }

}

function exe20(){
    let angulo = Number(document.getElementById("angulo").value)
    let distancia = Number(document.getElementById("distancia").value)
    let hipotenusa = distancia / Math.cos(angulo)

    document.getElementById("resultado").innerHTML = "Resultado: " + hipotenusa
}

function exe15(){
    let salario = Number(document.getElementById("salario").value)
    let conta1 = Number(document.getElementById("conta1").value)
    let conta2 = Number(document.getElementById("conta2").value)
    
    let multa1 = conta1 * 2 / 100
    let multa2 = conta2 * 2 / 100

    let resultado = salario - (conta1 + multa1) - (conta2 + multa2)
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado
}
function exe4(){
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    
    let resultado = (nota1 * 2 + nota2 * 3) / 5

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado
}
function exe5(){
    let preco = Number(document.getElementById("preco").value)
    
    
    let resultado = preco - (preco * 0.10)

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado 
}
function exe6(){
    let salfixo = Number(document.getElementById("salfixo").value)
    let valvendas = Number(document.getElementById("valvendas").value)
    
    let resultado = (valvendas * 0.04) + salfixo

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado 
}