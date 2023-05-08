let a = 20;
let b = 30;


function somar(){
    console.log('A soma dele é '+ (a+b))
}
function subtrair(){
    console.log('A subtração é '+ (a - b))
}
function dividir(){
    console.log('A divisão é '+ (a%b))
}
function multiplicar(){
    console.log('A multiplicação é '+ (a*b))
}
function soma(num1, num2){
    console.log('A soma é '+(num1+num2))
}
function numero(valor){
    if(valor %2 ===0){
        console.log('O número é Par '+valor)
    }else{
        console.log('O número é ímpar '+valor)
    }
}
function par(numeros){
    return numero %2 ==0
}


somar();
subtrair();
dividir();
multiplicar();

soma(80,30)
numero(25);

const parImpar = par(3) ? 'É par' : 'É impar';
console.log(parImpar);