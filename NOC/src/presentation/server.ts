import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImp } from "../infrastructure/repositories/log-implementation.repository";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImp(
    new FileSystemDatasource()
);

export class Server {
    static start() {
        console.log('Server started...');
        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const cS = new CheckService(
                    fileSystemLogRepository,
                    () => console.log('success'),
                    (error) => console.log(error)
                );
                cS.execute('https://google.com');
                console.log('5 seconds');
            }
        );
    }
}