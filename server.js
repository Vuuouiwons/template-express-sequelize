require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const app = express();
const allRouter = require("./routers");
app.use(morgan("combined"));

app.use("/api", allRouter);

app.listen(process.env.PORT, () => {
	console.log(`Server Running at localhost:${process.env.PORT}`);
});
