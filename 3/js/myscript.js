/*
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

const zucchine = [
    {
        varietà: 1,
        peso: 5,
        lunghezza: 1,
    },
    {
        varietà: 1,
        peso: 6,
        lunghezza: 1,
    },
    {
        varietà: 1,
        peso: 4,
        lunghezza: 1,
    },
    {
        varietà: 1,
        peso: 8,
        lunghezza: 1,
    }
]



let weight = 0;

for (i=0; i<zucchine.length; i++){
    weight = weight + zucchine[i].peso;
}

console.log(weight)


























