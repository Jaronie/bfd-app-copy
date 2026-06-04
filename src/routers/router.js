import { Router } from "express";
import * as perCtl from '../controllers/per.controller.js'

const router = Router();

router.get("/", (req, res) => {
    res.render("home", {
        products: perCtl.getProducts,
        size: perCtl.getProducts.length
    });
});

router.get("/api/products", perCtl.getProducts);
router.get("/api/products/:id", perCtl.getById);
router.get("/api/status", perCtl.status);

export default router;