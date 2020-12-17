var tabuUsu = document.getElementById("usutabu");
var tabuadaComp = document.getElementById("tabucomp");


function tabuComp(){
    var tabuada = []
    var mostrarTabu = document.getElementById("tabuada");
    for(let i = 1; i <=10; i++){
        tabuada = tabuada + "Tabuada do "+i+""+"<br>"
        for(let k =1; k <=10; k++){
            tabuada = tabuada +(i+" "+"x"+" "+k+" "+"="+" "+(i * k))+"<br>"
        }
    }
    mostrarTabu.innerHTML = tabuada;
}
tabuadaComp.addEventListener("click", tabuComp);

function usuTabu(){
    var tabuada = []
    var numero = document.getElementById("qualnum").value;
    var mostrarTabu = document.getElementById("tabuada");
    if(numero !== ''){
        for(let i = 1; i <= 100; i++){
            for(let k = numero; k <= numero; k++){
                tabuada = tabuada +(i+" "+"x"+" "+k+" "+"="+" "+(i * k))+"<br>"
            }
        }
        mostrarTabu.innerHTML = tabuada;
    }else{
        mostrarTabu.innerHTML = 'Adicione um número !!!';
    }
}
tabuUsu.addEventListener("click", usuTabu);

    

