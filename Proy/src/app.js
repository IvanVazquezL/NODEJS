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

/*
const { getPokemonById } = require('./getPokemonById');
const pokemon = getPokemonById(1)
    .then(pokemon => console.log(pokemon));
*/

const { buildLogger } = require('../plugins');

const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('algo malo');