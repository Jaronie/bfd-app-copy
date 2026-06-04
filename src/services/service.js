import pool from "../scripts/db.js";

const fetchProducts = async () => {
    const sql = "SELECT * FROM products ORDER BY id";
    try {
        const products = await pool.query(sql);
        return products[0];
    } catch (err) {
        console.log("-- Error retrieving data from database. --");
        console.log(err);
        console.log("-- End of SQL error. --")
        return null;
    }    
}

export const getAllProducts = async () => {
    const products = await fetchProducts();
    return products;
};

export const getProductById = async (findID) => {
    const products = await fetchProducts();
    return products.find(p => p.id === findID);
};