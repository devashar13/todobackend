const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const todoRouter = require("./routes/todoRoutes");
const connectDB = require("./config/db")
// Connect Database
connectDB();
const app = express();

app.enable('trust proxy');

app.use(cors());
app.options('*', cors());
app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());

app.use('/todos',todoRouter);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
