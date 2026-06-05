import pool from "../scripts/db.js";

const fetchProducts = async (filters = {}) => {
    const conditions = [];
    const params = [];

    if (filters.name) {
        conditions.push("productName LIKE ?");
        params.push(`%${filters.name}%`);
    }

    if (filters.category) {
        conditions.push("productType = ?");
        params.push(filters.category);
    }

    if (filters.minPrice) {
        conditions.push("producePrice >= ?");
        params.push(Number(filters.minPrice));
    }

    if (filters.maxPrice) {
        conditions.push("producePrice <= ?");
        params.push(Number(filters.maxPrice));
    }

    const where = conditions.length ? ` WHERE ${conditions.join(" AND ")}` : "";
    const sql = `SELECT * FROM products${where} ORDER BY id`;

    try {
        const [rows] = await pool.query(sql, params);
        return rows;
    } catch (err) {
        console.log("-- Error retrieving data from database. --");
        console.log(err);
        console.log("-- End of SQL error. --")
        return null;
    }    
}

const fetchProductById = async (id) => {
    const sql = "SELECT * FROM products WHERE id = ?";

    try {
        const [rows] = await pool.query(sql, [id]);
        return rows[0];
    } catch (err) {
        console.log("-- Error retrieving data from database. --");
        console.log(err);
        console.log("-- End of SQL error. --")
        return null;
    }    
}

export const getAllProducts = async (filters = {}) => {
    return await fetchProducts(filters);
};

export const getProductById = async (id) => {
    return await fetchProductById(id);
};