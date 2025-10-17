import express from 'express';
import filmeController from '../../controllers/filme/filmeController.js';

const routerFilme = express.Router();

routerFilme.post("/filme", filmeController.createFilmeHandler);

routerFilme.get("/filme/:id", filmeController.getFilme);

routerFilme.get("/filmes", filmeController.getFilmes);

routerFilme.delete("/filme/:id", filmeController.destroyFilmeHandler);

export default routerFilme;