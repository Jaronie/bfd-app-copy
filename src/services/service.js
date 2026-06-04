import pool from "../scripts/db.js";

export const fetchProducts = async () => {
    const sql = "SELECT * FROM products ORDER BY id";
    const products = await pool.query(sql);
    if (products === null) { console.log("Failed to retrieve products!"); }
    return products[0];
}

export const getAllProducts = async () => {

    const products = await fetchProducts();
        
    return {
        "productCount": products.length,
        "productData": products
    };

};

export const getProductById = async (findID) => {
    const products = await fetchProducts();
    return products.find(p => p.id === findID);
};