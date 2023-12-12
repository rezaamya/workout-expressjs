import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
import routers from './routers';

app.use('/', routers);

app.listen(process.env.PORT, () => {
    console.info(`Server is running on http://localhost:${process.env.PORT}`)
})