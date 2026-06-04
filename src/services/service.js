import { fetchProducts } from "../scripts/db.js";

export const getAllProducts = () => ({
        "productCount": fetchProducts.length,
        "productData": fetchProducts.map(el => ({
                id: el.id,
                name: el.productName,
                desc: el.productDesc,
                type: el.productType,
                price: el.producePrice,
                imgUrl: el.image_url
            }))
    });

export const getProductById = (findID) => fetchProducts.find(el => el.id === findID);