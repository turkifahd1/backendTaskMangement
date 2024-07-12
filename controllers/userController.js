const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = await userService.registerUser(name, email, password, role);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser(email, password);
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '2w' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




module.exports = { register, login };
