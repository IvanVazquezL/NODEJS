import { argv } from "./config/plugins/argv.plugin";
import { ServerApp } from "./presentation/server-app";

function main() {
    const {
        b: base,
        l: limit,
        s: showTable,
        n: fileName,
        d: destinationFolder
    } = argv;

    ServerApp.run({
        base,
        limit,
        showTable,
        fileName,
        destinationFolder
    });
}

main();