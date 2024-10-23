import express from 'express';
import { aiDietGenerate, aiWorkoutGenerate, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/getUser', verifyToken, getUserProfile);
router.put('/updateUser', verifyToken, updateUserProfile);
router.post('/genrateDiet', verifyToken, aiDietGenerate);
router.post('/genrateWorkout', verifyToken,  aiWorkoutGenerate);

export default router;
