
import { Router } from "express";
import { ProductsController } from "./controller";


export class ProductsRoutes{


  public static  routes():Router{

    const router = Router();
    const productsController = new ProductsController();

    router.get('/',productsController.getAllProducts);
    router.get('/:slug',productsController.getProduct);
    router.post('/add-product',productsController.addProduct);
    router.put('/:slug',productsController.updateProduct);
    router.delete('/:slug',productsController.deleteProduct);


    return router;

  }

}
