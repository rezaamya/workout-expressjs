import express from 'express';
import usersRouter from './modules/users/router';
const routers = express.Router();

routers.use('/', usersRouter);
routers.use('/', (req, res) => {
    res.send('Home');
});

export default routers;