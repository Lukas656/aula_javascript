function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }    
    return validar;
}
var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));

function soma(n1, n2){
    return n1 + n2;

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
//alert (soma(5, 10));
alert(setReplace("Melhor Vingador é", "é", "Tony Stark")); //voce seeleciona apalavra que deseja subistituir e a ultima a nova palavra para a frase
 
var d = new Date(); //visualiza a data atual
alert(d);
alert(d.getDay()); //dia
alert(d.getMonth()+1); // Mês atual
alert(d.getMinutes()); // Minutos
alert(d.getSeconds()); // Segundos

// Estruturas de Repetetição

var count;
for(count = 0; count <= 5; count++){
  alert(count);  
};

//Estruturas de Repetetição
var count = 0;
while (count <= 5){
   alert(count);
   console.log(count);
   count = count + 1;
};


var idade = prompt("Qual a Sua Idade"); //Pede para o Usuario informar a idade

if(idade >= 18){
alert("Maior de Idade");
}else{
    alert("Menor de idade");
};

var avengers= [{nome:"Capitão America", Arma:"Escudo"},{nome:"Homen de ferro", Arma:"Armaduras"}, {nome:"Thor", Arma:"Mjonir e Strong Breack"} ];
console.log(avengers);
alert(avengers[1].nome);

var avenger= {nome:"Capitão America", Arma:"Escudo"};
console.log(avenger);

var lista= ["Steve", "Tony", "Thor", "Natasha", "Clint", "Bruce", "Wanda", "Piter", "visão"];
lista.push("Nick Furry") //adiciona novo
//lista.pop("") // retira
//console.log(lista);
//alert(lista[0]);
//console.log(lista.length); // conta quantos elementos há na lista
//console.log(lista.reverse());//inverte a hordem dos elementos
//console.log(lista.toString()[1]);//retira do array, [1] pega a primeira letra do item
//console.log(lista.join(" - "))// troca pela virgula


var nome= "Luskinha";
alert("Bem vindo " + nome);
var idade= 19;
alert(nome + " tem " + idade + " anos ");
var idade2= 10;

alert(idade + idade2); Adição
alert(idade - idade2); Subtração
alert(idade * idade2); Multiplicação
alert(idade / idade2); Divisão

/*
Ele pega os dois numeros e realiza a operação,
diferente quando se é String(letras)
ai o sinal de mais é para concatenar
*/
console.log(nome);
console.log(idade + idade2);  

/*
Já o console.log(), 
ele ao invés de mostrar na tela do site,
ele aparece no console do navegador
*/
var frase="Capitão America é o Melhor Vingador";

console.log(frase.replace("Capitão America", "Homen de Ferro"));
alert(frase.replace("Capitão America", "Homen de Ferro"));
//Esse .replace muda a frase que foi escrita no VAR

alert(frase.toUpperCase());
console.log(frase.toUpperCase());
// Deixa as letras MAIUSCULAS

alert(frase.toLowerCase());
console.log(frase.toLowerCase());


// Aqui usamos o javascript para adicionar e modificar elementos na pagina html
function bt(){
    document.getElementById("clic").innerHTML= "<b>Seja Bem Vindo Meu Consagrado!!!</b>"
    console.log(document.getElementById("clic"));
    //alert("Bem Vindo");
}
// Aqui quando clicar na frase, sera redirecionado para outra pagina
function redirecionar(){
    window.open("https://www.w3schools.com/") // abre uma outra janela ao lado
    window.location.href = "https://www.w3schools.com/";  // abre uma jenela sobrepondo a que já está
}
function trocar(elemento){
    elemento.innerHTML = "Tony Stark";
    /*
    document.getElementById("mousemove").innerHTML = "Tony Stark"
    alert("opaaa!!");
    */
}
function voltar(elemento){
    elemento.innerHTML="Passe o mouse e descubra quem é o melhor Avenger";
    /*
    document.getElementById("mousemove").innerHTML = "Passe o mouse e descubra quem é o melhor Avenger"
    alert("opaaa!!");
    */
}
function load(){
    alert("Pagina Carregada");
}

function funcaoChenge(elemento){
    alert(elemento.value);
}
