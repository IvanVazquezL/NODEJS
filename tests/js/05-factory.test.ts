import { buildCreatePerson } from "../../src/05-factory";

const getId = () => 1;
const getAge = () => 10;

describe('05-factory.ts', () => {
    test('buildCreatePerson should return a function', () => {
        const createPerson = buildCreatePerson(getId, getAge);
        expect(typeof createPerson).toBe('function')
    });

    test('createPerson should return a person', () => {
        const createPerson = buildCreatePerson(getId, getAge);
        const person = createPerson({
            name:'Ivan', 
            birthdate: '11-02-2024'
        });

        expect(person).toEqual({
            id: 1,
            name:'Ivan', 
            birthdate: '11-02-2024',
            age: 10
        })
    });
});
