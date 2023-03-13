const { Router } = require('express');
const  {  createUser, createUserTasks }  = require('../controllers/user.controllers');

const router = Router();

router.post('/api/v1/user', createUser)

router.post('/api/v1/user/task', createUserTasks)

module.exports = router;