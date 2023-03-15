import { TasksSchema } from "../models/Tasks.js";

//@description Get all tasks
//@route GET /api/tasks
//@access Public
export const getTasks = (req, res, next) => {
	res.status(200).json({ success: true, msg: "show all tasks" });
};

//@description Create new task
//@route POST /api/tasks/:id
//@access Public

export const createTask = (req, res, next) => {
	console.log(req.body);
	res.status(200).json({ success: true, msg: "create new task" });
};

//@description Get single task
//@route GET /api/tasks/:id
//@access Public

export const getTask = (req, res, next) => {
	res.status(200).json({ success: true, msg: `show task ${req.params.id}` });
};
