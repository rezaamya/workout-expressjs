import express from 'express';

const usersRouter = express.Router();

usersRouter.get('/users', (req, res) => {
    res.send('Users');
})

export default usersRouter;