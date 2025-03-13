import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';

export class FileSystemDatasource extends LogDatasource {
    private readonly logPath = 'logs/';
    private readonly allLogsPath = 'logs/logs-all.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly highLogsPath = 'logs/logs-high.log';
    private readonly pathsLevel = {
        [LogSeverityLevel.low]: this.allLogsPath,
        [LogSeverityLevel.medium]: this.mediumLogsPath,
        [LogSeverityLevel.high]: this.highLogsPath
    };

    constructor() {
        super();
        this.createLogsFiles();
    }

    private createLogsFiles(): void {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath);
        }

        const paths = [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ];

        for (const path of paths) {
            if (fs.existsSync(path)) continue;
            fs.writeFileSync(path, '');
        }
    }
    
    async saveLog(newLog: LogEntity): Promise<void> {
        const { level } = newLog;
        fs.appendFileSync(this.pathsLevel[level], `${JSON.stringify(newLog)}\n`);
    }

    private getLogsFromFile(path: string): LogEntity[] {
        const content = fs.readFileSync(path, 'utf-8');
        const stringLogs = content.split('\n');
        const logEntities = stringLogs.map(LogEntity.fromJson);

        return logEntities;
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        const path = this.pathsLevel[severityLevel];
        const logs = this.getLogsFromFile(path);
        return logs;
    }
}