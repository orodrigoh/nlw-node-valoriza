import "reflect-metadata";
import cors from 'cors'
import express, {Request, Response, NextFunction} from "express";
import 'express-async-errors';
import dotenv from 'dotenv';
import { router } from "./routes";

import "./database";
dotenv.config();

const app = express();
app.use(cors())

const port = 3000;

app.use(express.json());
app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next:NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    });
  }
)

app.listen(process.env.PORT || port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
