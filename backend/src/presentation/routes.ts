import { Router } from "express";
import { ProductsRoutes } from "./products/routes";


export class AppRoutes{


  public static  routes():Router{

    const router = Router();

    router.use('/api/products/',ProductsRoutes.routes());


    return router;

  }

}