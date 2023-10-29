import {Request,Response} from "npm:express@4.18.2";
import { guardar_location } from "./getLocationid.ts";

const filtrarLocation=(req:Request,res:Response)=>{
    try {
        if(guardar_location.length===0){
            res.send("No hay localizaciones");                                                                                          //Si buscamos la localizacion y no hay localizaciones, nos mandara un mensaje de error
            return;
        }
        const type=req.params.type;                                                                                                     //Obtenemos el tipo de la localizacion
        const dimension=req.params.dimension;                                                                                          //Obtenemos la dimension de la localizacion

        const localizacionesFiltradas =guardar_location.filter((location)=>{                                                          //Aqui vamos a filtrar las localizaciones
            return location.type.toLowerCase()===type.toLowerCase() && location.dimension.toLowerCase()===dimension.toLowerCase();   //Aqui vamos a filtrar las localizaciones por el tipo y la dimension y utilizaremos el lowercase para que no haya problemas con las mayusculas y minusculas ya que esto te produce error si no metes bien las mayusculas y minusculas
        });
        res.send(localizacionesFiltradas);                                                                                             //Aqui vamos a mostrar las localizaciones filtradas por el navegador
    } catch (error) {
        res.status(500).send(error.message);                                                                                          //Si hay un error en el servidor, nos mandara un mensaje de error
        return;
    }
}
export default filtrarLocation;