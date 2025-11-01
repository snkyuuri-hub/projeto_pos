import express from 'express';
import cors from 'cors';
import movieRoutes from './routes/movie.routes';
import actorRoutes from './routes/actor.routes';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', movieRoutes);
app.use('/api', actorRoutes);
export default app;
//# sourceMappingURL=app.js.map