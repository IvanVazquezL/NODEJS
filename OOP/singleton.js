class Database {
    // Static property to hold the single instance
    static #instance = null;

    constructor() {
        if (Database.#instance) {
            return Database.#instance; // Return the existing instance
        }

        // Initialize the instance
        Database.#instance = this;
    }

    connect() {
        console.log("Connected to the database");
    }
}

// Test Cases
const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // ✅ Output: true
db1.connect();            // ✅ Output: Connected to the database
db2.connect();            // ✅ Output: Connected to the database
