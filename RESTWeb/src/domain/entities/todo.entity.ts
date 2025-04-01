export class TodoEntity {
    constructor(
        public id: Number,
        public text: string,
        public completedAt: Date|null = null
    ) { }

    get isCompleted(): boolean {
        return !!this.completedAt;
    }

    static fromObject(object: { [key: string]: any}): TodoEntity {
        const {
            id,
            text,
            completedAt,
        } = object;

        const todo = new TodoEntity(
            id,
            text,
            completedAt
        );

        return todo;
    }
}