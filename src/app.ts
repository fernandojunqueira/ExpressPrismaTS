import express, { Application } from "express";
import cors from "cors";
import { globalRoutes } from "./routes";
import handleError from "./errors/handleError";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(globalRoutes);
app.use(handleError);

export default app;