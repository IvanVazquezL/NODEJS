/*
const { emailTemplate } = require('./emailTemplate');

console.log(emailTemplate);

const { getUserById } = require('./getUserById');

getUserById(2, (error, user) => {
    if (error) throw new Error(error);

    console.log(user);
});

const {
    getAge,
    getId
} = require('../plugins');
const { buildCreatePerson } = require('./buildCreatePerson');

const createPerson = buildCreatePerson(getId, getAge);
const obj = { name: 'John', birthdate: '1985-10-21' };
const john = createPerson(obj);

console.log(john);
*/

const { getPokemonById } = require('./getPokemonById');

console.log(getPokemonById(1, (pokemon) => {
    console.log(pokemon);
}));