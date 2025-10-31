import express from 'express';
import cors from 'cors';
import routes from './routes';
import sequelize from './config/database.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

sequelize.sync();

export default app;