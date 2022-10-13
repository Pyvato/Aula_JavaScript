// PARTE 2 CURSO JS

/*
function validaIdade(idade){
    var validar;

    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Digite a sua idade: ")
console.log(validaIdade(idade));
*/

function clicou(){
    document.getElementById("agradecimento") .innerHTML = "Obrigado por clicar no botão";
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");

}

function redirecionar(){ //abrindo janelas novas no navegador ao clicar no botão
    window.open("https://www.youtube.com/watch?v=xGiXwy5ohSc"); //abrir em outra aba
    // window.location.href = "https://www.youtube.com/watch?v=xGiXwy5ohSc"; //abrir na mesma aba
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui para trocar a mensagem";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
        console.log(elemento.value);
}