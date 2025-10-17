import express from 'express';
import routerActor from './routers/actor/actor.js';
import routerFilme from './routers/filme/filme.js';
import logger from './src/middlewares/logger.js';

const app = express();

app.use(express.json());
app.use(logger); // Middleware 
app.use(routerActor);
app.use(routerFilme);

export default app;