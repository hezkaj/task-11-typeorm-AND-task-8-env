import {load} from 'ts-dotenv';

const env = load({
SERVER_PORT: Number,
DB_HOST: String,
DB_PORT: Number,
DB_NAME: String,
DB_USER: String,
DB_PASSWORD: String
})

export = env;

