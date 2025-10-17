import express from 'express';
import filmeController from '../../controllers/actor/filmeController.js';

const router = express.Router();

router.post("/filme", filmeController.createFilmeHandler);
router.get("/filme/:id", filmeController.getFilme);
router.get("/filmes", filmeController.getFilmes);
router.delete("/filme/:id", filmeController.destroyFilmeHandler);

export default router;