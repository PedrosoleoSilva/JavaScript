for(let i = 0; i<=100; i+=2){
    console.log(i)
}

var array = [2,4,6,8];
let soma =0;

for(let i = 0; i<array.length; i++){
     soma += array[i];

}
 console.log(soma)

 let num = [-1,1,-2,2,-3,3];

 for(let i = 0; i <num.length;i++){
    if(num[i] < 0){
        num.splice(i,1)
    }else {
        console.log(num[i])
    }
 }
 console.log(num);

 let num1 = [1,2,3,4,5];


 for(let i =0; i<num1.length;i++){
    console.log(num1[i]*2);
 }
 

 function soma(a, b) {
    return new Promise((numm,num22 ) => {
    const resultado = a + b
    if(resultado % 2 == 0){
        numm(resultado)
    }else{
        num22("Não é par")
    }

    })
}

soma(1, 2)
    .then((resultado) => {console.log(resultado)})
    .catch((erro) => {console.log(erro)})

