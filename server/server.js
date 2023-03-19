const express = require("express");
const cors = require("cors");
const db = require("./models");


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
    db.sequelize.sync().then(() => {
        console.log("Synced db.");
    }).catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
    console.log(`Server is running on port ${PORT}.`);
});