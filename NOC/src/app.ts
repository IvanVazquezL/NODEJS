import { env } from "./config/plugins/env.plugins";
import { MongoDatabase } from "./data/mongo/init";
import { Server } from "./presentation/server";

(async() => {
    main()
})();

async function main() {
    /*await MongoDatabase.connect({
        mongoUrl: env.MONGO_URL!,
        dbName: env.MONGO_DB_NAME!
    })*/
    //Server.start();

    
}