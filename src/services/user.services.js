const Category = require('../models/categories.model');
const Task = require('../models/tasks.model');
const Users = require('../models/users.model');

class UserServices {
    static async created(newUser) {
        try {
            const userCreated = await Users.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
    }

    static async createTask(newTask) {
        try {
            const taskCreated = await Task.create(newTask);
            return taskCreated;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserServices;