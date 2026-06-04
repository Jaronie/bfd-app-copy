import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST_,
    user: process.env.USER_,
    password: process.env.PASS_,
    database: process.env.DATABASE_,
    port: process.env.DB_PORT_
});

export default pool;