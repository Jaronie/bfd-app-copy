import pool from "../scripts/db.js";

const fetchProducts = async () => {
    const sql = "SELECT * FROM products ORDER BY id";
    const products = await pool.query(sql);
    if (products === null) { console.log("Failed to retrieve products!"); }
    return products[0];
}

export const getAllProducts = () => ({
        "productCount": fetchProducts.length,
        "productData": fetchProducts
    });

export const getProductById = (findID) => fetchProducts.find(el => el.id === findID);