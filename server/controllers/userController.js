import User from '../models/User.js';

export const getUserProfile = async (req, res) => {
    try {
        const email = req.user.email;
        if (!email) {
            return res.status(404).json({ message: 'Error occured email not found' });
        }
        const user = await User.findOne({ where: { email: email } });

        if (!user) return res.status(404).json({ message: 'User not found' });

        return res.json(user);
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

        await user.update(data);

        return res.status(200).json({
            message: 'User updated successfully',
            user: user
        });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};
