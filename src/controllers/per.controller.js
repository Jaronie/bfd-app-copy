import { getAllProducts, getProductById } from '../services/service.js';

export const status = (req, res) => {
    res.status(200).json({
        "ok": true,
        "service": "Luxuper Premium Computer Peripherals",
        "time": new Date().toUTCString()
    });
}

// GET /products
export const getProducts = (req, res) => {
    const productArray = getAllProducts();
    return res.render('products', { products: productArray });
};

// GET /products/:id
export const getById = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).render('error', { message: 'Invalid product ID.' });
    }

    const product = getProductById(id);

    if (!product) {
        return res.status(404).render('error', { message: `Product with ID ${id} not found.` });
    }

    return res.status(200).render('product', { product });
};
