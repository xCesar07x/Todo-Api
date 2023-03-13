const UserServices = require('../services/user.services');

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.created(newUser);
        res.json(result);
    } catch (error) {
        res.status(201).json(error);
    }
}

const createUserTasks = async (req, res) => {
    try {
        const newTask = req.body;
        const result = await UserServices.createTask(newTask);
        res.json(result);
    } catch (error) {
        res.status(201).json(error);
    }
}

module.exports = {
    createUser,
    createUserTasks,
};