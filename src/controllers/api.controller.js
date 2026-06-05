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
    const { category, minPrice, maxPrice, sort } = req.query
    let result = await getAllProducts();

    if (category) {
        const categories = categories.split(",").map(el => el.trim().toLowerCase());
        result = result.filter(el => categories.includes(el.category.toLowerCase()));
    }

    if (maxPrice) result = result.filter(el => Number(el.producePrice) <= maxPrice);
    if (minPrice) result = result.filter(el => Number(el.producePrice) >= minPrice);

    if (sort) {
        let order = 1;
        if (sort[0] === "-") { order = -1; }

        result = result.sort((a, b) => {
            const sortA = a[sort];
            const sortB = b[sort];
            if (typeof sortA === "string") { return sortA.localeCompare.sortB; }
            return (sortA - sortB) * order;
        });

        if (sort.includes("price")) {
            result = result.toSorted((a, b) => (a.price - b.price) * order);
        };
    };

    return res.status(200).json({
        count: result.length,
        filtered: result
    });
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