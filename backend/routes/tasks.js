import express from "express";
import { getTasks, getTask, createTask } from "../controllers/tasks.js";

const router = express.Router();

router.route("/").get(getTasks).post(createTask);

router.route("/:id").get(getTask);

export default router;
