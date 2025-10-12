const destroyActor = async (id) => {
const actor = await Actor.destroy({
    where: {
        id
    }
})
if(!actor){
    return false
}
return actor
}
const updat

export deafult destroyActor