import app from './src/app';
import { sequelize } from './src/config/database';
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
    catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
};
startServer();
//# sourceMappingURL=server.js.map