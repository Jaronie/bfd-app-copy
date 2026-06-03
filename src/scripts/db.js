import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

export const pool = mysql.createConnection({
    host: process.env.HOST_,
    user: process.env.USER_,
    password: process.env.PASS_,
    database: process.env.DATABASE_,
    port: process.env.PORT_
}).promise();

export const fetchProducts = async () => {
    const sql = "SELECT * FROM products ORDER BY id";
    const products = await pool.query(sql);
    if (products === null) { console.log("Failed to retrieve products!"); }
    return products[0];
}