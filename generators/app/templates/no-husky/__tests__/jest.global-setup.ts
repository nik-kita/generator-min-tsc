import { config } from 'dotenv';
import { join } from 'path';
/**
 * Here, as example, you can see
 * commented setup
 * database for tests.
 */
// import { Client } from 'pg';

config({ path: join(__dirname, '.test.env') });

export default async () => {
    // const client = new Client({
    //     host: process.env.TEST_PG_HOST,
    //     user: process.env.TEST_PG_USER,
    //     password: process.env.TEST_PG_PASSWORD,
    // });

    // await client.connect();
    // await client.query(`DROP DATABASE IF EXISTS "${process.env.TEST_PG_DB}" WITH (FORCE)`);
    // await client.query(`CREATE DATABASE "${process.env.TEST_PG_DB}"`);

    // await client.end();
};
