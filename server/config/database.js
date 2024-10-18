import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './fitgenieDb.sqlite' 
});

export default sequelize;
