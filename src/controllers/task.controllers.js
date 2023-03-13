const TaskServices = require("../services/task.services");

const getUserTaks = async (req, res) => {
    try {
        const { id } = req.params;
        const userTaks = await TaskServices.getUserTaks(id);
        res.json(userTaks);
    } catch (error) {
        res.status(201).json(error);
    }
}

const updateUserTaks = async (req, res) => {
    try {
        const { id } = req.params;
        const  data   = req.body;
        const result = await TaskServices.getUpdate(id, data);
        res.json(result);
    } catch (error) {
        res.status(201).json(error);
    }
}

const deleteUserTaks = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await TaskServices.getDelete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getUserTaks,
    updateUserTaks,
    deleteUserTaks,
}