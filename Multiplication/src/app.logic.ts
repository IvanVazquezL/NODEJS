import { argv } from "./config/plugins/argv.plugin";
import fs from 'fs';

interface argvType {
    [x: string]: unknown;
    b: number;
    l: number;
    s: boolean;
    _: (string | number)[];
    $0: string;
}

function main() {
    let data = '';
    const directory = '../outputs';

    data += addHeaderToData(argv);
    data += addMultiplicationTableToData(argv);
    writeDataToTxt(argv, directory, data);
    printData(argv, data);
}

function addHeaderToData(argv: argvType): string {
    const { b : base } = argv;
    return `
==============================
            ${base}
==============================\n\n`;
}

function addMultiplicationTableToData(argv: argvType): string {
    const { b: base, l: limit } = argv;
    let multiplicationTable = '';

    for (let i = 1; i <= limit; i++) {
        multiplicationTable += `${base} X ${i} = ${base * i}\n`;
    }

    return multiplicationTable;
}

function writeDataToTxt(argv: argvType, directory: string, data: string) {
    const { b: base } = argv;

    fs.mkdirSync(directory, { recursive: true});
    fs.writeFileSync(`${directory}/${base}.txt`, data);
    console.log('File created!')
}

function printData(argv: argvType, data: string): void {
    const { s: show } = argv;

    if (!show) return;

    console.log(data);
}

main();