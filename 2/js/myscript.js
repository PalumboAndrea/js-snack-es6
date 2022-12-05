/*
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.
*/


const cars = [
    {
        marca: 'pippo',
        modello: 'pluto',
        alimentazione: 'benzina',
    },
    {
        marca: 'pippo',
        modello: 'pluto',
        alimentazione: 'benzina',
    },
    {
        marca: 'pippo',
        modello: 'pluto',
        alimentazione: 'diesel',
    },
    {
        marca: 'pippo',
        modello: 'pluto',
        alimentazione: 'diesel',
    },
    {
        marca: 'pippo',
        modello: 'pluto',
        alimentazione: 'gpl',
    },
    {
        marca: 'pippo',
        modello: 'pluto',
        alimentazione: 'elettrico',
    },
    {
        marca: 'pippo',
        modello: 'pluto',
        alimentazione: 'metano',
    },
    {
        marca: 'pippo',
        modello: 'pluto',
        alimentazione: 'diesel',
    },
    {
        marca: 'pippo',
        modello: 'pluto',
        alimentazione: 'benzina',
    },
    {
        marca: 'pippo',
        modello: 'pluto',
        alimentazione: 'diesel',
    }
]





const benzina = [];
const diesel = [];
const varie = [];

for ( i=0; i<cars.length; i++){
    if (cars[i].alimentazione == 'benzina'){
        benzina.push(cars[i]);
    } else if (cars[i].alimentazione == 'diesel'){
        diesel.push(cars[i]);
    } else {
        diesel.push(varie[i]);
    }
}
console.log(benzina);
console.log(diesel);
console.log(varie);


































