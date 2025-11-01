import Filme from "../../model/actor/actor.js";

const destroyFilme = async (id) => {
  try {
    const filme = await Filme.destroy({
      where: { id }
    });

    if (filme === 0) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};

export default destroyFilme;