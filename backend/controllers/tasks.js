import Tasks from "../models/Tasks.js";

//@description Get all tasks
//@route GET /api/tasks
//@access Public
export const getTasks = async (req, res, next) => {
	let query;

	let queryStr = JSON.stringify(req.query);

	queryStr = queryStr.replace(
		/\b(gt|gte|lt|lte|in)\b/g,
		(match) => `$${match}`
	);

	console.log(queryStr);

	query = Tasks.find(JSON.parse(queryStr));

	const tasks = await query;

	res
		.status(200)
		.json({
			success: true,
			count: tasks.length,
			data: tasks,
			msg: "show all tasks",
		});
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

export const getTask = async (req, res, next) => {
	try {
		const task = await Tasks.findById(req.params.id);

		if (!task) {
			return res.status(400).json({ success: false });
		}

		res.status(200).json({ success: true, data: task });
	} catch (err) {
		res.status(400).json({ success: false });
	}
};

//@description delete single task
//@route DELETE /api/tasks/:id
//@access authentication

export const deleteTask = async (req, res, next) => {
	try {
		const task = await Tasks.findByIdAndDelete(req.params.id);

		if (!task) {
			return res.status(400).json({ success: false });
		}

		res.status(200).json({ success: true, data: {}, msg: "task deleted" });
	} catch (err) {
		// res.status(400).json({ success: false });
		next(err);
	}
};

//@description update single task
//@route PATCH /api/tasks/:id
//@access authentication

export const updateTask = async (req, res, next) => {
	const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValdiators: true,
	});

	if (!task) {
		return res.status(400).json({ success: false });
	}

	res.status(200).json({
		sucess: true,
		count: Tasks.length,
		data: task,
		msg: "update task",
	});
};
