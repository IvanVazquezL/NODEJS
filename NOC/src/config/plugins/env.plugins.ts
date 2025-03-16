import 'dotenv/config';

export const env = {
    MAILER_SERVICE: process.env.MAILER_SERVICE,
    MAILER_EMAIL: process.env.MAILER_EMAIL,
    MAILER_SECRET_KEY: process.env.MAILER_SECRET_KEY,
    MONGO_URL: process.env.MONGO_URL,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASS: process.env.MONGO_PASS,
};