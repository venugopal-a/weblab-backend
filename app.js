const express  = require('express');
require("dotenv").config()
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books",router);

mongoose.connect(
    process.env.DB_URL
)
.then(() => console.log("Connected to Database"))
.then(() => {
    app.listen(process.env.PORT || 5000);
})
.catch((err) => console.log(err));
