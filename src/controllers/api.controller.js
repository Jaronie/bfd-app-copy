import { getAllProducts, getProductById } from '../services/service.js'

// GET /api/status
export const status = (req, res) => {
    res.status(200).json({
        "ok": true,
        "service": "Luxuper Premium Computer Peripherals",
        "time": new Date().toUTCString()
    });
}

// GET /api/products
export const getProducts = async (req, res) => {
    try {
        const { name, category, minPrice, maxPrice, sort} = req.query
        const products = await getAllProducts({
            name,
            category,
            minPrice,
            maxPrice,
            sort
        });
        console.log(products);
        res.json({ products });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Could not retrieve products"
        });
    }
};

// GET /api/products/:id
export const getById = async (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send('Product not found');
    }

    try {
        const product = await getProductById(id);

        if (!product) {
            return res.status(404).json({message: `Product with ID ${id} not found.`});
        }

        return res.status(200).json({ product });

    } catch (err) {
        console.error(err);
        return res.status(500).json({message: 'Server error'});
    }
};