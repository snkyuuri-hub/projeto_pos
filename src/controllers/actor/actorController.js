import getAll from "../../services/actor/getActors.js"
import getOne from "../../services/actor/getActor.js"
import createActorp from "../../services/actor/createActor.js"
import destroy 

const getActor= async (req,res) =>{
    const actors = await getAll(

        res.status(200)
        res,json({
            message: "ocorreu um erro",
        });
    
    )
    try {
        const id =req.params.id
        if(!id){
            res.status(400)
            res.json({
                message: "id é obrigatório!"
            })
            return
        }
        const actor = await getOne(id)
        if (!actor){
            res.status(404);
            res.json({
                message: "Ator não encontrado",
            });
            return;
        }
        res.status(200);
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({
            message: "Ocorreu um erro"
        })
        
    }
}
const getActors = async (req,res) =>{
    res.json({
        message:"Boa noite"
    })
}
const createActor = async (req,res) =>{
    try {
        const {name,uf,city} = req.body
        if (!name || !uf || city){
            res.status(400)
            res.json({
                message:"Nome, UF e cidade são obrigatorios"
            })
            return
        }

        const createActor = await create(req.body)
   if (!createActor){
    res.status(400)
    res.json({
        message: "Erro ao criar o ator"
    })
    return
   }

    res.status(201)
    res.json({
        data: createActor
    })
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({
            message:"ocorreu um erro"
        })
    }
    const destroyActor = async (req,res) => {
        const id = req.params.id
        const actor = await destroy(id)

        

    }
    import Actor from "../../model/actor/actor"
    const actor = await Actor.destroy({
        where: {
            id
        }
    })

    if (!actor){
        return false
    }
    return actor
   
}


export default {
    
    getActor,
    getActors,
    createActor
}