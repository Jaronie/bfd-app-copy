import pool from "../scripts/db.js";

const fetchProducts = async () => {
    const sql = "SELECT * FROM products ORDER BY id";

    try {
        const [rows] = await pool.query(sql);
        return rows;
    } catch (err) {
        console.log("-- Error retrieving data from database. --");
        console.log(err);
        console.log("-- End of SQL error. --")
        return null;
    }    
}
const fetchProductById = async () => {
    const sql = "SELECT * FROM products ORDER BY id = ?";

    try {
        const [rows] = await pool.query(sql, [id]);
        return rows;
    } catch (err) {
        console.log("-- Error retrieving data from database. --");
        console.log(err);
        console.log("-- End of SQL error. --")
        return null;
    }    
}

export const getAllProducts = async () => {
    return await fetchProducts();
};

export const getProductById = async (id) => {
    return await fetchProductById(id);
};