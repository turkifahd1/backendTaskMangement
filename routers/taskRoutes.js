const express = require('express');
const taskController = require('../controllers/taskController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/postTask', authenticateToken, taskController.createTask);
router.get('/getTask', authenticateToken, taskController.getTasks);
router.put('/putTask/:id', authenticateToken, taskController.updateTask);
router.delete('/deleteTask/:id', authenticateToken, taskController.deleteTask);

module.exports = router;
