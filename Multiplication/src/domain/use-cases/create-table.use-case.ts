export interface CreateTableUseCase {
    execute(options: CreateTableOptions): void;
}

export interface CreateTableOptions {
    base: number,
    limit?: number
}

export class CreateTable implements CreateTableUseCase{
    constructor() {

    }

    execute({ base, limit = 10 }: CreateTableOptions): string {
        let multiplicationTable = '';

        for (let i = 1; i <= limit; i++) {
            multiplicationTable += `${base} X ${i} = ${base * i}\n`;
        }
    
        return multiplicationTable;
    }
}