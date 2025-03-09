import { leaders } from "../../src/02-destructuring";

describe('02-destructuring.ts', () => {
    test('leaders should contain AMLO', () => {
        expect(leaders).toContain('AMLO');
    });

    test('first Trump, second AMLO', () => {
        const [ first, second ] = leaders;

        expect(first).toBe('Trump');
        expect(second).toBe('AMLO');

    });
});
