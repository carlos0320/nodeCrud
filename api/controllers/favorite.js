
const pool = require('../../config/database/config');


module.exports = {

    createFavorite : async function(req, res){
    
        const {id,name,editorial,username} = req.body;
    
        console.log(name, id, editorial, username);
    
        await pool.query(
            `INSERT INTO FAVORITE ( id , name , editorial , username )
             VALUES ('${id}', '${name}', '${editorial}' , '${username}' )`
        );
        res.json({ message: "se ingreso el favorito con exito" });
        
        
    }
}
