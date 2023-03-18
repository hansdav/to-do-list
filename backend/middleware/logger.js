import Logs from "../models/Logs.js";

export const logger = async (req, res, next) => {
	console.log(
		`${req.method} ${req.protocol}://${req.get("host")}${
			req.originalUrl
		} from ${req.ip}`
	);

	const documents = await Logs.countDocuments({});

	if (documents < 20) {
		await Logs.create({
			method: req.method,
			date: Date.now(),
			url: req.originalUrl,
			IP: req.ip,
		});
	} else {
		await Logs.deleteOne({});

		await Logs.create({
			method: req.method,
			date: Date.now(),
			url: req.originalUrl,
			IP: req.ip,
		});
	}

	// res.status(201).json({ success: true, data: log, msg: "create new task" });

	next();
};
