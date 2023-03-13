const express = require('express');
const cors = require('cors');
const db = require('./utils/databse');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');
const initModels = require('./models/initModels');
const morgan = require('morgan');

const PORT = 8500;
initModels();

const app = express();

db.authenticate()
.then(() => {
    console.log('conexion a base de datos OK');
})
.catch((error) => {
    console.log(error);
});

db.sync({force: false})
.then(() => {
    console.log('Base de datos Exitosa');
})
.catch((error) => {
    console.log(error);
});

app.use(cors());
app.use (morgan('dev'));
app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);
// app.get('/', (req, res) => {
//     res.send('Welcome to my API');
// })

app.listen(PORT, () => {
    console.log(`Este servidor esta en el puerto ${PORT}`)
})