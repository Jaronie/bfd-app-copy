import { Router } from "express";
import * as perCtl from '../controllers/per.controller.js'

const router = Router();

router.get("/", (req, res) => {
    res.render("home", {
        title: "Luxuper",
        subtitle: "Premium Computer Peripherals"
    });
});

router.get("/products", perCtl.getProducts);
router.get("/products/:id", perCtl.getById);

// for debug
router.get("/api/products", perCtl.getApiProducts);
router.get("/api/status", perCtl.status);

export default router;