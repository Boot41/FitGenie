import express from 'express';
import { aiGenerateDiet, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/getUser', verifyToken, getUserProfile);
router.put('/updateUser', verifyToken, updateUserProfile);
router.post('/genrateDiet', verifyToken, aiGenerateDiet);

export default router;
