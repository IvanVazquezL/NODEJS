import fs from 'fs';

export interface SaveFileCaseUse {
    execute(options: SaveFileOptions): boolean;
}

export interface SaveFileOptions {
    fileContent       : string;
    fileName         ?: string;
    destinationFolder?: string;
}

export class SaveFile implements SaveFileCaseUse {
    constructor() {}

    execute({
        fileContent,
        fileName = 'table',
        destinationFolder = 'outputs',
    }: SaveFileOptions): boolean {
        try {
            fs.mkdirSync(`../${destinationFolder}`, { recursive: true});
            fs.writeFileSync(`../${destinationFolder}/${fileName}.txt`, fileContent);
            console.log('File created!');
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}