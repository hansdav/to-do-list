import Logs from "../models/Logs.js";

export const displayLogs = (req, res, next) => {
	res.status(200).json({ success: true, msg: "show last 5 logs" });
};

export const displayTimeframe = async (req, res, next) => {
	let currentDate = new Date(Date.now());
	const logs = await Logs.find({
		date: {
			$gte: new Date(currentDate.getTime() - 1000 * 60 * req.params.minutes),
		},
	});
	res.status(200).json({
		number: `${await Logs.countDocuments()}`,
		success: true,
		date: logs,
		msg: `showing all ${await Logs.countDocuments()} logs from ${
			req.params.minutes
		} minutes ago`,
	});
};
