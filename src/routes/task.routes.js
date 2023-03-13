const { Router } = require('express');
const { getUserTaks, updateUserTaks, deleteUserTaks } = require('../controllers/task.controllers');


const router = Router();

router.get('/api/v1/user/:id/task', getUserTaks);

router.put('/api/v1/user/:id/task',  updateUserTaks);

router.delete('/api/v1/user/:id/task', deleteUserTaks);

module.exports = router;