import { Router } from 'express';
import {
  createActor,
  getAllActors,
  getActorById,
  updateActor,
  deleteActor,
} from '../controllers/actor.controller';

const router = Router();

router.post('/actors', createActor);
router.get('/actors', getAllActors);
router.get('/actors/:id', getActorById);
router.put('/actors/:id', updateActor);
router.delete('/actors/:id', deleteActor);

export default router;
