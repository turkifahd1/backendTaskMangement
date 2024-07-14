const express = require('express');
const userauthController = require('../controllers/userauthController');
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/getAllUsers', authenticateToken, isAdmin, userauthController.getAllUsers);
router.put('/updateUser/:id', authenticateToken, isAdmin, userauthController.updateUser);
router.delete('/deleteUser/:id', authenticateToken, isAdmin, userauthController.deleteUser);

module.exports = router;
