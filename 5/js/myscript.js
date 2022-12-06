/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:

[
{ nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
{ nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
{ nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]

Crea un nuovo array con la lista dei mammiferi.
Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera,
tipo  leone => lEONE, canidi => cANIDI
*/

const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },
    {
        nome: 'balena',
        famiglia: 'felidi',
        classe: 'pesci',
    },
    {
        nome: 'canguro',
        famiglia: 'marsupiali',
        classe: 'mammiferi',
    },
]

const mammiferi = animals.filter((numero) => (numero.classe=='mammiferi'));
console.log(mammiferi);

const upperCase = animals.map((numero) => numero.nome[0] + numero.nome.slice(1).toUpperCase());
console.log(upperCase);












