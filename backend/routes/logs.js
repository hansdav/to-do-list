import express from "express";
import { displayLogs, displayTimeframe } from "../controllers/logs.js";

const logsRouter = express.Router();

logsRouter.route("/").get(displayLogs);

logsRouter.route("/timeframe/:minutes").get(displayTimeframe);

export default logsRouter;
