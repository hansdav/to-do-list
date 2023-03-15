import express from "express";
import dotenv from "dotenv";

// load ENV Vars
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>
	console.log(`server runnning ${process.env.NODE_ENV} mode on port ${PORT}`)
);
