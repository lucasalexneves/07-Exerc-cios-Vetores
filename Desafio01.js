/*Lista de exercicios - Algoritmos Array
Desafio #1: Avaliação da turma
1. Crie um array para receber nomes dos alunos e outro para receber as notas
2. Para cada aluno inserido pergunte seu nome e a nota da prova
3. Seu usuário deve poder parar de inserir informações quando desejar
4. Posteriormente exiba a nota de cada aluno, a soma das notas e a média geral da
turma*/

var nomes = []
var notas = []

var contadorArrayNome = 0
var contadorArrayNota = 0
var somaNotas = 0
var continuar = true
while (continuar){
    var nomeAluno = prompt("Digite o nome do Aluno?")
    nomes[contadorArrayNome] = nomeAluno
    contadorArrayNome++
    var NotaAluno = parseFloat(prompt("Digite a nota do Aluno:"))
    notas[contadorArrayNota] = NotaAluno
    somaNotas = somaNotas + NotaAluno
    contadorArrayNota++

    var desejaContinuar = prompt ("Insira 1 para parar!")
    if (desejaContinuar == 1){
        continuar = false
    }

}

console.log ("Nota de cada aluno: ",nomes, notas)
console.log ("Soma das notas: ", somaNotas)
console.log ("Media geral da turma: ", somaNotas / contadorArrayNota)
