import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';

function main() {
    const server = new Server({
        port: 3000,
        routes: AppRoutes.routes,
        public_path: 'public'
    });
    server.start();
}

main();