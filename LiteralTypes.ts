function literalTypes (input1: number|string,
                       input2:number|string,
                       resultConversion: 'as-number'| 'as-text'){
    let result;

    if(typeof input1 ==='number' && typeof input2 ==='number'&& resultConversion=="as-number"){

        result =input1+input2;
    }else {
        result= input1.toString()+input2.toString();
    }
    return result;

}

const combineAges = literalTypes(30,260,'as-text');
console.log(combineAges);

const combineAgesNames= literalTypes("Max","Anna",'as-number');
console.log(combineAgesNames);
