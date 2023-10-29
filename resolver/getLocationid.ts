import {Request,Response} from "npm:express@4.18.2"

type Location={
    id: number,
    name: string;
    type: string;
    dimension:string;
    created:string;
}
export const guardar_location:Location[]=[];                                                                            //Aqui se guardan las localizaciones y lo vamos a exportar para poder usarlo en otro archivo

const getlocationid= async (req:Request,res:Response)=>{
    try {
        const id= req.params.id;                                                                                        //Obtenemos el id de la localizacion para poder usarlo en la url
        const response= await fetch(`https://rickandmortyapi.com/api/location/${id}`)                                   //Aqui se hace la peticion a la api

        if(response.status!==200){
            res.status(response.status).send(response.statusText);                                                      //Si hay un error en el servidor, nos mandara un mensaje de error
            return;
        }
        const Localizacion: Location = await response.json();                                                           //Vamos a guardar el json en la constante Localizacion
        const newid=Localizacion.id;
        const newname=Localizacion.name;
        const newstype=Localizacion.type;
        const newdimension=Localizacion.dimension;
        const newcreated=Localizacion.created;

        const personaje:Location={                                                                                      //Aqui se van a guardar los datos de la localizacion para luego poder guardarlos en el array
            id:newid,
            name:newname,
            type:newstype,
            dimension:newdimension,
            created:newcreated
        }        
        guardar_location.push(personaje);                                                                               //Aqui se guardan los datos de la localizacion en el array
        console.log("Se ha guardado la localizacion");

        res.send({                                                                                                      //Aqui lo mostramos en el navegador
            id: Localizacion.id,
            name: Localizacion.name,
            type: Localizacion.type,
            dimension: Localizacion.dimension,
            created:Localizacion.created
        });
    } catch (error) {
        res.status(500).send(error)                                                                                      //Si hay un error en el servidor, nos mandara un mensaje de error
        return;
    }
    
}
export default getlocationid;                                                                                            //Exportamos la funcion para poder usarla en otro archivo