import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hi');
});

app.listen(process.env.PORT, () => {
    console.info(`Server is running on http://localhost:${process.env.PORT}`)
})