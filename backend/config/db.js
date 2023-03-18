import mongoose from "mongoose";

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	console.log(`mongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
	return conn;
};

export default connectDB;
