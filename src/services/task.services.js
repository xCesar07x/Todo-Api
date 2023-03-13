const Users = require('../models/users.model');
const Category = require('../models/categories.model');
const Task = require('../models/tasks.model');

class TaskServices {
    static async getUserTaks(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: ['id', 'username'],
                include: [
                    {
                        attributes: ['id', 'title', 'description', 'status'],
                        model: Task,
                        include: {
                            model: Category,
                            attributes: ['name']
                        }

                    },
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getUpdate(id, data) {
        try {
            const result = await Task.update(data,{
                where: { id }
            })
        } catch (error) {
            throw error;
        }
    }

    static async getDelete(id) {
        try {
            const result = await Task.destroy({
                where: { id }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TaskServices;