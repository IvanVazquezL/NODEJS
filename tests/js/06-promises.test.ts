import { getPokemonById } from "../../src/06-promises";

describe('06-promises.ts', () => {
    test('getPokemonById should return a pokemon', async () => {
        const pokemonName = await getPokemonById(1);
        expect(pokemonName).toBe('bulbasaur');
    });

    test('return an error if pokemon doesnt exist', async () => {
        const id = -1;
        try{
            await getPokemonById(id);
        } catch(error) {
            expect(error).toBe(`Pokemon not found with id ${id}`);
        }
    });
});