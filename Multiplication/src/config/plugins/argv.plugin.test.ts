async function runCommand(args: string[]) {
    process.argv = [...process.argv, ...args];

    const { argv } = await import('./argv.plugin');
    return argv;
}

describe('Test argv.plugin.ts', () => {
    test('should return default values', async() => {
        const argv = await runCommand(['-b', '5']);
        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs'
        }));
    });
});