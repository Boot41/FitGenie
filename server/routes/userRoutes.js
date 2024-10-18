import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

// Get user profile
router.get('/getUser', verifyToken, getUserProfile);

// Update user profile
router.put('/updateUser', verifyToken, updateUserProfile);

export default router;
