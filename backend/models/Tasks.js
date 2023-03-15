import mongoose from "mongoose";

export const TasksSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please add a name"],
	},
	date: {
		type: Date,
		default: Date.now,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	priority: {
		type: String,
		required: [true, "Please add a priority"],
	},
	type: {
		type: String,
		required: [true, "Please choose personal or work"],
	},
});

// export default mongoose.model("Tasks", TasksSchema);
