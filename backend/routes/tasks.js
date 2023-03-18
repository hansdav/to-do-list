import express from "express";
import {
	getTasks,
	getTask,
	createTask,
	deleteTask,
	updateTask,
} from "../controllers/tasks.js";

const router = express.Router();

router.route("/").get(getTasks).post(createTask);

router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

export default router;
