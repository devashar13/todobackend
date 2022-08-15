const express = require('express');
const connectDB = require("./config/db")
const path = require('path');

const app = express();

// Connect Database
connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));