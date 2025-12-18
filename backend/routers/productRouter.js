import express from "express";
import { Add_Product, View_Product_ById, View_Products } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/add_product",Add_Product );
productRouter.get("/view_products", View_Products);
productRouter.get("/view_product/:id", View_Product_ById);


export default productRouter;