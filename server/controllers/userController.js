import { groqDietGenerator, groqWorkoutGenerator } from '../config/groq.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';
import Diet from '../models/Diet.js';
import cloudinary from "../config/cloudinary.js"

// Get user profile
export const getUserProfile = async (req, res) => {
    try {
        const email = req.user.email;
        if (!email) {
            return res.status(404).json({ message: 'Error occured email not found' });
        }
        const user = await User.findOne({ where: { email: email } });

        if (!user) return res.status(404).json({ message: 'User not found' });

        const { password, createdAt, updatedAt, ...userProfile } = user.dataValues;

        return res.json(userProfile);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Update user profile
export const updateUserProfile = async (req, res) => {
    try {
        const data = req.body;
        const email = req.user.email;
        const image = data.image;

        const cloudinaryRes = await cloudinary.uploader.upload(image, {
            folder: process.env.FOLDER_NAME
        })

        if (!email) {
            return res.status(404).json({ message: 'Error occured email not found' });
        }
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        data.image = cloudinaryRes.url;
        const response = await user.update(data);
        const { password, createdAt, updatedAt, ...userProfile } = response.dataValues;

        return res.status(200).json({
            message: 'Profile updated successfully',
            user: userProfile
        });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred will updaing!', error: error.message });
    }
};

// Generate Diet
export const aiDietGenerate = async (req, res) => {
    const userInput = req.body;

    try {
        const chatCompletion = await groqDietGenerator(userInput);

        const responseContent = chatCompletion.choices[0]?.message?.content || '';

        res.status(200).json({ message: JSON.parse(responseContent) });
    } catch (error) {
        console.error('Error calling Groq API:', error);
        res.status(500).json({ error: 'Error generating Diet.' });
    }
}

export const saveDiet = async (req, res) => {
    const userId = req.user.id;
    const dietData = req.body;

    if (!dietData) {
        return res.status(400).json({ message: 'Diet data is required' });
    }

    try {
        const newDiet = await Diet.create({
            userId,
            data: dietData,
        });

        return res.status(201).json({ message: 'Diet saved successfully', Diet: newDiet.data });
    } catch (error) {
        console.error('Error saving workout:', error);
        return res.status(500).json({ message: 'An error occurred while saving the Diet', error: error.message });
    }
};

export const deleteDiet = async (req, res) => {
    const userId = req.user.id;
    try {
        const deletedDiet = await Diet.destroy({
            where: {
                userId,
            },
        });

        if (deletedDiet === 0) {
            return res.status(404).json({ message: 'No diet found for this user' });
        }

        return res.status(200).json({ message: 'Diet deleted successfully' });
    } catch (error) {
        console.error('Error deleting diet:', error);
        return res.status(500).json({ message: 'An error occurred while deleting the diet', error: error.message });
    }
};


export const getDiet = async (req, res) => {
    const userId = req.user.id;

    try {
        const response = await Diet.findOne({ userId });
        const diet = response.data

        if (!diet) {
            return res.status(404).json({ message: 'No diet found for this user' });
        }

        return res.status(200).json({ message: 'Diet retrieved successfully', diet });
    } catch (error) {
        console.error('Error retrieving diet:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving the diet', error: error.message });
    }
};



// Generate Workout
export const aiWorkoutGenerate = async (req, res) => {
    const userInput = req.body;

    try {
        const chatCompletion = await groqWorkoutGenerator(userInput);

        const responseContent = chatCompletion.choices[0]?.message?.content || '';

        res.status(200).json({ message: JSON.parse(responseContent) });
    } catch (error) {
        console.error('Error calling Groq API:', error);
        res.status(500).json({ error: 'Error generating Workout.' });
    }
}

export const saveWorkout = async (req, res) => {
    const userId = req.user.id;
    const workoutData = req.body;

    if (!workoutData) {
        return res.status(400).json({ message: 'Workout data is required' });
    }

    try {
        const newWorkout = await Workout.create({
            userId,
            data: workoutData,
        });

        return res.status(201).json({ message: 'Workout saved successfully', workout: newWorkout.data });
    } catch (error) {
        console.error('Error saving workout:', error);
        return res.status(500).json({ message: 'An error occurred while saving the workout', error: error.message });
    }
};


export const getWorkout = async (req, res) => {
    const userId = req.user.id;

    try {
        const response = await Workout.findOne({ userId });
        const Workout = response.data

        if (!Workout) {
            return res.status(404).json({ message: 'No Workout found for this user' });
        }

        return res.status(200).json({ message: 'Workout retrieved successfully', Workout });
    } catch (error) {
        console.error('Error retrieving Workout:', error);
        return res.status(500).json({ message: 'An error occurred while retrieving the Workout', error: error.message });
    }
};

export const deleteWorkout = async (req, res) => {
    const userId = req.user.id;
    try {
        const deletedWorkout = await Workout.destroy({
            where: {
                userId,
            },
        });

        if (deletedWorkout === 0) {
            return res.status(404).json({ message: 'No Workout found for this user' });
        }
        return res.status(200).json({ message: 'Workout deleted successfully' });
    } catch (error) {
        console.error('Error deleting Workout:', error);
        return res.status(500).json({ message: 'An error occurred while deleting the Workout', error: error.message });
    }
};