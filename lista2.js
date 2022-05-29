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

//Questao 12:
/*
function deepClone(obj){
    // Se não for array ou objeto, retorna null
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let cloned, i;

    // Handle: Date
    if (obj instanceof Date) {
        cloned = new Date(obj.getTime());
        return cloned;
    }

    // Handle: array
    if (obj instanceof Array) {
        let l;
        cloned = [];
        for (i = 0, l = obj.length; i < l; i++) {
            cloned[i] = deepClone(obj[i]);
        }

        return cloned;
    }

    // Handle: object
    cloned = {};
    for (i in obj) if (obj.hasOwnProperty(i)) {
        cloned[i] = deepClone(obj[i]);
    }

    return cloned;
}

function clone2(obj){
    return JSON.parse(JSON.stringify(obj));
}

functionEx12_1 = (obj, param) => {
    objCloned1 = deepClone(obj);
    objCloned2 = clone2(obj);
    
    if(objCloned1[param])
        delete objCloned1[param];

    if(objCloned2[param])
        delete objCloned2[param];

    console.log(obj, objCloned1, objCloned2);
};

// function functionEx12_2(objs, param){
//    const filteredObjs = objs.map((obj) => {
//        // Modificamos somente a propriedade `c`, atribuindo a ela o array secundário
//        // filtrado, sem os objetos que possuem `req` definido como "teste".
//        //
//        // O functionamento é simples: quando retornamos `false`, o `filter` remove o
//        // item da iteração atual. Quando `true` é retornado, o item é mantido.
//       obj.c = obj.c.filter((childObj) => {
//        if (childObj.req === 'a') {
//            // Retornaremos `false` somente quando `req` for definido como `teste`,
//            // removendo esse objeto do array.
//            return false
//        }
//    
//        // Para todos os demais, retorne `true`, mantendo-os no array:
//        return true
//        })
//    
//        // Após filtrarmos a propriedade `c`, devemos retornar o objeto modificado
//        // para o método `map`, caso contrário, ele irá criar um array de valores
//        // `undefined`:
//        return obj
//   })
//}

objeto = {a: 1, b: 2};

console.log(Object.is(deepClone(objeto), objeto));
console.log(Object.is(clone2(objeto), objeto));
functionEx12_1(objeto, 'a')
functionEx12_1(objeto, 'b')
*/

//Questao 13:
/*
functionEx13_1 = array => {
    let arrayFilter = array.filter(function(el){
        if(typeof(el) === 'number' && !isNaN(el)){
            return true
        }

        return false; 
    });

    return arrayFilter;
}

functionEx13_2 = array => {
    return arrayFilter = array.filter(function(el){
        return typeof(el) === 'number' && !isNaN(el);
    });
}

functionEx13_3 = array => {
    return arrayFilter = array.filter(el => {
        return typeof(el) === 'number' && !isNaN(el);
    });
}

console.log(functionEx13_1(["Javascript", 1, "3", "Web", 20]));
console.log(functionEx13_2(["Javascript", 1, "3", "Web", 20]));
console.log(functionEx13_3(["Javascript", 1, "3", "Web", 20]));
*/

//Questao 14:
/*
functionEx14_1 = obj => {
    return Object.keys(obj).map((key) => [key, obj[key]]);
}

functionEx14_2 = obj => {
    return Object.entries(obj);
}

console.log(functionEx14_1({codigo: 11111, preco: 12000}));
console.log(functionEx14_2({codigo: 11111, preco: 12000}));
*/

//Questao 18:
/*
functionEx18 = (obj, paramPreco) => {
    return obj.reduce((preventValue, value) => {
        return preventValue + value[paramPreco];
    }, 0);
}

let objCalculo = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
];

console.log(functionEx18(objCalculo, 'preco'));
*/

//Questao 21:
/*
functionEx21 = array => {
    return Object.values(array).reduce((prev, el) => {
        return (el < prev) ? el : prev;
    })
}

console.log(functionEx21([10, 5, -5, 65]));
*/

//Questao 22:
/*
functionEx22 = numero => {
    let numeroSorteado = Math.floor(Math.random() * 10 + 1);

    if(numeroSorteado == numero){
        return "Parabéns! O número sorteado foi o " + numeroSorteado;
    } else {
        return "Que pena! O número sorteado foi o " + numeroSorteado;
    }
} 

console.log(functionEx22(3))
console.log(functionEx22(4))
console.log(functionEx22(5))
console.log(functionEx22(6))
console.log(functionEx22(7))
*/

//Questao 24:
/*
functionEx24 = (param, frase) => {
    return Array.from(frase).reduce((prev, el) => {
        return (el === param) ? ++prev : prev;
    }, 0);
}

console.log(functionEx24('r', 'A sorte favorece os audazes'));
*/

//Questao 25:
/*
functionEx25 = (param, array) => {
    return array.filter(el => {
        return el.includes(param);
    });
}

console.log(functionEx25("pro", ["programação", "mobile", "profissional"]));
console.log(functionEx25("python", ["javascript", "java", "c++"]));
*/

//Questao 26:
/*
functionEx26_1 = string => {
    let result, vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    
    result = Array.from(string).filter(el => !vogais.includes(el) );

    return result.join('');
}

functionEx26_2 = string => {
    let vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    
    vogais.forEach( vogal => string = string.replace(vogal, '') )

    return string;
}

functionEx26_3 = string => {
    return string.replace(/[aeiou]/ig, '')
}

console.log(functionEx26_1('Cod3r'));
console.log(functionEx26_2('Cod3r'));
console.log(functionEx26_3('Cod3r'));
*/

//Questao 27:
/*
let functionEx27_1 = obj => {
    let obj2 = {};

    Object.entries(obj).forEach((el) => obj2[el[1]] = el[0] );

    return obj2;
};

function functionEx27_2(obj) {
    const obj2 = Object.entries(obj).map( parChaveValor => parChaveValor.reverse())
    return Object.fromEntries(obj2)
};

console.log(functionEx27_1({ a: 1, b: '2', 7: 3}))
console.log(functionEx27_2({ a: 1, b: '2', 7: 3}))
*/

//Questao 29:
/*
let functionEx29_1 = array => {
    return array.sort((a, b) => {
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    })[array.length - 2];
};

function functionEx29_2(numeros) {
    const maiorNumero = Math.max(...numeros);
    numeros = numeros.filter(numero => numero != maiorNumero);
    return segundoMaior = Math.max(...numeros);
}

function functionEx29_3(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA);
    return segundoMaior = numerosOrdenados[1];
}

console.log(functionEx29_1([12, 16, 1, 5]));
console.log(functionEx29_2([12, 16, 1, 5]));
console.log(functionEx29_3([12, 16, 1, 5]));
*/

//Questao 30:
/*
let functionEx_30 = obj => {
    let medias = Object.entries(obj).map((el) => {
        return {nome: el[0], media: el[1].reduce((prev, el) => {
            return prev += el;
         }, 0) / el[1].length};
    });

    return Object.values(medias).reduce((prev, current) => {
        return (prev.media > current.media) ? prev : current ;
    });
};



const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0);
const media = array => soma(array) / array.length;

function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
        const chave = 0, valor = 1;
        return { nome: estudante[chave], media: media(estudante[valor]) };
    });

    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media );
    return estudantesOrdenados[0];
}


console.log(functionEx_30({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}))

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}))
*/