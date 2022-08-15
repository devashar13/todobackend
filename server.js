const express = require('express');
const connectDB = require("./config/db")
const path = require('path');

const app = express();

// Connect Database
connectDB();