
/* Snack 1 */

const biciCorsa = [
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
}

/*destructuring*/

const {nome,peso} = pesoMin;

document.getElementById('destructuring').innerHTML = nome + ' ' + peso;


/*template literal*/

document.getElementById('templateLiteral').innerHTML = 

    `
    <ul>
       <li> Nome bici: ${nome} </li>
       <li> Peso bici: ${peso} </li>
    </ul>
    `;




