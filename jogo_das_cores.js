var cores = ["black", "orange", "lime", "red"];
var preto = document.getElementById("preto");
var laranja = document.getElementById("laranja");
var verde = document.getElementById("verde");
var vermelho = document.getElementById("vermelho");
var vazio = [];
var coressalvas = [];
var cor = 0;


function sorteio(){
    for (var cor = 0; cor < 4; cor++){
        var index = Math.floor(Math.random() * 4);
        vazio.push(cores[index]);
    }
    preencher();
}

function preencher(){
    if(vazio[cor] == "black"){
        preto.style.backgroundColor = "black";
        setTimeout(function(){
            preto.style.backgroundColor = "white";
        }, 1000);
        cor++;
    }
    else if(vazio[cor] == "orange"){
        laranja.style.backgroundColor = "orange";
        setTimeout(function(){
            laranja.style.backgroundColor = "white";
        }, 1000);
        cor++;
    }
    else if(vazio[cor] == "lime"){
        verde.style.backgroundColor = "lime";
        setTimeout(function(){
            verde.style.backgroundColor = "white";
        }, 1000);
        cor++;
    }
    else if(vazio[cor] == "red"){
        vermelho.style.backgroundColor = "red";
        setTimeout(function(){
            vermelho.style.backgroundColor = "white";
        }, 1000);
        cor++;
    }
    if (cor < 4){
        setTimeout(preencher , 2000);
    }
    else{
        cor = 0;
    }
}
function salvarcor(n){
    coressalvas.push(n);
}
function checar(){
    if(coressalvas.toString() == vazio.toString()){
        alert("Você Acertou a Sequência");   
    }
    else if(coressalvas.toString() != vazio.toString()){
        alert("Game Over!");
        
    }
    vazio = [];
    coressalvas = [];
}
