import {Request,Response} from "npm:express@4.18.2"
import { guardar_character } from "./getCharacterid.ts";

const deleteCharacter=(req:Request,res:Response)=>{
    try {
        if(guardar_character.length===0){                                                      //Si buscamos en el navegador el deleteLocation y no hay localizaciones, nos mandara un mensaje de error
            res.send("No hay personajes");
            return;
        }
        const id=req.params.id;                                                                 //Vamos a obtener el id
        const eliminar_character=guardar_character.filter((character)=>{                       //Aqui vamos a eliminar la localizacion con el id que le demos
            return character.id!==parseInt(id);                                               //Van a devolver todos las localizaciones menos el que le demos el id que esa la eliminaremos
        });
        /*La explicación de como poder eliminar argumentos de un array y luego agregar elementos
        https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        Para la explicación del ...eliminar_character lo he sacado de aqui
        https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab
        */
        guardar_character.splice(0,guardar_character.length,...eliminar_character);            //Aqui vamos a eliminar todos los personajes del array y luego vamos a guardar los personajes que no hemos eliminado
        res.send(eliminar_character);                                                         //Aqui vamos a mostrar todos los personajes excepto el que hemos eliminado
    } catch (error) {
        res.status(500).send(error.message);                                                 //Si hay un error en el servidor, nos mandara un mensaje de error
        return;
    }
}
export default deleteCharacter;                                                             //Exportamos la funcion para poder usarla en otro archivo