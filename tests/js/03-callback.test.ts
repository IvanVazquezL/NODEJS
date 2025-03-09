import { getUserById } from "../../src/03-callback";

describe('03-callback.ts', () => {
    test('getUserById should return an error', (done) => {
        const id = 10;

        getUserById(id, (err, user) => {
            expect(err).toBe(`User with id ${id} not found.`);
            expect(user).toBeUndefined();
            done();
        });
    });

    test('getUserById should return John with id 1', (done) => {
        const id = 1;

        getUserById(id, (err, user) => {
            expect(user).toEqual({
                name: 'John',
                id: 1,
            });
            expect(err).toBeNull();
            done();
        });
    });
});
