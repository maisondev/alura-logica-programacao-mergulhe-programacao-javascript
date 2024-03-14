alert("Bem vindo ao jogo do número secreto.");
let range = 100;
tentativa = 1;
numeroTentativas=10;
let numeroSecreto =  parseInt(Math.random()*range +1);
while(tentativa < numeroTentativas){
    let chute = prompt(`Escolha um número entre 1 e ${range}`);
    if(chute == numeroSecreto){
        console.log("Você acertou!! na tentativa",tentativa);
        break;
    }else if (chute < numeroSecreto) {
        console.error("Você errou!! O número secreto é maior",);
    }else{
        console.error("Você errou!! O número secreto é menor");
    }
    tentativa++;
}


// //Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
// let diaDaSemana = prompt("Qual é o dia da semana");
// if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo"){
//     alert("Bom final de semana");
// }else{
//     alert("Boa semana");
// }
//
// // Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
//     let numeroUsuario = prompt("Digite um número para verificação");
// if(numeroUsuario>0){
//     alert("Número positivo");
// }else{
//     alert("Número nulo ou negativo");
// }
//
// //Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
// // Caso contrário, mostre "Tente novamente para ganhar.".
// let pontuacao = prompt("Informe a pontuação");
// if(pontuacao>=100){
//     alert("Você venceu");
// }else{
//     alert("Tente novamente para ganhar");
// }
//
// //Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
// let saldo = prompt("Digite o valor do saldo");
// alert(`O valor do saldo é de :${saldo}`);
//
// //Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
// const nomeUsuario = prompt("Insira seu nome");
// alert("Seja bem vindo "+nomeUsuario);
//
// //Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contadorCrescente=1;
// while(contadorCrescente<=10){
//     console.log(" ",contadorCrescente);
//     contadorCrescente++;
// }
//
// //Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
//  contadorDecrescente=10;
// while(contadorDecrescente>=0){
//     console.log(" ",contadorDecrescente);
//     contadorDecrescente--;
// }
//
// //Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// let contadorRegreessivo=prompt("Digite um número para contagem regressiva");
// while(contadorRegreessivo>=0){
//     console.log(" ",contadorRegreessivo);
//     contadorRegreessivo--;
// }
//
// //Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
// let numeroDigitado=prompt("Digite um número para a contagem progressiva");
// let contadorProgressivo = 0;
// while(contadorProgressivo<=numeroDigitado){
//     console.log(" ",contadorProgressivo);
//     contadorProgressivo++;
// }
//
// //Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
// console.log("Seja bem vindo");
// // Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// let meuNome = "Maison Marcel";
// console.log(meuNome);
// // Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
// alert ("Olá", meuNome);
// // Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
// let linguagemPreferida = prompt("Qual a linguagem de programação que você mais gosta?");
// console.log(linguagemPreferida);
// // Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1=10,valor2=20;
// let resultado = valor1 + valor2;
// console.log("A soma de ",valor1, "e" ,valor2, "é igual a ",resultado,".");
// // Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
//  valor1=10,valor2=20;
//  resultado = valor1 - valor2;
// console.log("A diferença de ",valor1, "e" ,valor2, "é igual a ",resultado,".");
// // Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
// let suaIdade = prompt("Insira sua idade");
// if(suaIdade>=18){
//     console.log("Você é maior de idade");
// }else{
//     console.log("Você é menor de idade");
// }
// // Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
// let numero = prompt("Digite um número e verificaremos se é positivo, negativo ou nulo");
// if(numero===0){
//     console.log("Zero");
// }else if(numero<0){
//     console.log("Negativo");
// }else{
//     console.log("Positivo");
// }
// // Use um loop while para imprimir os números de 1 a 10 no console.
// let contador=1;
// while(contador<=10){
//     console.log(" ",contador);
//     contador++;
// }
// // Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
// let nota = prompt("Digite a nota");
// if(nota>=7){
//     console.log("Aprovado")
// }else{
//     console.log("Reprovado")
// }
//
// // Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
//  nota = prompt("Digite a nota");
// if(nota>=7){
//     console.log("Aprovado")
// }else{
//     console.log("Reprovado")
// }
//
// // Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
// let numeroAleatorio = parseInt(Math.random() * 10 +1);
// console.log(numeroAleatorio);
//
// // Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
// let numeroAleatorio2 = parseInt(Math.random() * 1000 +1);
// console.log(numeroAleatorio2);
//
