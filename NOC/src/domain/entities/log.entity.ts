export enum LogSeverityLevel {
    low     = 'low',
    medium = 'medium',
    high    = 'high'
}

export class LogEntity {
    constructor(
        public level: LogSeverityLevel,
        public message: string,
        public createdAt: Date = new Date()
    ) {}

    static fromJson(json: string): LogEntity {
        const {
            message,
            level,
            createdAt
        } = JSON.parse(json);

        const log = new LogEntity(message, level);
        log.createdAt = new Date(createdAt);

        return log;
    }
}