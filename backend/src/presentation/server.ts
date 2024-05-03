import express, { Router } from "express";

interface Options{

  port:number;
  router: Router;

}


export class Server{

  //Att
  private readonly app = express();
  private readonly port:number;
  private readonly router: Router;


  constructor({port,router}:Options){

    this.port = port;
    this.router = router;

  };

  //Methods
  public start(){


    //MIDDLEWARES
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}));

    //ROUTES
    this.app.use(this.router);


    //SERVER ON
    this.app.listen(this.port);

  }


};