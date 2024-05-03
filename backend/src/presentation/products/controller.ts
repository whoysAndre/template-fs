import { Request, Response } from "express";


export class ProductsController{

  constructor(){};


  public getAllProducts = (req:Request,res:Response)=>{

    res.json({products:[]})

  };

  public getProduct = (req:Request,res:Response)=>{
    
    const slug = req.params;
    
    res.send(slug);
  }
  
  public addProduct = (req:Request,res:Response)=>{

  }

  public updateProduct = (req:Request,res:Response)=>{

  }

  public deleteProduct = (req:Request,res:Response)=>{

  }

};