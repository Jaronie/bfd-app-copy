import { getAllProducts, getProductById } from '../services/service.js';

export const status = (req, res) => {
    res.status(200).json({
        "ok": true,
        "service": "Luxuper Premium Computer Peripherals",
        "time": new Date().toUTCString()
    });
}

// GET /products
export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();

        res.render("products", products);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// GET /products/:id
export const getById = async (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send('Product not found');
    }

    try {
        const product = await getProductById(id);

        if (!product) {
            return res.status(404).render('error', { message: `Product with ID ${id} not found.` });
        }

        return res.status(200).render('products', { product });

    } catch (err) {
        console.error(err);
        res.status(500).send('Product not found');
    }
};

export const homepage = (req, res) =>
    res.status(200).render("home", {
        title: "Luxuper",
        subtitle: "Premium Computer Peripherals"
    });