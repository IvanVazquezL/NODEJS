import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    fileName: string,
    destinationFolder: string
};

export class ServerApp {
    static run({ base, limit, showTable, fileName, destinationFolder }: RunOptions) {
        const createTable = new CreateTable();
        const table = createTable.execute({ base, limit });
        new SaveFile().execute({
            fileContent: table,
            fileName,
            destinationFolder
        });

        if (showTable) console.log(table);
    }
}