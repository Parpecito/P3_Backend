import {Request,Response} from "npm:express@4.18.2"
import { guardar_location } from "./getLocationid.ts"

const deleteLocation=(req:Request,res:Response)=>{
    try {
        if(guardar_location.length===0){                                                      //Si buscamos en el navegador el deleteCharacter y no hay personajes, nos mandara un mensaje de error
            res.send("No hay localizaciones");
            return;
        }
        const id=req.params.id;                                                                 //Vamos a obtener el id
        const eliminar_location=guardar_location.filter((location)=>{                       //Aqui vamos a eliminar el personaje con el id que le demos
            return location.id!==parseInt(id);                                               //Van a devolver todos los personajes menos el que le demos el id
        });
        /*La explicación de como poder eliminar argumentos de un array y luego agregar elementos
        https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        Para la explicación del ...eliminar_location lo he sacado de aqui
        https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab
        */
        guardar_location.splice(0,guardar_location.length,...eliminar_location);            //Aqui vamos a eliminar todos los personajes del array y luego vamos a guardar los personajes que no hemos eliminado
        res.send(eliminar_location);                                                         //Aqui vamos a mostrar todos los personajes excepto el que hemos eliminado
    } catch (error) {
        res.status(500).send(error.message);                                                 //Si hay un error en el servidor, nos mandara un mensaje de error
        return;
    }
}
export default deleteLocation;    