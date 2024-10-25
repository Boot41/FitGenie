import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors'


dotenv.config();

const app = express();

app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors());




app.use('/auth', authRoutes);
app.use('/profile',userRoutes)

app.get('/', (req, res) => {
  return res.send("server is running....")
})

sequelize.sync().then(() => console.log('Database synced'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});