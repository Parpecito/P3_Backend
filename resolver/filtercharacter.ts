import {Request,Response} from "npm:express@4.18.2";
import { guardar_character } from "./getCharacterid.ts";                                                                                                    //importamos la constante guardar_character de getCharacterid.ts ya que la vamos a utilizar en esta funcion y queremos obtener lo que tiene dentro de la memoria

const filtrarCaracter=(req:Request,res:Response)=>{
    try {
        if(guardar_character.length===0){
            res.send("No hay personajes");                                                                                         //Si buscamos el personaje y no hay personajes, nos mandara un mensaje de error
            return;
        }
        const status=req.params.status;                                                                                            //Obtenemos el status del personaje
        const gender=req.params.gender;                                                                                           //Obtenemos el genero del personaje
        //console.log(guardar_character);

        const personajesFiltrados =guardar_character.filter((character)=>{                                                       //Aqui vamos a filtrar los personajes
            return character.status.toLowerCase()===status.toLowerCase() && character.gender.toLowerCase()===gender.toLowerCase(); //Aqui vamos a filtrar los personajes por el status y el genero y utilizaremos el lowercase para que no haya problemas con las mayusculas y minusculas ya que esto te produce error si no metes bien las mayusculas y minusculas
        });
       /* console.log( personajesFiltrados);
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        */
        res.send(personajesFiltrados);                                                                                            //Aqui vamos a mostrar los personajes filtrados por el navegador
       // console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
    } catch (error) {
        res.status(500).send(error.message);                                                                                      //Si hay un error en el servidor, nos mandara un mensaje de error
        return;
    }
}
export default filtrarCaracter;                                                                                                 //Exportamos la funcion para poder usarla en el archivo main.ts
           /* const filter_gender=guardar_character.filter((character)=>{
                return character.gender===gender;
            });
            res.send({
                filter_gender,
            });*/
          
       
       
