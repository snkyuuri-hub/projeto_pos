import Filme from "../../model/filme/filmeModel.js";

const getAll = async () => {
  const filmes = await Filme.findAll();
  return filmes;
};

export default getAll;