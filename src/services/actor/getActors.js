import Actor from "../../model/actor/actor.js"

const getAll = (req,res) =>{ //retornando atores cadastrados
    const actors = await Actor.findAll()
    return actors
}

export default getAll