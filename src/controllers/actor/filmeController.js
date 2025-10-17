import getAll from "../../services/actor/getFilmes.js";
import getOne from "../../services/actor/getFilme.js";
import createFilme from "../../services/actor/createFilme.js";
import destroyFilme from "../../services/actor/destroyFilme.js";

const getFilme = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "ID do filme é obrigatório!" });
    }

    const filme = await getOne(id);
    if (!filme) {
      return res.status(404).json({ message: "Filme não encontrado" });
    }

    return res.status(200).json({ data: filme });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Ocorreu um erro ao buscar o filme" });
  }
};

const getFilmes = async (req, res) => {
  try {
    const filmes = await getAll();
    return res.status(200).json({ data: filmes });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro ao listar os filmes" });
  }
};

const createFilmeHandler = async (req, res) => {
  try {
    const { nome, ano, genero, descricao } = req.body;
    if (!nome || !ano || !genero || !descricao) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const novoFilme = await createFilme(req.body);
    if (!novoFilme) {
      return res.status(400).json({ message: "Erro ao criar o filme" });
    }

    return res.status(201).json({ data: novoFilme });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro interno ao criar o filme" });
  }
};

const destroyFilmeHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const filme = await destroyFilme(id);

    if (!filme) {
      return res.status(404).json({ message: "Filme não encontrado para exclusão" });
    }

    return res.status(200).json({ message: "Filme excluído com sucesso" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro ao excluir o filme" });
  }
};

export default {
  getFilme,
  getFilmes,
  createFilmeHandler,
  destroyFilmeHandler
};