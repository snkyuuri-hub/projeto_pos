import getAll from "../../services/filme/getFilmes.js";
import getOne from "../../services/filme/getFilme.js";
import createFilme from "../../services/filme/createFilme.js";
import destroyFilme from "../../services/filme/destroyFilme.js";

const getFilme = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400);
      res.json({ message: "ID do filme é obrigatório!" });
      return;
    }

    const filme = await getOne(id);
    if (!filme) {
      res.status(404);
      res.json({ message: "Filme não encontrado" });
      return;
    }

    res.status(200);
    res.json({ data: filme });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "Ocorreu um erro ao buscar o filme" });
  }
};

const getFilmes = async (req, res) => {
  try {
    const filmes = await getAll();
    res.status(200);
    res.json({ data: filmes });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "Erro ao listar os filmes" });
  }
};

const createFilmeHandler = async (req, res) => {
  try {
    const { nome, ano, genero, descricao } = req.body;
    if (!nome || !ano || !genero || !descricao) {
      res.status(400);
      res.json({ message: "Todos os campos são obrigatórios" });
      return;
    }

    const novoFilme = await createFilme(req.body);
    if (!novoFilme) {
      res.status(400);
      res.json({ message: "Erro ao criar o filme" });
      return;
    }

    res.status(201);
    res.json({ data: novoFilme });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "Erro interno ao criar o filme" });
  }
};

const destroyFilmeHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const filme = await destroyFilme(id);

    if (!filme) {
      res.status(404);
      res.json({ message: "Filme não encontrado para exclusão" });
      return;
    }

    res.status(200);
    res.json({ message: "Filme excluído com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ message: "Erro ao excluir o filme" });
  }
};

export default {
  getFilme,
  getFilmes,
  createFilmeHandler,
  destroyFilmeHandler
};