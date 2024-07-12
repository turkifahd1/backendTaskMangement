const express = require('express');
const userauthController = require('../controllers/userauthController');
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, isAdmin, userauthController.getAllUsers);
router.put('/:id', authenticateToken, isAdmin, userauthController.updateUser);
router.delete('/:id', authenticateToken, isAdmin, userauthController.deleteUser);

module.exports = router;
