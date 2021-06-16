
/* Snack 1 */

/*const biciCorsa = [
    {
        nome : 'graziella',
        peso : 55
    },

    {
        nome : 'montainbike',
        peso : 45
    },

    {
        nome : 'willer',
        peso : 65
    }
];

let pesoMin = biciCorsa[0];

for(let i = 0; i < biciCorsa.length; i++){
    if(biciCorsa[i].peso < pesoMin.peso){
        pesoMin = biciCorsa[i];
    }
}*/

/*destructuring*/

/*const {nome,peso} = pesoMin;

document.getElementById('destructuring').innerHTML = nome + ' ' + peso;*/


/*template literal*/

/*document.getElementById('templateLiteral').innerHTML = 

    `
    <ul>
       <li> Nome bici: ${nome} </li>
       <li> Peso bici: ${peso} </li>
    </ul>
`;*/




/* Snack 2 */

const squadreCalcio = [
    {
        nome : 'Roma',
        punti : 0,
        falli : 0
    },

    {
        nome : 'Foggia',
        punti : 0,
        falli : 0
    },

    {
        nome : 'Brescia',
        punti : 0,
        falli : 0
    }
];

const numeriRandom = (min,max) => Math.floor(Math.random() * (max - min + 1) ) + min;

const nomeFalli = [];

for(let i = 0; i < squadreCalcio.length; i++){
    squadreCalcio[i].punti = numeriRandom (0,100);
    squadreCalcio[i].falli = numeriRandom(0,20);
    const {nome,falli} = squadreCalcio[i];
    nomeFalli.push({
        nome,
        falli
    });
}

console.log(nomeFalli);





