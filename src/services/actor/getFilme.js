import Filme from "../../model/actor/actor.js";

const getOne = async (id) => {
  try {
    const filme = await Filme.findOne({
      where: { id }
    });

    if (!filme) {
      return false;
    }

    return filme;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getOne;