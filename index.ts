import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connect } from "./db/utils/connection";
import cors from 'cors';


dotenv.config({path: 'dev.env'});
connect();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use("/users", (req: Request, res: Response) => {
    res.status(200).json('Hello World');
});
app.use("", (req: Request, res: Response) => {
    res.send("Hello World");
});
app.use(express.static("public"));

const PORT = process.env.EXPRESS_PORT;

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});
