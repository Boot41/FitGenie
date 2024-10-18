import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();


const JWT_SECRET = process.env.JWT_SECRET;


// Signup Controller
export const signup = async (req, res) => {
    const { fullName,email, password } = req.body;

    try {
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ name:fullName, email, password: hashedPassword });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Login Controller
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        
        const validPassword = await bcrypt.compare(password, user.password);
        
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '5h' });

        res.json({ message: 'Logged in successfully', token });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

export const dashboard = (req, res) => {
    res.json({ message: `Welcome to your dashboard, ${req.user.email}` });
};
