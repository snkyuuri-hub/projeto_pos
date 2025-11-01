import Filme from "../../model/actor/actor.js";

const getAll = async () => {
  const filmes = await Filme.findAll();
  return filmes;
};

export default getAll;