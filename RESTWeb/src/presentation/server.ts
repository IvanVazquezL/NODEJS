import express, { Router } from 'express';

interface Options {
    port: number,
    routes: Router,
    public_path?: string
};

export class Server {
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor(options: Options) {
        const {
            port,
            routes,
            public_path = 'public'
        } = options;

        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
    }

    async start() {
        this.app.use(express.json());

        this.app.use(express.static(this.publicPath));
        
        this.app.use(this.routes);
        
        this.app.listen(3000, () => {
            console.log('Server running');
        })
    }
}