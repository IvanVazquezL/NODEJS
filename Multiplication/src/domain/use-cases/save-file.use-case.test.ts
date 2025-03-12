import fs from 'fs';
import { SaveFile } from './save-file.use-case';

describe('SaveFileUseCase', () => {
    afterEach(() => {
        const filePath = '../outputs';
        if (fs.existsSync(filePath)) fs.rmSync(filePath, { recursive: true});
    });

    test('Should save file with default values', () => {
        const filePath = '../outputs';
        const options = {
            fileContent: 'test content'
        };

        const saveFile = new SaveFile();
        saveFile.execute(options);
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync('../outputs/table.txt', { encoding: 'utf-8'});

        expect(fileExists).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });

    test('Should return false if directory couldnt be created', () => {
        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('This is a custom message from testing'); }
        );

        const result = saveFile.execute({
            fileContent: 'test content'
        });

        expect(result).toBe(false);

        mkdirSpy.mockRestore();
    });
});