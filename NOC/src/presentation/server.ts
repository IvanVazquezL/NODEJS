import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
    static start() {
        console.log('Server started...');
        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const cS = new CheckService(
                    () => console.log('success'),
                    (error) => console.log(error)
                );
                cS.execute('http://localhost:3000/posts');
                console.log('5 seconds');
            }
        );
    }
}