import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('filmesdb', 'root', 'haniBANI1105', {
    host: 'localhost',
    dialect: 'mysql',
});
export default sequelize;
//# sourceMappingURL=database.js.map