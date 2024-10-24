import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';


const Diet = sequelize.define('Diet', {
    data: {
        type: DataTypes.JSONB, 
        allowNull: true,
    },
}, {
    timestamps: true,
});


User.hasMany(Diet, { foreignKey: 'userId',onDelete: 'CASCADE' });
Diet.belongsTo(User,{ foreignKey: 'userId' });

export default Diet;
