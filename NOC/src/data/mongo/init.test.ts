import mongoose from "mongoose";
import { MongoDatabase } from "./init";

describe('init MongoDB', () => {

    afterAll(() => {
        mongoose.connection.close();
    });

    test('Should connect to MongoDB', async() => {
        const connected = await MongoDatabase.connect({
            dbName: 'NOC-Test',
            mongoUrl: 'mongodb://ivan:123456@localhost:27019'
        })
    
        expect(connected).toBe(true);
    });
});