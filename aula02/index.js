let person = {
    name : 'Leo',
    email: 'leo@gmail.com',
    age :60, 
    WorkerExperience : [
        {name : "Integrado"},
        {name : "UTFPR"}
    ]
}
function isGreaterThan10(num){
    switch(num){
        case 10:
            return "10";
        case 9:
            return "9";
        default:
            return "nao conheco";
    }
}
let names = ["Leo","Pedro","Ana"];
function teste(arr){
    for(let name of names){
        console.log(name);
    }
}
names.forEach((name, idx, arr)=>{
    console.log(name,idx,arr)
})
const namesObjt = names.map((name)=>{
    return{
        name
    }
})

function callback(value){
    console.log(value)
}
const  sum = (a,b,fn)=>{
    const result = a +b;
    fn(result)
}
sum(1,2,callback);
console.log(namesObjt)

//teste(names);

