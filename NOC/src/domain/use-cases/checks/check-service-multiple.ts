import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceMultipleUseCase {
    execute(url: string): Promise<boolean>
}

type SuccessCallback = () => void;
type ErrorCallback = (error:string) => void;

export class CheckServiceMultiple implements CheckServiceMultipleUseCase {
    constructor(
        private readonly logRepositories: LogRepository[],
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) { }

    private async saveLogInAllRepositories(log: LogEntity): Promise<void> {
        for (const logRepository of this.logRepositories) {
            logRepository.saveLog(log);
        }
    }

    async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error('Error on check service');
            }

            this.successCallback();
            const log = new LogEntity({
                level: LogSeverityLevel.low,
                message: 'Service is working',
                origin: 'check-service.ts'
            });

            await this.saveLogInAllRepositories(log);

            return true;
        } catch (error) {
            const errorMessage = `${error}`;
            const log = new LogEntity({
                level: LogSeverityLevel.high,
                message: errorMessage,
                origin: 'check-service.ts'
            });
            
            await this.saveLogInAllRepositories(log);

            this.errorCallback(errorMessage);
            return false;
        }
    }
}