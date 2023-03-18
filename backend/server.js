import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { default as connectDB } from "./config/db.js";
import { logger } from "./middleware/logger.js";
import morgan from "morgan";

// route files
import { default as tasks } from "./routes/tasks.js";
import { default as logs } from "./routes/logs.js";

// load ENV Vars
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();

const app = express();

// dev logging Middleware
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(logger);

// Body parser
app.use(express.json());

// mount routers

app.use("/api/tasks", tasks);

app.use("/api/logs", logs);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () =>
	console.log(
		`server runnning ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);

// handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
	console.log(`${err.message}`.red);
	// close server & exit process
	server.close(() => process.exit(1));
});
