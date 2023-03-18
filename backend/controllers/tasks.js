import Tasks from "../models/Tasks.js";

//@description Get all tasks
//@route GET /api/tasks
//@access Public
export const getTasks = (req, res, next) => {
	res.status(200).json({ success: true, msg: "show all tasks" });
};

//@description Create new task
//@route POST /api/tasks/:id
//@access Public

export const createTask = async (req, res, next) => {
	const task = await Tasks.create(req.body);
	res.status(201).json({ success: true, data: task, msg: "create new task" });
};

//@description Get single task
//@route GET /api/tasks/:id
//@access Public

export const getTask = (req, res, next) => {
	res.status(200).json({ success: true, msg: `show task ${req.params.id}` });
};

//@description delete single task
//@route DELETE /api/tasks/:id
//@access authentication

export const deleteTask = async (req, res, next) => {
	const task = await Tasks.deleteOne(req.body);
	res.status(200).json({ success: true, data: task, msg: "delete task" });
};

//@description update single task
//@route PATCH /api/tasks/:id
//@access authentication

export const updateTask = async (req, res, next) => {
	const task = await Tasks.updateOne(req.body);
	res.status(200).json({ sucess: true, data: task, msg: "update task" });
};
