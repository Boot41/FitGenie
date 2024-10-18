import { getGroqChatCompletion } from '../config/groq.js';
import User from '../models/User.js';


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

        if (!email) {
            return res.status(404).json({ message: 'Error occured email not found' });
        }
        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

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


export const aiGenerateDiet = async (req, res) => {
    const userInput = req.body;

    try {

        const chatCompletion = await getGroqChatCompletion(userInput);

        const responseContent = chatCompletion.choices[0]?.message?.content || '';
        console.log(responseContent);
        
        res.json({ message1: responseContent });
    } catch (error) {
        console.error('Error calling Groq API:', error);
        res.status(500).json({ error: 'Error generating MC diagram.' });
    }
}