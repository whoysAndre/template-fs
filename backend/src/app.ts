import { envs } from "./config";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";



(()=>{

  main();

})();


function main(){

  //DATABASE

  //SERVER
  const server = new Server({
    port: envs.port,
    router: AppRoutes.routes()
  });

  server.start();


};