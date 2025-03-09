import { emailTemplate } from "../../src/01-template";

describe('01-template.ts', () => {
    test('emailTemplate should contain a greeting', () => {
        expect(emailTemplate).toContain('Hi');
        expect(emailTemplate).toMatch(/{{name}}/);
    });
});