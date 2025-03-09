import { getAge } from "../../src/07-getAge";

describe('07-getAge.ts', () => {
    test('age should be 0', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1996);
        const age = getAge('12-02-1996');

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();
    });
});