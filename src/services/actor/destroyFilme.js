import Filme from "../../model/filme/filmeModel.js";

const destroyFilme = async (id) => {
  const filme = await Filme.destroy({
    where: { id }
  });

  if (!filme) {
    return false;
  }

  return filme;
};

export default destroyFilme;