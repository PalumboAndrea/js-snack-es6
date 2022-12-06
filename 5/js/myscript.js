/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona,
una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
*/

const people = [
    {
        name: 'andrea',
        surname: 'palumbo',
        age: 24,
    },
    {
        name: 'alessandro',
        surname: 'giovannello',
        age: 29,
    },
    {
        name: 'stefano',
        surname: 'pippolardo',
        age: 20,
    },
    {
        name: 'giovanni',
        surname: 'lappolo',
        age: 17,
    },
    {
        name: 'gianna',
        surname: 'gina',
        age: 24,
    },
    {
        name: 'chiara',
        surname: 'revina',
        age: 15,
    },
    {
        name: 'sofia',
        surname: 'rifina',
        age: 34,
    },
    {
        name: 'rosa',
        surname: 'gilore',
        age: 43,
    },
    {
        name: 'cristina',
        surname: 'revina',
        age: 10,
    },
    {
        name: 'angelo',
        surname: 'gino',
        age: 48,
    },
]

function canIDrive (age){
    let answer;
    if(age>=18){
        answer = 'You can drive';
    } else {
        answer = 'You can not drive!';
    }
    return answer;
}

const info = people.map((person) => person.name.toUpperCase() + ' ' + person.surname.toUpperCase() + ' --> ' + canIDrive(person.age));

console.log(info);









