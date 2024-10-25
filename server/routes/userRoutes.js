import express from 'express';
import { aiDietGenerate, aiWorkoutGenerate, deleteDiet, deleteWorkout, getDiet, getUserProfile, getWorkout, saveDiet, saveWorkout, updateUserProfile } from '../controllers/userController.js';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/getUser', verifyToken, getUserProfile);
router.put('/updateUser',verifyToken, updateUserProfile);

router.post('/genrateWorkout', verifyToken, aiWorkoutGenerate);
router.post('/setWorkout', verifyToken, saveWorkout);
router.post('/getWorkout', verifyToken, getWorkout);
router.post('/deleteWorkout', verifyToken, deleteWorkout);

router.post('/genrateDiet', verifyToken, aiDietGenerate);
router.post('/setDiet', verifyToken, saveDiet);
router.post('/getDiet', verifyToken, getDiet);
router.post('/deleteDiet', verifyToken, deleteDiet);

export default router;
