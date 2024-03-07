const express = require("express");
const mainRouter = require('./Routes/mainRouter');
const router = express.Router();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1", mainRouter);  // all the requests which will come to /api/v1 will be redirected to Routes folder in that index.js we have defined the route for /api/v1

try {
    app.listen(3000);
    console.log("Server Started On Localhost 3000");
} catch (error) {
    error.message("Error Occured!!")
}
