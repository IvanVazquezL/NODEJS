import nodemailer from 'nodemailer';
import { env } from '../../config/plugins/env.plugins';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: Attachments[];
}

interface Attachments {
    filename: string;
    path: string;
}

export class EmailService {
    private transporter = nodemailer.createTransport({
        service: env.MAILER_SERVICE,
        auth: {
            user: env.MAILER_EMAIL,
            pass: env.MAILER_SECRET_KEY
        }
    });

    constructor() {}

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const {
            to,
            subject,
            htmlBody,
            attachments = []
        } = options;

        try {
            const sentInformation = await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments
            });

            return true;
        } catch (error) {
            return false;
        }
    }

    sendEmailWithFileSystemLogs(to: string | string[]): Promise<boolean> {
        const subject: string = 'Server logs';
        const htmlBody: string = '<p>i</p>';
        const attachments: Attachments[] = [
            { filename: 'logs-all.log', path: './logs/logs-all.log'},
            { filename: 'logs-medium.log', path: './logs/logs-high.log'},
            { filename: 'logs-high.log', path: './logs/logs-medium.log'},
        ];

        return this.sendEmail({
            to,
            subject,
            attachments,
            htmlBody
        })
    }
}