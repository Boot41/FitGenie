import express from 'express';
import { signup, login, dashboard } from '../controllers/authController.js';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.get('/dashboard', verifyToken, dashboard);

export default router;
