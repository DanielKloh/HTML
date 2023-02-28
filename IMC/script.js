
const resultado = document.getElementById('resultado');


function calcularIMC(){

    const peso = (document.getElementById("peso")).value;
    const altura = (document.getElementById("altura")).value;

    
    if(peso != 0 && altura != 0){
        let calculo = (peso / (altura*altura)).toFixed(1);


        if(calculo < 18.5){
            document.getElementById('resultado').innerHTML = "Seu IMC é de " + calculo + " Magresa";
        }
    
        else if( calculo < 25){
            document.getElementById('resultado').innerHTML = "Seu IMC é de " + calculo + " Normal";
    
        }
    
        else if( calculo <30){
            document.getElementById('resultado').innerHTML = "Seu IMC é de " + calculo + " Sobrepeso";
    
        }
    
        else if(calculo <35){
            document.getElementById('resultado').innerHTML = "Seu IMC é de " + calculo + " Obesidade grau I";
        }
    
        else if(calculo < 40){
            document.getElementById('resultado').innerHTML = "Seu IMC é de " + calculo + " Obesidade grau II";
    
        }
    
        else{
            document.getElementById('resultado').innerHTML = "Seu IMC é de " + calculo + " Obesidade grau III";
        }
    }

    else{
        document.getElementById('resultado').innerHTML = "Preencha os campos a cima!";
    }
}

function limpar(){
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('resultado').textContent = ""
}



// Menor que 18,5	Magreza
// 18,5 a 24,9	Normal
// 25 a 29,9	Sobre peso
// 30 a 34,9	Obesidade grau I
// 35 a 39,9	Obesidade grau II
// Maior que 40	Obesidade grau III