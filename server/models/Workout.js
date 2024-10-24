import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';


const Workout = sequelize.define('Workout', {
    data: {
        type: DataTypes.JSONB,
        allowNull: true,
    },
}, {
    timestamps: true,
});



User.hasMany(Workout, { foreignKey: 'userId', onDelete: 'CASCADE' });
Workout.belongsTo(User, { foreignKey: 'userId' });

export default Workout;