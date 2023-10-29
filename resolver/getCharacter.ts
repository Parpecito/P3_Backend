import {Request,Response} from "npm:express@4.18.2"

type Character={
    results:Result[];
}
 type Result={
    id:number,
    name:string,
    status:string,
    species:string,
    gender:string,
    origin: Origin,
    location:Location,
    created:string,
  
  }
type Origin={
    name: string;
}
type Location={
    name:string;
}


const getCharacter= async(req:Request, res:Response)=>{
    try {
        const page=req.params.page;                                                                     //Obtenemos el numero de pagina para luego utilizarlo en la url
        const response=await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        if(response.status!==200){
            res.status(response.status).send(response.statusText);
            return;
        }
        const character:Character=await response.json();                                                //Vamos a guardar el json en la constante character

        const names=character.results.map((character)=>{
            return character.name                                                                       //Me ayudara a obtener el nombre del caracter
        });
        res.send({                                                                                      //Aqui lo mostramos en el navegador
            names
        })
        
    } catch (error) {
        res.status(500).send(error);                                                                     //Si hay un error en el servidor, nos mandara un mensaje de error
        return;
    }
}
export default getCharacter;                                                                            //Exportamos la funcion para poder usarla en otro archivo