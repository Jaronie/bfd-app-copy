import { getAllProducts, getProductById} from '../services/service.js';

export const getProducts = (req, res) => {
    const productArray = getAllProducts();
    return res.status(200).json(productArray);
}

export const getById = (req, res) => {
    const id = Number(req.params.id);

    const product = getProductById(id);

    if(!product){
        return res.status(404).json({
            message: `Product with ID ${id} not found.`,
            data: null
        });
        }

        res.status(200).json({
            message: 'Product found',
            data: product
        });
    };

