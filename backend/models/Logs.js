import mongoose from "mongoose";

const LogsSchema = new mongoose.Schema({
	method: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	url: { type: String },
	IP: {
		type: String,
	},
});

export default mongoose.model("Logs", LogsSchema);
