

//funções

function dizerOlá {
    console.log("Olá"):
}

function somar (num1, num2) {

    let soma= = num1 + num2
    console.log(soma)
}

//função de callback

function subtrair (num1, num2, funcao) {
    let num3 = -num2
    funcao ()
}

subtrair (2, 10, dizerOla)


//arrow function com callback
const funcaoComCallback = (funcao) => {
    funcao
}