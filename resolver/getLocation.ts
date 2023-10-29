import {Request,Response} from "npm:express@4.18.2"

type Location={
    results:Result[];
}
type Result={
    name:string;
}

const getLocation= async (req:Request,res:Response)=>{
    try {
        const page=req.params.page;                                                                         //Obtenemos el numero de pagina para luego utilizarlo en la url
        const response=await fetch(`https://rickandmortyapi.com/api/location/?page=${page}`)                //Aqui se hace la peticion a la api
        if(response.status!==200){
            res.status(response.status).send(response.statusText);                                          //Si hay un error en el servidor, nos mandara un mensaje de error
            return;
        }
        const location:Location=await response.json();                                                      //Vamos a guardar el json en la constante location

        const locate=location.results.map((location)=>{
            return location.name                                                                            //Me ayudara a obtener el nombre de la localizacion 
        });
          

        res.send({                                                                                          //Aqui lo mostramos en el navegador
            locate
        })

    } catch (error) {
        res.status(500).send(error);                                                                        //Si hay un error en el servidor, nos mandara un mensaje de error
        return;
    }
}
export default getLocation;                                                                                 //Exportamos la funcion para poder usarla en otro archivo

