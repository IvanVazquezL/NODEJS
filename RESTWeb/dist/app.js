"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./presentation/routes");
const server_1 = require("./presentation/server");
function main() {
    const server = new server_1.Server({
        port: 3000,
        routes: routes_1.AppRoutes.routes,
        public_path: 'public'
    });
    server.start();
}
main();
