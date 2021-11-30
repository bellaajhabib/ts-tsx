function add(n1:number,n2:number,showResult:boolean){
    if(showResult){
        console.log(n1+n2);
    }else
    return n1+n2;
}

let number1 = 5;
number1 = 200;
const number2 = 2.8;

const result =add(number1, number2,false);
console.log(result);
