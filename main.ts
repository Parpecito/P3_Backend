import express from "npm:express@4.18.2";

import getCharacterid from "./resolver/getCharacterid.ts";
import getCharacter from "./resolver/getCharacter.ts"
import getLocation from "./resolver/getLocation.ts"
import getlocationid from "./resolver/getLocationid.ts"
import filtrarCaracter from "./resolver/filtercharacter.ts"
import filtrarLocation from "./resolver/filterLocation.ts"
import deleteCharacter from "./resolver/deletecharacter.ts"
import deleteLocation from "./resolver/deleteLocation.ts"


const app = express();

app.get("/characterpag/:pagina",getCharacter)
    .get("/character/:id", getCharacterid)
    .get("/locationpag/:pagina",getLocation)
    .get("/location/:id",getlocationid)
    .get("/deleteCharacter/:id",deleteCharacter)
    .get("/deleteLocation/:id",deleteLocation)
    .get("/filtercharacter/:status/:gender",filtrarCaracter)
    .get("/filterlocation/:type/:dimension",filtrarLocation)

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});