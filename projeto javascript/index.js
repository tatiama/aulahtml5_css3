// var nome = "Natalia"
// var sobrenome = "Lira"
// var profissao = "Programadora"
// console.log( nome + " " + sobrenome + " - " + profissao) 
// var cartaoDeVisita = nome + " " + sobrenome + " - " + profissao

// var a = 10
// var b = 6

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)

// var janeiro = 100
// var fevereiro = 300
// var marco = 90
// var valorTotal = janeiro + fevereiro + marco
// console.log(janeiro + fevereiro + marco)

// var trabalhoDeHistoria = 8.0
// var trabalhoDeMatematica = 7.0
// var trabalhoDeCiencia = 10
// var trabahloDeGeografia = 9.5
// var totalDeTrabalho = 4
// var media = (trabalhoDeHistoria + trabalhoDeMatematica +
//  trabalhoDeCiencia + trabahloDeGeografia) / totalDeTrabalho
// console.log((trabalhoDeHistoria + trabalhoDeMatematica + trabalhoDeCiencia + 
//     trabahloDeGeografia) / totalDeTrabalho)

// var nome = "joao" 
// var idade = 17

// if (idade >= 18) {
//     console.log("ola,"+ nome) 
//     console.log("Voce passou no nosso teste e já pode dirigir!")
// }
// if (idade < 18) {
//     console.log("ola,"+ nome)
// }

// var saldo = 800.90
// if (saldo >= 0) {
//     console.log("Seu saldo está positivo! Gostaria de fazer um investimento?")
// }
// if (saldo < 0) {
//     console.log("Seu saldo está negativo! Gostaria de fazer um emprestimo?")
// }

// var idade = 17
// if (idade >= 18) {
//     console.log("Você é obrigado a votar")
// }
// if (idade >= 16) {
//     console.log("Seu voto é opcional")
// }

// var idade = 15 
// if (idade >= 18) {
//     console.log("Você já pode dirigir!")
// } else {
//     console.log("Ops,você ainda não tem a idade mínima para dirigir!")
// }

// var estrangeiro = true
// if (estrangeiro) {
//     console.log("Você poderia apresentar seu RNE,por favor?")
// } else {
//     console.log("Você poderia aoresenta seu CPF,por favor?")
// }

// var idade = 40
// if (idade > 65) {
//     console.log("Você já pode se aposentar")
// } else {
//     console.log("Você ainda não pode se aposentar")
// }

// var numeroDaSorte = 18
// if (numeroDaSorte % 2 == 0) {
//     console.log("Par")
// } else {
//     console.log("Ímpar")
// }

// var petPeso = 7
// if (petPeso < 4) {
//     console.log("Abaixo do Peso")
// }
// else if (petPeso > 10) {
//     console.log("Acima do Peso")
// }
// else {
//     console.log("Peso normal")
// }

// var ladosIguais = 0
// var ladosDiferentes = 2
// if (ladosIguais == 3) {
//     console.log("Equilátero")
// }
// else if (ladosIguais == 2) {
//     console.log("Isósceles")
// }
// else {
//     console.log("Escaleno")
// }

// var produtoQtd = 3
// var produtoAtivo = true
// if (produtoQtd > 0 && produtoAtivo) {
//     console.log("Você pode finalizar essa compra")
// }
// else {
//     console.log("Produto não esta disponivel para compra")
// }

// var usuarioAltura = 170
// var usuarioIdade = 21
// if (usuarioAltura > 150 || usuarioIdade >= 21) {
//     console.log("Você pode subir")
// }
// else {
//     console.log("Desculpe,você não atende os requesitos para usar o brinquedo")
// }

// var diaSemana = "sabado"
// var segunda = segunda
// var terca = terca
// var quarta = quarta
// var quinta = quinta
// var sexta = sexta
// if (diaSemana != segunda && terca && quarta && quinta && sexta) {
//     console.log("Você pode ir ao banco")
// }
// else {
//     console.log("O banco está fechado,tente outro dia")
// }

// var valor = 7
// for (var i = 1; i <= 10 ; i++) {
//     console.log(valor + " x " + i + " = " + (valor * i))
// }

// for (var contador = 1; contador < 8; contador++) {
//     console.log("Bom dia, grupo!")
// }

// var listaDeCarros = ["Fox","Uno","Gol","Astral","Fiesta"]
// for (let i = 0; i< listaDeCarros.length;i++) {
//     console.log("Nome do carro: "+ listaDeCarros[ i ] )
// }

var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0
for (var i = 0; i < listaDeGanhos.length; i++) {
if (listaDeGanhos[i] < 0 ) {
    totalNegativos = totalNegativos + 1
}
} 
console.log(totalNegativos)








