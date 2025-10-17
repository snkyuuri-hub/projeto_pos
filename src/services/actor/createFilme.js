import Model from "../../model/index.js";

const createFilme = async (filme) => {
  try {
    const novoFilme = await Model.Filme.create({
      nome: filme.nome,
      ano: filme.ano,
      genero: filme.genero,
      descricao: filme.descricao
    });

    if (!novoFilme) {
      return false;
    }

    return novoFilme;
  } catch (error) {
    return false;
  }
};

export default createFilme;