const User = require('./users.model');
const Task = require('./tasks.model');
const Category = require('./categories.model');

const initModels = () => {

    // * Users - Taks
    User.hasMany(Task, { foreignKey: 'username' });
    Task.belongsTo(User, { foreignKey: 'username' });

    // * Categories - Task
    Category.hasMany(Task, { foreignKey: 'categoryId' });
    Task.belongsTo(Category, { foreignKey: 'categoryId' });
}

module.exports = initModels;