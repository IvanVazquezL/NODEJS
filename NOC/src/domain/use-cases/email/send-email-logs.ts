import { EmailService } from "../../../presentation/email/email.service";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface SendLogEmailUseCase {
    execute(to: string | string[]): Promise<boolean>;
}

export class SendEmailLogs implements SendLogEmailUseCase {
    constructor(
        private readonly emailService: EmailService,
        private readonly logRepository: LogRepository
    ) { }
    
    async execute(to: string | string[]): Promise<boolean> {
        try {
            const sent = this.emailService.sendEmailWithFileSystemLogs(to);
            
            if (!sent) {
                throw new Error('Email log was not sent');
            }

            const log = new LogEntity({
                level: LogSeverityLevel.low,
                message: 'Email logs sent',
                origin: 'send-email-logs.ts'
            });
            this.logRepository.saveLog(log);
        } catch (error) {
            const log = new LogEntity({
                level: LogSeverityLevel.high,
                message: 'Email logs was not sent',
                origin: 'send-email-logs.ts'
            });
            this.logRepository.saveLog(log);
        }

        return true;
    }
}