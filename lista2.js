//Questao 6:
/*
functionEx6 = param => {
    if(typeof param === 'number' || typeof param === 'boolean'){
        return (typeof param === 'boolean') ? !param : (-1)*param;
    }

    return 'Booleano ou numero esperados, mas o parâmetro é do tipo ' + (typeof param);
};

console.log(functionEx6(5));
console.log(functionEx6(true));
console.log(functionEx6('aaaa'));
*/

//Questao 9:
/*
functionEx9 = (param, qtdVezes) => {
    let arrayResult = [];
    
    for(let i = 0; i < qtdVezes; i++){
        arrayResult.push(param);
    }
    
    return arrayResult;
};

console.log(functionEx9('a', 4));
console.log(functionEx9(3, 3));
*/

//Questao 11:
/*
functionEx11_1 = dadosArray => {
    return [[...dadosArray].shift(), [...dadosArray].pop()]
};

functionEx11_2 = dadosArray => {
    return [dadosArray[0], dadosArray[dadosArray.length - 1]]
};

console.log(functionEx11_1([1, 2, 'aa', false, 'ffgg']));
console.log(functionEx11_2([1, 2, 'aa', false, 'ffgg']));
*/

