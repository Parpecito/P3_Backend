import {Request,Response} from "npm:express@4.18.2"

type Result={
  id:number;
  name:string;
  status:string;
  species:string;
  gender:string;
  origin: Origin;
  location:Location;
  created:string;

}
type Origin={
  name: string;
}
type Location={
  name:string;
}

export const guardar_character:Result[]=[];                                                                                         //Aqui se guardan los personajes y lo vamos a exportar para poder usarlo en otro archivo
const getCharacterid = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;                                                                                                       //Obtenemos el id del personaje para poder usarlo en la url
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`                                                                             //Aqui se hace la peticion a la api
    );
    if (response.status !== 200) {
      res.status(response.status).send(response.statusText);                                                                        //Si hay un error en el servidor, nos mandara un mensaje de error
      return;
    }
    const character: Result = await response.json();
    const newid=character.id;
    const newname=character.name;
    const newstatus=character.status;
    const newspecies=character.species;
    const newgender=character.gender;
    const neworigin=character.origin.name;
    const newlocation=character.location.name;
    const newcreated=character.created;

    const personaje:Result={
      id:newid,
      name:newname,
      status:newstatus,
      species:newspecies,
      gender:newgender,
      origin:neworigin,
      location:newlocation,
      created:newcreated}                                                                                                         //Aqui se van a guardar los datos del personaje para luego poder guardarlos en el array
    
    guardar_character.push(personaje);                                                                                            //Aqui se guardan los datos del personaje en el array
    console.log("Se ha guardado el personaje");                                                                                   //Se va a mostrar en la consola que se ha guardado el personaje
    
    res.send({                                                                                                                    //Aqui lo mostramos en el navegador
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
      origin: character.origin.name,
      location: character.location.name,
      created: character.created,
    });
    
  } catch (error) {
    res.status(500).send(error.message);                                                                                            //Si hay un error en el servidor, nos mandara un mensaje de error
    return;
  }
}
export default getCharacterid;                                                                                                     //Exportamos la funcion para poder usarla en otro archivo

/*const getCharacterid = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (response.status !== 200) {
      res.status(response.status).send(response.statusText);
      return;
    }
    const character: Character = await response.json();
    /*const resultado=await response.json();
    const newid=resultado.id;
    const newname=resultado.name;
    const newstatus=resultado.status;
    const newspecies=resultado.species;
    const newgender=resultado.gender;
    const neworigin=resultado.origin.name;
    const newlocation=resultado.location.name;
    const newcreated=resultado.created;

    const personaje:Result={id:newid,name:newname,status:newstatus,species:newspecies,gender:newgender,origin:neworigin,location:newlocation,created:newcreated}
   
    const characterid = character.results.map((character)=>{
        return
        {
          character.id,
          character.name,
          character.status,
          character.species,
          character.gender,
          character.origin.name,
          character.location.name,
          character.created }
        
              
    });
    res.send({
        characterid
    })

    /*guardar_character.push(personaje);
    res.send({
      id: resultado.id,
      name: resultado.name,
      status: resultado.status,
      species: resultado.species,
      gender: resultado.gender,
      origin: resultado.origin.name,
      location: resultado.location.name,
      created: resultado.created,

    });
   
    
    
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};
*/
